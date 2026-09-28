"use client";

import * as Sentry from "@sentry/nextjs";

export function initClientSentry() {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return; // no credentials configured: Sentry no-ops
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
    sendDefaultPii: false,
  });
}
