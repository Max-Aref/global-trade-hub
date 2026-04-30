import type { LegalDoc } from "./types";

const PrivacyEN = (
  <>
    <p>
      Global Trade Hub (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
      operates a B2B trade platform that connects Egyptian exporters with
      international buyers. This Privacy Policy explains how we collect, use,
      store, share, and protect personal data in connection with the platform at
      globaltradehub.com and any related services. It is drafted with reference
      to the Egyptian Personal Data Protection Law (Law No. 151 of 2020) and the
      EU General Data Protection Regulation (Regulation (EU) 2016/679,
      &quot;GDPR&quot;) where applicable to international users.
    </p>

    <h2>1. Who we are</h2>
    <p>
      Global Trade Hub is operated by an Egyptian company (final corporate
      registration details to be confirmed). Our registered place of business
      and contact details for privacy enquiries are listed in the{" "}
      <a href='/en/legal/imprint'>Imprint</a> page. The Data Protection Officer
      (DPO) can be contacted at{" "}
      <a href='mailto:privacy@globaltradehub.com'>privacy@globaltradehub.com</a>
      .
    </p>

    <h2>2. Data we collect</h2>
    <ul>
      <li>
        <strong>Account data:</strong> name, email, phone, company name,
        commercial registration number, tax ID, country, role.
      </li>
      <li>
        <strong>KYC/KYB data:</strong> identity documents, commercial
        registration extracts, ownership information, sanctions screening
        results.
      </li>
      <li>
        <strong>Trade data:</strong> product listings, RFQs, quotes, orders,
        shipping documents, invoices.
      </li>
      <li>
        <strong>Technical data:</strong> IP address, device identifiers,
        browser, language, pages viewed, referrer, timestamps.
      </li>
      <li>
        <strong>Communications:</strong> messages sent through the platform,
        support tickets, call recordings (where lawfully made and disclosed).
      </li>
    </ul>

    <h2>3. Lawful bases (PDPL &amp; GDPR)</h2>
    <p>
      We process personal data on the following lawful bases: (a) performance of
      a contract with you; (b) compliance with a legal obligation (including
      Egyptian e-invoicing and AML rules); (c) our legitimate interests in
      operating, securing, and improving the platform; and (d) your explicit
      consent for marketing communications and non-essential cookies.
    </p>

    <h2>4. How we use your data</h2>
    <ul>
      <li>To create and manage your account and verify your business.</li>
      <li>
        To match exporters with buyers, route RFQs, and facilitate trade
        transactions.
      </li>
      <li>
        To comply with Egyptian export, customs, tax, and anti-money-laundering
        laws.
      </li>
      <li>To prevent fraud, abuse, and unauthorised access.</li>
      <li>
        To send service notifications and, where you have opted in, marketing
        communications.
      </li>
    </ul>

    <h2>5. Sharing &amp; international transfers</h2>
    <p>
      We share data with: counterparties on the platform (only as needed to
      fulfil a transaction you initiate), payment processors, KYC/KYB
      verification providers, logistics partners, professional advisors, and
      Egyptian regulators when legally required. International transfers outside
      Egypt are made under safeguards required by Article 14 of the PDPL
      (including Standard Contractual Clauses or equivalent measures).
    </p>

    <h2>6. Data retention</h2>
    <p>
      We retain account and transaction data for the period required by Egyptian
      commercial and tax law (generally 5 years from the end of the relevant
      financial year), and longer if required by an investigation or legal
      claim. Marketing data is kept until you withdraw consent.
    </p>

    <h2>7. Your rights</h2>
    <p>
      Subject to applicable law, you have the right to access, correct, delete,
      or restrict processing of your personal data, to object to processing, to
      data portability, and to withdraw consent. Egyptian users may also lodge a
      complaint with the Personal Data Protection Centre. To exercise any right,
      contact{" "}
      <a href='mailto:privacy@globaltradehub.com'>privacy@globaltradehub.com</a>
      .
    </p>

    <h2>8. Security</h2>
    <p>
      We use industry-standard technical and organisational measures including
      encryption in transit (TLS 1.2+), encryption at rest for sensitive fields,
      role-based access control, audit logging, and regular security reviews. No
      system is completely secure; we will notify affected users and the
      competent authority of any qualifying personal data breach in accordance
      with the PDPL.
    </p>

    <h2>9. Cookies</h2>
    <p>
      We use a limited set of cookies. See our{" "}
      <a href='/en/legal/cookie-policy'>Cookie Policy</a> for details and your
      choices.
    </p>

    <h2>10. Changes</h2>
    <p>
      We may update this Privacy Policy. Material changes will be notified via
      the platform or by email. The &quot;Last updated&quot; date at the top of
      this page reflects the most recent version.
    </p>
  </>
);

export const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  category: "privacy",
  title: { en: "Privacy Policy" },
  description: {
    en: "How Global Trade Hub collects, uses, and protects your personal data under Egypt's PDPL (Law 151/2020) and the GDPR.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: PrivacyEN },
};
