# Willmark Custom Homes — rebuild (Genesis job 36)

Factory-stack rebuild of https://www.willmarkhomes.com/ (Next 15.5.25, React 19,
Tailwind v4, GSAP, Sentry env-ready, Bun 1.4.2). Content and photos come from
their live site; palette/type extracted from their Squarespace theme CSS.

## Develop

```bash
bun install
bun run dev
```

## Build / run (Node 20 runtime, Bun build)

```bash
bun run build
node .next/standalone/server.js   # after copying public/ + .next/static per Dockerfile
```

## Deploy posture

- **Vercel primary** (dashboard or `vercel --prod --yes --name willmark-custom-homes-36`).
- **Railway reserve**: `railway.toml` + multi-stage `Dockerfile` (Bun build → Node 20 run,
  healthcheck on `/api/health`).

## Environment

Copy `.env.example` → `.env`. Sentry no-ops until `SENTRY_DSN` /
`NEXT_PUBLIC_SENTRY_DSN` is set. Lead forms post to `/api/submit`, which forwards
to `WEBHOOK_URL_CONTACT` / `WEBHOOK_URL_WARRANTY`; unset webhook → offline success
so previews work.

## Routes (FIRST SHIP sitemap)

/, /hire-us, /designbuild, /theteam, /warranty, /page,
/austin-county-builder, /washington-county-builder, /colorado-county-builder,
/fayette-county-builder, /waller-county-builder, /design, /blog (titles index only)
