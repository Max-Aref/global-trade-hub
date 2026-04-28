import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

/**
 * GTH StatsCard Component
 *
 * Used on dashboard overview and marketing stats bars.
 * Replaces ad-hoc metric cards scattered across CompanyProfile and PlatformStatistics.
 */

interface Trend {
  value:     number;
  direction: "up" | "down";
}

type StatsCardVariant = "default" | "brand" | "dark";

interface StatsCardProps {
  value:      string | number;
  label:      string;
  labelAr?:   string;
  icon?:      React.ReactNode;
  trend?:     Trend;
  variant?:   StatsCardVariant;
  sublabel?:  string;
  className?: string;
}

const VARIANT_CLASSES: Record<StatsCardVariant, string> = {
  default:
    "bg-gradient-to-br from-brand-950/50 to-brand-800/50 border border-white/10 hover:border-brand-500/30",
  brand:
    "bg-gradient-to-br from-brand-700 to-brand-500 border border-brand-400/30",
  dark:
    "bg-black/30 border border-white/10 hover:border-white/20",
};

export function StatsCard({
  value,
  label,
  labelAr,
  icon,
  trend,
  variant   = "default",
  sublabel,
  className = "",
}: StatsCardProps) {
  const trendColor =
    !trend             ? ""
    : trend.direction === "up"  ? "text-success"
    : "text-error";

  const valueColor =
    variant === "brand" ? "text-white" : "text-brand-400";

  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-brand-500/20 border border-white/10 flex items-center justify-center shrink-0">
            <span className="text-brand-400 text-xl">{icon}</span>
          </div>
        )}

        {trend && (
          <span
            className={`flex items-center gap-1 text-sm font-medium ${trendColor}`}
            aria-label={`${trend.direction === "up" ? "Increased" : "Decreased"} by ${trend.value}%`}
          >
            {trend.direction === "up" ? (
              <FaArrowUp className="text-xs" />
            ) : (
              <FaArrowDown className="text-xs" />
            )}
            {trend.value}%
          </span>
        )}
      </div>

      <div className={`text-3xl font-bold mb-1 tracking-tight ${valueColor}`}>
        {value}
      </div>

      <div className="text-sm text-white/60">{label}</div>

      {labelAr && (
        <div className="text-xs text-white/40 font-arabic mt-0.5" dir="rtl">
          {labelAr}
        </div>
      )}

      {sublabel && (
        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40">
          {sublabel}
        </div>
      )}
    </div>
  );
}
