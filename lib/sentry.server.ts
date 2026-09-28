import * as Sentry from "@sentry/nextjs";

export async function registerInit() {
  const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return; // no credentials configured: Sentry no-ops
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
    sendDefaultPii: false,
  });
}

export function captureRequestError(error: unknown) {
  const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return;
  Sentry.captureException(error);
}
