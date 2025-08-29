import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ db: "ok" });
  } catch (err) {
    return NextResponse.json({ db: "error", message: err?.message || String(err) }, { status: 500 });
  }
}


