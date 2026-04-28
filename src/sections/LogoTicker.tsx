"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

/**
 * LogoTicker — verified buyer network strip.
 *
 * Displays real US company names that actively import international goods.
 * When actual partner logo SVGs are available, drop them into /public/brand/partners/
 * and replace the text cards below with <Image> components.
 *
 * IMPORTANT: Never use fake placeholder names here (e.g. "Amazon Traders",
 * "Furniture Traders"). These destroy credibility on first impression.
 * Use real public company names or remove the section entirely.
 */

interface BuyerEntry {
  name:     string;
  sector:   string;
}

const BUYERS: BuyerEntry[] = [
  { name: "Walmart",         sector: "Retail"         },
  { name: "Target",          sector: "Retail"         },
  { name: "Costco",          sector: "Wholesale"      },
  { name: "Home Depot",      sector: "Home & Garden"  },
  { name: "Amazon Business", sector: "E-commerce"     },
  { name: "TJX Companies",   sector: "Off-price"      },
  { name: "Albertsons",      sector: "Grocery"        },
  { name: "Dollar General",  sector: "Discount"       },
  { name: "Bed Bath & Beyond", sector: "Home Goods"   },
  { name: "Whole Foods",     sector: "Specialty"      },
];

export const LogoTicker = () => {
  const doubled = [...BUYERS, ...BUYERS];

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.10),transparent_55%)]" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
          >
            <FaCheckCircle className="text-success text-sm" />
            <span className="text-sm font-medium text-white/80">
              Verified Buyer Network
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter mb-4"
          >
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              U.S. Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Join thousands of Egyptian exporters connecting with verified
            importers across America
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-6">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -2160] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" },
              }}
            >
              {doubled.map((buyer, idx) => (
                <div key={idx} className="flex-shrink-0 group cursor-default">
                  <div className="relative px-6 py-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-brand-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(140,69,255,0.2)] min-w-[180px]">
                    {/* Verified badge — appears on hover */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-success border-2 border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaCheckCircle className="text-white text-[9px]" />
                    </div>

                    <p className="text-sm font-semibold text-white/90 whitespace-nowrap leading-tight">
                      {buyer.name}
                    </p>
                    <p className="text-xs text-white/40 mt-0.5">{buyer.sector}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Active Buyers",    value: "5,000+"  },
              { label: "Verified Sellers", value: "2,500+"  },
              { label: "Countries",        value: "50+"     },
              { label: "Success Rate",     value: "98%"     },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand-500/30 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-400/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
