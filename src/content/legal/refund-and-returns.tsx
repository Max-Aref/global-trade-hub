import type { LegalDoc } from "./types";

const RefundEN = (
  <>
    <p>
      Global Trade Hub is a B2B platform. Sales between exporters and buyers are
      concluded directly between those parties under the contract they
      negotiate. This policy explains how refunds work for{" "}
      <strong>fees paid to Global Trade Hub itself</strong> (subscriptions,
      listing fees, premium services), and outlines the framework within which
      we may assist with disputes between users.
    </p>

    <h2>1. Platform fees</h2>
    <ul>
      <li>
        <strong>Subscriptions:</strong> monthly subscriptions are non-refundable
        once the billing period has started, except where required by mandatory
        consumer law. Annual subscriptions may be cancelled within 14 days of
        first purchase for a pro-rated refund of unused months, less any add-on
        fees already consumed.
      </li>
      <li>
        <strong>Listing &amp; promotion fees:</strong> non-refundable once the
        listing or promotion has gone live.
      </li>
      <li>
        <strong>One-off services:</strong> refundable in full if we have not
        commenced delivery; otherwise refundable on a fair, prorated basis at
        our reasonable discretion.
      </li>
      <li>
        <strong>Service failure on our side:</strong> if a paid feature fails to
        deliver materially due to a fault on our side, we will offer a service
        credit or refund.
      </li>
    </ul>

    <h2>2. Buyer–seller transactions</h2>
    <p>
      Refunds, returns, replacements, and warranty claims for goods purchased
      between users are governed by the contract between buyer and seller
      (including any Incoterms 2020 rule, payment terms, and inspection clauses
      agreed at order). The Egyptian Consumer Protection Law (Law No. 181 of
      2018) generally does not apply to commercial contracts between businesses,
      although destination-country B2B law may impose additional rights. Buyers
      should:
    </p>
    <ul>
      <li>
        Conduct pre-shipment inspection (PSI) where the order value is material
        — see our{" "}
        <a href='/en/learn/quality-inspection-standards'>
          Quality Inspection Standards
        </a>{" "}
        guide.
      </li>
      <li>
        Use Letters of Credit or Documentary Collections for high-value orders —
        see our{" "}
        <a href='/en/learn/payment-and-trade-finance'>
          Payment &amp; Trade Finance
        </a>{" "}
        guide.
      </li>
      <li>
        Document discrepancies in writing immediately on arrival, with
        photographs and the survey report.
      </li>
    </ul>

    <h2>3. Dispute assistance</h2>
    <p>
      If a dispute arises between users, Global Trade Hub may, at its
      discretion: (a) facilitate communication; (b) review messages exchanged
      through the Platform; (c) suspend listings pending resolution; and (d)
      where verifiable evidence supports a claim of fraud, restrict the
      offending account. We are not an arbitrator and cannot order one party to
      pay another. Mediation or arbitration under the contract between the
      parties remains the primary route.
    </p>

    <h2>4. How to request a refund of platform fees</h2>
    <p>
      Email{" "}
      <a href='mailto:billing@globaltradehub.com'>billing@globaltradehub.com</a>{" "}
      from the email registered to your account, including: account ID, invoice
      number, the fee in question, and the reason. We aim to respond within 7
      business days. Approved refunds are returned to the original payment
      method.
    </p>

    <h2>5. Chargebacks</h2>
    <p>
      Initiating a chargeback before contacting us may result in account
      suspension while the bank dispute is investigated. We strongly encourage
      users to contact{" "}
      <a href='mailto:billing@globaltradehub.com'>billing@globaltradehub.com</a>{" "}
      first.
    </p>
  </>
);

export const refundAndReturns: LegalDoc = {
  slug: "refund-and-returns",
  category: "platform",
  title: { en: "Refund & Returns Policy" },
  description: {
    en: "Refund rules for Global Trade Hub platform fees and how we assist with B2B buyer–seller disputes.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: RefundEN },
};
