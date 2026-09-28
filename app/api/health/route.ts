const ok = { ok: true };

export async function GET() {
  return Response.json(ok, { status: 200 });
}
