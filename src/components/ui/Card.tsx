import React from "react";

/**
 * GTH Card Component
 *
 * Provides the standard dark-glass card surface used throughout the app.
 * Replaces ad-hoc `border border-white/15 rounded-xl bg-gradient-to-br from-[#190d2e]` patterns.
 *
 * All card-like containers must use this component or one of its named variants.
 */

export type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

interface CardProps {
  padding?:   CardPadding;
  hover?:     boolean;
  bordered?:  boolean;
  glow?:      boolean;
  className?: string;
  children:   React.ReactNode;
  onClick?:   () => void;
  as?:        React.ElementType;
}

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
  xl:   "p-10 md:p-12",
};

export function Card({
  padding   = "md",
  hover     = false,
  bordered  = true,
  glow      = false,
  className = "",
  children,
  onClick,
  as: Tag   = "div",
}: CardProps) {
  const isClickable = !!onClick;

  const classes = [
    // Base surface
    "rounded-2xl overflow-hidden",
    "bg-gradient-to-br from-brand-950/50 to-brand-800/50",
    "backdrop-blur-sm",

    // Border
    bordered
      ? "border border-white/10"
      : "",

    // Hover effects
    hover
      ? "transition-all duration-300 hover:border-brand-500/40 hover:shadow-[0_0_20px_rgba(140,69,255,0.2)] hover:-translate-y-1"
      : "",

    // Glow accent (used for featured/highlighted cards)
    glow
      ? "shadow-[0_0_30px_rgba(140,69,255,0.15)]"
      : "",

    // Clickable state
    isClickable
      ? "cursor-pointer select-none active:scale-[0.99]"
      : "",

    // Padding
    PADDING_CLASSES[padding],

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} onClick={onClick}>
      {children}
    </Tag>
  );
}

/**
 * CardHeader — consistent section header inside a Card.
 * Renders a bottom-border divider and supports an optional action slot.
 */
interface CardHeaderProps {
  title:      React.ReactNode;
  action?:    React.ReactNode;
  className?: string;
}

export function CardHeader({ title, action, className = "" }: CardHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 border-b border-white/10 ${className}`}
    >
      <div className="font-semibold text-white tracking-tight">{title}</div>
      {action && <div>{action}</div>}
    </div>
  );
}

/**
 * CardBody — padded content area inside a Card (when Card padding="none").
 */
export function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
