import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
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
              Refund <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-xl">
              Last Updated: April 2024. Our commitment to clarity and fairness in all our transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-8 lg:px-16 bg-white text-gray-900">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">1. Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Clients may request the cancellation of their project or subscription at any time. To cancel, please contact your project manager or email us at info@hypernextechnologies.com. Cancellation requests must be submitted in writing.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">2. Refund Eligibility</h2>
              <p className="text-gray-600 leading-relaxed">
                Refunds are handled on a case-by-case basis depending on the type of service provided:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-3 text-gray-600">
                <li><strong>Design & Development Services:</strong> Initial deposits are generally non-refundable once work has commenced. However, if no work has started, a full refund may be issued.</li>
                <li><strong>Retainers & Subscriptions:</strong> Cancellation within the first 7 days of a billing cycle may be eligible for a pro-rated refund.</li>
                <li><strong>Completed Work:</strong> No refunds will be issued for work that has been completed and delivered to the client.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">3. Process for Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                Once a refund request is received and approved, we will process the refund to your original method of payment within 10-15 business days. You will receive a confirmation email once the transaction is complete.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">4. Exceptional Circumstances</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to issue refunds at our sole discretion in cases of technical failure on our part or inability to fulfill the project scope as agreed upon in the signed contract.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold tracking-tight">5. Questions</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions concerning our return policy, please contact us at: info@hypernextechnologies.com.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
