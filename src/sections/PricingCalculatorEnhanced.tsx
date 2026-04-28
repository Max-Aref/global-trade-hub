"use client";

import { useMemo, useRef, useEffect, useState, memo } from "react";

type ProductCategory =
  | "general"
  | "electronics"
  | "textiles"
  | "agriculture"
  | "furniture";
type TransactionType = "international" | "local";

type Inputs = {
  monthlyVolume: number;
  averageOrder: number; // reserved for future use/visualizations
  productCategory: ProductCategory;
  transactionType: TransactionType;
};

type CalcResult = {
  monthlyFees: number;
  effectiveRate: number;
  annualSavings: number;
};

const BASE_CATEGORY_RATES: Record<ProductCategory, number> = {
  general: 4.9,
  electronics: 4.5,
  textiles: 3.9,
  agriculture: 3.5,
  furniture: 4.2,
};

const COMPETITOR_RATE = 8.0;
const MIN_RATE = 2.5;

function usePricingCalculation({
  monthlyVolume,
  productCategory,
  transactionType,
}: Inputs) {
  const result = useMemo<CalcResult>(() => {
    const regionModifier = transactionType === "international" ? 0 : -0.5;
    const baseRate =
      (BASE_CATEGORY_RATES[productCategory] ?? 4.9) + regionModifier;

    // volume discount tiers
    const tiers = [
      { min: 1_000_000, discount: 2.4 },
      { min: 500_000, discount: 2.0 },
      { min: 250_000, discount: 1.5 },
      { min: 100_000, discount: 1.0 },
      { min: 50_000, discount: 0.7 },
      { min: 25_000, discount: 0.4 },
      { min: 10_000, discount: 0.2 },
    ];
    const volumeDiscount =
      tiers.find((t) => monthlyVolume >= t.min)?.discount ?? 0;
    const effectiveRate = Math.max(baseRate - volumeDiscount, MIN_RATE);
    const monthlyFees = monthlyVolume * (effectiveRate / 100);
    const annualSavings =
      monthlyVolume * 12 * ((COMPETITOR_RATE - effectiveRate) / 100);
    return { monthlyFees, effectiveRate, annualSavings };
  }, [monthlyVolume, productCategory, transactionType]);

  return result;
}

// Tiny animated number hook for smooth value transitions
function useAnimatedNumber(value: number, duration = 400) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const from = fromRef.current;
    const delta = value - from;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(from + delta * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = value;
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return display;
}

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

