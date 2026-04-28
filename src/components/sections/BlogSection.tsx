import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { createClient } from "@/lib/supabase/server";

export default async function BlogSection() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "Published")
    .order("created_at", { ascending: false })
    .limit(3);

  if (!posts || posts.length === 0) return null;
  return (
    <section className="bg-white py-24 px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Layout: Top row for badge/link, Main row for header/cards */}
        <div className="flex flex-col gap-10">
          
          {/* Badge & Link Row */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-gray-500 uppercase">
                Blog
              </span>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-widest text-gray-900 hover:text-indigo-600 transition-colors group">
              View all articles
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Main Content Grid: Heading | Cards */}
          <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
            
            {/* Left Column: Heading */}
            <div>
               <h2 className="text-3xl font-bold leading-tight text-gray-900 pr-8">
                Thoughts, trends<br />and tips
              </h2>
            </div>

            {/* Right Column: Cards Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gray-50 shadow-sm border border-gray-50">
                    {post.image_url && (
                      <Image 
                        src={post.image_url} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-indigo-600">
                      {post.category || "Insight"}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium whitespace-nowrap">
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      <span className="w-0.5 h-0.5 rounded-full bg-gray-200" />
                      <span>{Math.ceil(post.content.length / 1000)} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
