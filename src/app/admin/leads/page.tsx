"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Trash2, 
  CheckCircle2, 
  Clock,
  ArrowUpDown,
  Loader2,
  MessageSquare
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLead, setActiveLead] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLeads(data);
      if (data.length > 0) setActiveLead(data[0]);
    }
    setLoading(false);
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (!error) {
      const updated = leads.filter(l => l.id !== id);
      setLeads(updated);
      setActiveLead(updated[0] || null);
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
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-1.5 text-white">
           <h1 className="text-2xl font-black tracking-tight uppercase italic font-sans">Leads & Enquiries</h1>
           <p className="text-gray-500 text-[11px] font-medium tracking-wide">Manage incoming requests and transition them into projects.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-6 text-xs text-white focus:ring-1 focus:ring-white/20 outline-none w-64"
              />
           </div>
           <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <Filter className="w-4 h-4 text-gray-500" />
           </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
        
        {/* Leads List */}
        <div className="flex flex-col gap-3">
           {leads.length > 0 ? (
             leads.map((lead) => (
               <button 
                 key={lead.id}
                 onClick={() => setActiveLead(lead)}
                 className={`p-5 border rounded-2xl text-left transition-all ${
                   activeLead?.id === lead.id 
                    ? "bg-white border-white shadow-2xl shadow-indigo-500/10" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                 }`}
               >
                  <div className="flex flex-col gap-3">
                     <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                           <span className={`text-xs font-bold leading-tight ${activeLead?.id === lead.id ? 'text-gray-900' : 'text-white'}`}>{lead.name}</span>
                           <span className="text-[10px] text-gray-500 font-medium truncate max-w-[150px]">{lead.email}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${
                          lead.status === 'New' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 
                          lead.status === 'Read' ? 'bg-purple-500/20 text-purple-400' : 
                          'bg-gray-500/20 text-gray-500'
                        }`}>
                           {lead.status}
                        </span>
                     </div>
                     <div className="flex items-center gap-3 text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none">
                        <div className="flex items-center gap-1.5">
                           <CheckCircle2 className={`w-3 h-3 ${activeLead?.id === lead.id ? 'text-indigo-600' : 'text-indigo-400'}`} />
                           {lead.service}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-500/30" />
                        <div className="flex items-center gap-1.5">
                           <Clock className="w-3 h-3" />
                           {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                     </div>
                  </div>
               </button>
             ))
           ) : (
             <div className="p-10 border border-dashed border-white/10 rounded-2xl text-center flex flex-col items-center gap-4">
                <MessageSquare className="w-8 h-8 text-white/5" />
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">No enquiries yet</p>
             </div>
           )}
        </div>

        {/* Message Viewer */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col gap-8 text-gray-900 shadow-xl overflow-hidden relative border border-white">
           {activeLead ? (
             <>
               <div className="flex justify-between items-start">
                  <div className="flex items-center gap-5">
                     <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-400 border border-gray-200 uppercase">
                        {activeLead.name.split(' ').map((n: string) => n[0]).join('')}
                     </div>
                     <div className="flex flex-col">
                        <h2 className="text-xl font-bold tracking-tight">{activeLead.name}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-500 uppercase font-black tracking-widest mt-0.5">
                           <span className="text-indigo-600">{activeLead.email}</span>
                           <span className="w-1 h-1 rounded-full bg-gray-300" />
                           <span>{activeLead.service}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <button 
                       onClick={() => deleteLead(activeLead.id)}
                       className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all"
                     >
                        <Trash2 className="w-4 h-4" />
                     </button>
                     <button className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-all">
                        <MoreVertical className="w-4 h-4" />
                     </button>
                  </div>
               </div>

               <div className="flex flex-col gap-6 py-8 border-y border-gray-100">
                  <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">Enquiry Message</span>
                  <div className="bg-[#f6f6fb] rounded-2xl p-6 text-[13px] leading-relaxed text-gray-700 italic font-medium whitespace-pre-line border border-gray-100">
                     "{activeLead.message}"
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em]">Quick Actions</span>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-100 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all text-gray-700">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        Draft Reply
                     </button>
                     <button className="flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-900 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-gray-200 hover:bg-black transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Resolve
                     </button>
                  </div>
               </div>
             </>
           ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-32">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                   <MessageSquare className="w-6 h-6 text-gray-200" />
                </div>
                <div className="flex flex-col gap-1">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Select a Lead</h3>
                   <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Pick an enquiry from the list</p>
                </div>
             </div>
           )}
        </div>

      </div>

    </div>
  );
}

