"use client";

import { useRef, useState, useEffect } from "react";

export const GettingStartedSection = () => {
  // Reference to the section for intersection observer
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // State for the exporter counter
  const [currentCount, setCurrentCount] = useState(1247);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animations when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animate the counter when section becomes visible
  useEffect(() => {
    if (isVisible && counterRef.current) {
      // Increment counter for animation effect
      const interval = setInterval(() => {
        setCurrentCount((prev) => {
          const newCount = prev + Math.floor(Math.random() * 3);
          return newCount > 1277 ? 1247 : newCount;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id='getting-started'
      className='relative py-16 md:py-24 overflow-hidden'
    >
      {/* Background gradient - scoped to this section only */}
      <div className='absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

      {/* Background pattern */}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10'>
        <div className='max-w-4xl mx-auto'>
          <div
            className='flex flex-col items-center text-center'
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            {/* Main headline with gradient text */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400 mb-4'>
              Ready to Expand Your Global Reach?
            </h2>

            {/* Urgency counter */}
            <div className='mb-6 text-lg md:text-xl text-white/70'>
              Join{" "}
              <span ref={counterRef} className='font-bold text-white'>
                {currentCount.toLocaleString()}
              </span>{" "}
              exporters this month
            </div>

            {/* CTA Button Group */}
            <div className='flex flex-col md:flex-row gap-4 mb-8'>
              {/* Custom primary button */}
              <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
                <div className='absolute inset-0'>
                  <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                  <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                  <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                <span>Start Your Free Account</span>
              </button>

              <button className='relative py-2 px-3 rounded-lg font-medium text-sm border border-white/30 hover:border-white/50 transition-colors'>
                <span>Schedule a Demo</span>
              </button>
            </div>

            {/* Risk reducer text */}
            <p className='text-sm text-white/60 mb-6'>
              No setup fees • No commitments • Start in 5 minutes
            </p>

            {/* Support contact */}
            <div className='flex items-center justify-center gap-2 text-sm'>
              <span className='text-white/60'>Need help?</span>
              <a
                href='tel:+1234567890'
                className='text-white hover:text-purple-300 transition-colors'
              >
                Call our export specialists
              </a>
            </div>

            {/* Trust badges */}
            <div className='flex items-center justify-center gap-6 mt-8'>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                  </svg>
                </div>
                <span className='text-xs text-white/60'>Secure Platform</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
                    <line x1='9' y1='9' x2='9.01' y2='9'></line>
                    <line x1='15' y1='9' x2='15.01' y2='9'></line>
                  </svg>
                </div>
                <span className='text-xs text-white/60'>
                  99.8% Success Rate
                </span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </div>
                <span className='text-xs text-white/60'>Verified Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
