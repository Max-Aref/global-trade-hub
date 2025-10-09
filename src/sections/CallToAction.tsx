import Button from "../components/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import gridLinesBg from "../assets/grid-lines.png";

// Secondary button component for design hierarchy
const SecondaryButton = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link href={href}>
      <button className='relative py-2 px-4 rounded-lg font-medium text-sm border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group'>
        <span>{children}</span>
        <FaArrowRight className='h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300' />
      </button>
    </Link>
  );
};

export const CallToAction = () => {
  return (
    <section className='py-20 md:py-24 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(74,32,138,.08)_15%,transparent_78%)]'></div>
        <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>

        {/* Grid pattern background for visual texture */}
        <div
          className='absolute inset-0 opacity-5 bg-repeat'
          style={{ backgroundImage: `url(${gridLinesBg.src})` }}
        ></div>
      </div>

      <div className='container relative z-10 px-4 md:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Main content container with subtle glass effect */}
          <div className='bg-white/[0.03] backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden'>
            {/* Decorative accent element */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4a208a] to-transparent'></div>

            <div className='text-center mb-8 md:mb-10'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                Connect With Global Buyers. Expand Your Business.
              </h2>
              <p className='text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Join Global Trade Hub today and access a network of verified
                suppliers, premium buyers, and worldwide opportunities. Our
                mission is to empower businesses with trust, transparency, and
                growth.
              </p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6'>
              <Link href='/auth' className='w-full md:w-auto'>
                <Button>Get Started Now</Button>
              </Link>
              <SecondaryButton href='/about'>Learn More</SecondaryButton>
            </div>

            {/* Trust indicators */}
            <div className='mt-10 pt-8 border-t border-white/10'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white/70 text-sm'>
                <div className='flex flex-col items-center'>
                  <div className='text-sm font-semibold mb-1'>
                    150+ Countries
                  </div>
                  <div className='text-xs'>Global Reach</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='text-sm font-semibold mb-1'>24/7 Support</div>
                  <div className='text-xs'>Always Available</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='text-sm font-semibold mb-1'>99.9% Uptime</div>
                  <div className='text-xs'>Reliable Platform</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='text-sm font-semibold mb-1'>
                    Secure Payments
                  </div>
                  <div className='text-xs'>Protected Transactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
