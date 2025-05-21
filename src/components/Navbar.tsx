"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="flex justify-between p-4 border-b">
      <Link href="/">Spectron</Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hello, {user.email}</span>
            <button onClick={logout} className="btn btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="mr-2">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
