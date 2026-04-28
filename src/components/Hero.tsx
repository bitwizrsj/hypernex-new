"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Plus } from "lucide-react";
import { trackClick } from "@/components/AnalyticsTracker";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  return (
    <div className="relative h-screen flex items-center overflow-hidden px-8 lg:px-16 bg-[#0b0b0e]">

      {/* ── BG: Responsive purple glows ── */}
      <div className="absolute top-[10%] right-[-10%] lg:right-[5%] w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-purple-700/20 lg:bg-purple-700/25 rounded-full blur-[80px] lg:blur-[140px] pointer-events-none" />
      
      <div className="absolute top-[15%] right-[0%] lg:right-[8%] w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-violet-500/25 lg:bg-violet-500/35 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none" />

      {/* ── Grain overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.38'/%3E%3C/svg%3E")`,
          opacity: 0.55,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Main grid ── */}
      <div
        className="relative w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center pt-28 pb-36"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#a1a1aa] uppercase">
              Digital Agency
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[2.8rem] font-bold leading-[1.1] tracking-tight text-white">
            We design digital <br className="hidden sm:block" />
            experiences that <br className="hidden sm:block" />
            drive{" "}
            <span className="text-gradient">real growth</span>
          </h1>

          <p className="max-w-md lg:max-w-sm text-[#8f8f9b] text-sm leading-relaxed">
            Hypernex Technologies is a digital agency that helps ambitious brands grow through
            strategy, design and technology.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <a 
              href="#featured-work" 
              onClick={() => trackClick('hero_view_work', pathname)}
              className="h-12 px-7 bg-white text-[#0b0b0e] text-sm font-semibold rounded-xl flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-all shadow-lg shadow-black/20"
            >
              View our work <span className="text-base text-purple-600 group-hover:text-white">↗</span>
            </a>
            <button 
              onClick={() => trackClick('hero_play_showreel', pathname)}
              className="h-12 flex items-center gap-3 text-white text-sm font-semibold hover:opacity-75 transition-opacity group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
              Play showreel
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 border-t border-white/8 mt-2 w-full lg:w-auto">
            <div className="flex -space-x-3">
              {["/avatar_1.png", "/avatar_2.png", "/avatar_3.png"].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0b0e] overflow-hidden relative">
                  <Image src={src} alt={`Team member ${i + 1}`} fill sizes="40px" className="object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#0b0b0e] bg-white/8 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-[#8f8f9b] leading-snug text-center sm:text-left">
              Trusted by 150+ brands<br />worldwide
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end">
          <div style={{ perspective: "1200px" }}>
            <div
              className="relative bg-[#141418] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden"
              style={{
                width: "660px",
                aspectRatio: "16 / 10",
                borderRadius: "18px",
                transform: "rotateY(-14deg) rotateX(4deg) scale(0.97)",
                transformOrigin: "center center",
              }}
            >
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-5 z-20">
                <span className="text-sm font-medium text-white/90 tracking-tight">lapē</span>
                <div className="grid grid-cols-2 gap-[3px]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-sm bg-white/40" />
                  ))}
                </div>
              </div>

              <div className="absolute left-6 bottom-8 z-20 flex flex-col gap-3 max-w-[44%]">
                <h3 className="text-[2.1rem] font-medium leading-[1.1] tracking-tight text-white">Crafted<br />for<br />tomorrow</h3>
                <Link 
                  href="/services" 
                  onClick={() => trackClick('hero_explore_project', pathname)}
                  className="mt-1 self-start px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-[0.65rem] font-medium hover:bg-white/20 transition-colors"
                >
                  Explore project ↗
                </Link>
              </div>

              <div className="absolute right-0 top-0 h-full z-10" style={{ width: "58%" }}>
                <Image src="/chair.png" alt="Modern chair" fill className="object-cover object-center" sizes="400px" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141418] via-[#141418]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
