import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

/**
 * GTH PageHeader Component
 *
 * Consistent header for all dashboard inner pages.
 * Renders the page title (bilingual), optional breadcrumb trail,
 * and an actions slot for buttons on the top-right.
 */

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title:        string;
  titleAr?:     string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  actions?:     React.ReactNode;
  className?:   string;
}

export function PageHeader({
  title,
  titleAr,
  description,
  breadcrumbs,
  actions,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Breadcrumb trail */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-1 text-xs text-white/50">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <FaChevronRight className="text-white/30 text-[10px]" aria-hidden="true" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Title row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white leading-tight">
            {title}
          </h1>
          {titleAr && (
            <p className="text-base text-white/50 font-arabic mt-0.5" dir="rtl">
              {titleAr}
            </p>
          )}
          {description && (
            <p className="text-white/60 text-sm mt-2 max-w-2xl">{description}</p>
          )}
        </div>

        {actions && (
          <div className="flex items-center gap-3 shrink-0">{actions}</div>
        )}
      </div>
    </div>
  );
}
