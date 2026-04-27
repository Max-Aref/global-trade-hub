"use client";

import { useEffect, useState } from "react";

// This component ensures content only renders on the client
// This helps prevent hydration mismatches for components that
// use client-side only functionality like Math.random() or Date.now()

export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return <>{children}</>;
}
