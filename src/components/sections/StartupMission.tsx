import Link from "next/link";
import { 
  Lightbulb, 
  ShieldCheck, 
  Code2, 
  Smartphone, 
  LayoutDashboard, 
  TrendingUp, 
  Cloud, 
  Headphones,
  ArrowUpRight,
  Database,
  ShoppingCart,
  Zap,
  Cpu,
  Layout
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Product Strategy",
    desc: "Validate your idea, define your market, and build a winning product roadmap.",
  },
  {
    icon: ShieldCheck,
    title: "Branding & Identity",
    desc: "We craft memorable brands that build trust and create lasting impact.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, secure and scalable websites and web apps built with modern tech.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that deliver seamless user experiences.",
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive designs that delight users and drive engagement.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth Marketing",
    desc: "Data-driven marketing strategies that boost visibility, drive traffic and growth.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure, CI/CD pipelines and monitoring for high performance.",
  },
  {
    icon: Headphones,
    title: "Launch & Support",
    desc: "We handle the launch and provide ongoing support so you can focus on growth.",
  },
];

const customSoftware = [
  {
    icon: Layout,
    title: "Admin Dashboards",
    subtitle: "Manage your business operations in one place.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    subtitle: "Custom online stores built to scale.",
  },
  {
    icon: Database,
    title: "SaaS Applications",
    subtitle: "Powerful SaaS products tailored to your idea.",
  },
  {
    icon: Zap,
    title: "Automation Tools",
    subtitle: "Automate workflows and save time & resources.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    subtitle: "Intelligent features that give you a competitive edge.",
  },
];

export default function StartupMission() {
  return (
    <section className="bg-[#0b0b0e] py-24 px-8 lg:px-16 relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header V3 - Minimalist & Compact */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-purple-500 text-xs font-bold">✦</span>
            <span className="text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase">
              Your Startup, Our Mission
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">
            Let us help you build and<br />launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">entire startup</span>
          </h2>

          <p className="text-gray-500 text-base lg:text-sm max-w-xl mx-auto leading-relaxed">
            From idea to launch and beyond. We provide everything you need to build, grow, and scale your startup.
          </p>
        </div>

        {/* Feature Grid - Compact 4-Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((feature, i) => (
            <Link 
              key={i} 
              href="/contact"
              className="group p-5 rounded-xl bg-[#14141a] border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden flex gap-4 items-start cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-sm mb-1 truncate">{feature.title}</h3>
                <p className="text-gray-500 text-[11px] leading-snug line-clamp-3">
                  {feature.desc}
                </p>
                <div className="flex justify-end mt-2">
                  <ArrowUpRight className="w-3 h-3 text-purple-500/40 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8">
          <div className="flex flex-col justify-center">
            <span className="text-[0.65rem] font-extrabold tracking-[0.2em] text-purple-400 uppercase mb-4">
              The Tools You Need
            </span>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Custom software and essentials for your startup
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We build custom solutions and integrate the right tools to help you run, manage and grow your startup efficiently.
            </p>
          </div>

          <div className="bg-[#14141a] border border-white/5 rounded-3xl p-10">
            <h4 className="text-white font-bold mb-10">Custom Software We Build</h4>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {customSoftware.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm mb-2">{item.title}</h5>
                    <p className="text-gray-500 text-[10px] leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
