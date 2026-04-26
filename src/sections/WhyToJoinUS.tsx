"use client";

import { CARD_ASSETS, CARD_ASSET_ORDER, type CardId } from "@/lib/card-assets";

/**
 * WhyToJoinUS — four feature value-prop cards.
 *
 * Card visuals are sourced from /src/lib/card-assets.ts.
 * To swap an illustration, update that registry — not this file.
 *
 * Section header copy shortened per brand audit (40–60% word reduction).
 * Old bitmap imports removed: infographicChart.jpg, businessInfo.jpg,
 * fastReach.png, aiPowered.png → replaced with brand SVG illustrations.
 */

interface CardData {
  id:      CardId;
  title:   string;
  text:    string;
  benefit: string;
  icon:    string;
}

const CARDS: CardData[] = [
  {
    id:      "buyers-access",
    title:   "Direct Access to U.S. Buyers",
    text:    "Reach verified importers, retailers, and distributors actively sourcing international products.",
    benefit: "Connect with 50,000+ active buyers",
    icon:    "🎯",
  },
  {
    id:      "market-analytics",
    title:   "Smart Market Analytics",
    text:    "AI-powered insights identify trending products and optimise your offerings for maximum profitability.",
    benefit: "Increase sales by 300% on average",
    icon:    "📊",
  },
  {
    id:      "zero-cost",
    title:   "Zero Cost to Start",
    text:    "Join with no fees, no commissions, and no subscription charges until you start selling.",
    benefit: "Save $10,000+ in setup costs",
    icon:    "💎",
  },
  {
    id:      "expert-support",
    title:   "Expert Trade Support",
    text:    "Dedicated trade experts fluent in Arabic and English guide your entire export journey.",
    benefit: "24/7 multilingual support",
    icon:    "🚀",
  },
];

export const WhyToJoinUS = () => {
  return (
    <section
      id="whytojoinus"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(140,69,255,0.10) 0%, rgba(0,0,0,0.95) 70%)",
      }}
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(140,69,255,0.3) 0%, transparent 70%)",
            top: "8%", left: "8%",
            animation: "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(140,69,255,0.4) 0%, transparent 70%)",
            bottom: "18%", right: "12%",
            animation: "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite 2s",
          }}
        />
      </div>

      <div className="container relative z-10">

        {/* ── Section header (copy reduced ~55%) ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold mb-4 text-white">
            Why 12,000+ Suppliers Chose Us
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Direct buyers. Real analytics. Zero fees.
            Everything you need to export — in one place.
          </p>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CARDS.map((card, index) => {
            const asset = CARD_ASSETS[card.id];

            return (
              <div
                key={card.id}
                className="group relative h-full transform transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015]"
                style={{
                  animationDelay:        `${index * 100}ms`,
                  animationFillMode:     "both",
                  animationName:         "slideInUp",
                  animationDuration:     "600ms",
                  animationTimingFunction: "ease-out",
                }}
              >
                <div
                  className="relative h-full border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-500/50"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(140,69,255,0.14) 0%, rgba(0,0,0,0.82) 52%, rgba(140,69,255,0.05) 100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(140,69,255,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* ── Card illustration ── */}
                  <div className="relative w-full aspect-[8/5] overflow-hidden rounded-t-2xl bg-black/30">
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      width={asset.width}
                      height={asset.height}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Bottom gradient so card text reads against the illustration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                    {/* Icon badge — top-left, overlaid on illustration */}
                    <div
                      className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(140,69,255,0.35), rgba(140,69,255,0.92))",
                        boxShadow: "0 4px 14px rgba(140,69,255,0.32)",
                      }}
                    >
                      <span
                        className="text-lg"
                        style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}
                      >
                        {card.icon}
                      </span>
                    </div>
                  </div>

                  {/* ── Card text ── */}
                  <div className="relative z-10 p-6">
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-brand-400">
                      {card.title}
                    </h4>

                    <p className="text-white/65 text-sm leading-relaxed mb-4">
                      {card.text}
                    </p>

                    {/* Benefit badge */}
                    <div
                      className="inline-flex items-center px-3 py-1.5 rounded-full border border-brand-500 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, #8c45ff, rgba(140,69,255,0.82))",
                        boxShadow: "0 4px 14px rgba(140,69,255,0.28)",
                      }}
                    >
                      <span className="text-white font-semibold text-xs">
                        {card.benefit}
                      </span>
                    </div>
                  </div>

                  {/* Hover chevron indicator */}
                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-500/20 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
                    style={{ opacity: 0, transform: "scale(0.75) rotate(-90deg)" }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="#8c45ff" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
