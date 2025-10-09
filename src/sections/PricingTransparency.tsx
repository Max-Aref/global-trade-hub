"use client";

import { useState, useRef, useEffect } from "react";

export const PricingTransparency = () => {
  // State for the interactive calculator
  const [monthlyVolume, setMonthlyVolume] = useState(10000);
  const [averageOrder, setAverageOrder] = useState(500);
  const [productCategory, setProductCategory] = useState("general");
  const [transactionType, setTransactionType] = useState("international");
  const [calculationResult, setCalculationResult] = useState({
    monthlyFees: 0,
    effectiveRate: 0,
    annualSavings: 0,
  });

  // Ref for section intersection observer
  const sectionRef = useRef<HTMLElement>(null);
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

  // Calculate fees based on inputs
  useEffect(() => {
    // Base rate by category and region
    const getBaseRate = (category: string, region: string) => {
      const baseCategoryRates: Record<string, number> = {
        general: 4.9,
        electronics: 4.5,
        textiles: 3.9,
        agriculture: 3.5,
        furniture: 4.2,
      };

      // Apply region modifier
      const regionModifier = region === "international" ? 0 : -0.5;

      return (baseCategoryRates[category] || 4.9) + regionModifier;
    };

    // Volume discount calculation
    const getVolumeDiscount = (volume: number) => {
      if (volume >= 1000000) return 2.4;
      if (volume >= 500000) return 2.0;
      if (volume >= 250000) return 1.5;
      if (volume >= 100000) return 1.0;
      if (volume >= 50000) return 0.7;
      if (volume >= 25000) return 0.4;
      if (volume >= 10000) return 0.2;
      return 0;
    };

    // Calculate savings compared to fixed-fee platforms
    const calculateSavings = (volume: number, rate: number) => {
      // Assume competitor charges 8% flat fee
      const competitorRate = 8.0;
      const yearlyVolume = volume * 12;
      return yearlyVolume * ((competitorRate - rate) / 100);
    };

    // Minimum rate that can be applied
    const minimumRate = 2.5;

    // Calculate fees
    const baseRate = getBaseRate(productCategory, transactionType);
    const volumeDiscount = getVolumeDiscount(monthlyVolume);
    const finalRate = Math.max(baseRate - volumeDiscount, minimumRate);

    // Set calculation results
    setCalculationResult({
      monthlyFees: monthlyVolume * (finalRate / 100),
      effectiveRate: finalRate,
      annualSavings: calculateSavings(monthlyVolume, finalRate),
    });
  }, [monthlyVolume, averageOrder, productCategory, transactionType]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Handle volume slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyVolume(parseInt(e.target.value));
  };

  // Handle average order change
  const handleAverageOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAverageOrder(parseInt(e.target.value));
  };

  return (
    <section
      ref={sectionRef}
      id='pricing'
      className='relative py-16 md:py-24 overflow-hidden'
    >
      {/* Background gradient - scoped to this section only */}
      <div className='absolute inset-0 bg-[radial-gradient(70%_70%_at_center_center,rgb(140,69,255,.3)_15%,rgb(14,0,36,.5)_78%,transparent)]'></div>

      {/* Background pattern */}
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10'>
        {/* Section Header */}
        <div
          className='text-center mb-12 md:mb-16'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400 mb-4'>
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className='text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-6'>
            Pay only when you succeed. Our success-based model means we only win
            when you do.
          </p>

          {/* Trust Badge */}
          <div className='inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-green-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-white font-medium'>
              100% Transparent Pricing
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          {/* Free Starter Tier */}
          <div className='bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col h-full hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(140,69,255,0.2)] hover:translate-y-[-5px]'>
            <div className='mb-4 flex justify-between items-start'>
              <h3 className='text-2xl font-semibold text-white'>Start Free</h3>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                Free Forever
              </span>
            </div>

            <div className='mb-6'>
              <div className='flex items-end'>
                <span className='text-5xl font-bold text-white'>$0</span>
              </div>
              <p className='text-white/60 mt-1'>No monthly fees</p>
            </div>

            <div className='flex-grow'>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>List unlimited products</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Basic company profile</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Direct buyer inquiries</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Standard support</span>
                </li>
              </ul>

              <p className='text-white/60 text-sm mb-6'>
                Pay only when you sell
              </p>
            </div>

            <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] w-full'>
              <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
              </div>
              <span>Get Started Free</span>
            </button>
          </div>

          {/* Success-Based Pricing Tier */}
          <div className='bg-black/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 flex flex-col h-full relative hover:border-purple-500/50 transition-all hover:shadow-[0_0_25px_rgba(140,69,255,0.3)] hover:translate-y-[-5px]'>
            {/* Popular badge */}
            <div className='absolute top-0 right-6 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
              Most Popular
            </div>

            <div className='mb-4 flex justify-between items-start'>
              <h3 className='text-2xl font-semibold text-white'>
                Pay Per Sale
              </h3>
            </div>

            <div className='mb-6'>
              <div className='flex items-end'>
                <span className='text-5xl font-bold text-white'>
                  2.5% - 4.9%
                </span>
              </div>
              <p className='text-white/60 mt-1'>Transaction fee only</p>
            </div>

            <div className='flex-grow'>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>No monthly fees</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>
                    Premium profile features
                  </span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Priority support</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Advanced analytics</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>
                    Marketing tools included
                  </span>
                </li>
              </ul>

              <p className='text-white/60 text-sm mb-6'>
                Volume discounts available
              </p>
            </div>

            <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] w-full'>
              <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
              </div>
              <span>Calculate Your Costs</span>
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className='bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col h-full hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(140,69,255,0.2)] hover:translate-y-[-5px]'>
            <div className='mb-4 flex justify-between items-start'>
              <h3 className='text-2xl font-semibold text-white'>
                Enterprise Solutions
              </h3>
            </div>

            <div className='mb-6'>
              <div className='flex items-end'>
                <span className='text-5xl font-bold text-white'>Custom</span>
              </div>
              <p className='text-white/60 mt-1'>Tailored to your needs</p>
            </div>

            <div className='flex-grow'>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>
                    Dedicated account manager
                  </span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Custom integrations</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>White-label options</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>API access</span>
                </li>
                <li className='flex items-start'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-white/80'>Priority listing</span>
                </li>
              </ul>

              <p className='text-white/60 text-sm mb-6'>
                Custom contract terms
              </p>
            </div>

            <button className='relative py-2 px-3 rounded-lg font-medium text-sm border border-white/30 hover:border-white/50 transition-colors w-full'>
              <span>Contact Sales</span>
            </button>
          </div>
        </div>

        {/* Interactive Pricing Calculator */}
        <div
          className='bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-16'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
          }}
        >
          <div className='text-center mb-8'>
            <h3 className='text-2xl md:text-3xl font-semibold text-white mb-2'>
              Estimate Your Costs
            </h3>
            <p className='text-white/70'>
              See exactly what you&apos;ll pay based on your sales volume
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Input Section */}
            <div className='space-y-6'>
              {/* Monthly Sales Volume */}
              <div>
                <label className='block text-white mb-2'>
                  Monthly Sales Volume
                </label>
                <input
                  type='range'
                  min='1000'
                  max='1000000'
                  step='1000'
                  value={monthlyVolume}
                  onChange={handleVolumeChange}
                  className='w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer'
                />
                <div className='flex justify-between text-white/60 text-sm mt-1'>
                  <span>$1K</span>
                  <span>{formatCurrency(monthlyVolume)}</span>
                  <span>$1M+</span>
                </div>
              </div>

              {/* Average Order Value */}
              <div>
                <label className='block text-white mb-2'>
                  Average Order Value
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-white/70'>
                    $
                  </span>
                  <input
                    type='number'
                    min='100'
                    value={averageOrder}
                    onChange={handleAverageOrderChange}
                    className='w-full py-2 pl-8 pr-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500'
                  />
                </div>
              </div>

              {/* Product Category */}
              <div>
                <label className='block text-white mb-2'>
                  Product Category
                </label>
                <select
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className='w-full py-2 px-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500'
                >
                  <option value='general'>General Products</option>
                  <option value='electronics'>Electronics</option>
                  <option value='textiles'>Textiles & Clothing</option>
                  <option value='agriculture'>Agricultural Products</option>
                  <option value='furniture'>Furniture & Home Goods</option>
                </select>
              </div>

              {/* Transaction Type */}
              <div>
                <label className='block text-white mb-2'>
                  Transaction Type
                </label>
                <div className='flex gap-4'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='transactionType'
                      value='international'
                      checked={transactionType === "international"}
                      onChange={() => setTransactionType("international")}
                      className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/30 bg-white/10'
                    />
                    <span className='ml-2 text-white'>International</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='transactionType'
                      value='local'
                      checked={transactionType === "local"}
                      onChange={() => setTransactionType("local")}
                      className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/30 bg-white/10'
                    />
                    <span className='ml-2 text-white'>Local</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className='bg-black/40 rounded-xl p-6 flex flex-col'>
              <h4 className='text-xl font-medium text-white mb-6'>
                Your Estimated Costs
              </h4>

              {/* Monthly Fee */}
              <div className='mb-6'>
                <p className='text-white/70 mb-1'>Monthly Fee</p>
                <div className='text-4xl font-bold text-white'>
                  {formatCurrency(calculationResult.monthlyFees)}
                </div>
                <p className='text-white/60 text-sm'>
                  at {calculationResult.effectiveRate.toFixed(1)}% effective
                  rate
                </p>
              </div>

              {/* Annual Savings */}
              <div className='mb-6 pb-6 border-b border-white/10'>
                <p className='text-white/70 mb-1'>
                  Annual Savings vs. Competitors
                </p>
                <div className='text-3xl font-bold text-green-400'>
                  {formatCurrency(calculationResult.annualSavings)}
                </div>
                <p className='text-white/60 text-sm'>
                  compared to 8% industry average
                </p>
              </div>

              {/* Volume Tiers */}
              <div className='mb-6'>
                <p className='text-white/70 mb-2'>Volume Discount Tiers</p>
                <ul className='text-sm text-white/60'>
                  <li className='flex justify-between'>
                    <span>$10K - $25K/month:</span>
                    <span>4.7% fee</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>$25K - $50K/month:</span>
                    <span>4.5% fee</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>$50K - $100K/month:</span>
                    <span>4.2% fee</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>$100K+/month:</span>
                    <span>3.9% fee or less</span>
                  </li>
                </ul>
              </div>

              <div className='mt-auto'>
                <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] w-full'>
                  <div className='absolute inset-0'>
                    <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                    <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                  </div>
                  <span>Start With These Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Transparency Elements */}
        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          {/* No Hidden Fees Badge */}
          <div className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center'>
            <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-medium text-white mb-2'>
              No Hidden Fees
            </h4>
            <p className='text-white/70'>
              What you see is what you pay. No setup fees, no monthly charges,
              no surprises.
            </p>
          </div>

          {/* Money-Back Guarantee */}
          <div className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center'>
            <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-medium text-white mb-2'>
              30-Day Guarantee
            </h4>
            <p className='text-white/70'>
              Not satisfied? We&apos;ll refund your transaction fees for the
              first 30 days.
            </p>
          </div>

          {/* Pay Only When You Succeed */}
          <div className='bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center'>
            <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h4 className='text-xl font-medium text-white mb-2'>
              Success-Based Pricing
            </h4>
            <p className='text-white/70'>
              You only pay when you make a sale. We succeed when you succeed.
            </p>
          </div>
        </div>

        {/* Full Pricing Link */}
        <div
          className='text-center'
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.8s",
          }}
        >
          <a
            href='#'
            className='text-purple-400 hover:text-purple-300 font-medium'
          >
            View Full Pricing Details →
          </a>
        </div>
      </div>
    </section>
  );
};
