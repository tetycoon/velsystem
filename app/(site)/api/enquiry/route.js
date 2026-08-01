import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { BRAND } from "../../../../data/content";

// Enquiry submissions used to be written only to a JSON file. On Vercel that file
// lives in /tmp, which is wiped on every cold start and every deploy — meaning
// real customer enquiries were silently disappearing in production. Fixed by
// emailing every submission via Resend (https://resend.com) so it lands in an
// inbox that actually persists. The file write is kept as a local-dev
// convenience and a best-effort backup, not the primary record anymore.

const ENQUIRIES_FILE = process.env.VERCEL
  ? path.join("/tmp", "enquiries.json")
  : path.join(process.cwd(), "data", "enquiries.json");

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendNotificationEmail(entry) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, reason: "RESEND_API_KEY not configured" };
  }
  const notifyTo = process.env.ENQUIRY_NOTIFY_EMAIL || BRAND.email;
  // onboarding@resend.dev works without verifying a domain, but Resend's sandbox
  // mode may restrict delivery to only the email address the Resend account was
  // signed up with until a sending domain is verified. Once velsystems.in (or
  // any domain) is verified in the Resend dashboard, switch RESEND_FROM to
  // something like "Vel Systems Website <enquiries@velsystems.in>" for
  // unrestricted delivery to sales@velsystems.in.
  const from = process.env.RESEND_FROM || "Vel Systems Website <onboarding@resend.dev>";

  const html = `
    <h2>New enquiry from velsystems.in</h2>
    <p><strong>Name:</strong> ${escapeHtml(entry.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(entry.email)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(entry.whatsapp)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(entry.subject) || "(none given)"}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(entry.message).replace(/\n/g, "<br/>")}</p>
    <p style="color:#888;font-size:12px;">Received ${entry.receivedAt}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: notifyTo,
      reply_to: entry.email,
      subject: `New enquiry: ${entry.subject || entry.name}`,
      html
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    return { sent: false, reason: `Resend API error ${res.status}: ${body}` };
  }
  return { sent: true };
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload.name || !payload.email || !payload.whatsapp) {
      return NextResponse.json({ error: "Name, email, and WhatsApp number are required." }, { status: 400 });
    }
    const entry = { ...payload, receivedAt: new Date().toISOString() };

    const emailResult = await sendNotificationEmail(entry);
    if (!emailResult.sent) {
      console.error("Enquiry email notification failed:", emailResult.reason);
    }

    // Best-effort backup write. Not relied on as the primary record in production.
    let fileOk = true;
    try {
      let existing = [];
      try { existing = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, "utf8")); } catch (e) { existing = []; }
      existing.push(entry);
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(existing, null, 2));
    } catch (e) {
      fileOk = false;
    }

    if (!emailResult.sent && !fileOk) {
      return NextResponse.json({ error: "Could not record enquiry. Please contact us on WhatsApp instead." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, emailed: emailResult.sent });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
