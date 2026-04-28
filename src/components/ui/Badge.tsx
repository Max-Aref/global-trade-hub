import React from "react";
import { FaCheckCircle } from "react-icons/fa";

/**
 * GTH Badge Component
 *
 * Used for status labels, verified indicators, and categorical tags.
 * The "verified" variant renders the موثّق · VERIFIED badge used on supplier profiles.
 * Never use ad-hoc <span> elements with inline color styles for status indicators.
 */

export type BadgeVariant =
  | "brand"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "verified"
  | "premium";

export type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  variant:   BadgeVariant;
  size?:     BadgeSize;
  icon?:     React.ReactNode;
  dot?:      boolean;
  className?: string;
  children:  React.ReactNode;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  brand:
    "bg-brand-500/20 border border-brand-500/40 text-brand-300",
  success:
    "bg-success/10 border border-success/40 text-success",
  warning:
    "bg-warning/10 border border-warning/40 text-warning",
  error:
    "bg-error/10 border border-error/40 text-error",
  info:
    "bg-info/10 border border-info/40 text-info",
  neutral:
    "bg-white/5 border border-white/15 text-white/70",
  verified:
    "bg-success/10 border-[1.5px] border-success/50 text-success font-bold tracking-wide",
  premium:
    "bg-gradient-to-r from-brand-500 to-brand-400 border border-brand-400 text-white font-semibold",
};

const DOT_CLASSES: Record<BadgeVariant, string> = {
  brand:    "bg-brand-500",
  success:  "bg-success",
  warning:  "bg-warning",
  error:    "bg-error",
  info:     "bg-info",
  neutral:  "bg-white/50",
  verified: "bg-success",
  premium:  "bg-white",
};

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "px-2    py-0.5 text-xs  gap-1   rounded-full",
  md: "px-2.5  py-1   text-xs  gap-1.5 rounded-full",
  lg: "px-3    py-1.5 text-sm  gap-2   rounded-full",
};

export function Badge({
  variant,
  size = "md",
  icon,
  dot = false,
  className = "",
  children,
}: BadgeProps) {
  const isVerified = variant === "verified";

  return (
    <span
      className={`inline-flex items-center ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${DOT_CLASSES[variant]}`}
          aria-hidden="true"
        />
      )}

      {!dot && isVerified && (
        <FaCheckCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
      )}

      {!dot && !isVerified && icon && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}

      <span>{children}</span>

      {isVerified && (
        <span className="sr-only"> — verified supplier</span>
      )}
    </span>
  );
}
