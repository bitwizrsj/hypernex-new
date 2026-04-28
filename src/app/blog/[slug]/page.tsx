import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Globe, Mail } from "lucide-react";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export async function generateStaticParams() {
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data: posts } = await supabase.from("posts").select("slug");
  return posts?.map((post) => ({ slug: post.slug })) || [];
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const supabase = await createClient();
  
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) {
    notFound();
  }

  // Fetch related posts
  const { data: relatedPosts } = await supabase
    .from("posts")
    .select("*")
    .neq("id", post.id)
    .eq("status", "Published")
    .limit(2);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Article Header */}
      <header className="relative pt-48 pb-20 px-8 lg:px-16 bg-[#0b0b0e] overflow-hidden">
        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col gap-10">
          <Link href="/blog" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-gray-500 hover:text-white transition-colors group w-fit">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to blog
          </Link>
          
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-black uppercase text-purple-400 tracking-widest">
                   Article
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                   <Clock className="w-3 h-3" /> {Math.ceil(post.content.length / 1000)} min read
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                   <Calendar className="w-3 h-3" /> {new Date(post.created_at).toLocaleDateString()}
                </div>
             </div>
             
             <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
                {post.title}
             </h1>
          </div>
        </div>

        {/* Backdrop Ambient Light */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </header>

      {/* Featured Image */}
      <div className="px-8 lg:px-16 -mt-10 relative z-20">
         <div className="max-w-[1000px] mx-auto">
            <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
               {post.image_url && (
                 <Image src={post.image_url} alt={post.title} fill className="object-cover" priority />
               )}
            </div>
         </div>
      </div>

      {/* Article Content */}
      <article className="py-24 px-8 lg:px-16">
         <div className="max-w-[1200px] mx-auto">
            
            <div className="grid lg:grid-cols-[1fr_300px] gap-24">
               {/* Main Body */}
               <div className="flex flex-col gap-10">
                  <div 
                    className="blog-content text-gray-700 text-lg leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags / Footer */}
                  <div className="pt-12 border-t border-gray-100 flex flex-wrap items-center justify-between mt-12 gap-8">
                     <div className="flex gap-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">Insights</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hypernex</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Share</span>
                        <div className="flex gap-2">
                           <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                              <Globe className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                              <Mail className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                              <Share2 className="w-3.5 h-3.5" />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Sidebar */}
               <div className="hidden lg:flex flex-col gap-8">
                  <div className="sticky top-32 flex flex-col gap-6">
                     <div className="p-6 bg-[#f6f6fb] rounded-2xl flex flex-col gap-4">
                        <h4 className="text-xs font-black uppercase text-gray-900 tracking-widest">About the Studio</h4>
                        <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                           Hypernex Technologies is a boutique digital agency specialized in building high-performance startups.
                        </p>
                        <Link href="/contact" className="text-[10px] font-bold text-indigo-600 underline uppercase tracking-widest">Work with us</Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </article>

      {/* More Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-24 px-8 lg:px-16 bg-[#f6f6fb] border-t border-gray-100">
           <div className="max-w-[1000px] mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-12">Related Conversations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                 {relatedPosts.map((p, i) => (
                   <Link key={i} href={`/blog/${p.slug}`} className="bg-white p-8 rounded-3xl border border-transparent shadow-sm hover:border-indigo-600/20 hover:shadow-xl transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-4">Insight</span>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{p.title}</h4>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                         Read more <ArrowLeft className="w-3 h-3 rotate-180" />
                      </span>
                   </Link>
                 ))}
              </div>
           </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

