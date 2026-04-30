import type { LegalDoc } from "./types";

const ImprintEN = (
  <>
    <p>
      This page provides company information about Global Trade Hub, in
      accordance with Egyptian commercial-disclosure expectations and
      international transparency norms (e.g. EU Article 5 of the e-Commerce
      Directive 2000/31/EC). Final corporate registration details will be
      confirmed at incorporation; placeholders below are marked clearly.
    </p>

    <h2>1. Operating entity</h2>
    <ul>
      <li>
        <strong>Trading name:</strong> Global Trade Hub
      </li>
      <li>
        <strong>Legal entity:</strong> [To be confirmed at incorporation]
      </li>
      <li>
        <strong>Commercial Registry No.:</strong> [To be confirmed]
      </li>
      <li>
        <strong>Tax ID (Egypt):</strong> [To be confirmed]
      </li>
      <li>
        <strong>Registered office:</strong> Cairo, Arab Republic of Egypt (full
        address to be confirmed)
      </li>
    </ul>

    <h2>2. Contact</h2>
    <ul>
      <li>
        General enquiries:{" "}
        <a href='mailto:hello@globaltradehub.com'>hello@globaltradehub.com</a>
      </li>
      <li>
        Privacy &amp; data:{" "}
        <a href='mailto:privacy@globaltradehub.com'>
          privacy@globaltradehub.com
        </a>
      </li>
      <li>
        Billing:{" "}
        <a href='mailto:billing@globaltradehub.com'>
          billing@globaltradehub.com
        </a>
      </li>
      <li>
        Abuse / IP infringement:{" "}
        <a href='mailto:abuse@globaltradehub.com'>abuse@globaltradehub.com</a>
      </li>
      <li>
        Press:{" "}
        <a href='mailto:press@globaltradehub.com'>press@globaltradehub.com</a>
      </li>
    </ul>

    <h2>3. Authorised representatives</h2>
    <p>
      The persons authorised to represent the company will be listed here after
      incorporation, together with their roles. Any updates will be reflected
      via the &quot;Last updated&quot; date.
    </p>

    <h2>4. Regulatory disclosures</h2>
    <p>
      Global Trade Hub is a B2B trade platform. We are not a licensed financial
      institution, payment institution, freight forwarder, or customs broker.
      Where users transact directly with such regulated entities through
      partnerships disclosed on the Platform, the regulated entity provides
      those services under its own licence and terms.
    </p>

    <h2>5. Hosting &amp; technical</h2>
    <ul>
      <li>Hosting partner: Vercel Inc. (region: Frankfurt, Germany — fra1).</li>
      <li>
        Sub-processors used for analytics, security, and email delivery are
        listed in the data-processing addendum available on request.
      </li>
    </ul>

    <h2>6. Reporting concerns</h2>
    <p>
      For complaints about content, privacy, or platform conduct, please contact
      the relevant address above. We aim to acknowledge within 3 business days.
      You may also contact:
    </p>
    <ul>
      <li>
        Egyptian Personal Data Protection Centre — for personal-data complaints
        under Law 151/2020.
      </li>
      <li>
        Egyptian Consumer Protection Agency — for consumer-protection concerns
        (note: most B2B transactions fall outside its scope).
      </li>
    </ul>
  </>
);

export const imprint: LegalDoc = {
  slug: "imprint",
  category: "company",
  title: {
    en: "Imprint & Company Information",
  },
  description: {
    en: "Legal entity, contact details, regulatory disclosures, and authorised representatives of Global Trade Hub.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: ImprintEN },
};
