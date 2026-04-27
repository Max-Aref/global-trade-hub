import React from "react";
import { Button } from "./Button";

/**
 * GTH EmptyState Component
 *
 * Consistent empty state for all list and table views.
 * Used when there's no data to display — product catalog, orders, analytics.
 */

interface EmptyStateAction {
  label:   string;
  onClick: () => void;
}

interface EmptyStateProps {
  icon?:        React.ReactNode;
  title:        string;
  titleAr?:     string;
  description?: string;
  action?:      EmptyStateAction;
  className?:   string;
}

export function EmptyState({
  icon,
  title,
  titleAr,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
      role="status"
      aria-label={title}
    >
      {icon && (
        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 text-brand-400 text-3xl">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
        {title}
      </h3>

      {titleAr && (
        <p className="text-sm text-white/50 font-arabic mb-2" dir="rtl">
          {titleAr}
        </p>
      )}

      {description && (
        <p className="text-white/60 text-sm max-w-sm mb-6">{description}</p>
      )}

      {action && (
        <Button variant="primary" size="md" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
