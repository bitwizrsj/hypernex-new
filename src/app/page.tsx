import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/sections/Services";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Logos from "@/components/sections/Logos";
import StartupMission from "@/components/sections/StartupMission";
import Process from "@/components/sections/Process";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import BlogSection from "@/components/sections/BlogSection";
import BlogSectionSkeleton from "@/components/sections/BlogSectionSkeleton";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <WhoWeAre />
      <Logos />
      <StartupMission />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <Suspense fallback={<BlogSectionSkeleton />}>
        <BlogSection />
      </Suspense>
      <CTA />
      <Footer />
    </main>
  );
}
