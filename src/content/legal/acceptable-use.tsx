import type { LegalDoc } from "./types";

const AupEN = (
  <>
    <p>
      This Acceptable Use Policy (&quot;AUP&quot;) sets out what you may and may
      not do on the Global Trade Hub Platform. It is part of, and incorporated
      by reference into, our{" "}
      <a href='/en/legal/terms-of-service'>Terms of Service</a>.
    </p>

    <h2>1. Prohibited products and listings</h2>
    <ul>
      <li>
        Counterfeit, pirated, or infringing goods of any kind, including
        unauthorised replicas of branded textiles, garments, or electronics.
      </li>
      <li>
        Goods subject to Egyptian or international export controls without the
        required licence (e.g. dual-use items, certain chemicals, military
        goods).
      </li>
      <li>
        Items prohibited or restricted under Egyptian law, including narcotics,
        antiquities exported without ministerial approval, and protected
        species.
      </li>
      <li>
        Goods destined for parties or jurisdictions subject to international
        sanctions.
      </li>
      <li>
        Misleading listings, including false country of origin, fake
        certifications (e.g. forged GOTS or OEKO-TEX claims), or manipulated
        images.
      </li>
    </ul>

    <h2>2. Prohibited conduct</h2>
    <ul>
      <li>
        Fraud, money laundering, terrorist financing, bribery, or facilitation
        of any of these.
      </li>
      <li>
        Off-platform circumvention of fees once an introduction has been made
        through the Platform.
      </li>
      <li>
        Harassment, threats, hate speech, or discrimination against other users.
      </li>
      <li>
        Scraping, automated harvesting, or reverse engineering of the Platform
        other than as expressly permitted by law.
      </li>
      <li>
        Distribution of malware, phishing links, or content that compromises
        security.
      </li>
    </ul>

    <h2>3. Reporting violations</h2>
    <p>
      To report a violation or an IP-infringement claim, contact{" "}
      <a href='mailto:abuse@globaltradehub.com'>abuse@globaltradehub.com</a>{" "}
      with: (a) your contact details and authority to act, (b) identification of
      the listing or content, (c) a clear description of the alleged violation,
      and (d) supporting evidence (registration certificates, photographs,
      side-by-side comparisons).
    </p>

    <h2>4. Enforcement</h2>
    <p>
      We may, at our discretion: warn users; remove or restrict listings;
      suspend or terminate accounts; refuse refunds where users have abused the
      Platform; and report serious violations to Egyptian authorities or
      relevant rights holders. We strive to act proportionately and to provide
      notice where lawful, but reserve the right to act immediately where
      required by law or to protect users.
    </p>

    <h2>5. Counter-notice</h2>
    <p>
      If your listing is removed in error, you may submit a counter-notice to{" "}
      <a href='mailto:abuse@globaltradehub.com'>abuse@globaltradehub.com</a>{" "}
      including evidence of authorisation (e.g. licence, distribution agreement,
      or registration in your name). We will review in good faith.
    </p>
  </>
);

export const acceptableUse: LegalDoc = {
  slug: "acceptable-use",
  category: "platform",
  title: { en: "Acceptable Use Policy" },
  description: {
    en: "Prohibited products and conduct on the Global Trade Hub platform, plus how we enforce these rules.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: AupEN },
};
