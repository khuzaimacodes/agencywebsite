import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Contact from "@/models/Contact";
import { sendEmail, getAdminEmail } from "@/lib/brevo";
import { adminNotificationTemplate, clientConfirmationTemplate } from "@/emails/templates";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// naive in-memory rate limit: key=email|ip, window=60s
const recent = new Map();
function isRateLimited(key, windowMs = 60_000) {
  const now = Date.now();
  const last = recent.get(key) || 0;
  if (now - last < windowMs) return true;
  recent.set(key, now);
  return false;
}

export async function POST(request) {
  try {
    const { name, email, message, serviceType, budget, source } = await request.json();

    // Quick validation - respond immediately after this
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const userAgent = request.headers.get("user-agent") || undefined;
    const ip = request.headers.get("x-forwarded-for") || undefined;

    const rlKey = `${email}|${ip || "noip"}`;
    if (isRateLimited(rlKey)) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    // Return success immediately - don't wait for slow operations
    const response = NextResponse.json({ ok: true, message: "Message received successfully" }, { status: 200 });

    // Handle heavy operations asynchronously (don't await)
    processContactAsync({ name, email, message, serviceType, budget, source, userAgent, ip });

    return response;
  } catch (err) {
    console.error("/api/contact error", err);
    const expose = process.env.NODE_ENV !== "production";
    return NextResponse.json({ error: expose ? (err?.message || "Server error") : "Server error" }, { status: 500 });
  }
}

// Async function to handle database and email operations without blocking response
async function processContactAsync({ name, email, message, serviceType, budget, source, userAgent, ip }) {
  try {
    // Database operations
    let saved = null;
    try {
      await connectToDatabase();
      saved = await Contact.create({ name, email, message, serviceType, budget, source, userAgent, ip });
      console.log("Contact saved successfully:", saved._id);
    } catch (dbErr) {
      console.error("DB operation failed:", dbErr);
    }

    // Email operations
    try {
      const adminHtml = adminNotificationTemplate({ name, email, message });
      const clientHtml = clientConfirmationTemplate({ name });

      await Promise.all([
        sendEmail({ to: getAdminEmail(), subject: "New contact submission", htmlContent: adminHtml, replyTo: email }),
        sendEmail({ to: email, subject: "We received your message", htmlContent: clientHtml })
      ]);
      console.log("Emails sent successfully");
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr?.response?.text || mailErr?.message || mailErr);
    }
  } catch (err) {
    console.error("Async processing failed:", err);
  }
}


