import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Global Trade Hub — Connect. Trade. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #190d2e 0%, #04010a 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#8c45ff",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Global Trade Hub
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 48,
          }}
        >
          Egypt Exports. Global Buyers.
        </div>

        {/* Divider */}
        <div
          style={{
            width: 600,
            height: 1,
            background: "rgba(140,69,255,0.35)",
            marginBottom: 40,
          }}
        />

        {/* Stats */}
        <div style={{ display: "flex", gap: 60 }}>
          {[
            { value: "50,000+", label: "Verified U.S. Buyers" },
            { value: "$0",      label: "Cost to Start" },
            { value: "+300%",   label: "Avg. Sales Growth" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: "#8c45ff" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 20,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "2px",
          }}
        >
          globaltradehub.com
        </div>
      </div>
    ),
    { ...size }
  );
}
