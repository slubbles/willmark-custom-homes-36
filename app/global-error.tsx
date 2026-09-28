"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (dsn) Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 400 }}>Something went wrong.</h1>
        <button
          onClick={reset}
          style={{ marginTop: "1.5rem", padding: "0.8rem 2rem", background: "#231f1c", color: "#fff", border: 0, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", cursor: "pointer" }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
