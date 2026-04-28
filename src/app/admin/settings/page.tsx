"use client";

import { useState, useEffect } from "react";
import { 
  Save, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Loader2,
  CheckCircle2,
  Globe
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// Custom Social Icons to bypass lucide-react import issues
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const SETTING_KEYS = [
  { id: "email", label: "Business Email", icon: Mail, placeholder: "info@hypernex.com" },
  { id: "phone", label: "Phone Number", icon: Phone, placeholder: "+1 (555) 000-0000" },
  { id: "address", label: "Physical Address", icon: MapPin, placeholder: "Sheridan, WY, USA" },
  { id: "instagram", label: "Instagram URL", icon: Instagram, placeholder: "https://instagram.com/..." },
  { id: "linkedin", label: "LinkedIn URL", icon: Linkedin, placeholder: "https://linkedin.com/company/..." },
  { id: "facebook", label: "Facebook URL", icon: Facebook, placeholder: "https://facebook.com/..." },
  { id: "twitter", label: "X (Twitter) URL", icon: Twitter, placeholder: "https://x.com/..." },
  { id: "whatsapp", label: "WhatsApp Number", icon: MessageSquare, placeholder: "+1..." },
  { id: "website_url", label: "Website URL", icon: Globe, placeholder: "https://hypernex.com" },
];

export default function SettingsAdmin() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  const supabase = createClient();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("settings").select("*");
    if (!error && data) {
      const settingsMap = data.reduce((acc: any, curr: any) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {});
      setSettings(settingsMap);
    }
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus("idle");

    const upsertData = Object.entries(settings).map(([key, value]) => ({
      key,
      value: value || ""
    }));

    const { error } = await supabase
      .from("settings")
      .upsert(upsertData, { onConflict: 'key' });

    if (!error) {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 max-w-4xl">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
         <h1 className="text-4xl font-black tracking-tight uppercase italic text-white">Site Settings</h1>
         <p className="text-gray-500 text-sm">Configure your contact information and social links.</p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-8 bg-white/5 border border-white/5 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] -z-10" />
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {SETTING_KEYS.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </label>
              <input 
                type="text"
                value={settings[item.id] || ""}
                onChange={(e) => setSettings({...settings, [item.id]: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-purple-500/50 outline-none transition-all placeholder:text-gray-700"
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-4">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest italic max-w-xs leading-relaxed">
            * Blank fields will be automatically hidden from the website (Footer, Navbar, etc.)
          </p>
          
          <button 
            type="submit"
            disabled={saving}
            className={`px-10 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 transition-all shadow-2xl ${
              status === 'success' 
                ? "bg-green-500 text-white" 
                : "bg-white text-gray-900 hover:bg-purple-500 hover:text-white"
            }`}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : status === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving Changes..." : status === 'success' ? "All Saved!" : "Save Configuration"}
          </button>
        </div>
      </form>

    </div>
  );
}
