module.exports = {
  webpack(config) {
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // Configure favicon generation via Next.js
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value: [
              '</favicon.ico>; rel="icon"; type="image/x-icon"',
              '</favicon/favicon-16x16.png>; rel="icon"; type="image/png"; sizes="16x16"',
              '</favicon/favicon-32x32.png>; rel="icon"; type="image/png"; sizes="32x32"',
              '</favicon/favicon-96x96.png>; rel="icon"; type="image/png"; sizes="96x96"',
              '</favicon/apple-touch-icon.png>; rel="apple-touch-icon"; sizes="180x180"',
              '</favicon/android-chrome-192x192.png>; rel="icon"; type="image/png"; sizes="192x192"',
              '</favicon/android-chrome-512x512.png>; rel="icon"; type="image/png"; sizes="512x512"',
            ].join(", "),
          },
        ],
      },
    ];
  },
};
