import "@testing-library/jest-dom/vitest";
import * as matchers from "vitest-axe/matchers";
import { expect, vi, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as React from "react";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// jsdom doesn't implement matchMedia (used by framer-motion's useReducedMotion)
if (!window.matchMedia) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

// Stub IntersectionObserver (used by react-intersection-observer)
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = "";
  thresholds = [];
}

if (!("IntersectionObserver" in window)) {
  (
    window as unknown as {
      IntersectionObserver: typeof MockIntersectionObserver;
    }
  ).IntersectionObserver = MockIntersectionObserver;
}

// next/navigation mock — usePathname, useRouter, useSearchParams
vi.mock("next/navigation", () => {
  const pathnameRef = { current: "/en" };
  return {
    usePathname: () => pathnameRef.current,
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
    }),
    useSearchParams: () => new URLSearchParams(),
    notFound: () => {
      throw new Error("NEXT_NOT_FOUND");
    },
    // Test helper to mutate pathname between tests
    __setPathname: (p: string) => {
      pathnameRef.current = p;
    },
  };
});

// Light next/link mock — render plain anchor for predictable event flow
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <a href={typeof href === "string" ? href : "#"} {...rest}>
        {children}
      </a>
    );
  },
}));
