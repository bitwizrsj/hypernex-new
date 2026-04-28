import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image / Visual side */}
          <div className="relative group">
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gray-100 rounded-3xl -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-500" />
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image 
                src="/office.png" 
                alt="Our team working together" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Label - Resized for mobile */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                 <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex -space-x-2 sm:-space-x-3">
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-500 border-2 border-white" />
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500 border-2 border-white" />
                       <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-500 border-2 border-white" />
                    </div>
                    <div>
                       <p className="text-[10px] sm:text-xs font-bold text-gray-900 leading-tight">Trusted by founders</p>
                       <p className="text-[8px] sm:text-[10px] text-gray-500 mt-0.5">Global reach, local expertise</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right: Text side */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-indigo-600 uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900">
                Helping the next generation of founders build the future
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed lg:max-w-xl">
              We are the leading USA based startup who provides the best digital service to our clients and we are specialized in helping others to setup their startup. Our mission is to bridge the gap between abstract ideas and market-ready products.
            </p>

            {/* Bullet points for more premium feel */}
            <div className="grid sm:grid-cols-2 gap-6 mt-2">
               <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                     <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-gray-900 mb-1">USA Based Startup</h4>
                     <p className="text-[11px] text-gray-500">Operating out of the tech hubs.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                     <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-gray-900 mb-1">Startup Specialists</h4>
                     <p className="text-[11px] text-gray-500">Scale from 0 to 1 with us.</p>
                  </div>
               </div>
            </div>

            <div className="inline-flex items-center gap-4 group cursor-pointer w-fit mt-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 group-hover:bg-white" />
              </div>
              <span className="text-sm font-bold text-gray-900">Join our story</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
