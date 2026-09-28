export type LeadPayload = {
  form: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export type SubmitResult = { ok: boolean; offline: boolean; error?: string };

/**
 * Single contact-path submit helper.
 * Posts to /api/submit; the route forwards to the webhook named by
 * WEBHOOK_URL_CONTACT / WEBHOOK_URL_WARRANTY. When the env is unset the
 * API returns offline success so previews still work.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      offline?: boolean;
      error?: string;
    };
    if (!res.ok) {
      return { ok: false, offline: false, error: data.error || "Submission failed" };
    }
    return { ok: true, offline: Boolean(data.offline) };
  } catch {
    return { ok: false, offline: false, error: "Network error — please call us instead." };
  }
}
