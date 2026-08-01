import { NextResponse } from "next/server";
import { FAQ_KB, FAQ_FALLBACK } from "../../../../data/content";

// TODO Phase 2: replace this keyword matcher with a real LLM call once a real
// product knowledge base exists and an AI API key is configured (see plan doc
// section 12). Deliberately not guessing at answers outside FAQ_KB, it's better
// to route to WhatsApp than to give a customer a wrong answer.
export async function POST(request) {
  try {
    const { message } = await request.json();
    const text = String(message || "").toLowerCase();
    const hit = FAQ_KB.find(entry => entry.keywords.some(kw => text.includes(kw)));
    const reply = hit ? hit.answer : FAQ_FALLBACK;
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: "Something went wrong. Please try WhatsApp instead." }, { status: 500 });
  }
}
