import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const WEBHOOKS: Record<string, string | undefined> = {
  contact: process.env.WEBHOOK_URL_CONTACT,
  warranty: process.env.WEBHOOK_URL_WARRANTY,
};

type Body = {
  form?: string;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const form = body.form === "warranty" ? "warranty" : "contact";
  if (!body.name || !body.email) {
    return Response.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  const webhook = WEBHOOKS[form];
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, form, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) {
        return Response.json(
          { ok: false, error: "We could not receive your message. Please call us." },
          { status: 502 },
        );
      }
    } catch {
      return Response.json(
        { ok: false, error: "We could not receive your message. Please call us." },
        { status: 502 },
      );
    }
  }

  // Webhook unset → offline success so previews work end to end.
  console.log(`[submit:offline] ${form} lead from ${body.name} <${body.email}>`);
  return Response.json({ ok: true, offline: !webhook });
}
