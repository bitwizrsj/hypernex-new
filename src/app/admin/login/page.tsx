"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] flex items-center justify-center p-6">
      <div className="w-full max-w-md flex flex-col gap-8">
        
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
             <Image src="/logo.png" alt="Hypernex logo" width={40} height={40} />
             <span className="text-xl font-bold tracking-tight text-white uppercase italic">Hypernex</span>
          </div>
          <div className="flex flex-col gap-2">
             <h1 className="text-2xl font-bold text-white tracking-tight">Access Control Panel</h1>
             <p className="text-gray-500 text-sm">Enter your credentials to manage Hypernex Technologies.</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm focus:ring-2 focus:ring-purple-600 transition-all outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm focus:ring-2 focus:ring-purple-600 transition-all outline-none"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-xs text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-gray-900 rounded-2xl py-4 text-sm font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 text-[10px] uppercase font-black tracking-widest mt-4">
          Internal Use Only • Hypernex Technologies
        </p>

      </div>
    </div>
  );
}
