import { NextResponse } from "next/server";

const DEFAULT_WEBHOOK = process.env.ZAPIER_WEBHOOK_URL
  || "https://hook.eu2.make.com/ascayq7slbkiwl26ptcro40285dwcula";

type LeadPayload = {
  source?: string;
  bundesland?: string;
  projekt?: string | null;
  vorname?: string;
  nachname?: string;
  email?: string;
  telefon?: string;
  submittedAt?: string;
  [key: string]: unknown;
};

function isEmail(s: string) {
  return /^\S+@\S+\.\S+$/.test(s);
}
function validate(body: LeadPayload) {
  const bundesland = (body.bundesland ?? "").toString().trim();
  const vorname = (body.vorname ?? "").toString().trim();
  const nachname = (body.nachname ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const telefon = (body.telefon ?? "").toString().trim();

  if (!bundesland) return "Bundesland fehlt";
  if (!vorname) return "Vorname fehlt";
  if (!nachname) return "Nachname fehlt";
  if (!email || !isEmail(email)) return "E-Mail ungültig";
  if (!telefon) return "Telefon fehlt";
  if (body.submittedAt && Number.isNaN(Date.parse(String(body.submittedAt)))) {
    return "submittedAt ist kein gültiges Datum";
  }
  return null;
}

export async function POST(req: Request) {
  try {
    if (!(req.headers.get("content-type") || "").includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "Content-Type muss application/json sein." },
        { status: 415 }
      );
    }

    const json = (await req.json().catch(() => null)) as LeadPayload | null;
    if (!json) {
      return NextResponse.json({ ok: false, error: "Ungültiger JSON-Body." }, { status: 400 });
    }

    const err = validate(json);
    if (err) {
      return NextResponse.json({ ok: false, error: err }, { status: 422 });
    }

    const data = { ...json, _source: "next-api" };

    // ---- OPTIONAL: hier DB/Email/CRM integrieren ----
    // await saveToDB(data)
    // await sendEmail(data)
    // await callCRM(data)
    // -----------------------------------------------

    // Serverseitiges Forwarding an Zapier (robust gg. CORS/Navigation)
    let webhookStatus = "skipped";
    try {
      const resp = await fetch(DEFAULT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      webhookStatus = `sent:${resp.status}`;
    } catch (e) {
      console.error("Zapier webhook failed:", e);
      webhookStatus = "failed";
      // wir schlagen den Lead nicht fehl, sondern loggen nur
    }

    // Logging (maskiert)
    console.log("New Lead:", {
      ...maskSensitive(data),
      webhookStatus,
    });

    return NextResponse.json({ ok: true, webhookStatus });
  } catch (e) {
    console.error("Lead API error:", e);
    return NextResponse.json(
      { ok: false, error: "Interner Fehler beim Lead-Empfang." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, ping: "lead-endpoint" });
}

function maskSensitive(data: LeadPayload) {
  const email = typeof data.email === "string" ? data.email : "";
  const phone = typeof data.telefon === "string" ? data.telefon : "";
  return {
    ...data,
    email: maskEmail(email),
    telefon: maskPhone(phone),
  };
}
function maskEmail(email: string) {
  const [user, domain] = email.split("@");
  if (!domain) return "***";
  return `${user?.[0] || "*"}***@${domain}`;
}
function maskPhone(phone: string) {
  const s = String(phone);
  if (s.length <= 4) return "***";
  return `${s.slice(0, 2)}***${s.slice(-2)}`;
}
