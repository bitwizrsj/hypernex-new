"use client";

import { useEffect, useState } from "react";
import { 
  Users, 
  Eye, 
  MessageSquare, 
  ArrowUpRight, 
  TrendingUp,
  Loader2,
  MousePointerClick,
  Globe,
  Layout
} from "lucide-react";
import Link from "next/link";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { createClient } from "@/lib/supabase/client";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any[]>([]);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);
  const [topPages, setTopPages] = useState<any[]>([]);
  const [topButtons, setTopButtons] = useState<any[]>([]);
  const [referrers, setReferrers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    
    try {
      // 1. Fetch Basic Counts
      const { count: leadsCount } = await supabase.from("leads").select("*", { count: "exact", head: true });
      const { count: viewsCount } = await supabase.from("page_views").select("*", { count: "exact", head: true });
      const { count: clicksCount } = await supabase.from("button_clicks").select("*", { count: "exact", head: true });
      const { count: postsCount } = await supabase.from("posts").select("*", { count: "exact", head: true });

      setStats([
        { label: "Total Views", value: viewsCount?.toLocaleString() || "0", icon: Eye, color: "text-purple-500", bg: "bg-purple-500/10" },
        { label: "Button Clicks", value: clicksCount?.toLocaleString() || "0", icon: MousePointerClick, color: "text-blue-500", bg: "bg-blue-500/10" },
        { label: "Total Leads", value: leadsCount?.toString() || "0", icon: MessageSquare, color: "text-green-500", bg: "bg-green-500/10" },
        { label: "Blog Posts", value: postsCount?.toString() || "0", icon: Layout, color: "text-pink-500", bg: "bg-pink-500/10" },
      ]);

      // 2. Fetch Recent Leads
      const { data: leads } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);
      if (leads) setRecentLeads(leads);

      // 3. Fetch Analytics Data for Chart (Last 7 days)
      const { data: views } = await supabase
        .from("page_views")
        .select("created_at")
        .order("created_at", { ascending: true });

      if (views) {
        const dailyViews = views.reduce((acc: any, curr: any) => {
          const date = new Date(curr.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});
        
        const chartData = Object.entries(dailyViews).map(([name, views]) => ({ name, views }));
        setAnalyticsData(chartData.slice(-7)); // Last 7 days
      }

      // 4. Fetch Top Pages
      const { data: pages } = await supabase.from("page_views").select("path");
      if (pages) {
        const counts = pages.reduce((acc: any, curr: any) => {
          acc[curr.path] = (acc[curr.path] || 0) + 1;
          return acc;
        }, {});
        const top = Object.entries(counts)
          .map(([path, count]) => ({ path, count }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, 5);
        setTopPages(top);
      }

      // 5. Fetch Top Buttons
      const { data: clicks } = await supabase.from("button_clicks").select("button_id");
      if (clicks) {
        const counts = clicks.reduce((acc: any, curr: any) => {
          acc[curr.button_id] = (acc[curr.button_id] || 0) + 1;
          return acc;
        }, {});
        const top = Object.entries(counts)
          .map(([id, count]) => ({ id, count }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, 5);
        setTopButtons(top);
      }

      // 6. Fetch Referrers
      const { data: refs } = await supabase.from("page_views").select("referrer");
      if (refs) {
        const counts = refs.reduce((acc: any, curr: any) => {
          const ref = curr.referrer || 'Direct';
          acc[ref] = (acc[ref] || 0) + 1;
          return acc;
        }, {});
        const top = Object.entries(counts)
          .map(([ref, count]) => ({ ref, count }))
          .sort((a: any, b: any) => b.count - a.count)
          .slice(0, 5);
        setReferrers(top);
      }

    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  const PURPLE_CHART_COLORS = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'];

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-black tracking-tight uppercase italic text-white">System Insights</h1>
        <p className="text-gray-500 text-xs font-medium tracking-wide">Real-time performance and user behavior analytics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] flex flex-col gap-5 hover:border-white/10 transition-all group relative overflow-hidden">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col relative z-10">
              <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">{stat.label}</span>
              <span className="text-3xl font-bold tracking-tight text-white">{stat.value}</span>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-3xl -z-0 translate-x-8 -translate-y-8" />
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        
        {/* Traffic Chart */}
        <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white tracking-tight">Traffic Volume</h3>
              <p className="text-gray-500 text-xs font-medium">Page views over the last 7 days.</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5" />
              Live Tracking
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData}>
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#666" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="#666" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#14141a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#8b5cf6" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Pages (Bar Chart) */}
        <div className="bg-white/5 border border-white/5 p-8 rounded-[2.5rem] flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white tracking-tight">Most Visited</h3>
            <p className="text-gray-500 text-xs font-medium">Top performing pages.</p>
          </div>
          
          <div className="flex-1 flex flex-col gap-6">
            {topPages.map((page, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span className="text-gray-300 font-mono italic">{page.path}</span>
                  <span className="text-purple-400">{page.count} views</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-500 transition-all duration-1000" 
                    style={{ width: `${(page.count / topPages[0].count) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
             <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Top Traffic Sources</h4>
             <div className="flex flex-col gap-4">
                {referrers.map((ref, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="w-3.5 h-3.5 text-gray-600" />
                      <span className="text-[11px] text-gray-400 font-medium truncate max-w-[140px]">{ref.ref}</span>
                    </div>
                    <span className="text-[11px] font-bold text-white">{ref.count}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Button Performance */}
        <div className="bg-white rounded-[2.5rem] p-10 flex flex-col gap-10 text-gray-900 border border-gray-100 shadow-sm">
           <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold">Button Engagement</h3>
              <p className="text-gray-400 text-xs font-medium">Which actions are users taking?</p>
           </div>
           
           <div className="grid grid-cols-1 gap-4">
              {topButtons.map((btn, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-purple-50 hover:border-purple-100 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-purple-600 transition-colors">
                      <MousePointerClick className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold capitalize">{btn.id.replace(/_/g, ' ')}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Action Button</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-black text-gray-900">{btn.count}</span>
                    <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Total Clicks</span>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-[2.5rem] p-10 flex flex-col gap-10 text-gray-900 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
               <h3 className="text-2xl font-bold">Recent Leads</h3>
               <p className="text-gray-400 text-xs font-medium">Direct enquiries from your website.</p>
            </div>
            <Link href="/admin/leads" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
               <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            {recentLeads.map((lead, i) => (
              <div key={lead.id} className="p-6 flex items-center justify-between border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-2xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold uppercase">
                    {lead.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">{lead.name}</span>
                    <span className="text-xs text-gray-400 font-medium">{lead.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${lead.status === 'New' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400'}`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
