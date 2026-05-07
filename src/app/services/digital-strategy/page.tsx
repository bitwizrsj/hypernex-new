import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  LineChart,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  Target,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Strategy & Growth",
  description:
    "Data-driven digital strategy and growth operations. SEO, paid media, and conversion optimization that scales your business.",
};

const features = [
  {
    icon: Search,
    title: "SEO Ecosystems",
    desc: "Technical SEO, content strategy, and link building combined into a compounding organic growth machine.",
  },
  {
    icon: Target,
    title: "Paid Performance",
    desc: "Precision-targeted ad campaigns on Google, Meta, and LinkedIn with obsessive ROAS optimization.",
  },
  {
    icon: TrendingUp,
    title: "Content Operations",
    desc: "Thought leadership content, case studies, and SEO articles that build authority and capture demand.",
  },
  {
    icon: BarChart3,
    title: "Conversion Hubs",
    desc: "Landing page optimization, A/B testing, and funnel analysis that turns traffic into revenue.",
  },
];

const deliverables = [
  "Growth Strategy Roadmap",
  "SEO Technical Audit",
  "Keyword Research & Mapping",
  "Paid Media Campaign Setup",
  "Content Calendar & Briefs",
  "Analytics Dashboard",
  "Monthly Performance Reports",
  "Conversion Rate Optimization",
];

export default function DigitalStrategyPage() {
  return (
    <main className="bg-[#0b0b0e] text-white overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 lg:px-16 border-b border-white/5 bg-[#0b0b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-[0.65rem] font-black tracking-[0.4em] text-purple-400 uppercase">03 // Market Dominance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              DIGITAL STRATEGY<br />
              <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">&amp; Growth Ops.</span>
            </h1>
          </div>

          <div className="relative h-[300px] lg:h-[400px] w-full rounded-[2.5rem] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" 
              alt="Digital Strategy" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/50 to-transparent" />
            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900 rounded-b-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-6">
           <h2 className="text-2xl font-bold tracking-tight">About this service</h2>
           <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-3xl">
              We don't just build; we scale. Our data-driven approach to SEO, content strategy, and paid media ensures your product finds its perfect audience. We optimize for conversion, capture demand, and build engines that drive sustainable organic growth.
           </p>
           <div className="flex flex-wrap gap-4 mt-6">
             <Link href="/contact" className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl">
               Start a project <ArrowRight className="w-4 h-4" />
             </Link>
             <Link href="/services" className="flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
               All services
             </Link>
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 mb-20">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-purple-400 uppercase">What we do</span>
            <h2 className="text-4xl font-black tracking-tight">Core capabilities.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <f.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-bold">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Image */}
      <section className="px-8 lg:px-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative aspect-[16/7] rounded-[2.5rem] overflow-hidden border border-white/5 bg-gray-900">
            <Image src="/project3.png" alt="Digital strategy showcase" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1 flex flex-col gap-8">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-purple-600 uppercase">What you get</span>
            <h2 className="text-4xl font-black tracking-tight">Deliverables.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Clear, actionable outputs every month — from strategy docs to live dashboards you can share with your board.
            </p>
            <Link href="/contact" className="flex items-center gap-3 w-fit px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-purple-600 transition-all">
              Get a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all group">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
