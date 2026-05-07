import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Shield, Zap, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#0b0b0e] min-h-screen text-white">
      <Navbar />

      {/* ── Unique Hero: The Vision ── */}
      <section className="relative pt-64 pb-32 px-8 lg:px-16 flex flex-col items-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-8">
          <div className="flex items-center gap-2 self-center">
            <span className="w-1 h-1 rounded-full bg-purple-500" />
            <span className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-gray-500">Our Manifesto</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">THE FUTURE</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 text-sm lg:text-base leading-relaxed mt-4">
            Hypernex Technologies is a collective of designers, engineers, and strategists obsessed with the intersection of human behavior and digital performance.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Founders' Story ── */}
      <section className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
            <Image 
              src="/office.png" 
              alt="Our workspace" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-xs">
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                "We started Hypernex in a small New York loft with a single goal: make tech feel more human."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold tracking-tight">From a side project to a global innovation partner.</h2>
            <div className="flex flex-col gap-6 text-gray-500 text-sm leading-relaxed max-w-lg">
              <p>
                Hypernex was born out of frustration with the "standard" agency model. We saw too many products being built without a soul, driven by metrics but devoid of purpose.
              </p>
              <p>
                In 2021, we decided to pivot. We wanted to build a boutique studio that behaves like a product lab. We don't just take orders; we challenge assumptions and co-create the roadmap with our partners.
              </p>
            </div>
            <button className="flex items-center gap-4 group w-fit">
              <span className="text-sm font-bold border-b border-purple-500/0 group-hover:border-purple-500 transition-all pb-1">Read the full story</span>
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Philosophy (The Pillars) ── */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
             <div className="flex flex-col gap-6">
                <span className="text-[0.65rem] font-bold tracking-[0.3em] text-purple-600 uppercase">Mission Control</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">Our Core Pillars</h2>
             </div>
             <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                The values that drive every decision we make, every line of code we write, and every pixel we place.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-10 bg-[#f6f6fb] rounded-[2.5rem] flex flex-col gap-8 group hover:bg-purple-600 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl group-hover:bg-purple-500 group-hover:text-white transition-all">
                   <Zap className="w-6 h-6 text-purple-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-xl font-bold group-hover:text-white transition-colors">Precision Fast</h3>
                   <p className="text-gray-500 text-sm group-hover:text-purple-100 transition-colors">Speed is a feature. We ship rapidly without ever compromising on the high-fidelity finish our clients expect.</p>
                </div>
             </div>
             <div className="p-10 bg-[#f6f6fb] rounded-[2.5rem] flex flex-col gap-8 group hover:bg-indigo-600 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                   <Shield className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                </div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-xl font-bold group-hover:text-white transition-colors">Radical Trust</h3>
                   <p className="text-gray-500 text-sm group-hover:text-indigo-100 transition-colors">We act as your CTO/CDO. We're not just a vendor; we're a part of your long-term success strategy.</p>
                </div>
             </div>
             <div className="p-10 bg-[#f6f6fb] rounded-[2.5rem] flex flex-col gap-8 group hover:bg-gray-900 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl group-hover:bg-gray-800 group-hover:text-white transition-all">
                   <Heart className="w-6 h-6 text-gray-900 group-hover:text-white" />
                </div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-xl font-bold group-hover:text-white transition-colors">User First</h3>
                   <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">Data tells you what happened; users tell you why. We prioritize human psychology in every experience.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Team ── */}
      {/* <section className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
          <div className="text-center flex flex-col gap-6">
             <h2 className="text-3xl font-bold tracking-tight">The minds behind the work.</h2>
             <p className="text-gray-500 text-sm max-w-xl mx-auto">A global team of specialists operating at the edge of tech and design culture.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { name: "Alex Rivers", role: "Design Director", avatar: "https://i.pravatar.cc/150?u=alex" },
               { name: "Elena K.", role: "Lead Engineer", avatar: "https://i.pravatar.cc/150?u=elena" },
               { name: "Marcus Thorne", role: "Strategy Lead", avatar: "https://i.pravatar.cc/150?u=marcus" },
               { name: "Sarah J.", role: "CEO & Founder", avatar: "https://i.pravatar.cc/150?u=sarah" }
             ].map((member, i) => (
               <div key={i} className="flex flex-col items-center text-center gap-6 group">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white/5 group-hover:border-purple-500/30">
                     <Image src={member.avatar} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h4 className="font-bold text-base">{member.name}</h4>
                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{member.role}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section> */}

      {/* ── Footer-ish CTA ── */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-t from-purple-900/20 to-[#0b0b0e] border-t border-white/5">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-12">
            <Globe className="w-16 h-16 text-purple-500 opacity-20" />
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Remote-first. <br />Impact-always.</h2>
            <p className="text-gray-500 text-sm max-w-sm">We're always looking for ambitious brands and talented individuals to join our mission.</p>
            <div className="flex gap-4">
               <Link href="/contact" className="px-8 py-3.5 bg-white text-gray-900 text-sm font-bold rounded-2xl hover:bg-purple-500 hover:text-white transition-all">Get in touch</Link>
               <Link href="/careers" className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-2xl hover:bg-white/10 transition-all">Careers</Link>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
