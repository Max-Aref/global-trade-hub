"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaUserCheck,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaStar,
} from "react-icons/fa";
import gridLinesBg from "../assets/grid-lines.png";

export const PlatformStatistics = () => {
  // Intersection Observer state
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Platform statistics data
  const statistics = [
    {
      icon: FaUserCheck,
      value: "50K+",
      label: "Verified Manufacturers",
      description: "Pre-vetted and quality assured suppliers",
    },
    {
      icon: FaChartLine,
      value: "$2.5B+",
      label: "Annual Trade Volume",
      description: "Facilitating global commerce",
    },
    {
      icon: FaGlobe,
      value: "120+",
      label: "Countries Served",
      description: "Truly global reach",
    },
    {
      icon: FaHandshake,
      value: "98%",
      label: "Success Rate",
      description: "Completed transactions",
    },
    {
      icon: FaStar,
      value: "4.8/5",
      label: "Customer Satisfaction",
      description: "Based on 10K+ reviews",
    },
  ];

  return (
    <section ref={sectionRef} className='relative py-24 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/0 via-purple-500/5 to-black/0' />
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `url(${gridLinesBg.src})`,
          opacity: 0.1,
        }}
      />

      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div
          className='text-center mb-16'
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400 mb-4'>
            Powering Global Trade
          </h2>
          <p className='text-lg md:text-xl text-white/70 max-w-3xl mx-auto'>
            Our platform connects manufacturers worldwide, facilitating seamless
            international trade and growth
          </p>
        </div>

        {/* Statistics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className='bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(140,69,255,0.2)] hover:translate-y-[-5px]'
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s ease-out ${
                  index * 0.1
                }s, transform 0.8s ease-out ${index * 0.1}s`,
              }}
            >
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-lg bg-white/10'>
                  <stat.icon className='h-6 w-6 text-purple-400' />
                </div>
                <div>
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-lg font-medium text-white mb-2'>
                    {stat.label}
                  </div>
                  <p className='text-white/60'>{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
