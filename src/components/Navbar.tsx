"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { trackClick } from "@/components/AnalyticsTracker";
import { createClient } from "@/lib/supabase/client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const pathname = usePathname();
  const supabase = createClient();

  // Smart Navbar Reveal Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fetch settings for social links
  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from("settings").select("*");
      if (data) {
        const map = data.reduce((acc: any, curr: any) => {
          acc[curr.key] = curr.value;
          return acc;
        }, {});
        setSettings(map);
      }
    }
    fetchSettings();
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar - Fixed with Reveal Logic */}
      <nav className={`fixed top-0 w-full z-[100] px-6 lg:px-8 py-6 flex items-center justify-between transition-all duration-300 ${
        showNavbar || isOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        isOpen ? "bg-transparent border-transparent" : "bg-[#0b0b0e]/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/20"
      }`}>
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/logo.png" 
            alt="Hypernex logo" 
            width={40} 
            height={40} 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-base lg:text-xl font-bold tracking-tight text-white uppercase italic transition-colors group-hover:text-purple-400">Hypernex Technologies</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            onClick={() => trackClick('nav_lets_talk', pathname)}
            className="hidden md:flex items-center justify-center px-8 py-3 rounded-2xl bg-white text-gray-900 text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-black/10"
          >
            Let's talk <span className="ml-2 font-sans">↗</span>
          </Link>
          
          {/* Mobile Menu Toggle - Persists and works as the close button too */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all z-[110]"
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[95] bg-[#0b0b0e] transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
        
        <div className="flex flex-col h-full px-8 pt-32 pb-12 overflow-y-auto relative z-10">
          <span className="text-[9px] font-black uppercase text-gray-600 tracking-[0.3em] mb-10">Navigation</span>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-3xl font-bold tracking-tight uppercase italic flex items-center justify-between group ${
                    isActive ? "text-purple-500" : "text-white"
                  }`}
                >
                  {link.name}
                  <ArrowUpRight className={`w-5 h-5 transition-opacity ${isActive ? "opacity-100" : "opacity-20 group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-12 pt-12">
            <Link 
              href="/contact" 
              onClick={() => trackClick('nav_mobile_start_project', pathname)}
              className="w-full py-5 bg-white text-gray-900 rounded-2xl text-center text-[11px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all shadow-2xl"
            >
              Start a project
            </Link>
            
            <div className="flex flex-col gap-4">
              <p className="text-[9px] font-black uppercase text-gray-700 tracking-widest">Connect</p>
              <div className="flex gap-6 text-[10px] font-bold text-white uppercase tracking-widest">
                {settings.linkedin && <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>}
                {settings.twitter && <a href={settings.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">X.com</a>}
                {settings.instagram && <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Instagram</a>}
                {settings.facebook && <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Facebook</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
