"use client";
import React, { useState } from "react";
import {
  FaBuilding,
  FaStore,
  FaIndustry,
  FaGlobe,
  FaCheckCircle,
  FaChartLine,
  FaStar,
  FaMapMarkedAlt,
  FaUsers,
  FaCertificate,
  FaHandshake,
  FaTrophy,
} from "react-icons/fa";
import Button from "@/components/Button";

interface BuyerCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  count: string;
  description: string;
  highlights: string[];
  badge: string;
  stats: {
    avgOrder: string;
    regions: string;
    growth: string;
  };
}

interface RegionData {
  name: string;
  buyers: string;
  volume: string;
  growth: string;
}

export const BuyerNetworkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("enterprise");

  const buyerCategories: BuyerCategory[] = [
    {
      id: "enterprise",
      title: "Fortune 500 & Enterprise",
      icon: FaBuilding,
      count: "500+",
      description:
        "Fortune 500 companies and large enterprises with multi-million dollar procurement budgets",
      highlights: [
        "Average order value: $250K+",
        "Multi-million dollar procurement budgets",
        "Long-term partnership opportunities",
        "Verified financial capacity",
      ],
      badge: "Premium Verified",
      stats: {
        avgOrder: "$250K+",
        regions: "89 countries",
        growth: "+45% YoY",
      },
    },
    {
      id: "government",
      title: "Government & Public Sector",
      icon: FaIndustry,
      count: "1,200+",
      description:
        "Federal, state, and municipal buyers with transparent procurement processes",
      highlights: [
        "Federal, state, and municipal buyers",
        "Transparent procurement processes",
        "Compliance-ready purchasing departments",
        "Official government buyer verification",
      ],
      badge: "Government Verified",
      stats: {
        avgOrder: "$180K+",
        regions: "89 countries",
        growth: "+32% YoY",
      },
    },
    {
      id: "retail",
      title: "Retail Chains & Distributors",
      icon: FaStore,
      count: "5,000+",
      description:
        "National and regional chain stores, wholesale distribution partners",
      highlights: [
        "National and regional chain stores",
        "Wholesale distribution partners",
        "E-commerce platform buyers",
        "Reaching 50M+ end customers",
      ],
      badge: "Retail Verified",
      stats: {
        avgOrder: "$85K+",
        regions: "120+ countries",
        growth: "+58% YoY",
      },
    },
    {
      id: "sme",
      title: "Small to Medium Enterprises",
      icon: FaChartLine,
      count: "25,000+",
      description:
        "Growing SME buyers with agile decision-making and innovative requirements",
      highlights: [
        "Agile decision-making processes",
        "Innovative product requirements",
        "Flexible partnership terms",
        "72% respond within 24 hours",
      ],
      badge: "Fast Growing",
      stats: {
        avgOrder: "$35K+",
        regions: "95+ countries",
        growth: "+73% YoY",
      },
    },
  ];

  const regionData: RegionData[] = [
    {
      name: "North America",
      buyers: "15,000+",
      volume: "$800M+",
      growth: "+42%",
    },
    { name: "Europe", buyers: "12,000+", volume: "$650M+", growth: "+38%" },
    {
      name: "Asia-Pacific",
      buyers: "18,000+",
      volume: "$1.1B+",
      growth: "+65%",
    },
    {
      name: "Middle East & Africa",
      buyers: "6,000+",
      volume: "$300M+",
      growth: "+55%",
    },
    {
      name: "Latin America",
      buyers: "4,000+",
      volume: "$200M+",
      growth: "+48%",
    },
  ];

  const qualityMetrics = [
    { label: "Supplier Satisfaction", value: "4.7/5.0", icon: FaStar },
    { label: "On-time Payment Rate", value: "98.5%", icon: FaCheckCircle },
    { label: "Professional Communication", value: "95%", icon: FaHandshake },
    { label: "Repeat Business Rate", value: "78%", icon: FaTrophy },
  ];

  const successStories = [
    {
      industry: "Manufacturing Company, Germany",
      quote:
        "We've sourced $2M+ in electronics components through this platform",
      results: [
        "40% cost reduction compared to traditional sourcing",
        "15+ reliable suppliers identified in Asia",
        "99.2% delivery success rate",
      ],
    },
    {
      industry: "Retail Chain, USA",
      quote:
        "Found suppliers for our private label products that exceeded expectations",
      results: [
        "25+ new suppliers onboarded",
        "30% faster time-to-market",
        "$5M+ annual sourcing volume",
      ],
    },
    {
      industry: "Government Agency, Canada",
      quote:
        "The verification process gave us confidence in new international suppliers",
      results: [
        "100% compliance with procurement standards",
        "20+ verified suppliers sourced",
        "$3M+ in cost savings achieved",
      ],
    },
  ];

  return (
    <section className='py-20 md:py-24 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        {/* CHANGED: Updated background gradient from blue (#2563eb) to brand color (#4a208a) */}
        <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(74,32,138,.15)_15%,rgb(14,0,36,.3)_78%,transparent)]'></div>
        <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'></div>
      </div>

      <div className='container relative z-10'>
        <div className='max-w-7xl mx-auto'>
          {/* Main Heading */}
          <div className='text-center mb-16'>
            <h2 className='text-5xl md:text-6xl font-medium tracking-tighter mb-6'>
              Connect with Premium Global Buyers
            </h2>
            <p className='text-white/70 text-lg md:text-xl max-w-3xl mx-auto tracking-tight'>
              Join the network that serious buyers trust. Our pre-verified buyer
              community spans Fortune 500 companies to fast-growing SMEs across
              150+ countries.
            </p>
          </div>

          {/* Buyer Categories Showcase */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-medium mb-4'>
                Who Will Buy Your Products?
              </h3>
              <p className='text-white/70 text-lg max-w-2xl mx-auto'>
                Explore our diverse buyer network across industries and regions
              </p>
            </div>

            {/* Category Tabs */}
            <div className='flex flex-wrap justify-center gap-2 mb-8'>
              {buyerCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    activeCategory === category.id
                      ? "bg-[#4a208a] text-white shadow-lg" // CHANGED: Blue to brand color
                      : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <category.icon className='inline-block w-4 h-4 mr-2' />
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Details */}
            {buyerCategories.map((category) => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === category.id ? "block" : "hidden"
                }`}
              >
                <div className='border border-white/15 rounded-xl p-8 bg-white/5 backdrop-blur-sm'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                    <div>
                      <div className='flex items-center gap-4 mb-6'>
                        {/* CHANGED: Background and icon color from blue to brand color */}
                        <div className='h-16 w-16 border border-white/20 rounded-xl inline-flex items-center justify-center bg-[#4a208a]/10'>
                          <category.icon className='h-8 w-8 text-[#4a208a]' />
                        </div>
                        <div>
                          <h4 className='text-2xl font-medium mb-2'>
                            {category.count} Companies
                          </h4>
                          <span className='px-3 py-1 bg-[#10b981]/20 text-[#10b981] rounded-full text-sm font-medium'>
                            {category.badge}
                          </span>
                        </div>
                      </div>
                      <p className='text-white/70 text-lg mb-6'>
                        {category.description}
                      </p>
                      <ul className='space-y-3'>
                        {category.highlights.map((highlight, index) => (
                          <li key={index} className='flex items-center gap-3'>
                            <FaCheckCircle className='h-4 w-4 text-[#10b981] flex-shrink-0' />
                            <span className='text-white/80'>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                      {[
                        {
                          label: "Average Order Value",
                          value: category.stats.avgOrder,
                          color: "#4a208a", // CHANGED: Blue to brand color
                        },
                        {
                          label: "Active Regions",
                          value: category.stats.regions,
                          color: "#10b981",
                        },
                        {
                          label: "Annual Growth",
                          value: category.stats.growth,
                          color: "#f59e0b",
                        },
                      ].map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className='border border-white/10 rounded-lg p-6 bg-white/5'
                        >
                          <div className='text-center'>
                            <div
                              className={`text-3xl font-bold mb-2`}
                              style={{ color: stat.color }}
                            >
                              {stat.value}
                            </div>
                            <div className='text-white/70'>{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Geographic Distribution */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-medium mb-4'>
                Global Buyer Network
              </h3>
              <p className='text-white/70 text-lg max-w-2xl mx-auto'>
                Active buyers across all major markets worldwide
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
              {regionData.map((region, index) => (
                <div
                  key={index}
                  className='border border-white/15 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group'
                >
                  <div className='text-center'>
                    {/* CHANGED: Icon color from blue to brand color */}
                    <FaMapMarkedAlt className='h-8 w-8 text-[#4a208a] mx-auto mb-4 group-hover:scale-110 transition-transform' />
                    <h4 className='font-medium mb-3'>{region.name}</h4>
                    <div className='space-y-2 text-sm'>
                      <div className='text-white/70'>
                        <span className='font-medium text-white'>
                          {region.buyers}
                        </span>{" "}
                        Active Buyers
                      </div>
                      <div className='text-white/70'>
                        <span className='font-medium text-white'>
                          {region.volume}
                        </span>{" "}
                        Annual Volume
                      </div>
                      <div className='text-[#10b981] font-medium'>
                        {region.growth} Growth
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Metrics */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-medium mb-4'>
                Buyer Quality Guarantee
              </h3>
              <p className='text-white/70 text-lg max-w-2xl mx-auto'>
                Our verification system ensures you connect with serious,
                qualified buyers
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {qualityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className='border border-white/15 rounded-xl p-6 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-all group'
                >
                  {/* CHANGED: Icon color from blue to brand color */}
                  <metric.icon className='h-10 w-10 text-[#4a208a] mx-auto mb-4 group-hover:scale-110 transition-transform' />
                  <div className='text-3xl font-bold text-white mb-2'>
                    {metric.value}
                  </div>
                  <div className='text-white/70 text-sm'>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className='mb-16'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-medium mb-4'>
                Buyer Success Stories
              </h3>
              <p className='text-white/70 text-lg max-w-2xl mx-auto'>
                Real results from companies that source through our platform
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className='border border-white/15 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all'
                >
                  <div className='mb-6'>
                    <FaCertificate className='h-8 w-8 text-[#f59e0b] mb-4' />
                    {/* CHANGED: Text color from blue to brand color */}
                    <h4 className='font-medium mb-2 text-[#4a208a]'>
                      {story.industry}
                    </h4>
                    <blockquote className='text-white/90 italic text-lg mb-4'>
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className='space-y-2'>
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className='flex items-start gap-3'>
                        <FaCheckCircle className='h-4 w-4 text-[#10b981] flex-shrink-0 mt-0.5' />
                        <span className='text-white/70 text-sm'>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity & CTA */}
          {/* CHANGED: Background gradient from blue to brand color */}
          <div className='border border-white/15 rounded-xl p-8 bg-gradient-to-r from-[#4a208a]/10 via-transparent to-[#10b981]/10 backdrop-blur-sm text-center'>
            <div className='mb-6'>
              {/* CHANGED: Icon color from blue to brand color */}
              <FaUsers className='h-12 w-12 text-[#4a208a] mx-auto mb-4' />
              <h3 className='text-2xl md:text-3xl font-medium mb-4'>
                Join 55,000+ Active Buyers Today
              </h3>
              <p className='text-white/70 text-lg max-w-2xl mx-auto mb-6'>
                1,200+ buyers posted RFQs this week. 25,000+ purchase requests
                monthly. Average 73% response rate to supplier quotes.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button>Access Buyer Network</Button>
              <button className='relative py-3 px-8 rounded-lg font-medium text-lg border border-white/30 hover:border-white/50 transition-colors'>
                Browse Buyer Industries
              </button>
            </div>

            <div className='mt-8 text-sm text-white/60'>
              <FaGlobe className='inline-block w-4 h-4 mr-2' />
              Network growing by 500+ verified buyers monthly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerNetworkShowcase;
