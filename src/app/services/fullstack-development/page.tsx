import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  CheckCircle2,
  ArrowRight,
  Server,
  Shield,
  Zap,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fullstack Development",
  description:
    "High-performance fullstack development with Next.js, React, and cloud-native infrastructure built to handle millions of requests.",
};

const features = [
  {
    icon: Globe2,
    title: "Next.js & React",
    desc: "Lightning-fast frontends with SSR, ISR, and edge rendering that score 95+ on Core Web Vitals.",
  },
  {
    icon: Server,
    title: "SaaS Architecture",
    desc: "Multi-tenant backends, billing integrations, role-based access, and everything a modern SaaS demands.",
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    desc: "Automated CI/CD pipelines on AWS, GCP, or Vercel with zero-downtime deployments.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Auth flows, data encryption, rate limiting, and OWASP compliance baked into every build.",
  },
];

const deliverables = [
  "Tech Architecture Blueprint",
  "Next.js / React Codebase",
  "REST & GraphQL APIs",
  "Database Schema & Migrations",
  "CI/CD Pipeline Setup",
  "Cloud Infrastructure (IaC)",
  "API Documentation",
  "Performance Audit Reports",
];

export default function FullstackDevPage() {
  return (
    <main className="bg-[#0b0b0e] text-white overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 lg:px-16 border-b border-white/5 bg-[#0b0b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-[0.65rem] font-black tracking-[0.4em] text-blue-400 uppercase">02 // Scalable Tech</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              HIGH-PERFORMANCE<br />
              <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Fullstack Dev.</span>
            </h1>
          </div>

          <div className="relative h-[300px] lg:h-[400px] w-full rounded-[2.5rem] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop" 
              alt="Fullstack Development" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/50 to-transparent" />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900 rounded-b-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-6">
           <h2 className="text-2xl font-bold tracking-tight">About this service</h2>
           <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-3xl">
              Blazing fast Next.js applications, robust APIs, and cloud-native infrastructure built to handle millions of requests. We build scalable, high-performance web applications that power modern SaaS businesses from the ground up.
           </p>
           <div className="flex flex-wrap gap-4 mt-6">
             <Link href="/contact" className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
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
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-blue-400 uppercase">What we do</span>
            <h2 className="text-4xl font-black tracking-tight">Core capabilities.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <f.icon className="w-5 h-5 text-blue-400" />
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
            <Image src="/project2.png" alt="Fullstack development showcase" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1 flex flex-col gap-8">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-blue-600 uppercase">What you get</span>
            <h2 className="text-4xl font-black tracking-tight">Deliverables.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              From source code to deployed infrastructure — we hand over everything your team needs to own and operate the product.
            </p>
            <Link href="/contact" className="flex items-center gap-3 w-fit px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
              Get a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
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
