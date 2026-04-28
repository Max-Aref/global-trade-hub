"use client";

import React, { useState } from "react";
import { FaBars, FaBell, FaSearch, FaChevronRight } from "react-icons/fa";

/**
 * GTH DashboardTopBar
 *
 * Sticky top bar for all authenticated dashboard pages.
 * Contains: mobile sidebar toggle, breadcrumbs, search, notifications, user avatar.
 */

interface Breadcrumb {
  label: string;
  href?: string;
}

interface DashboardTopBarProps {
  pageTitle?:         string;
  breadcrumbs?:       Breadcrumb[];
  onSidebarToggle?:   () => void;
  userInitial?:       string;
  notificationCount?: number;
  onSearch?:          (query: string) => void;
  lang?:              "en" | "ar";
  onLangToggle?:      () => void;
}

export function DashboardTopBar({
  pageTitle,
  breadcrumbs        = [],
  onSidebarToggle,
  userInitial        = "U",
  notificationCount  = 0,
  onSearch,
  lang               = "en",
  onLangToggle,
}: DashboardTopBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header className="bg-gradient-to-r from-brand-950 to-brand-800 border-b border-white/10 sticky top-0 z-30">
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: hamburger + breadcrumbs */}
          <div className="flex items-center gap-4 min-w-0">
            {onSidebarToggle && (
              <button
                onClick={onSidebarToggle}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Toggle sidebar"
              >
                <FaBars className="text-xl" />
              </button>
            )}

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm min-w-0">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <FaChevronRight className="text-[10px] text-white/30 shrink-0" />
                  )}
                  <span className={i === breadcrumbs.length - 1 ? "text-white font-medium capitalize truncate" : "text-white/50"}>
                    {crumb.label}
                  </span>
                </React.Fragment>
              ))}
              {pageTitle && breadcrumbs.length === 0 && (
                <span className="text-white font-medium capitalize">{pageTitle}</span>
              )}
            </nav>
          </div>

          {/* Right: search + lang + bell + avatar */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-56 focus-within:border-brand-500 transition-colors">
              <FaSearch className="text-white/40 text-sm shrink-0" />
              <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm flex-1 text-white placeholder:text-white/40"
                aria-label="Search dashboard"
              />
            </div>

            {/* Language toggle */}
            {onLangToggle && (
              <button
                onClick={onLangToggle}
                className="hidden md:flex items-center text-xs font-medium text-white/60 hover:text-white transition-colors border border-white/15 rounded-lg px-2.5 py-1.5"
                aria-label="Switch language"
              >
                {lang === "en" ? "عربي" : "EN"}
              </button>
            )}

            {/* Notifications */}
            <button
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} unread` : ""}`}
            >
              <FaBell className="text-xl text-white/70" />
              {notificationCount > 0 && (
                <span
                  className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* User avatar */}
            <div
              className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 cursor-pointer hover:bg-brand-600 transition-colors"
              aria-label="User menu"
              role="button"
              tabIndex={0}
            >
              {userInitial}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
