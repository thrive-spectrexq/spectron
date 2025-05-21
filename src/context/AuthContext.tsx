"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type User = { email: string };

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    // Call your API (to be connected to CF Worker)
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
    if (!res.ok) throw new Error("Login failed");
    const data = await res.json();
    setUser(data.user);
  }

  async function register(email: string, password: string) {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
    if (!res.ok) throw new Error("Registration failed");
    const data = await res.json();
    setUser(data.user);
  }

  function logout() {
    setUser(null);
    // Optionally clear session/cookie
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
