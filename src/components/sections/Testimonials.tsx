"use client";
import { ChevronLeft, ChevronRight, Quote, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTestimonials(data);
      }
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  if (loading) {
    return (
      <section className="bg-[#0b0b0e] py-24 px-8 lg:px-16 overflow-hidden flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#0b0b0e] py-24 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-center">
          
          {/* Left Side: Info & Controls */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-gray-400 uppercase">
                  What Clients Say
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-white pr-4">
                Trusted by teams<br />around the world
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side: Carousel Display */}
          <div className="relative">
            <div className="relative h-[300px] sm:h-[260px] flex items-center">
              {testimonials.map((t, i) => (
                <div 
                  key={t.id || i} 
                  className={`absolute inset-0 transition-all duration-700 ease-in-out bg-[#14141a] border border-white/5 p-10 rounded-[2.5rem] flex flex-col gap-8 shadow-2xl ${
                    i === current ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-32 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="absolute top-8 right-10 opacity-10">
                    <Quote className="w-12 h-12 text-purple-500" />
                  </div>
                  
                  <p className="text-gray-300 text-lg lg:text-xl font-medium leading-relaxed italic max-w-2xl">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/5 grayscale hover:grayscale-0 transition-all duration-300">
                      {t.avatar ? (
                        <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold uppercase">
                          {t.author.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.author}</h4>
                      <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold font-mono">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots */}
            {testimonials.length > 1 && (
              <div className="flex gap-3 mt-10 ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current ? "w-8 bg-purple-500" : "w-1.5 bg-white/10"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
