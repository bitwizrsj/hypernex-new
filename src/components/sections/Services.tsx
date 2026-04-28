import Link from "next/link";
import {
  PenTool,
  Code2,
  TrendingUp,
  Layout,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Strategy & Branding",
    desc: "We help define your position, shape your brand and build a clear roadmap.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, secure and scalable websites built with modern technologies.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    desc: "Data-driven SEO strategies that rank higher and drive qualified traffic.",
  },
  {
    icon: Layout,
    title: "Design & Experience",
    desc: "Beautiful, user-centered designs that engage your audience and convert.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f6fb] py-24 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid Layout: Heading on Left, Cards on Right */}
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">

          {/* Left Column: Heading */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-600" />
              <span className="text-[0.6rem] font-extrabold tracking-[0.2em] text-gray-500 uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 pr-4">
              End-to-end digital<br />solutions that<br />deliver impact
            </h2>
          </div>

          {/* Right Column: Service Cards Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 flex flex-col gap-5 border border-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-sm text-gray-900">{service.title}</h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link href="/services" className="flex items-center gap-1.5 text-indigo-600 text-[11px] font-bold group mt-auto">
                  Learn more
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
