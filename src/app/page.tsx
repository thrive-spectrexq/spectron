// src/app/page.tsx
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Spectron</h1>
        <p className="mb-8">Your Next Generation Web Application.</p>
        <div className="flex justify-center gap-4">
          <Link href="/login"><button className="btn btn-primary">Login</button></Link>
          <Link href="/register"><button className="btn btn-secondary">Register</button></Link>
        </div>
      </main>
    </>
  );
}
