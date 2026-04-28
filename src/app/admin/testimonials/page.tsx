"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Plus, 
  Trash2,
  Quote,
  Loader2,
  X,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    quote: "",
    author: "",
    role: "",
    avatar: ""
  });
  const [saving, setSaving] = useState(false);
  
  const supabase = createClient();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setTestimonials(data);
    }
    setLoading(false);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    const { data, error } = await supabase
      .from("testimonials")
      .insert([formData])
      .select();

    if (!error && data) {
      setTestimonials([data[0], ...testimonials]);
      setIsAdding(false);
      setFormData({ quote: "", author: "", role: "", avatar: "" });
    }
    setSaving(false);
  };

  const deleteTestimonial = async (id: string) => {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (!error) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-2">
           <h1 className="text-4xl font-black tracking-tight uppercase italic text-white">Testimonials CMS</h1>
           <p className="text-gray-500 text-sm">Manage client feedback and social proof.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-8 py-4 bg-white text-gray-900 rounded-2xl text-sm font-bold flex items-center gap-3 hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-black/10"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {/* Add Form Overlay */}
      {isAdding && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsAdding(false)} />
          <div className="relative w-full max-w-xl bg-[#14141a] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] -z-10" />
            
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white tracking-tight">New Testimonial</h2>
              <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-white/5 rounded-xl text-gray-500 hover:text-white transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Client Quote</label>
                <textarea 
                  required
                  value={formData.quote}
                  onChange={(e) => setFormData({...formData, quote: e.target.value})}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white text-sm focus:border-purple-500/50 outline-none transition-all h-32 resize-none"
                  placeholder="Paste the testimonial here..."
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Author Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                    placeholder="e.g. Sarah Johnson"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Role / Company</label>
                  <input 
                    required
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                    placeholder="e.g. CEO at TechCorp"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Avatar URL (Optional)</label>
                <input 
                  type="text"
                  value={formData.avatar}
                  onChange={(e) => setFormData({...formData, avatar: e.target.value})}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white text-sm focus:border-purple-500/50 outline-none transition-all"
                  placeholder="https://..."
                />
              </div>

              <button 
                type="submit" 
                disabled={saving}
                className="w-full py-5 bg-white text-gray-900 rounded-2xl font-bold hover:bg-purple-500 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                {saving ? "Publishing..." : "Save Testimonial"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Testimonials List */}
      <div className="grid lg:grid-cols-2 gap-8">
         {testimonials.length > 0 ? (
           testimonials.map((t) => (
             <div key={t.id} className="group bg-white/5 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-8 hover:border-white/10 transition-all relative">
                <div className="absolute top-10 right-10 opacity-5">
                   <Quote className="w-16 h-16 text-purple-500" />
                </div>
                
                <p className="text-gray-300 text-base font-medium leading-relaxed italic max-w-xl">
                   "{t.quote}"
                </p>

                <div className="flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/5 grayscale group-hover:grayscale-0 transition-all">
                         {t.avatar ? (
                           <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                         ) : (
                           <div className="w-full h-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold text-sm">
                             {t.author.charAt(0)}
                           </div>
                         )}
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm">{t.author}</h4>
                         <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                      </div>
                   </div>

                   <button 
                     onClick={() => deleteTestimonial(t.id)}
                     className="p-4 bg-white/5 text-gray-500 hover:bg-red-500/10 hover:text-red-500 rounded-2xl transition-all"
                     title="Delete"
                   >
                      <Trash2 className="w-5 h-5" />
                   </button>
                </div>
             </div>
           ))
         ) : (
            <div className="lg:col-span-2 py-32 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                  <Quote className="w-10 h-10 text-white/10" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Your voice is silent</span>
                  <p className="text-gray-600 text-sm italic">Add your first testimonial to build trust.</p>
                </div>
            </div>
         )}
      </div>

    </div>
  );
}
