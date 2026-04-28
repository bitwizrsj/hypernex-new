import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "Published")
    .order("created_at", { ascending: false });

  const featuredPost = posts && posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts && posts.length > 1 ? posts.slice(1) : [];

  return (
    <main className="bg-white">
      <Navbar />
      {/* Subpage Hero */}
      <div className="relative pt-48 pb-32 px-8 lg:px-16 overflow-hidden bg-[#0b0b0e]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-40" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="text-[0.65rem] font-black tracking-[0.3em] text-gray-400 uppercase mb-8 block text-center">
            Hypernex Journal
          </span>
          <h1 className="text-4xl lg:text-8xl font-black text-white mb-12 tracking-tighter text-center uppercase italic">
            THE BLOG
          </h1>
          
          <div className="max-w-xl mx-auto relative">
             <input 
                type="text" 
                placeholder="Search articles, design, tech..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
             />
             <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      <section className="py-24 px-8 lg:px-16">
         <div className="max-w-[1400px] mx-auto">
            
            {!featuredPost ? (
              <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-[3rem]">
                <p className="text-gray-400 font-medium">No articles published yet. Stay tuned!</p>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                <Link href={`/blog/${featuredPost.slug}`} className="group relative block mb-24">
                   <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#f6f6fb] rounded-[3rem] p-8 lg:p-12 overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl bg-gray-200">
                         {featuredPost.image_url && (
                           <Image src={featuredPost.image_url} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                         )}
                      </div>
                      <div className="flex flex-col gap-6 lg:pl-4">
                         <span className="text-[0.65rem] font-black uppercase tracking-widest text-indigo-600">Featured Post</span>
                         <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {featuredPost.title}
                         </h2>
                         <p className="text-gray-500 text-sm leading-relaxed max-w-md line-clamp-3">
                            {featuredPost.content.substring(0, 160)}...
                         </p>
                         <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mt-2">
                            <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                            <span>{Math.ceil(featuredPost.content.length / 1000)} min read</span>
                         </div>
                      </div>
                   </div>
                </Link>

                {/* Grid for the rest */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                   {remainingPosts.map((post, i) => (
                     <Link key={i} href={`/blog/${post.slug}`} className="group flex flex-col gap-8 bg-white border border-gray-100 p-8 rounded-[2.5rem] hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/5 transition-all">
                        <div className="relative aspect-[16/8] rounded-[1.5rem] overflow-hidden bg-gray-100">
                           {post.image_url && (
                             <Image src={post.image_url} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                           )}
                        </div>
                        <div className="flex flex-col gap-4">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Article</span>
                              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{Math.ceil(post.content.length / 1000)} min read</span>
                           </div>
                           <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">{post.title}</h3>
                           <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mt-4 group/btn">
                              Read Full Article <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                           </div>
                        </div>
                     </Link>
                   ))}
                </div>
              </>
            )}

         </div>
      </section>

      {/* Newsletter */}
      <section className="pb-32 px-8 lg:px-16">
         <div className="max-w-[1400px] mx-auto">
            <div className="bg-[#0b0b0e] rounded-[3rem] p-16 flex flex-col items-center text-center gap-10 overflow-hidden relative border border-white/5 shadow-2xl">
               <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-transparent">_</div>
               <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tighter">Everything but the noise.</h3>
               <p className="text-gray-400 text-sm max-w-md">Join 5,000+ founders and engineers receiving our curated selection of tech insights every Tuesday.</p>
               <div className="flex w-full max-w-md gap-3 bg-white/5 border border-white/10 p-2 rounded-2xl">
                  <input type="email" placeholder="you@company.com" className="flex-1 bg-transparent border-none px-4 py-3 text-white text-sm focus:ring-0" />
                  <button className="px-8 py-3 bg-white text-gray-900 text-sm font-black rounded-xl hover:bg-purple-500 hover:text-white transition-all">SIGN UP</button>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

