import { registerInit, captureRequestError } from "@/lib/sentry.server";

export async function register() {
  await registerInit();
}

export function onRequestError(...args: unknown[]) {
  captureRequestError(args[0]);
}
