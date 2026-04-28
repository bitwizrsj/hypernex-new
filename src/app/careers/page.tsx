import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, Zap, Coffee, Globe, Heart, Shield, Clock, Rocket } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: positions } = await supabase
    .from("jobs")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });

  return (
    <main className="bg-[#0b0b0e] text-white">
      <Navbar />
      
      {/* ── Section 1: The Future Hero ── */}
      <section className="relative pt-64 pb-32 px-8 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
             <span className="text-[0.65rem] font-black tracking-[0.3em] text-blue-400 uppercase">Join Hypernex</span>
             <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none">
                SHAPING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">DIGITAL FUTURE</span> <br />
                WITH US
             </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
             <p className="text-gray-500 text-sm lg:text-base max-w-sm leading-relaxed">
                Hypernex is a collective of polymaths. We're looking for individuals who don't just want a job, but a mission.
             </p>
             <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">{positions?.length || 0} Open Positions</span>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Hypernex? (The Perks Grid) ── */}
      <section className="py-32 px-8 lg:px-16 border-y border-white/5 bg-gradient-to-b from-[#0b0b0e] to-[#0e0e13]">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-10 group hover:border-blue-500/50 transition-colors">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <div className="flex flex-col gap-3">
                     <h3 className="text-xl font-bold">100% Remote</h3>
                     <p className="text-gray-500 text-xs leading-relaxed">Work from the beach, the mountains, or your couch. We trust you.</p>
                  </div>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-10 group hover:border-cyan-500/50 transition-colors">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <div className="flex flex-col gap-3">
                     <h3 className="text-xl font-bold">Health & Wellness</h3>
                     <p className="text-gray-500 text-xs leading-relaxed">Full coverage for you and your family. Plus a monthly fitness stipend.</p>
                  </div>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-10 group hover:border-purple-500/50 transition-colors">
                  <Heart className="w-8 h-8 text-purple-400" />
                  <div className="flex flex-col gap-3">
                     <h3 className="text-xl font-bold">Equity Options</h3>
                     <p className="text-gray-500 text-xs leading-relaxed">We want you to own a piece of the future you're building.</p>
                  </div>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-10 group hover:border-pink-500/50 transition-colors">
                  <Rocket className="w-8 h-8 text-pink-400" />
                  <div className="flex flex-col gap-3">
                     <h3 className="text-xl font-bold">Annual Retreats</h3>
                     <p className="text-gray-500 text-xs leading-relaxed">Twice a year we meet somewhere exotic to bond and brainstorm.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 3: The Talent Protocol (Our Process) ── */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 rounded-[4rem] -mt-10 relative z-10">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-20">
               <div className="text-center flex flex-col gap-6">
                  <span className="text-[0.65rem] font-bold tracking-[0.3em] text-blue-600 uppercase">The Protocol</span>
                  <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">How we hire.</h2>
               </div>

               <div className="grid md:grid-cols-4 gap-12">
                  {[
                    { step: '01', title: 'Deep Review', desc: 'We analyze your portfolio and past impact, not just your resume.' },
                    { step: '02', title: 'Cultural Sync', desc: 'A quick chat to see if our missions align and values match.' },
                    { step: '03', title: 'Technical Task', desc: 'A short paid project or technical deep-dive on current work.' },
                    { step: '04', title: 'Executive Call', desc: 'Final sync with the founders to discuss the long-term roadmap.' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-6 relative">
                       <span className="text-5xl font-black text-gray-100 absolute -top-8 -left-4 -z-10">{item.step}</span>
                       <h4 className="text-xl font-bold mt-4">{item.title}</h4>
                       <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                       {i < 3 && <div className="hidden lg:block absolute top-10 -right-8 w-16 h-[1px] bg-gray-200" />}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Section 4: Current Openings ── */}
      <section className="py-32 px-8 lg:px-16">
         <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-4">
               <h2 className="text-3xl font-bold tracking-tight">Open Positions</h2>
               <p className="text-gray-500 text-sm">Join the next generation of builders.</p>
            </div>

            <div className="flex flex-col gap-6">
               {positions && positions.length > 0 ? (
                 positions.map((pos, i) => (
                   <div key={i} className="group grid md:grid-cols-4 items-center p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] hover:border-blue-500/30 transition-all cursor-pointer">
                      <div className="flex flex-col gap-2">
                         <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{pos.dept}</span>
                         <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{pos.title}</h3>
                      </div>
                      <div className="flex flex-col md:items-center">
                         <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Type</span>
                         <span className="text-xs font-bold">{pos.type}</span>
                      </div>
                      <div className="flex flex-col md:items-center">
                         <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Location / Salary</span>
                         <span className="text-xs font-bold">{pos.location} <span className="opacity-30 mx-2">|</span> {pos.salary}</span>
                      </div>
                      <div className="flex justify-end mt-6 md:mt-0">
                         <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                            <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                         </div>
                      </div>
                   </div>
                 ))
               ) : (
                 <div className="p-20 border border-dashed border-white/10 rounded-[2rem] text-center flex flex-col items-center gap-4">
                   <p className="text-gray-500 text-sm">No open positions at the moment. Check back soon!</p>
                 </div>
               )}
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-[3rem] p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Don't see your role?</h3>
                  <p className="text-gray-400 text-sm mb-8 max-w-sm">We're always looking for geniuses, hackers, and visionaries. Send us your work and tell us how you'd level us up.</p>
                  <Link href="/contact" className="px-10 py-4 bg-white text-gray-900 text-sm font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98]">
                     GENERAL APPLICATION
                  </Link>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

