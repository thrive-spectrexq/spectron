// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Proxy to Cloudflare Worker or handle locally
  // For now, fake success
  return NextResponse.json({ user: { email } });
}
