import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// TODO Phase 2: replace this file-based store with a real database (RDS on AWS)
// once provisioned, and forward new enquiries to the WhatsApp Business API / CRM
// once that's connected.
const ENQUIRIES_FILE = path.join(process.cwd(), "data", "enquiries.json");

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload.name || !payload.email || !payload.whatsapp) {
      return NextResponse.json({ error: "Name, email, and WhatsApp number are required." }, { status: 400 });
    }
    const entry = { ...payload, receivedAt: new Date().toISOString() };
    let existing = [];
    try { existing = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, "utf8")); } catch (e) { existing = []; }
    existing.push(entry);
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(existing, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
