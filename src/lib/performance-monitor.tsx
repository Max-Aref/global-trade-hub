"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
  loadTime: number | null;
  memoryUsage: number | null;
  deviceType: string;
  connection: string;
}

/**
 * Hook to monitor various performance metrics
 *
 * @param {boolean} debug - Whether to log metrics to console
 * @returns {PerformanceMetrics} - Object containing performance metrics
 */
export function usePerformanceMonitor(debug = false): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    loadTime: null,
    memoryUsage: null,
    deviceType: "unknown",
    connection: "unknown",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect device type
    const deviceType =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "mobile"
        : "desktop";

    // Detect connection type
    let connection = "unknown";
    if ("connection" in navigator) {
      const navConnection = (navigator as any).connection;
      if (navConnection && navConnection.effectiveType) {
        connection = navConnection.effectiveType;
      }
    }

    // Update initial metrics
    setMetrics((prev) => ({
      ...prev,
      deviceType,
      connection,
    }));

    // Load performance observer only in browser
    const loadWebVitals = async () => {
      try {
        const { onFCP, onLCP, onCLS, onINP, onTTFB } = await import(
          "web-vitals"
        );

        onFCP(({ value }) => {
          if (debug) console.log("FCP:", value);
          setMetrics((prev) => ({ ...prev, fcp: value }));
        });

        onLCP(({ value }) => {
          if (debug) console.log("LCP:", value);
          setMetrics((prev) => ({ ...prev, lcp: value }));
        });

        onCLS(({ value }) => {
          if (debug) console.log("CLS:", value);
          setMetrics((prev) => ({ ...prev, cls: value }));
        });

        onINP(({ value }: { value: number }) => {
          if (debug) console.log("INP:", value);
          setMetrics((prev) => ({ ...prev, fid: value }));
        });

        onTTFB(({ value }) => {
          if (debug) console.log("TTFB:", value);
          setMetrics((prev) => ({ ...prev, ttfb: value }));
        });
      } catch (err) {
        console.error("Error loading web-vitals:", err);
      }
    };

    loadWebVitals();

    // Measure page load time
    window.addEventListener("load", () => {
      if (performance && performance.timing) {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        if (debug) console.log("Load time:", loadTime);
        setMetrics((prev) => ({ ...prev, loadTime }));
      }
    });

    // Monitor memory usage periodically
    const memoryInterval = setInterval(() => {
      if ((performance as any).memory) {
        const memoryInfo = (performance as any).memory;
        const memoryUsage = memoryInfo.usedJSHeapSize / (1024 * 1024); // MB
        setMetrics((prev) => ({ ...prev, memoryUsage }));
      }
    }, 5000);

    return () => {
      clearInterval(memoryInterval);
    };
  }, [debug]);

  return metrics;
}

/**
 * Component to display performance metrics in development mode
 */
export function DevPerformanceMonitor() {
  const metrics = usePerformanceMonitor(true);
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development mode
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible || process.env.NODE_ENV !== "development") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        padding: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        fontSize: "12px",
        zIndex: 9999,
        borderRadius: "4px",
        width: "200px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
        Performance Metrics
      </div>
      <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : "N/A"}</div>
      <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : "N/A"}</div>
      <div>CLS: {metrics.cls !== null ? metrics.cls.toFixed(3) : "N/A"}</div>
      <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : "N/A"}</div>
      <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : "N/A"}</div>
      <div>
        Load:{" "}
        {metrics.loadTime ? `${(metrics.loadTime / 1000).toFixed(1)}s` : "N/A"}
      </div>
      <div>
        Memory:{" "}
        {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : "N/A"}
      </div>
      <div>Device: {metrics.deviceType}</div>
      <div>Network: {metrics.connection}</div>
      <button
        onClick={() => setIsVisible(false)}
        style={{
          background: "none",
          border: "none",
          color: "#aaa",
          cursor: "pointer",
          fontSize: "10px",
          marginTop: "5px",
        }}
      >
        Close
      </button>
    </div>
  );
}
