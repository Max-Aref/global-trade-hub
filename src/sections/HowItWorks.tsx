"use client";

import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation"; // Import router for navigation

export const HowItWorks = () => {
  const router = useRouter(); // Initialize router

  // Handler function to navigate to auth page
  const handleJoinNowClick = () => {
    router.push("/auth"); // Navigate to the auth page
  };

  return (
    <section id='gth-how-it-works' className='py-20 md:py-24'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium text-center tracking-tighter mb-16'>
          Exporting Made Effortless — We&#39;ve Streamlined the Entire Process
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12'>
          {/* Step 1 */}
          <div className='border border-white/15 p-6 rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a]/20'>
            <div className='flex items-center mb-4'>
              <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center bg-[#190d2e]'>
                <span className='text-white/70 font-medium'>01</span>
              </div>
              <div className='h-0.5 flex-grow ml-4 bg-white/15'></div>
            </div>
            <h3 className='text-xl font-medium mb-3'>
              Create Your Free Account
            </h3>
            <p className='text-white/70'>
              Register your business, verify your exporter profile, and gain
              instant dashboard access.
            </p>
          </div>

          {/* Step 2 */}
          <div className='border border-white/15 p-6 rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a]/20'>
            <div className='flex items-center mb-4'>
              <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center bg-[#190d2e]'>
                <span className='text-white/70 font-medium'>02</span>
              </div>
              <div className='h-0.5 flex-grow ml-4 bg-white/15'></div>
            </div>
            <h3 className='text-xl font-medium mb-3'>
              List Your Products & Pricing Tiers
            </h3>
            <p className='text-white/70'>
              Upload product details, set minimum order quantities (MOQs), and
              select shipping options.
            </p>
          </div>

          {/* Step 3 */}
          <div className='border border-white/15 p-6 rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a]/20'>
            <div className='flex items-center mb-4'>
              <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center bg-[#190d2e]'>
                <span className='text-white/70 font-medium'>03</span>
              </div>
              <div className='h-0.5 flex-grow ml-4 bg-white/15'></div>
            </div>
            <h3 className='text-xl font-medium mb-3'>
              Match with Buyers & Start Quoting
            </h3>
            <p className='text-white/70'>
              Get leads from pre-screened U.S. importers, negotiate deals, and
              confirm shipments.
            </p>
          </div>

          {/* Step 4 */}
          <div className='border border-white/15 p-6 rounded-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a]/20'>
            <div className='flex items-center mb-4'>
              <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center bg-[#190d2e]'>
                <span className='text-white/70 font-medium'>04</span>
              </div>
              <div className='h-0.5 flex-grow ml-4 bg-white/15'></div>
            </div>
            <h3 className='text-xl font-medium mb-3'>
              Get Paid Securely & Repeat
            </h3>
            <p className='text-white/70'>
              Once delivery is confirmed, funds are released. Focus on scaling
              and repeat orders.
            </p>
          </div>
        </div>

        <div className='text-center'>
          <Button
            onClick={handleJoinNowClick}
            className='px-6 py-3 text-base font-medium' // Match header register button size
          >
            Join Now – Connect with Active U.S. Buyers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
