// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Proxy to Cloudflare Worker, or handle locally for now
  // Example: const workerResponse = await fetch("https://your-worker-url/login", { ... })
  // For now, fake a user:
  if (email === "test@example.com" && password === "password") {
    return NextResponse.json({ user: { email } });
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
