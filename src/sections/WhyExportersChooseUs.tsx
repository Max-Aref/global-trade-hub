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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Headline and CTA */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
              Unlock the World's Most Profitable Market — Without the Usual Barriers
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Join thousands of successful exporters who have simplified their path to the U.S. market through our platform.
            </p>
            
            <div className="mt-auto pt-8">
              <Button>Get Started Today</Button>
            </div>
          </div>
          
          {/* Right column - Feature grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: Direct connection icon, 1:1 ratio, connection-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">Direct Access to U.S. Buyers</h3>
                </div>
                <p className="text-white/70 ml-14">
                  Reach verified importers, retailers, and distributors actively sourcing international products.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: No cost icon, 1:1 ratio, no-cost-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">No Upfront Costs or Middlemen</h3>
                </div>
                <p className="text-white/70 ml-14">
                  List your products free. Keep full control of your margins and communication.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: Support icon, 1:1 ratio, support-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">Export Support, Simplified</h3>
                </div>
                <p className="text-white/70 ml-14">
                  From compliance documents to customs prep — we help you every step of the way.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: Payment icon, 1:1 ratio, payment-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">Fast, Secure Payments with Global Coverage</h3>
                </div>
                <p className="text-white/70 ml-14">
                  We integrate trusted escrow and bank transfer solutions for safe, timely payouts.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: Analytics icon, 1:1 ratio, analytics-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">Real-Time Analytics & Buyer Feedback</h3>
                </div>
                <p className="text-white/70 ml-14">
                  Know who's viewing, quoting, and buying — and fine-tune your strategy with confidence.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="group border border-white/15 rounded-xl p-6 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-[#190d2e] to-black">
                <div className="flex gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-[#8c45ff]/20 flex items-center justify-center shrink-0">
                    {/* <!-- IMAGE: Account support icon, 1:1 ratio, account-support-icon.svg --> */}
                    <FaCheck className="h-5 w-5 text-[#8c45ff]" />
                  </div>
                  <h3 className="text-xl font-medium">Dedicated Account Support</h3>
                </div>
                <p className="text-white/70 ml-14">
                  Every exporter gets a real human expert to help optimize listings and unlock opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExportersChooseUs;