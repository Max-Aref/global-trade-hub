"use client";

import { useEffect } from "react";

type AnalyticsOptions = {
  analyticsId?: string;
  debug?: boolean;
};

/**
 * Web Vitals component for monitoring performance metrics
 */
export function WebVitals({
  analyticsId,
  debug = false,
}: AnalyticsOptions = {}) {
  useEffect(() => {
    if (!analyticsId) {
      if (process.env.NODE_ENV === "development" && debug) {
        console.log("Web Vitals not initialized. Missing analyticsId.");
      }
      return;
    }

    // Only load web-vitals on the client side
    if (typeof window !== "undefined") {
      const registerWebVitals = async () => {
        try {
          // Dynamic import of web-vitals
          const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import(
            "web-vitals"
          );

          // Simple reporting function
          const reportWebVital = ({
            name,
            delta,
            id,
          }: {
            name: string;
            delta: number;
            id: string;
          }) => {
            if (process.env.NODE_ENV === "development" && debug) {
              console.log(`Web Vital: ${name}`, delta, id);
            }

            // Send to analytics if needed
            if (analyticsId) {
              const body = {
                dsn: analyticsId,
                event: name,
                value: delta,
                id: id,
                page: window.location.pathname,
              };

              const blob = new Blob([JSON.stringify(body)], {
                type: "application/json",
              });

              if (navigator.sendBeacon) {
                navigator.sendBeacon(
                  "https://vitals.vercel-analytics.com/v1/vitals",
                  blob
                );
              } else {
                fetch("https://vitals.vercel-analytics.com/v1/vitals", {
                  body: JSON.stringify(body),
                  method: "POST",
                  keepalive: true,
                });
              }
            }
          };

          // Register metrics
          onCLS(reportWebVital);
          onINP(reportWebVital);
          onFCP(reportWebVital);
          onLCP(reportWebVital);
          onTTFB(reportWebVital);

          if (process.env.NODE_ENV === "development" && debug) console.log("Web Vitals initialized");
        } catch (err) {
          console.error("Error initializing Web Vitals:", err);
        }
      };

      registerWebVitals();
    }
  }, [analyticsId, debug]);

  // This component doesn't render anything
  return null;
}
