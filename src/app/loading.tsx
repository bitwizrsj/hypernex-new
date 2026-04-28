import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0b0b0e] flex flex-col items-center justify-center gap-8">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative flex flex-col items-center gap-6 z-10">
        <div className="relative">
          <div className="w-20 h-20 rounded-3xl border-2 border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20" />
            <Loader2 className="w-8 h-8 text-white animate-spin opacity-50" />
          </div>
          {/* Outer Ring Animation */}
          <div className="absolute -inset-4 border border-purple-500/20 rounded-[2.5rem] animate-[spin_8s_linear_infinite]" />
          <div className="absolute -inset-8 border border-white/5 rounded-[3.5rem] animate-[spin_12s_linear_infinite_reverse]" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-white tracking-tighter uppercase italic">Hypernex</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
