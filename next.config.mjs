/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withAnalyzer({
  // ─── Security ────────────────────────────────────────────────────────────
  poweredByHeader: false,
  reactStrictMode: true,

  // ─── Performance ─────────────────────────────────────────────────────────
  compress: true,
  productionBrowserSourceMaps: false,

  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // If you use an external image CDN (Vercel/Cloudflare), add domains or remotePatterns here
    // domains: ['assets.example.com'],
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  // Security and caching headers
  async headers() {
    const securityHeaders = [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "geolocation=(), microphone=()" },
      { key: "X-XSS-Protection", value: "1; mode=block" },
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];

    return [
      {
        source: "/(.*).(js|css|png|jpg|jpeg|svg|webp|avif)",
        headers: securityHeaders,
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // ─── Redirects ───────────────────────────────────────────────────────────
  // Preserve SEO equity from the legacy Arabic locale: 301 every /ar/* URL
  // to its English equivalent. Required after dropping the `ar` locale.
  async redirects() {
    return [
      {
        source: "/ar",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/ar/:path*",
        destination: "/en/:path*",
        permanent: true,
      },
    ];
  },
});

// Security & caching headers for production
export default nextConfig;
