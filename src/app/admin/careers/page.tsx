"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  MapPin, 
  Briefcase, 
  MoreVertical, 
  Edit2, 
  Trash2,
  CheckCircle2,
  XCircle,
  DollarSign,
  Loader2
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function CareersAdmin() {
  const [isAdding, setIsAdding] = useState(false);
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPositions(data);
    }
    setLoading(false);
  };

  const deletePosition = async (id: string) => {
    const { error } = await supabase.from("jobs").delete().eq("id", id);
    if (!error) {
      setPositions(positions.filter(p => p.id !== id));
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
           <h1 className="text-4xl font-black tracking-tight uppercase italic text-white">Careers Manager</h1>
           <p className="text-gray-500 text-sm">Manage open roles and company vacancies.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-8 py-4 bg-white text-gray-900 rounded-2xl text-sm font-bold flex items-center gap-3 hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
        >
           <Plus className="w-4 h-4" />
           Post New Role
        </button>
      </div>

      {/* Roles Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
         {positions.length > 0 ? (
           positions.map((pos) => (
             <div key={pos.id} className="bg-white/5 border border-white/5 rounded-[2.5rem] p-10 flex flex-col gap-8 group hover:border-white/10 transition-all">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${pos.active ? 'text-green-500' : 'text-gray-500'}`}>
                         {pos.active ? "● Active Role" : "○ Draft / Inactive"}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white">{pos.title}</h3>
                   </div>
                   <div className="flex items-center gap-2">
                      <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                         <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deletePosition(pos.id)}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                      >
                         <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="flex items-center gap-4 text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                         <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Department</span>
                         <span className="text-sm font-bold text-gray-300">{pos.dept}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                         <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Location</span>
                         <span className="text-sm font-bold text-gray-300">{pos.location}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                         <DollarSign className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Salary Range</span>
                         <span className="text-sm font-bold text-gray-300">{pos.salary}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                         <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Commitment</span>
                         <span className="text-sm font-bold text-gray-300">{pos.type}</span>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                   <p className="text-[11px] text-gray-500">Posted on {new Date(pos.created_at).toLocaleDateString()}</p>
                   <button className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest">
                      View Applicants (0)
                   </button>
                </div>
             </div>
           ))
         ) : (
           <div className="lg:col-span-2 py-20 border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center gap-6">
              <Briefcase className="w-10 h-10 text-white/10" />
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">No vacancies created yet</span>
           </div>
         )}

         {/* Add New Card as button at the end if not empty */}
         {positions.length > 0 && (
           <button 
             onClick={() => setIsAdding(true)}
             className="border-2 border-dashed border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-6 text-gray-500 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group py-10"
           >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">Add another role</span>
           </button>
         )}
      </div>

      {/* Add Role Modal Placeholder */}
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
           <div className="bg-white rounded-[3rem] w-full max-w-2xl p-12 text-gray-900 animate-in fade-in zoom-in duration-300">
              <div className="flex justify-between items-start mb-12">
                 <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-bold italic">Post Opportunity</h3>
                    <p className="text-gray-500 text-sm">Define the requirements for the new role.</p>
                 </div>
                 <button onClick={() => setIsAdding(false)} className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all">
                    <XCircle className="w-6 h-6 text-gray-300" />
                 </button>
              </div>

              <form className="grid sm:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Job Title</label>
                    <input type="text" placeholder="e.g. Senior Designer" className="w-full bg-gray-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-purple-600 outline-none border-none font-bold" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Department</label>
                    <select className="w-full bg-gray-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-purple-600 outline-none border-none font-bold appearance-none">
                       <option>Engineering</option>
                       <option>Design</option>
                       <option>Marketing</option>
                    </select>
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Salary Range</label>
                    <input type="text" placeholder="e.g. $100k - $120k" className="w-full bg-gray-50 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-purple-600 outline-none border-none font-bold" />
                 </div>
                 <button className="sm:col-span-2 mt-4 w-full bg-gray-900 text-white rounded-2xl py-5 text-sm font-bold shadow-2xl shadow-black/10 hover:bg-gray-800 transition-all active:scale-[0.98]">
                    Publish Vacancy
                 </button>
              </form>
           </div>
        </div>
      )}

    </div>
  );
}
