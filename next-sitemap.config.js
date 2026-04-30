/** @type {import('next-sitemap').IConfig} */
const SLUGS = [
  "sourcing-guide-egypt",
  "egyptian-cotton-grades",
  "manufacturer-vetting-checklist",
  "incoterms-2020-explained",
  "shipping-from-egypt",
  "customs-and-export-procedures",
  "quality-inspection-standards",
  "payment-and-trade-finance",
  "intellectual-property-protection",
  "sustainability-and-esg",
];

const LEGAL_SLUGS = [
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "acceptable-use",
  "refund-and-returns",
  "shipping-policy",
  "imprint",
];

const LANGS = ["en"];
const SITE_URL = process.env.SITE_URL || "https://globaltradehub.com";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${SITE_URL}/server-sitemap.xml`],
  },
  additionalPaths: async () => {
    const paths = [];
    const buildAlternates = (path) =>
      LANGS.map((l) => ({
        href: `${SITE_URL}/${l}${path}`,
        hreflang: "en-US",
      }));

    // /<lang>/learn (index)
    for (const lang of LANGS) {
      paths.push({
        loc: `/${lang}/learn`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: buildAlternates("/learn"),
      });
    }

    // /<lang>/learn/<slug>
    for (const slug of SLUGS) {
      for (const lang of LANGS) {
        paths.push({
          loc: `/${lang}/learn/${slug}`,
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: buildAlternates(`/learn/${slug}`),
        });
      }
    }

    // /<lang>/legal (index) — drafts: keep in sitemap for discovery, but
    // individual draft docs are noindex via the route's `robots` metadata.
    for (const lang of LANGS) {
      paths.push({
        loc: `/${lang}/legal`,
        changefreq: "monthly",
        priority: 0.5,
        lastmod: new Date().toISOString(),
        alternateRefs: buildAlternates("/legal"),
      });
    }

    // /<lang>/legal/<slug>
    for (const slug of LEGAL_SLUGS) {
      for (const lang of LANGS) {
        paths.push({
          loc: `/${lang}/legal/${slug}`,
          changefreq: "monthly",
          priority: 0.4,
          lastmod: new Date().toISOString(),
          alternateRefs: buildAlternates(`/legal/${slug}`),
        });
      }
    }

    return paths;
  },
};
