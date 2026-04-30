import type { LegalDoc } from "./types";

const TermsEN = (
  <>
    <p>
      These Terms of Service (&quot;Terms&quot;) govern your access to and use
      of the Global Trade Hub platform (&quot;Platform&quot;). By creating an
      account or otherwise using the Platform, you agree to these Terms. If you
      are using the Platform on behalf of a company, you represent that you have
      authority to bind that company.
    </p>

    <h2>1. Eligibility</h2>
    <p>
      The Platform is intended for business-to-business (B2B) use by registered
      companies. You must be at least 18 years old, legally able to contract,
      and not subject to applicable trade sanctions. We may refuse, suspend, or
      terminate accounts that do not meet eligibility criteria.
    </p>

    <h2>2. Account &amp; verification</h2>
    <p>
      You must provide accurate company and identity information, complete
      KYC/KYB checks, and keep your credentials confidential. You are
      responsible for activity under your account. We may require additional
      verification at any time.
    </p>

    <h2>3. Role of the Platform</h2>
    <p>
      Global Trade Hub is a venue for exporters and buyers to discover one
      another and exchange information. Unless explicitly stated, we are not a
      party to any sale, purchase, shipping, or payment contract concluded
      between users. Users are solely responsible for the legality, quality, and
      performance of their underlying transactions.
    </p>

    <h2>4. Listings &amp; content</h2>
    <ul>
      <li>
        Listings must be accurate, lawful, and free from infringement of
        third-party rights.
      </li>
      <li>
        Prohibited content includes counterfeit goods, sanctioned items,
        weapons, controlled substances, and any product whose export from Egypt
        or import into the destination is unlawful.
      </li>
      <li>
        You grant Global Trade Hub a non-exclusive, royalty-free, worldwide
        license to host and display your listings on the Platform.
      </li>
    </ul>

    <h2>5. Fees</h2>
    <p>
      Fees, commissions, and any subscription charges are described in your
      order form or on the Platform&apos;s pricing page at the time of purchase.
      All fees are exclusive of applicable taxes (including Egyptian VAT) unless
      stated otherwise. Failure to pay may result in suspension.
    </p>

    <h2>6. Compliance with trade laws</h2>
    <p>
      You are responsible for compliance with Egyptian export controls,
      destination-country import controls, customs declarations, sanctions,
      anti-bribery, anti-money-laundering, and tax obligations. The
      Platform&apos;s educational content is informational only and is not legal
      advice.
    </p>

    <h2>7. Intellectual property</h2>
    <p>
      The Platform, including its software, design, trademarks, and content
      (other than user submissions), is owned by Global Trade Hub or its
      licensors and is protected by Egyptian and international IP laws.
      Allegations of infringement should follow the procedure in our{" "}
      <a href='/en/legal/acceptable-use'>Acceptable Use Policy</a>.
    </p>

    <h2>8. Disclaimers</h2>
    <p>
      The Platform is provided &quot;as is&quot; and &quot;as available&quot;.
      To the maximum extent permitted by law, Global Trade Hub disclaims all
      warranties, express or implied, regarding the Platform, including
      merchantability, fitness for a particular purpose, accuracy, and
      non-infringement.
    </p>

    <h2>9. Limitation of liability</h2>
    <p>
      To the maximum extent permitted by law, Global Trade Hub&apos;s aggregate
      liability arising out of or relating to the Platform shall not exceed the
      fees paid by you to Global Trade Hub in the 12 months preceding the event
      giving rise to the claim. We are not liable for indirect, incidental,
      special, consequential, or punitive damages, including lost profits or
      lost data.
    </p>

    <h2>10. Termination</h2>
    <p>
      Either party may terminate these Terms with reasonable notice. We may
      suspend or terminate accounts immediately for breach, suspected fraud,
      sanctions exposure, or to comply with law. Provisions that by their nature
      should survive (including IP, disclaimers, liability, and governing law)
      will survive termination.
    </p>

    <h2>11. Governing law &amp; disputes</h2>
    <p>
      These Terms are governed by the laws of the Arab Republic of Egypt. The
      parties shall first attempt good-faith negotiation. Unresolved disputes
      shall be referred to the competent courts of Cairo, Egypt, unless
      mandatory law requires otherwise. International users may consult their
      local consumer-protection or trade authorities where applicable.
    </p>

    <h2>12. Changes</h2>
    <p>
      We may update these Terms. Material changes will be notified via the
      Platform or email and will take effect on the date stated.
    </p>
  </>
);

export const termsOfService: LegalDoc = {
  slug: "terms-of-service",
  category: "terms",
  title: { en: "Terms of Service" },
  description: {
    en: "The contract that governs your use of the Global Trade Hub B2B platform.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: TermsEN },
};
