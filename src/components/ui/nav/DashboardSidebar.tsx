"use client";

import React from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaBox,
  FaChartLine,
  FaShoppingCart,
  FaCog,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import { Logo } from "../Logo";

/**
 * GTH DashboardSidebar
 *
 * Left sidebar for all authenticated dashboard pages.
 * Collapses to icon-only (64px) on mobile / when collapsed prop is true.
 * Expands to 256px when open.
 */

interface NavItem {
  id:    string;
  label: string;
  icon:  React.ComponentType<{ className?: string }>;
  href?: string;
}

interface DashboardSidebarProps {
  currentPath:  string;
  collapsed?:   boolean;
  companyName?: string;
  companyInitial?: string;
  onNavClick?:  (id: string) => void;
  mobileOpen?:  boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "overview",  label: "Overview",  icon: FaTachometerAlt },
  { id: "products",  label: "Products",  icon: FaBox           },
  { id: "analytics", label: "Analytics", icon: FaChartLine      },
  { id: "orders",    label: "Orders",    icon: FaShoppingCart   },
  { id: "settings",  label: "Settings",  icon: FaCog            },
];

export function DashboardSidebar({
  currentPath,
  collapsed     = false,
  companyName   = "Company",
  companyInitial,
  onNavClick,
  mobileOpen    = false,
}: DashboardSidebarProps) {
  const initial = companyInitial || companyName?.[0]?.toUpperCase() || "C";

  const sidebarWidth = collapsed ? "w-16" : "w-64";
  const translateClass = mobileOpen
    ? "translate-x-0"
    : "-translate-x-full lg:translate-x-0";

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50
        ${sidebarWidth} ${translateClass}
        flex flex-col
        bg-gradient-to-b from-brand-950 to-brand-900
        border-r border-white/10
        transform transition-transform duration-300 lg:transform-none
      `}
      aria-label="Dashboard navigation"
    >
      {/* Logo section */}
      <div className={`p-4 border-b border-white/10 ${collapsed ? "flex justify-center" : ""}`}>
        {collapsed ? (
          <Logo size="sm" showWordmark={false} href="/" />
        ) : (
          <div className="flex items-center gap-3">
            {/* Company avatar */}
            <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center shrink-0 font-bold text-sm">
              {initial}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{companyName}</p>
              <p className="text-xs text-white/50">Dashboard</p>
            </div>
          </div>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto" aria-label="Sidebar">
        {NAV_ITEMS.map((item) => {
          const isActive = currentPath === item.id || currentPath.startsWith(`/${item.id}`);
          const Icon = item.icon;

          const classes = [
            "w-full flex items-center rounded-xl transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
            collapsed ? "justify-center p-3" : "gap-3 px-4 py-3",
            isActive
              ? "bg-brand-500 text-white shadow-brand-sm"
              : "text-white/60 hover:bg-white/5 hover:text-white",
          ]
            .filter(Boolean)
            .join(" ");

          const content = (
            <>
              <Icon className={`shrink-0 ${collapsed ? "text-xl" : "text-lg"}`} />
              {!collapsed && (
                <>
                  <span className="font-medium text-sm">{item.label}</span>
                  {isActive && (
                    <FaChevronRight className="ml-auto text-xs opacity-70" />
                  )}
                </>
              )}
            </>
          );

          if (item.href) {
            return (
              <Link key={item.id} href={item.href} className={classes} title={collapsed ? item.label : undefined}>
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavClick?.(item.id)}
              className={classes}
              aria-current={isActive ? "page" : undefined}
              title={collapsed ? item.label : undefined}
            >
              {content}
            </button>
          );
        })}
      </nav>

      {/* Footer: back to home */}
      <div className="p-3 border-t border-white/10">
        <Link
          href="/"
          className={`
            flex items-center rounded-xl px-4 py-3 gap-3
            text-white/50 hover:text-white hover:bg-white/5
            transition-colors duration-200
            ${collapsed ? "justify-center" : ""}
          `}
          title={collapsed ? "Back to Home" : undefined}
        >
          <FaHome className="text-lg shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Back to Home</span>}
        </Link>
      </div>
    </aside>
  );
}
