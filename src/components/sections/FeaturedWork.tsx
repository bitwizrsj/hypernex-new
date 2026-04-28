"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { src: "/project1.png", alt: "Project 1" },
  { src: "/project2.png", alt: "Project 2" },
  { src: "/project3.png", alt: "Project 3" },
];

export default function FeaturedWork() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="featured-work" className="bg-[#f6f6fb] py-24 px-8 lg:px-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left – Text ── */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-[0.65rem] font-extrabold tracking-[0.22em] text-indigo-600 uppercase">
                Recent Work
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900">
              Digital experiences<br />built for forward<br />thinking brands
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We partner with ambitious brands and startups to turn ideas into digital experiences that people love.
            </p>
            <Link href="/blog" className="flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl w-fit hover:bg-gray-800 transition-colors group mt-2">
              Explore all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── Right – Carousel ── */}
          <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
            {/* Image frame — arrows and dots live inside here */}
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-gray-100"
              style={{ aspectRatio: "16 / 8" }}
            >
              {/* Slides */}
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Nav arrows — top-right inside the frame */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot indicators — bottom-center inside the frame */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
