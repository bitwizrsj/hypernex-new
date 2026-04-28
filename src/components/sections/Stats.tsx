"use client";
import { ArrowRight, TrendingUp, Users, Star, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "450+", label: "Projects delivered" },
  { icon: Users, value: "150+", label: "Happy clients" },
  { icon: Star, value: "4.9", label: "Average rating" },
  { icon: Award, value: "12+", label: "Industry awards" },
];

export default function Stats() {
  return (
    <section className="bg-[#0b0b0e] py-24 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[0.7rem] font-extrabold tracking-[0.2em] text-purple-400 uppercase">
            By The Numbers
          </span>
          <h2 className="text-3xl font-bold mt-4 text-white leading-tight">
            Results speak for themselves
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/8 p-8 flex flex-col items-center text-center gap-4 bg-white/3 hover:bg-white/6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-5xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group">
            View our case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
