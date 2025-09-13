import React from "react";
import Button from "@/components/Button";
import { FaCheck } from "react-icons/fa";

export const WhyExportersChooseUs = () => {
  return (
    <section id="gth-why-exporters" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#8c45ff]/20 to-transparent rounded-l-[300px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
              Why Exporters Choose Us
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/90 mb-8">
              Unlock the World&rsquo;s Most Profitable Market — Without the Usual Barriers
            </h3>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Feature 1 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  Direct Access to U.S. Buyers
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                Reach verified importers, retailers, and distributors actively sourcing international products.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  No Upfront Costs or Middlemen
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                List your products free. Keep full control of your margins and communication.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  Export Support, Simplified
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                From compliance documents to customs prep — we help you every step of the way.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  Fast, Secure Payments with Global Coverage
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                We integrate trusted escrow and bank transfer solutions for safe, timely payouts.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  Real-Time Analytics & Buyer Feedback
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                Know who&rsquo;s viewing, quoting, and buying — and fine-tune your strategy with confidence.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
              <div className="flex gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                  <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                </div>
                <h4 className="text-xl font-medium text-white leading-tight">
                  Dedicated Account Support
                </h4>
              </div>
              <p className="text-white/70 ml-14">
                Every exporter gets a real human expert to help optimize listings and unlock opportunities.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Button>Start Exporting Today</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExportersChooseUs;