"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  Rocket 
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "We learn about your business, goals and challenges.",
    icon: Search,
  },
  {
    id: "02",
    title: "Strategize",
    desc: "We craft a tailored strategy and clear plan.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Design & Build",
    desc: "We design and develop beautiful, scalable solutions.",
    icon: PenTool,
  },
  {
    id: "04",
    title: "Launch & Grow",
    desc: "We launch, optimize and help you grow constantly.",
    icon: Rocket,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  // Smooth out the progress value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="bg-white py-24 px-8 lg:px-16 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
          
          {/* Left: Heading */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-gray-500 uppercase">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 pr-4">
              A proven process<br />to deliver results
            </h2>
          </div>

          {/* Right: Process Steps */}
          <div className="relative">
             {/* Desktop Connection Line Background */}
             <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-100 -z-0 hidden lg:block" />
             
             {/* Animated Progress Line (Desktop) */}
             <motion.div 
               className="absolute top-8 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-500 shadow-[0_0_10px_rgba(147,51,234,0.3)] z-0 hidden lg:block"
               style={{ scaleX, originX: 0, width: "100%" }}
             />

             {/* Animated Progress Line (Mobile) */}
             <motion.div 
               className="absolute top-0 left-8 w-[2px] bg-gradient-to-b from-purple-600 to-indigo-500 shadow-[0_0_10px_rgba(147,51,234,0.3)] z-0 lg:hidden"
               style={{ scaleY: scaleX, originY: 0, height: "100%" }}
             />
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 group"
                  >
                     <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm group-hover:border-purple-600 group-hover:bg-purple-50 transition-all duration-500 relative">
                        <step.icon className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        
                        {/* Internal indicator that fills when passed? (Optional refinement) */}
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center lg:justify-start gap-2">
                           <span className="text-[10px] font-bold text-purple-600/50">{step.id}</span>
                           <h3 className="font-bold text-sm text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-400 text-[11px] leading-relaxed max-w-[200px]">
                           {step.desc}
                        </p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
