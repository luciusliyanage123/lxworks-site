import { NextRequest, NextResponse } from 'next/server'
const backend = process.env.BACKEND_URL || 'https://lxworks-backend.up.railway.app'
export async function POST(req: NextRequest) {
  const body = await req.json()
  const res = await fetch(`${backend}/chat`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
