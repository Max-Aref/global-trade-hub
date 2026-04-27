"use client";

import React from "react";
import Link from "next/link";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

/**
 * GTH Logo — Global Trade Hub reusable brand mark.
 *
 * Renders the original bordered-box globe icon with "Global Trade Hub"
 * in the same brand-purple (#8c45ff) as the icon.
 *
 * Usage:
 *   <Logo href="/" />                         — icon + name, links home
 *   <Logo size="sm" />                        — smaller (footer)
 *   <Logo showWordmark={false} />             — icon-only (collapsed sidebar)
 *
 * The `variant` prop is accepted for backwards-compat but has no effect —
 * icon and text are always #8c45ff to match each other.
 *
 * IMPORTANT — colour is set via text-[#8c45ff] (Tailwind arbitrary value),
 * NOT text-brand-500. Arbitrary values are unconditionally included in the
 * CSS output, which prevents the purple→white flash seen when the custom
 * colour token is missing from a stale JIT cache.
 */

export type LogoVariant =
  | "primary"
  | "white"
  | "brand"
  | "dark"
  | "icon"
  | "icon-white";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?:      LogoVariant; // accepted for API compatibility, no visual effect
  size?:         LogoSize;
  showWordmark?: boolean;
  className?:    string;
  href?:         string;
  onClick?:      () => void;
}

/** Outer bordered-box: size = the container that wraps the icon */
const BOX_CLS: Record<LogoSize, string> = {
  xs: "h-8 w-8 rounded-md p-1",
  sm: "h-10 w-10 rounded-lg p-1.5",
  md: "h-12 w-12 rounded-lg p-2",
  lg: "h-16 w-16 rounded-lg p-2",  // exact original header size
  xl: "h-20 w-20 rounded-xl p-3",
};

/** Globe icon size inside the box */
const ICON_CLS: Record<LogoSize, string> = {
  xs: "h-5 w-5",
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10", // exact original header icon size
  xl: "h-12 w-12",
};

/** Brand-name text next to the box */
const TEXT_CLS: Record<LogoSize, string> = {
  xs: "text-xs font-medium",
  sm: "text-sm font-medium",
  md: "text-sm font-semibold",
  lg: "text-base font-semibold",
  xl: "text-lg font-bold",
};

export function Logo({
  size         = "md",
  showWordmark = true,
  className    = "",
  href,
  onClick,
}: LogoProps) {
  const inner = (
    <span
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      onClick={onClick}
    >
      {/* ── Bordered box — the original "old logo" container ── */}
      {/*
        hover: is placed directly on the box element (not via a group parent)
        to match the original implementation and avoid group-hover CSS
        generation issues in JIT mode.
      */}
      <span
        className={`
          ${BOX_CLS[size]}
          inline-flex items-center justify-center shrink-0
          border border-[#2A2A2A]
          hover:border-[#8c45ff]/40
          transition-colors duration-300
        `}
      >
        {/*
          text-[#8c45ff] — arbitrary value, always emitted by Tailwind JIT.
          Do NOT change to text-brand-500: the custom token is absent from
          stale caches and causes the purple→white flash on refresh.
        */}
        <LiaGlobeAmericasSolid
          className={`${ICON_CLS[size]} text-[#8c45ff]`}
          aria-hidden="true"
        />
      </span>

      {/* ── Brand name — same #8c45ff as the icon ── */}
      {showWordmark && (
        <span
          className={`${TEXT_CLS[size]} leading-none whitespace-nowrap text-[#8c45ff]`}
        >
          Global Trade Hub
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Global Trade Hub — Home">
        {inner}
      </Link>
    );
  }

  return inner;
}
