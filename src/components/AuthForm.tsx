"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, register } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Auth error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm flex flex-col gap-4">
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input input-bordered"
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input input-bordered"
      />
      <button type="submit" className="btn btn-primary">
        {mode === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
