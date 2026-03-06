import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { pin, role } = await req.json()

  const pins: Record<string, string | undefined> = {
    sales: process.env.SALES_PIN,
    sandbox: process.env.SANDBOX_PIN,
  }

  const expected = pins[role]

  if (!expected) {
    return NextResponse.json({ ok: false, error: 'Unknown role' }, { status: 400 })
  }

  if (pin !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  return NextResponse.json({ ok: true })
}
