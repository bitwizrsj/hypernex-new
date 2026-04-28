import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Code2, 
  Palette, 
  LineChart, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Cpu,
  Monitor,
  Shield
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-[#0b0b0e] text-white overflow-hidden">
      <Navbar />

      {/* ── Section 1: Blueprint Hero ── */}
      <section className="relative pt-64 pb-32 px-8 lg:px-16 border-b border-white/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-[1400px] mx-auto flex flex-col gap-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-3xl">
             <span className="text-[0.65rem] font-black tracking-[0.4em] text-indigo-400 uppercase">Our Capabilities</span>
             <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none">
                BUILDING THE <br />
                <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Infrastructure</span> <br />
                OF IMPACT
             </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between">
             <p className="text-gray-500 text-sm lg:text-base max-w-sm leading-relaxed">
                We combine technical rigor with artistic intuition to create products that don't just work—they flourish.
             </p>
             <div className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                   <span className="text-2xl font-bold">100%</span>
                   <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">In-House Build</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col gap-1">
                   <span className="text-2xl font-bold">24/7</span>
                   <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Global Support</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Deep Dives (Alternating) ── */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-40">
          
          {/* Service 01: Product Design */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                   <span className="text-indigo-500 font-mono text-xs">01 // VISUAL SYSTEMS</span>
                   <h2 className="text-4xl font-bold tracking-tight">World-class UI/UX and Brand Experience.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      We design for conversion and emotional resonance. Our team creates cohesive visual languages that scale across platforms.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['User Experience', 'Prototyping', 'Design Systems', 'Motion Design'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 group">
                <Image src="/project1.png" alt="Design showcase" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
             </div>
          </div>

          {/* Service 02: Engineering */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 order-2 lg:order-1 group">
                <Image src="/project2.png" alt="Tech showcase" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
             </div>
             <div className="flex flex-col gap-10 order-1 lg:order-2 lg:pl-10">
                <div className="flex flex-col gap-6">
                   <span className="text-blue-400 font-mono text-xs">02 // SCALEABLE TECH</span>
                   <h2 className="text-4xl font-bold tracking-tight">High-performance Fullstack Development.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      Blazing fast Next.js applications, robust APIs, and cloud-native infrastructure built to handle millions of requests.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['Next.js / React', 'SaaS Architecture', 'Cloud Services', 'Security First'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Service 03: Growth */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                   <span className="text-purple-500 font-mono text-xs">03 // MARKET DOMINANCE</span>
                   <h2 className="text-4xl font-bold tracking-tight">Digital Strategy and Growth Ops.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      We don't just build; we scale. Our data-driven approach to SEO and paid media ensures your product finds its perfect audience.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['SEO Ecosystems', 'Paid Performance', 'Content Ops', 'Conversion Hubs'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 group">
                <Image src="/project3.png" alt="Growth showcase" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
             </div>
          </div>

          {/* Service 04: AI & Automation */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 order-2 lg:order-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                   <Cpu className="w-32 h-32 text-teal-400/20 group-hover:scale-110 transition-transform duration-1000" />
                </div>
             </div>
             <div className="flex flex-col gap-10 order-1 lg:order-2 lg:pl-10">
                <div className="flex flex-col gap-6">
                   <span className="text-teal-400 font-mono text-xs">04 // INTELLIGENT SYSTEMS</span>
                   <h2 className="text-4xl font-bold tracking-tight">AI & Workflow Automation.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      We integrate generative AI and custom LLMs into your existing workflows to multiply efficiency and create unique user experiences.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['LLM Integration', 'Custom GPTs', 'Workflow Bots', 'AI Chat UI'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Service 05: Product Management */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                   <span className="text-orange-400 font-mono text-xs">05 // PRODUCT LEADERSHIP</span>
                   <h2 className="text-4xl font-bold tracking-tight">Product Strategy & MVP Scoping.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      We help you navigate the complex journey from idea to market. Our managers ensure every feature built serves a business objective.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['Market Fit', 'Roadmap Planning', 'Agile Delivery', 'Feature Scoping'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 flex items-center justify-center">
                   <Layers className="w-32 h-32 text-orange-400/20 group-hover:rotate-12 transition-transform duration-1000" />
                </div>
             </div>
          </div>

          {/* Service 06: Security & DevOps */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 order-2 lg:order-1 group">
                <div className="absolute inset-0 bg-gradient-to-bl from-red-500/20 to-purple-500/20 flex items-center justify-center">
                   <Shield className="w-32 h-32 text-red-400/20 group-hover:scale-95 transition-transform duration-1000" />
                </div>
             </div>
             <div className="flex flex-col gap-10 order-1 lg:order-2 lg:pl-10">
                <div className="flex flex-col gap-6">
                   <span className="text-red-400 font-mono text-xs">06 // FORTRESS OPS</span>
                   <h2 className="text-4xl font-bold tracking-tight">Enterprise Security & DevOps.</h2>
                   <p className="text-gray-500 text-sm leading-relaxed">
                      Infrastructure that doesn't just scale—it's impenetrable. We handle SOC2 compliance, CI/CD pipelines, and cloud security.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   {['SOC2 Compliance', 'Auto-scaling', 'Cyber Security', 'Cloud Migration'].map(item => (
                     <div key={item} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover:scale-150 transition-transform" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* ── Section 3: The Tech Stack ── */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 rounded-t-[4rem]">
         <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
            <div className="text-center flex flex-col gap-4">
               <span className="text-[0.65rem] font-bold tracking-[0.3em] text-indigo-600 uppercase">Engine Room</span>
               <h2 className="text-4xl font-black tracking-tight">Our Core Tech Stack</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
               {[
                 { name: 'Architecture', icon: Layers },
                 { name: 'Frontend', icon: Monitor },
                 { name: 'Backend', icon: Database },
                 { name: 'Logic', icon: Code2 },
                 { name: 'Deployment', icon: Cpu },
                 { name: 'Optimization', icon: LineChart }
               ].map((stack, i) => (
                 <div key={i} className="group p-8 border border-gray-100 rounded-3xl flex flex-col items-center gap-4 hover:bg-gray-900 hover:text-white transition-all duration-500">
                    <stack.icon className="w-8 h-8 text-indigo-600 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{stack.name}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ── Section 4: Engagement Models ── */}
      <section className="py-32 px-8 lg:px-16 bg-white text-gray-900 border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
            <div className="flex flex-col gap-6 max-w-xl">
               <h2 className="text-3xl font-bold tracking-tight">How we partner.</h2>
               <p className="text-gray-500 text-sm">Flexible models designed to fit your startup's stage and velocity.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
               <div className="p-12 rounded-[2.5rem] bg-[#f6f6fb] flex flex-col gap-10 group hover:shadow-2xl transition-all duration-500">
                  <div className="flex justify-between items-start">
                     <h3 className="text-2xl font-bold">Fixed Project</h3>
                     <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase">Phase Based</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Perfect for defined scopes like MVP launches, rebranding, or specific technical builds. Clear timelines and costs.</p>
                  <Link href="/contact" className="flex items-center gap-2 group/btn font-bold text-sm">
                     Explore pricing <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
               </div>
               
               <div className="p-12 rounded-[2.5rem] bg-[#f6f6fb] flex flex-col gap-10 group hover:shadow-2xl transition-all duration-500">
                  <div className="flex justify-between items-start">
                     <h3 className="text-2xl font-bold">Dedicated Squad</h3>
                     <span className="px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase">Monthly Retainer</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Integrated design & dev team dedicated to your product's continuous growth and iteration. Best for funded startups.</p>
                  <Link href="/contact" className="flex items-center gap-2 group/btn font-bold text-sm">
                     View retainers <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
