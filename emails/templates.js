export function adminNotificationTemplate({ name, email, message }) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:16px;background:#f7f7f7;">
    <div style="background:#ffffff;border-radius:8px;padding:24px;border:1px solid #e5e7eb;">
      <h2 style="margin:0 0 12px 0;color:#111827;">New contact submission</h2>
      <p style="margin:0 0 16px 0;color:#374151;">You received a new message from the website contact form.</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px;border:1px solid #e5e7eb;width:140px;background:#f9fafb;font-weight:600;">Name</td>
          <td style="padding:8px;border:1px solid #e5e7eb;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Email</td>
          <td style="padding:8px;border:1px solid #e5e7eb;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;">Message</td>
          <td style="padding:8px;border:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
    </div>
    <p style="text-align:center;color:#6b7280;font-size:12px;margin-top:16px;">This email was sent automatically by your website.</p>
  </div>`;
}

export function clientConfirmationTemplate({ name }) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:16px;background:#f7f7f7;">
    <div style="background:#ffffff;border-radius:8px;padding:24px;border:1px solid #e5e7eb;">
      <h2 style="margin:0 0 12px 0;color:#111827;">Thanks for contacting us${name ? ", " + escapeHtml(name) : ""}!</h2>
      <p style="margin:0 0 12px 0;color:#374151;">We received your message and our team will get back to you shortly.</p>
      <p style="margin:0;color:#6b7280;font-size:14px;">If this wasn't you, please ignore this email.</p>
    </div>
    <p style="text-align:center;color:#6b7280;font-size:12px;margin-top:16px;">This is an automated message – please do not reply.</p>
  </div>`;
}

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


