import { NextRequest, NextResponse } from "next/server";

// Sehr einfaches In-Memory Rate Limiting (pro Server-Instanz, kein persistenter Speicher).
// Fuer produktiven Einsatz ggf. durch eine Edge-/KV-basierte Loesung ersetzen.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

const REQUIRED_FIELDS = ["name", "email", "projectType", "message", "consent"];

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: an ausgefuelltes Feld deutet auf ein Bot-Formular hin.
  if (typeof payload.company_website === "string" && payload.company_website.length > 0) {
    return NextResponse.json({ ok: true }); // stiller Erfolg, kein Hinweis an Bots
  }

  for (const field of REQUIRED_FIELDS) {
    const value = payload[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return NextResponse.json(
        { ok: false, error: "missing_field", field },
        { status: 422 }
      );
    }
  }

  const email = String(payload.email ?? "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  const providerKey = process.env.CONTACT_EMAIL_PROVIDER_API_KEY;
  if (!providerKey) {
    // Kein E-Mail-Dienst konfiguriert: Anfrage wird bewusst NICHT verworfen,
    // aber als "nicht automatisch versendet" gemeldet, damit das Frontend
    // den mailto:-Fallback als sichere Alternative anzeigt.
    return NextResponse.json(
      { ok: false, error: "no_provider_configured" },
      { status: 501 }
    );
  }

  // Platzhalter fuer die Anbindung eines echten Versanddienstes (z. B. Resend, Postmark).
  // Absichtlich ohne Implementierung, da kein Dienst vorgegeben wurde (siehe README).
  return NextResponse.json({ ok: false, error: "not_implemented" }, { status: 501 });
}
