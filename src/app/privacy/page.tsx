import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-xl">
              Last Updated: April 2024. Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and business details.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">2. How We Use Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Hypernex and our users. We also use this information to offer you tailored content—like giving you more relevant search results and ads.
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-gray-600">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not share personal information with companies, organizations, or individuals outside of Hypernex except in the following cases: with your consent, for external processing, or for legal reasons.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We work hard to protect Hypernex and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use encryption to keep your data private while in transit.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">5. Your Choices</h2>
              <p className="text-gray-600 leading-relaxed">
                You have choices regarding the information we collect and how it is used. You can manage your account settings, opt-out of certain communications, and request the deletion of your personal data.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at info@hypernextechnologies.com.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
