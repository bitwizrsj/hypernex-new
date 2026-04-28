"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:max-w-md z-[1000] animate-in slide-in-from-bottom-10 duration-700 ease-out">
      <div className="bg-[#14141a]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-6 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -z-10" />
        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Privacy Policy</span>
              <h3 className="text-sm font-bold text-white uppercase italic">Cookie Settings</h3>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
          We use cookies and tracking technologies to enhance your experience, analyze site traffic, and deliver personalized content. By clicking "Accept All", you agree to our use of these tools.
        </p>

        <div className="flex flex-col gap-3">
          <button 
            onClick={handleAccept}
            className="w-full py-4 bg-white text-gray-900 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-3.5 h-3.5" />
            Accept All Cookies
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleDecline}
              className="py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
            >
              Essential Only
            </button>
            <Link 
              href="/privacy"
              className="py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-3 h-3" />
              Policy
            </Link>
          </div>
        </div>

        <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest text-center">
          Manage your preferences in our <Link href="/privacy" className="text-purple-500/50 hover:text-purple-500 underline underline-offset-4 transition-colors">privacy center</Link>
        </p>

      </div>
    </div>
  );
}
