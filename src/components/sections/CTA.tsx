import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#f6f6fb] px-8 lg:px-16 py-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Dark banner card */}
        <div className="relative overflow-hidden bg-[#111118] rounded-2xl px-10 lg:px-14 py-10 grid lg:grid-cols-[1fr_1fr_auto] gap-8 items-center">

          {/* Decorative circles */}
          <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-[28%] top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5 pointer-events-none" />

          {/* Col 1 — Heading */}
          <h2 className="text-3xl font-bold text-white leading-snug">
            Let&apos;s build something<br />great together
          </h2>

          {/* Col 2 — Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Have a project in mind? Let&apos;s create something that drives real impact.
          </p>

          {/* Col 3 — Button */}
          <Link href="/contact" className="flex items-center gap-3 px-7 py-3.5 bg-[#7c3aed] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:bg-[#6d28d9] transition-colors group flex-shrink-0">
            Let&apos;s talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
