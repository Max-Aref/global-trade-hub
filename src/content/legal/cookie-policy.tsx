import type { LegalDoc } from "./types";

const CookieEN = (
  <>
    <p>
      This Cookie Policy explains how Global Trade Hub uses cookies and similar
      technologies on globaltradehub.com. It supplements our{" "}
      <a href='/en/legal/privacy-policy'>Privacy Policy</a>.
    </p>

    <h2>1. What are cookies?</h2>
    <p>
      Cookies are small text files placed on your device when you visit a
      website. We also use related technologies such as local storage and
      pixels. Cookies may be &quot;session&quot; (deleted when you close your
      browser) or &quot;persistent&quot; (remain until expiry or deletion).
    </p>

    <h2>2. Categories we use</h2>
    <ul>
      <li>
        <strong>Strictly necessary:</strong> required for the Platform to
        function (authentication, security, load balancing). Cannot be disabled.
      </li>
      <li>
        <strong>Functional:</strong> remember your language (EN/AR),
        preferences, and recently viewed listings.
      </li>
      <li>
        <strong>Analytics:</strong> measure traffic and usage patterns to
        improve the Platform. Loaded only after you accept analytics cookies.
      </li>
      <li>
        <strong>Marketing:</strong> not used by default. If we introduce
        marketing cookies in the future, we will request explicit consent.
      </li>
    </ul>

    <h2>3. Your choices</h2>
    <p>
      On your first visit, our cookie banner lets you accept all, reject
      non-essential, or customise. You can change your choice at any time via
      the &quot;Cookie settings&quot; link in the footer. Most browsers also
      allow you to block or delete cookies through their settings.
    </p>

    <h2>4. Third parties</h2>
    <p>
      Some cookies may be placed by third-party providers we use for hosting,
      analytics, security, or fraud prevention. These providers act as our
      processors and are bound by data-processing agreements.
    </p>

    <h2>5. Updates</h2>
    <p>
      We may update this Cookie Policy. The &quot;Last updated&quot; date
      reflects the most recent revision. Material changes will be notified via
      the cookie banner or platform notification.
    </p>
  </>
);

export const cookiePolicy: LegalDoc = {
  slug: "cookie-policy",
  category: "privacy",
  title: { en: "Cookie Policy" },
  description: {
    en: "How Global Trade Hub uses cookies and similar technologies, and how to control them.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: CookieEN },
};
