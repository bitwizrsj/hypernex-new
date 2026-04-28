"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Plus, 
  Search, 
  LayoutGrid, 
  List, 
  MoreVertical, 
  Edit, 
  Eye, 
  Trash2,
  Image as ImageIcon,
  Clock,
  ExternalLink,
  Loader2
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function BlogEditor() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const deletePost = async (id: string) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (!error) {
      setPosts(posts.filter(p => p.id !== id));
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
           <h1 className="text-4xl font-black tracking-tight uppercase italic text-white">Blog CMS</h1>
           <p className="text-gray-500 text-sm">Write, edit and publish Hypernex insights.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex p-1 bg-white/5 border border-white/5 rounded-2xl">
              <button 
                onClick={() => setView('grid')}
                className={`p-2.5 rounded-xl transition-all ${view === 'grid' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-white'}`}
              >
                 <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-2.5 rounded-xl transition-all ${view === 'list' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-white'}`}
              >
                 <List className="w-5 h-5" />
              </button>
           </div>
           <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl text-sm font-bold flex items-center gap-3 hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-black/10">
              <Plus className="w-4 h-4" />
              New Insight
           </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
         {posts.length > 0 ? (
           posts.map((post, i) => (
             <div key={post.id} className="group bg-white/5 border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-8 hover:border-white/10 transition-all relative overflow-hidden">
                <div className="relative aspect-[16/10] bg-black rounded-3xl overflow-hidden border border-white/5">
                   {post.image_url ? (
                     <Image src={post.image_url} alt={post.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                        <ImageIcon className="w-12 h-12 text-white" />
                     </div>
                   )}
                   <div className="absolute top-4 left-4">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${post.status === 'Published' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
                         {post.status}
                      </span>
                   </div>
                </div>

                <div className="flex flex-col gap-5">
                   <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold tracking-tight leading-snug text-white group-hover:text-purple-400 transition-colors line-clamp-2">{post.title}</h3>
                      <div className="flex items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                         <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {new Date(post.created_at).toLocaleDateString()}</span>
                         <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> 0</span>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-2">
                         <Edit className="w-3.5 h-3.5" />
                         Edit
                      </button>
                      <button 
                        onClick={() => deletePost(post.id)}
                        className="px-4 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                         <Trash2 className="w-3.5 h-3.5" />
                         Delete
                      </button>
                   </div>
                </div>
             </div>
           ))
         ) : (
            <div className="lg:col-span-3 py-20 border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center gap-6">
                <ImageIcon className="w-10 h-10 text-white/10" />
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">No articles created yet</span>
            </div>
         )}

         {/* Add New Card */}
         {posts.length > 0 && (
           <button className="border-2 border-dashed border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-6 text-gray-500 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group min-h-[350px]">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Plus className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">New Insight</span>
                 <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">Share a new perspective</p>
              </div>
           </button>
         )}
      </div>

    </div>
  );
}

