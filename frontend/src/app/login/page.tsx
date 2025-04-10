"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import API_BASE_URL from "../styles/config";
import { useAuth } from "../context/AuthContext";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (res.ok) {
    login(data.token); // ✅ Update context
    router.push("/blog");
  } else {
    alert(data.message || "Login failed");
  }
};

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-white w-32 mx-auto">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded border-white text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded  border-white text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        <div className="text-white hover:text-red-500 w-64 mx-auto pl-10"> <Link href="/signup"> create new Account
        </Link></div>
      </form>
    </div>
  );
}
