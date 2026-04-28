"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "../ui/nav/DashboardSidebar";
import { DashboardTopBar } from "../ui/nav/DashboardTopBar";

/**
 * GTH DashboardLayout
 *
 * Wraps all authenticated supplier/buyer dashboard pages.
 * Manages sidebar open/closed state internally.
 * Exposes onNavClick so parent pages can react to sidebar navigation.
 *
 * Usage:
 *   <DashboardLayout
 *     pageTitle="Products"
 *     currentPath="products"
 *     onNavClick={(id) => setActiveTab(id)}
 *     companyName="Nile Textiles"
 *   >
 *     <ProductGrid />
 *   </DashboardLayout>
 */

interface Breadcrumb {
  label: string;
  href?: string;
}

interface DashboardLayoutProps {
  children:      React.ReactNode;
  pageTitle:     string;
  pageTitleAr?:  string;
  breadcrumbs?:  Breadcrumb[];
  currentPath?:  string;
  companyName?:  string;
  /** Called when a sidebar nav item is clicked — use to switch active tab */
  onNavClick?:   (id: string) => void;
}

export function DashboardLayout({
  children,
  pageTitle,
  breadcrumbs  = [],
  currentPath  = "overview",
  companyName  = "Company",
  onNavClick,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const crumbs: Breadcrumb[] =
    breadcrumbs.length > 0
      ? breadcrumbs
      : [{ label: "Dashboard" }, { label: pageTitle }];

  const userInitial = companyName?.[0]?.toUpperCase() || "C";

  const handleNavClick = (id: string) => {
    onNavClick?.(id);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <DashboardSidebar
        currentPath={currentPath}
        companyName={companyName}
        companyInitial={userInitial}
        mobileOpen={sidebarOpen}
        onNavClick={handleNavClick}
      />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main content column */}
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopBar
          pageTitle={pageTitle}
          breadcrumbs={crumbs}
          onSidebarToggle={() => setSidebarOpen((v) => !v)}
          userInitial={userInitial}
        />

        <main className="flex-1 overflow-auto bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.08)_15%,rgb(14,0,36,.5)_78%,transparent)]">
          <div className="px-4 lg:px-8 py-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
