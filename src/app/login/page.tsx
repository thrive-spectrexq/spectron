// src/app/login/page.tsx
import AuthForm from "../../components/AuthForm";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-24 text-center">
        <h2 className="text-2xl mb-4">Login</h2>
        <AuthForm mode="login" />
      </main>
    </>
  );
}
