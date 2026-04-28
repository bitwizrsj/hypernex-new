"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  Settings, 
  LogOut,
  ChevronRight,
  Quote
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Leads", href: "/admin/leads", icon: MessageSquare },
  { label: "Blog Editor", href: "/admin/blog", icon: FileText },
  { label: "Testimonials", href: "/admin/testimonials", icon: Quote },
  { label: "Careers", href: "/admin/careers", icon: Briefcase },
  { label: "Site Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  // Don't show sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] flex text-white font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col pt-10 pb-6 sticky top-0 h-screen bg-[#0b0b0e]">
        
        {/* Branding */}
        <div className="px-6 mb-12 flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={28} height={28} />
          <div className="flex flex-col">
            <span className="text-[13px] font-black uppercase tracking-tighter italic">Hypernex</span>
            <span className="text-[9px] text-purple-500 font-bold tracking-[0.2em] uppercase">Control</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all ${
                  isActive 
                    ? "bg-white text-gray-900 font-bold shadow-lg shadow-white/5" 
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 mt-auto pt-8 border-t border-white/5">
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-bold">Sign Out</span>
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto bg-[#0e0e12]">
        <div className="max-w-[1400px] p-8 lg:p-10">
          {children}
        </div>
      </main>

    </div>
  );
}
