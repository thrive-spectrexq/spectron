// src/app/register/page.tsx
import AuthForm from "../../components/AuthForm";
import Navbar from "../../components/Navbar";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-24 text-center">
        <h2 className="text-2xl mb-4">Register</h2>
        <AuthForm mode="register" />
      </main>
    </>
  );
}
