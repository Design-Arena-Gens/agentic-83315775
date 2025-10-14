import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = String((body as any).name || '').trim();
  const email = String((body as any).email || '').trim();
  const message = String((body as any).message || '').trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email is required';
  if (message.length < 10) errors.message = 'Message must be at least 10 characters';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed', errors }, { status: 422 });
  }

  // Log the JSON payload (simulating submission)
  console.log('Contact submission:', { name, email, message });

  return NextResponse.json({ ok: true });
}
