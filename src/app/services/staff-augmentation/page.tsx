import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Clock,
  Handshake,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Staff Augmentation",
  description:
    "On-demand, elite engineering and design talent from Hypernex Technologies. Embed world-class developers directly into your team — no agency overhead.",
};

const features = [
  {
    icon: UserCheck,
    title: "Pre-vetted Talent",
    desc: "Every engineer and designer goes through a rigorous technical and cultural assessment before joining your team.",
  },
  {
    icon: Clock,
    title: "Rapid Onboarding",
    desc: "From first call to productive contributor in under 72 hours. We handle contracts, tooling access, and ramp-up.",
  },
  {
    icon: Handshake,
    title: "Seamless Integration",
    desc: "Your augmented team members work in your timezone, in your Slack, using your tools — as true extensions of your org.",
  },
  {
    icon: Star,
    title: "Senior-only Talent",
    desc: "Mid-to-senior engineers, product designers, and tech leads. No juniors sent to meet headcount numbers.",
  },
];

const roles = [
  "Frontend Engineers (React, Next.js, Vue)",
  "Backend Engineers (Node, Python, Go)",
  "Fullstack Engineers",
  "Mobile Developers (iOS & Android)",
  "UI/UX & Product Designers",
  "QA & Automation Engineers",
  "DevOps & Cloud Engineers",
  "Technical Product Managers",
];

const deliverables = [
  "Dedicated Talent Profile Matching",
  "Technical Interview Assistance",
  "Onboarding Runbook & Access Setup",
  "Weekly Engagement Health Reports",
  "Flexible Scaling (Up or Down)",
  "NDA & IP Assignment Agreements",
  "Direct Slack/Teams Integration",
  "Dedicated Account Manager",
];

const stats = [
  { value: "48h", label: "Average placement time" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "200+", label: "Engineers in our network" },
  { value: "0", label: "Juniors. Ever." },
];

export default function StaffAugmentationPage() {
  return (
    <main className="bg-[#0b0b0e] text-white overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 lg:px-16 border-b border-white/5 bg-[#0b0b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-violet-400" />
              </div>
              <span className="text-[0.65rem] font-black tracking-[0.4em] text-violet-400 uppercase">07 // Talent Extension</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              STAFF<br />
              <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Augmentation.</span>
            </h1>
          </div>

          <div className="relative h-[300px] lg:h-[400px] w-full rounded-[2.5rem] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
              alt="Staff Augmentation" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0e] via-[#0b0b0e]/50 to-transparent" />
            <div className="absolute inset-0 bg-violet-500/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900 rounded-b-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-6">
           <h2 className="text-2xl font-bold tracking-tight">About this service</h2>
           <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-3xl">
              On-demand elite engineering and design talent embedded directly into your team. Move faster, ship more, and scale your capacity without the overhead of full-time hiring. Every engineer and designer goes through a rigorous technical assessment before joining.
           </p>
           <div className="flex flex-wrap gap-4 mt-6">
             <Link href="/contact" className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-violet-600 transition-all shadow-xl">
               Find talent <ArrowRight className="w-4 h-4" />
             </Link>
             <Link href="/services" className="flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
               All services
             </Link>
           </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-24 px-8 lg:px-16 bg-[#0b0b0e]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="text-4xl font-black text-white">{s.value}</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 mb-20">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-violet-400 uppercase">How it works</span>
            <h2 className="text-4xl font-black tracking-tight">What makes us different.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-500 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <f.icon className="w-5 h-5 text-violet-400" />
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

      {/* Roles We Fill */}
      <section className="px-8 lg:px-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-violet-400 uppercase">Roles</span>
            <h2 className="text-4xl font-black tracking-tight">Who we place.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div key={role} className="flex items-center gap-3 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group">
                <div className="w-2 h-2 rounded-full bg-violet-500 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1 flex flex-col gap-8">
            <span className="text-[0.65rem] font-black tracking-[0.4em] text-violet-600 uppercase">What you get</span>
            <h2 className="text-4xl font-black tracking-tight">Everything included.</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              No recruiting fees, no HR overhead. We manage the entire engagement lifecycle so you focus entirely on building.
            </p>
            <Link href="/contact" className="flex items-center gap-3 w-fit px-8 py-4 bg-gray-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-violet-600 transition-all">
              Request talent <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50 transition-all group">
                <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
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
