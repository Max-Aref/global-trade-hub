'use client';'use client';'use client';



import { useRef, useState, useEffect } from 'react';

import React from 'react';

import { useRef, useState, useEffect } from 'react';import { useRef, useState, useEffect } from 'react';

// This is a completely self-contained component to avoid affecting the Hero section

export const GettingStartedCTA = () => {import React from 'react';import Button from '@/components/Button';

  // Reference to the section for intersection observer

  const sectionRef = useRef<HTMLElement>(null);

  const counterRef = useRef<HTMLSpanElement>(null);

  // This is a completely self-contained component to avoid affecting the Hero sectioninterface GettingStartedCTAProps {

  // State for the exporter counter

  const [currentCount, setCurrentCount] = useState(1247);export const GettingStartedCTA = () => {  headline?: string;

  const [isVisible, setIsVisible] = useState(false);

    // Reference to the section for intersection observer  primaryCTAText?: string;

  // Intersection Observer for animations when element enters viewport

  useEffect(() => {  const sectionRef = useRef<HTMLElement>(null);  secondaryCTAText?: string;

    const observer = new IntersectionObserver(

      (entries) => {  const counterRef = useRef<HTMLSpanElement>(null);  riskReducerText?: string;

        const [entry] = entries;

        setIsVisible(entry.isIntersecting);    supportText?: string;

      },

      { threshold: 0.1 } // Trigger when 10% of the element is visible  // State for the exporter counter  supportPhone?: string;

    );

      const [currentCount, setCurrentCount] = useState(1247);  initialCount?: number;

    const currentRef = sectionRef.current;

      const [isVisible, setIsVisible] = useState(false);  onPrimaryCTAClick?: () => void;

    if (currentRef) {

      observer.observe(currentRef);    onSecondaryCTAClick?: () => void;

    }

      // Intersection Observer for animations when element enters viewport}

    return () => {

      if (currentRef) {  useEffect(() => {

        observer.unobserve(currentRef);

      }    const observer = new IntersectionObserver(export const GettingStartedCTA = ({

    };

  }, []);      (entries) => {  headline = 'Ready to Expand Your Global Reach?',

  

  // Animate the counter when section becomes visible        const [entry] = entries;  primaryCTAText = 'Start Your Free Account',

  useEffect(() => {

    if (isVisible && counterRef.current) {        setIsVisible(entry.isIntersecting);  secondaryCTAText = 'Schedule a Demo',

      // Increment counter for animation effect

      const interval = setInterval(() => {      },  riskReducerText = 'No setup fees • No commitments • Start in 5 minutes',

        setCurrentCount(prev => {

          const newCount = prev + Math.floor(Math.random() * 3);      { threshold: 0.1 } // Trigger when 10% of the element is visible  supportText = 'Need help?',

          return newCount > 1277 ? 1247 : newCount;

        });    );  supportPhone = '+1234567890',

      }, 2000);

            initialCount = 1247,

      return () => clearInterval(interval);

    }    const currentRef = sectionRef.current;  onPrimaryCTAClick,

  }, [isVisible]);

        onSecondaryCTAClick

  // Custom button component to avoid using global Button component

  const PrimaryButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {    if (currentRef) {}: GettingStartedCTAProps) => {

    return (

      <button       observer.observe(currentRef);  // Reference to the section for intersection observer

        className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'

        onClick={onClick}    }  const sectionRef = useRef<HTMLElement>(null);

      >

        <div className='absolute inset-0'>      const counterRef = useRef<HTMLSpanElement>(null);

          <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>

          <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>    return () => {  

          <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>

        </div>      if (currentRef) {  // State for the exporter counter

        <span>{children}</span>

      </button>        observer.unobserve(currentRef);  const [currentCount, setCurrentCount] = useState(initialCount);

    );

  };      }  const [isVisible, setIsVisible] = useState(false);



  return (    };  

    <section

      ref={sectionRef}  }, []);  // Intersection Observer for animations when element enters viewport

      id='get-started'

      className='relative py-16 md:py-24 overflow-hidden'    useEffect(() => {

    >

      {/* Background gradient - scoped to this section only */}  // Animate the counter when section becomes visible    const observer = new IntersectionObserver(

      <div className='absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

  useEffect(() => {      (entries) => {

      {/* Background pattern */}

      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></div>    if (isVisible && counterRef.current) {        const [entry] = entries;



      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10'>      // Increment counter for animation effect        setIsVisible(entry.isIntersecting);

        <div className='max-w-4xl mx-auto'>

          <div className='flex flex-col items-center text-center gettingStartedCta-fadeIn'>      const interval = setInterval(() => {      },

            {/* Main headline with gradient text */}

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400 mb-4'>        setCurrentCount(prev => {      { threshold: 0.1 } // Trigger when 10% of the element is visible

              Ready to Expand Your Global Reach?

            </h2>          const newCount = prev + Math.floor(Math.random() * 3);    );



            {/* Urgency counter */}          return newCount > 1277 ? 1247 : newCount;    

            <div className='mb-6 text-lg md:text-xl text-white/70'>

              Join{" "}        });    const currentRef = sectionRef.current;

              <span ref={counterRef} className='font-bold text-white'>

                {currentCount.toLocaleString()}      }, 2000);    

              </span>{" "}

              exporters this month          if (currentRef) {

            </div>

      return () => clearInterval(interval);      observer.observe(currentRef);

            {/* CTA Button Group */}

            <div className='flex flex-col md:flex-row gap-4 mb-8'>    }    }

              <PrimaryButton>Start Your Free Account</PrimaryButton>

  }, [isVisible]);    

              <button

                className='relative py-2 px-3 rounded-lg font-medium text-sm border border-white/30 hover:border-white/50 transition-colors'      return () => {

              >

                <span>Schedule a Demo</span>  // Custom button component to avoid using global Button component      if (currentRef) {

              </button>

            </div>  const PrimaryButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {        observer.unobserve(currentRef);



            {/* Risk reducer text */}    return (      }

            <p className='text-sm text-white/60 mb-6'>No setup fees • No commitments • Start in 5 minutes</p>

      <button     };

            {/* Support contact */}

            <div className='flex items-center justify-center gap-2 text-sm'>        className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'  }, []);

              <span className='text-white/60'>Need help?</span>

              <a         onClick={onClick}  

                href="tel:+1234567890" 

                className='text-white hover:text-purple-300 transition-colors'      >  // Animate the counter when section becomes visible

              >

                Call our export specialists        <div className='absolute inset-0'>  useEffect(() => {

              </a>

            </div>          <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>    if (isVisible && counterRef.current) {



            {/* Trust badges */}          <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>      // Increment counter for animation effect

            <div className='flex items-center justify-center gap-6 mt-8'>

              <div className='flex flex-col items-center'>          <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>      const interval = setInterval(() => {

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">        </div>        setCurrentCount(prev => {

                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>

                  </svg>        <span>{children}</span>          const newCount = prev + Math.floor(Math.random() * 3);

                </div>

                <span className='text-xs text-white/60'>Secure Platform</span>      </button>          return newCount > initialCount + 30 ? initialCount : newCount;

              </div>

                  );        });

              <div className='flex flex-col items-center'>

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>  };      }, 2000);

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <circle cx="12" cy="12" r="10"></circle>      

                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>

                    <line x1="9" y1="9" x2="9.01" y2="9"></line>  return (      return () => clearInterval(interval);

                    <line x1="15" y1="9" x2="15.01" y2="9"></line>

                  </svg>    <section    }

                </div>

                <span className='text-xs text-white/60'>99.8% Success Rate</span>      ref={sectionRef}  }, [isVisible, initialCount]);

              </div>

                    id='get-started'  

              <div className='flex flex-col items-center'>

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>      className='relative py-16 md:py-24 overflow-hidden'  // Tracking click events with analytics

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <path d="M20 6L9 17l-5-5"></path>    >  const handlePrimaryCTAClick = () => {

                  </svg>

                </div>      {/* Background gradient - scoped to this section only */}    // Send analytics event - using a basic implementation

                <span className='text-xs text-white/60'>Verified Business</span>

              </div>      <div className='absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>    // Replace with your actual analytics tracking

            </div>

          </div>    if (typeof window !== 'undefined' && window.gtag) {

        </div>

      </div>      {/* Background pattern */}      window.gtag('event', 'click', {

      

      <style jsx>{`      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></div>        event_category: 'cta',

        .gettingStartedCta-fadeIn {

          opacity: 0;        event_label: 'primary_cta',

          animation: gettingStartedCta-fadeInAnimation 0.8s ease-out forwards;

        }      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>        value: 1,

        

        @keyframes gettingStartedCta-fadeInAnimation {        <div className='max-w-4xl mx-auto'>      });

          from {

            opacity: 0;          <div className='flex flex-col items-center text-center opacity-0 animate-fade-in'>    }

            transform: translateY(20px);

          }            {/* Main headline with gradient text */}    

          to {

            opacity: 1;            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400 mb-4'>    // Call custom handler if provided

            transform: translateY(0);

          }              Ready to Expand Your Global Reach?    if (onPrimaryCTAClick) {

        }

      `}</style>            </h2>      onPrimaryCTAClick();

    </section>

  );    }

};
            {/* Urgency counter */}  };

            <div className='mb-6 text-lg md:text-xl text-white/70'>  

              Join{" "}  const handleSecondaryCTAClick = () => {

              <span ref={counterRef} className='font-bold text-white'>    // Send analytics event

                {currentCount.toLocaleString()}    if (typeof window !== 'undefined' && window.gtag) {

              </span>{" "}      window.gtag('event', 'click', {

              exporters this month        event_category: 'cta',

            </div>        event_label: 'secondary_cta',

        value: 1,

            {/* CTA Button Group */}      });

            <div className='flex flex-col md:flex-row gap-4 mb-8'>    }

              <PrimaryButton>Start Your Free Account</PrimaryButton>

    // Call custom handler if provided

              <button    if (onSecondaryCTAClick) {

                className='relative py-2 px-3 rounded-lg font-medium text-sm border border-white/30 hover:border-white/50 transition-colors'      onSecondaryCTAClick();

              >    }

                <span>Schedule a Demo</span>  };

              </button>

            </div>  return (

    <section

            {/* Risk reducer text */}      ref={sectionRef}

            <p className='text-sm text-white/60 mb-6'>No setup fees • No commitments • Start in 5 minutes</p>      id='get-started'

      className='relative py-16 md:py-24 overflow-hidden'

            {/* Support contact */}      data-testid='getting-started-cta'

            <div className='flex items-center justify-center gap-2 text-sm'>    >

              <span className='text-white/60'>Need help?</span>      {/* Background gradient */}

              <a       <div className='absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

                href="tel:+1234567890" 

                className='text-white hover:text-purple-300 transition-colors'      {/* Background pattern - similar to existing sections for consistency */}

              >      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></div>

                Call our export specialists

              </a>      <div className='container relative z-10'>

            </div>        <div className='max-w-4xl mx-auto'>

          <div className='flex flex-col items-center text-center animate-fadeIn'>

            {/* Trust badges */}            {/* Main headline with gradient text similar to Hero section */}

            <div className='flex items-center justify-center gap-6 mt-8'>            <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text mb-4'>

              <div className='flex flex-col items-center'>              {headline}

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>            </h2>

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>            {/* Urgency counter */}

                  </svg>            <div className='mb-6 text-lg md:text-xl text-white/70'>

                </div>              Join{" "}

                <span className='text-xs text-white/60'>Secure Platform</span>              <span ref={counterRef} className='font-bold text-white'>

              </div>                {currentCount.toLocaleString()}

                            </span>{" "}

              <div className='flex flex-col items-center'>              exporters this month

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>            </div>

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <circle cx="12" cy="12" r="10"></circle>            {/* CTA Button Group */}

                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>            <div className='flex flex-col md:flex-row gap-4 mb-8'>

                    <line x1="9" y1="9" x2="9.01" y2="9"></line>              <Button onClick={handlePrimaryCTAClick}>{primaryCTAText}</Button>

                    <line x1="15" y1="9" x2="15.01" y2="9"></line>

                  </svg>              <button

                </div>                onClick={handleSecondaryCTAClick}

                <span className='text-xs text-white/60'>99.8% Success Rate</span>                className='relative py-2 px-3 rounded-lg font-medium text-sm border border-white/30 hover:border-white/50 transition-colors'

              </div>                aria-label={secondaryCTAText}

                            >

              <div className='flex flex-col items-center'>                <span>{secondaryCTAText}</span>

                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>              </button>

                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">            </div>

                    <path d="M20 6L9 17l-5-5"></path>

                  </svg>            {/* Risk reducer text */}

                </div>            <p className='text-sm text-white/60 mb-6'>{riskReducerText}</p>

                <span className='text-xs text-white/60'>Verified Business</span>

              </div>            {/* Support contact */}

            </div>            <div className='flex items-center justify-center gap-2 text-sm'>

          </div>              <span className='text-white/60'>{supportText}</span>

        </div>              <a 

      </div>                href={`tel:${supportPhone}`} 

                className='text-white hover:text-purple-300 transition-colors'

      {/* Scoped CSS for this component only */}                aria-label={`Call our support team at ${supportPhone}`}

      <style jsx>{`              >

        @keyframes fade-in {                Call our export specialists

          from {              </a>

            opacity: 0;            </div>

            transform: translateY(20px);

          }            {/* Trust badges */}

          to {            <div className='flex items-center justify-center gap-6 mt-8'>

            opacity: 1;              <div className='flex flex-col items-center'>

            transform: translateY(0);                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>

          }                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

        }                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>

                          </svg>

        .animate-fade-in {                </div>

          animation: fade-in 0.8s ease-out forwards;                <span className='text-xs text-white/60'>Secure Platform</span>

        }              </div>

                      

        .container {              <div className='flex flex-col items-center'>

          margin-left: auto;                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>

          margin-right: auto;                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          padding-left: 1rem;                    <circle cx="12" cy="12" r="10"></circle>

          padding-right: 1rem;                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>

        }                    <line x1="9" y1="9" x2="9.01" y2="9"></line>

                            <line x1="15" y1="9" x2="15.01" y2="9"></line>

        @media (min-width: 640px) {                  </svg>

          .container {                </div>

            padding-left: 1.5rem;                <span className='text-xs text-white/60'>99.8% Success Rate</span>

            padding-right: 1.5rem;              </div>

          }              

        }              <div className='flex flex-col items-center'>

                        <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2'>

        @media (min-width: 1024px) {                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-white' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          .container {                    <path d="M20 6L9 17l-5-5"></path>

            padding-left: 2rem;                  </svg>

            padding-right: 2rem;                </div>

            max-width: 1200px;                <span className='text-xs text-white/60'>Verified Business</span>

          }              </div>

        }            </div>

      `}</style>          </div>

    </section>        </div>

  );      </div>

};    </section>
  );
};

// Add global type for gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
  }
}