/**
 * Backwards-compat re-export.
 *
 * The canonical Button implementation lives in /src/components/ui/Button.tsx.
 * All sections that import from "@/components" (the barrel index) still work
 * without changes because this file re-exports the full-featured component.
 *
 * The default "primary" variant matches the previous hardcoded gradient style.
 */
export { Button } from "./ui/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./ui/Button";