export const PricingCalculatorEnhanced = memo(
  function PricingCalculatorEnhanced() {
    const [monthlyVolume, setMonthlyVolume] = useState<number>(10000);
    const [averageOrder, setAverageOrder] = useState<number>(500);
    const [productCategory, setProductCategory] =
      useState<ProductCategory>("general");
    const [transactionType, setTransactionType] =
      useState<TransactionType>("international");

    const { monthlyFees, effectiveRate, annualSavings } = usePricingCalculation(
      {
        monthlyVolume,
        averageOrder,
        productCategory,
        transactionType,
      }
    );

    // Animated display values
    const animatedMonthly = useAnimatedNumber(monthlyFees);
    const animatedSavings = useAnimatedNumber(annualSavings);
    const animatedRate = useAnimatedNumber(effectiveRate);

    const headerRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const el = headerRef.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          setInView(entries[0]?.isIntersecting ?? false);
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);

    const competitorPct = Math.max(
      0,
      Math.min(100, (animatedRate / COMPETITOR_RATE) * 100)
    );

    return (
      <section className='py-20 md:py-24'>
        <div className='container pricing-calculator-container'>
          {/* Header */}
          <header
            ref={headerRef as any}
            className='text-center mb-10 md:mb-12'
            style={{
              opacity: inView ? 1 : 0,
              transform: `translateY(${inView ? 0 : 12}px)`,
              transition: "opacity .6s ease, transform .6s ease",
            }}
          >
            <h2 className='text-4xl md:text-5xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300'>
              Estimate Your Costs
            </h2>
            <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto mt-3'>
              Real-time, transparent pricing with volume-based discounts.
            </p>
          </header>

          {/* Card */}
          <div className='relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8'>
            {/* gradient border accent */}
            <div className='pointer-events-none absolute inset-0 rounded-xl [mask-image:linear-gradient(to_bottom,black,transparent)] border border-white/20'></div>
            <div className='pointer-events-none absolute inset-0 rounded-xl [mask-image:linear-gradient(to_top,black,transparent)] border border-white/40'></div>
            <div className='pointer-events-none absolute inset-0 rounded-xl shadow-[0_0_10px_rgba(140,69,255,.5)_inset]'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Inputs */}
              <div className='space-y-6'>
                {/* Monthly Sales Volume */}
                <div>
                  <label
                    htmlFor='monthlyVolume'
                    className='block text-white mb-2'
                  >
                    Monthly Sales Volume
                  </label>
                  <input
                    id='monthlyVolume'
                    type='range'
                    min={1000}
                    max={1_000_000}
                    step={1000}
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(parseInt(e.target.value))}
                    className='w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer'
                    aria-valuemin={1000}
                    aria-valuemax={1_000_000}
                    aria-valuenow={monthlyVolume}
                    aria-label='Monthly sales volume'
                  />
                  <div className='flex justify-between text-white/60 text-sm mt-1'>
                    <span>$1K</span>
                    <span>{formatCurrency(monthlyVolume)}</span>
                    <span>$1M+</span>
                  </div>
                </div>

                {/* Average Order Value */}
                <div>
                  <label
                    htmlFor='averageOrder'
                    className='block text-white mb-2'
                  >
                    Average Order Value
                  </label>
                  <div className='relative'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-white/70'>
                      $
                    </span>
                    <input
                      id='averageOrder'
                      type='number'
                      min={100}
                      value={averageOrder}
                      onChange={(e) =>
                        setAverageOrder(parseInt(e.target.value))
                      }
                      className='w-full py-2 pl-8 pr-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500'
                      aria-label='Average order value'
                    />
                  </div>
                </div>

                {/* Product Category */}
                <div>
                  <label
                    htmlFor='productCategory'
                    className='block text-white mb-2'
                  >
                    Product Category
                  </label>
                  <select
                    id='productCategory'
                    value={productCategory}
                    onChange={(e) =>
                      setProductCategory(e.target.value as ProductCategory)
                    }
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
                  <span className='block text-white mb-2'>
                    Transaction Type
                  </span>
                  <div
                    className='flex gap-4'
                    role='radiogroup'
                    aria-label='Transaction type'
                  >
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

              {/* Results */}
              <div
                className='bg-black/40 rounded-xl p-6 flex flex-col'
                aria-live='polite'
              >
                <h4 className='text-xl font-medium text-white mb-6'>
                  Your Estimated Costs
                </h4>

                {/* Monthly Fee */}
                <div className='mb-6'>
                  <p className='text-white/70 mb-1'>Monthly Fee</p>
                  <div className='text-4xl font-bold text-white'>
                    {formatCurrency(Math.round(animatedMonthly))}
                  </div>
                  <p className='text-white/60 text-sm'>
                    at {animatedRate.toFixed(1)}% effective rate
                  </p>
                </div>

                {/* Annual Savings */}
                <div className='mb-6 pb-6 border-b border-white/10'>
                  <p className='text-white/70 mb-1'>
                    Annual Savings vs. Competitors
                  </p>
                  <div className='text-3xl font-bold text-green-400'>
                    {formatCurrency(Math.round(animatedSavings))}
                  </div>
                  <p className='text-white/60 text-sm'>
                    compared to 8% industry average
                  </p>
                </div>

                {/* Rate comparison bar */}
                <div>
                  <p className='text-white/70 mb-2'>
                    Your rate vs. industry average
                  </p>
                  <div className='h-2 w-full bg-white/10 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-purple-500 to-purple-300'
                      style={{
                        width: `${competitorPct}%`,
                        transition: "width 400ms ease",
                      }}
                    />
                  </div>
                  <div className='flex justify-between text-white/60 text-xs mt-1'>
                    <span>{animatedRate.toFixed(1)}%</span>
                    <span>{COMPETITOR_RATE.toFixed(1)}%</span>
                  </div>
                </div>

                <div className='mt-auto'>
                  <button
                    className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] w-full focus:outline-none focus:ring-2 focus:ring-purple-500/60'
                    aria-label='Start with these settings'
                  >
                    <div className='absolute inset-0 pointer-events-none'>
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
        </div>
      </section>
    );
  }
);

export default PricingCalculatorEnhanced;
