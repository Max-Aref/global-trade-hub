"use client";

import React from "react";

/**
 * GTH Button Component — the only button primitive in the app.
 *
 * All interactive button elements must use this component.
 * Raw <button> elements are prohibited outside this file (see .eslintrc).
 *
 * Variants map to the brand system:
 *   primary   → brand gradient CTA (hero / section CTAs)
 *   secondary → subtle brand-tinted fill
 *   outline   → brand-colored border, transparent fill
 *   ghost     → no background, text only (nav / secondary actions)
 *   danger    → error red (destructive actions)
 *   link      → underline text link style
 *
 * The "primary" variant exactly replicates the existing app-wide button style
 * so existing usages of the old Button component keep their appearance.
 */

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
export type ButtonSize    = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  loading?:   boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "py-1 px-2.5 text-xs rounded-md gap-1.5 min-h-[28px]",
  sm: "py-1.5 px-3   text-sm rounded-lg gap-2  min-h-[36px]",
  md: "py-2   px-3   text-sm rounded-lg gap-2  min-h-[40px]",
  lg: "py-2.5 px-5   text-base rounded-lg gap-2 min-h-[48px]",
  xl: "py-3   px-6   text-lg  rounded-xl gap-2.5 min-h-[56px]",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "relative font-medium " +
    "bg-gradient-to-b from-brand-950 to-brand-700 " +
    "shadow-brand-sm hover:shadow-brand-md text-white " +
    "transition-shadow duration-200",

  secondary:
    "font-medium bg-brand-700/20 hover:bg-brand-700/30 " +
    "text-brand-300 border border-brand-700/40 " +
    "transition-colors duration-200",

  outline:
    "font-medium border border-brand-500 text-brand-400 " +
    "hover:bg-brand-500/10 " +
    "transition-colors duration-200",

  ghost:
    "font-medium text-white/70 hover:text-white hover:bg-white/10 " +
    "transition-colors duration-200",

  danger:
    "font-medium bg-error hover:bg-error-dark text-white " +
    "transition-colors duration-200",

  link:
    "font-medium text-brand-400 underline-offset-4 hover:underline " +
    "hover:text-brand-300 p-0 transition-colors duration-200",
};

/** Decorative glass border layers — only for the primary variant */
function PrimaryDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute inset-0 shadow-brand-inset rounded-lg" />
    </div>
  );
}

/** Spinner icon for loading state */
function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function Button({
  variant   = "primary",
  size      = "md",
  loading   = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  className = "",
  type      = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const base = [
    "inline-flex items-center justify-center",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    fullWidth  ? "w-full" : "",
    isDisabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} disabled={isDisabled} className={base} {...rest}>
      {variant === "primary" && <PrimaryDecor />}

      {/* Content layer — sits above the decorative overlay */}
      <span className="relative inline-flex items-center justify-center gap-[inherit]">
        {loading ? (
          <Spinner />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}

        {children && <span>{children}</span>}

        {!loading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </span>
    </button>
  );
}
