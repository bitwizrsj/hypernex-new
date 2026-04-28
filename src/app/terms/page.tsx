import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="bg-[#0b0b0e] min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 lg:px-16 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-xs font-bold">✦</span>
              <span className="text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase">
                Legal
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight italic">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-xl">
              Last Updated: April 2024. Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the services provided by Hypernex Technologies ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">2. Use of Services</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any person.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, trademarks, and data on our website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to Hypernex Technologies and as such are protected from infringement by local and international legislation and treaties.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">4. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Hypernex Technologies shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services or for the cost of procurement of substitute goods and services.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">5. User Accounts</h2>
              <p className="text-gray-600 leading-relaxed">
                If you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold tracking-tight">6. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
