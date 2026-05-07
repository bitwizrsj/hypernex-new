"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    const { error: submitError } = await supabase.from("leads").insert([data]);

    if (submitError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#f6f6fb] min-h-screen">
      <Navbar />

      {/* Subpage Hero */}
      <section className="relative pt-40 sm:pt-48 pb-20 sm:pb-32 px-6 sm:px-10 lg:px-16 bg-[#0b0b0e] overflow-hidden">
        {/* BG Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-6 block animate-in fade-in slide-in-from-bottom-2 duration-700">
            Get in touch
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Let's build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">remarkable</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700">
            Ready to start your next project? Or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 -mt-12 relative z-20">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12">
               
               {/* Left Column: Info */}
               <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl flex flex-col gap-10 sm:gap-12">
                  <div className="flex flex-col gap-6 sm:gap-8">
                     <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Information</h2>
                     <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Our team is available to discuss your project and answer any questions you may have.</p>
                  </div>

                  <div className="flex flex-col gap-8">
                     {settings.email && (
                       <div className="flex items-center gap-5 sm:gap-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                             <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div className="overflow-hidden">
                             <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Email us</p>
                             <p className="text-xs sm:text-sm font-bold text-gray-900 break-words">{settings.email}</p>
                          </div>
                       </div>
                     )}
                     {settings.phone && (
                       <div className="flex items-center gap-5 sm:gap-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                             <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                             <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Call us</p>
                             <p className="text-xs sm:text-sm font-bold text-gray-900">{settings.phone}</p>
                          </div>
                       </div>
                     )}
                     {settings.address && (
                       <div className="flex items-center gap-5 sm:gap-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 flex-shrink-0">
                             <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <div>
                             <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">Visit us</p>
                             <p className="text-xs sm:text-sm font-bold text-gray-900 whitespace-pre-line leading-relaxed">{settings.address}</p>
                          </div>
                       </div>
                     )}
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100 italic text-gray-400 text-[10px] sm:text-xs text-center leading-relaxed">
                     "The first step to building something great is starting a conversation."
                  </div>
               </div>

               {/* Right Column: Form */}
               <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                  {submitted ? (
                     <div className="flex flex-col items-center justify-center text-center gap-6 py-20 animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                           <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <div className="flex flex-col gap-2">
                           <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                           <p className="text-gray-500 text-sm max-w-xs">We'll review your enquiry and get back to you within 24 hours.</p>
                        </div>
                        <button 
                           onClick={() => setSubmitted(false)}
                           className="text-indigo-600 font-bold text-xs uppercase tracking-widest hover:underline"
                        >
                           Send another message
                        </button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                           <div className="flex flex-col gap-2.5">
                              <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Full Name</label>
                              <input 
                                 name="name"
                                 type="text" 
                                 placeholder="John Doe" 
                                 required
                                 className="w-full bg-[#f6f6fb] border-none rounded-2xl px-6 py-4 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-indigo-600 transition-all font-medium outline-none" 
                              />
                           </div>
                           <div className="flex flex-col gap-2.5">
                              <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Email Address</label>
                              <input 
                                 name="email"
                                 type="email" 
                                 placeholder="john@example.com" 
                                 required
                                 className="w-full bg-[#f6f6fb] border-none rounded-2xl px-6 py-4 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-indigo-600 transition-all font-medium outline-none" 
                              />
                           </div>
                        </div>
                        
                        <div className="flex flex-col gap-2.5">
                           <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Subject</label>
                           <div className="relative">
                              <select 
                                 name="service"
                                 required
                                 className="w-full bg-[#f6f6fb] border-none rounded-2xl px-6 py-4 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-indigo-600 transition-all font-medium outline-none appearance-none cursor-pointer"
                              >
                                 <option value="" className="text-gray-900">Select a service</option>
                                 <option value="UI/UX Design" className="text-gray-900">UI/UX Design</option>
                                 <option value="Fullstack Development" className="text-gray-900">Fullstack Development</option>
                                 <option value="Digital Strategy" className="text-gray-900">Digital Strategy</option>
                                 <option value="AI & Automation" className="text-gray-900">AI & Automation</option>
                                 <option value="Product Strategy" className="text-gray-900">Product Strategy</option>
                                 <option value="Security & DevOps" className="text-gray-900">Security & DevOps</option>
                                 <option value="Staff Augmentation" className="text-gray-900">Staff Augmentation</option>
                              </select>
                              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                                 <Send className="w-3.5 h-3.5 rotate-90" />
                              </div>
                           </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                           <label className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Message</label>
                           <textarea 
                              name="message"
                              rows={5} 
                              placeholder="Tell us about your project..." 
                              required
                              className="w-full bg-[#f6f6fb] border-none rounded-2xl px-6 py-4 text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-indigo-600 transition-all font-medium resize-none outline-none shadow-inner"
                           ></textarea>
                        </div>

                        {error && (
                           <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">{error}</p>
                        )}

                        <button 
                           type="submit"
                           disabled={loading}
                           className="w-full bg-gray-900 text-white rounded-2xl py-4 sm:py-5 text-xs sm:text-sm font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all group shadow-xl shadow-gray-900/10 active:scale-[0.98] disabled:opacity-50"
                        >
                           {loading ? (
                              <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                           ) : (
                              <>
                                 Send Message
                                 <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                           )}
                        </button>
                     </form>
                  )}
               </div>

            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
