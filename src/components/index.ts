/**
 * Global Trade Hub — Component Library Barrel Export
 *
 * Import all shared UI components from "@/components".
 * Never import directly from individual component files in page/section code.
 *
 * Brand-enforcing primitives (Button, Input, Select, Logo) make it structurally
 * impossible to accidentally use off-brand styling — they source all values
 * from src/lib/brand.ts via Tailwind tokens.
 */

// ─── Primitives ───────────────────────────────────────────────────────────────
export { Button }     from "./ui/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./ui/Button";

export { Logo }       from "./ui/Logo";
export type { LogoVariant, LogoSize } from "./ui/Logo";

export { Badge }      from "./ui/Badge";
export type { BadgeVariant, BadgeSize } from "./ui/Badge";

export { Card, CardHeader, CardBody } from "./ui/Card";

export { Input }      from "./ui/Input";
export type { InputProps } from "./ui/Input";

export { Select }     from "./ui/Select";
export type { SelectProps, SelectOption, SelectGroup } from "./ui/Select";

// ─── Data Display ─────────────────────────────────────────────────────────────
export { StatsCard }  from "./ui/StatsCard";
export { EmptyState } from "./ui/EmptyState";
export { PageHeader } from "./ui/PageHeader";

// ─── Navigation ───────────────────────────────────────────────────────────────
export { TopNav }            from "./ui/nav/TopNav";
export { DashboardSidebar }  from "./ui/nav/DashboardSidebar";
export { DashboardTopBar }   from "./ui/nav/DashboardTopBar";

// ─── Layouts ──────────────────────────────────────────────────────────────────
export { MarketingLayout }   from "./layouts/MarketingLayout";
export { DashboardLayout }   from "./layouts/DashboardLayout";

// ─── Utility ──────────────────────────────────────────────────────────────────
export { OptimizedImage }        from "./OptimizedImage";
export { default as ClientOnly } from "./ClientOnly";
