"use client";

import { useState, useEffect } from "react";
import { Mail, Globe, ArrowUpRight, MessageSquare, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

// Custom Social Icons to bypass lucide-react import issues
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const supabase = createClient();

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

  return (
    <footer className="bg-[#0b0b0e] pt-24 pb-12 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="col-span-2 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Hypernex logo" 
                width={50} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Hypernex Technologies</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              We help ambitious brands grow through strategy, design and technology. USA based studio.
            </p>
            
            {/* Social Links - Conditional Rendering */}
            <div className="flex gap-4">
              {settings.email && (
                <a href={`mailto:${settings.email}`} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {settings.linkedin && (
                <a href={settings.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {settings.instagram && (
                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-[#e4405f]/20 hover:text-[#e4405f] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.twitter && (
                <a href={settings.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {settings.facebook && (
                <a href={settings.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-[#1877f2]/20 hover:text-[#1877f2] transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {settings.whatsapp && (
                <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 hover:bg-[#25d366]/20 hover:text-[#25d366] transition-all">
                  <MessageSquare className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-sm">Services</h4>
            <ul className="flex flex-col gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">SEO & Growth</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Strategy</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-sm">Company</h4>
            <ul className="flex flex-col gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-sm">Contact Info</h4>
            <ul className="flex flex-col gap-5 text-[11px] text-gray-500">
              {settings.email && (
                <li>
                  <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    {settings.email}
                  </a>
                </li>
              )}
              {settings.phone && (
                <li>
                  <a href={`tel:${settings.phone}`} className="hover:text-white transition-colors flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    {settings.phone}
                  </a>
                </li>
              )}
              {settings.address && (
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed opacity-60">{settings.address}</span>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Hypernex Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
