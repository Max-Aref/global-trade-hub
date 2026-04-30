import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "payment-and-trade-finance",
  category: "compliance",
  title: {
    en: "Payment terms and trade finance for Egyptian export deals",
  },
  description: {
    en: "Letter of credit vs documentary collection vs T/T vs escrow — risk allocation, costs, and which structure fits each order size. Plus the role of ECGE export credit insurance and the Central Bank of Egypt's foreign currency rules.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "incoterms-2020-explained",
    "sourcing-guide-egypt",
    "manufacturer-vetting-checklist",
  ],
  body: {
    en: (
      <>
        <p>
          The payment structure in an export contract is the second most
          important commercial decision after price. It determines who carries
          the risk of non-payment or non-performance, who carries the cost of
          capital, and how easily the deal closes. For trade with Egyptian
          suppliers in 2026, four mainstream structures cover the vast majority
          of cases.
        </p>

        <h2>The four primary payment instruments</h2>
        <ComparisonTable
          caption='Payment instruments compared'
          headers={[
            "Instrument",
            "Buyer risk",
            "Seller risk",
            "Typical cost",
            "Best fit",
          ]}
          rows={[
            [
              "T/T 100% advance",
              "Highest",
              "Lowest",
              "Wire fees only",
              "Small samples; trusted repeat orders",
            ],
            [
              "T/T 30% advance / 70% on copy of B/L",
              "Medium",
              "Medium",
              "Wire fees only",
              "Common compromise on $20k–$200k orders",
            ],
            [
              "Documentary collection (D/P or D/A)",
              "Medium-low",
              "Medium",
              "0.1–0.3%",
              "Repeat trade between known counterparts",
            ],
            [
              "Letter of credit at sight (sight LC)",
              "Low",
              "Low",
              "0.5–1.5%",
              "First orders; orders >$100k",
            ],
            [
              "LC usance / deferred",
              "Low",
              "Low (with discounting)",
              "0.5–1.5% + interest",
              "Buyers needing credit terms",
            ],
            [
              "Escrow",
              "Low",
              "Low",
              "0.5–2%",
              "Cross-border B2C, smaller orders",
            ],
          ]}
        />

        <h2>Letter of credit (LC) mechanics</h2>
        <p>
          A letter of credit is a written undertaking by the buyer&apos;s bank
          (the issuing bank) to pay the seller, on presentation of documents
          that comply with the LC&apos;s terms. It substitutes the bank&apos;s
          creditworthiness for the buyer&apos;s, which is why it is the
          preferred instrument for first orders. The governing rules are{" "}
          <strong>UCP 600</strong> (Uniform Customs and Practice for Documentary
          Credits, 2007 revision), with <strong>ISBP 821</strong> as the
          practical guide.
        </p>

        <p>The standard LC flow:</p>
        <ol>
          <li>
            Buyer applies to its bank to issue an LC in favor of the Egyptian
            seller.
          </li>
          <li>
            Issuing bank sends the LC via SWIFT MT700 to the advising bank in
            Egypt.
          </li>
          <li>Advising bank notifies the seller; seller reviews terms.</li>
          <li>Seller produces and ships the goods.</li>
          <li>
            Seller presents documents (commercial invoice, B/L, COO, packing
            list, inspection certificate, etc.) to its bank.
          </li>
          <li>
            Bank examines for compliance with LC terms (the
            &quot;5-banking-day&quot; window in UCP 600 Article 14).
          </li>
          <li>
            If compliant, payment is made; if discrepant, the buyer may waive or
            reject.
          </li>
        </ol>

        <Callout tone='warning' title='Discrepancies are the main LC risk'>
          <p>
            Industry data suggests 50–70% of first-time LC presentations contain
            discrepancies — wrong description, late shipment, wrong quantity,
            missing signature, etc. Each discrepancy can delay payment by 1–3
            weeks and gives the buyer a chance to walk away. Use a checklist
            before presentation; consider an advising bank that pre-checks
            documents at modest extra cost.
          </p>
        </Callout>

        <h2>Confirmed vs unconfirmed LCs</h2>
        <p>
          A confirmed LC adds a second bank&apos;s undertaking — usually in the
          seller&apos;s country — so the seller is paid even if the issuing bank
          or country defaults. Confirmation costs 0.10–0.50% per quarter and is
          worth requesting whenever the issuing bank is in a country with
          elevated banking or political risk.
        </p>

        <h2>Documentary collection (D/P and D/A)</h2>
        <p>
          A cheaper, faster instrument used between counterparts who already
          know each other. The seller ships, then sends documents via its bank
          to the buyer&apos;s bank with collection instructions. Two sub-types:
        </p>
        <ul>
          <li>
            <strong>D/P (Documents against Payment).</strong> Buyer pays to
            receive the documents (and therefore the goods).
          </li>
          <li>
            <strong>D/A (Documents against Acceptance).</strong> Buyer accepts a
            time draft; documents released against signed promise to pay later
            (30/60/90 days).
          </li>
        </ul>
        <p>
          Governed by URC 522. Lower cost (0.1–0.3%) but no bank guarantee — if
          the buyer refuses to take up the documents, the seller is left with
          goods at the destination port.
        </p>

        <h2>T/T (telegraphic transfer / wire transfer)</h2>
        <p>Direct bank-to-bank transfer in USD or EUR. Common splits:</p>
        <ul>
          <li>30% at order confirmation, 70% before shipment (standard).</li>
          <li>
            30% advance, 70% against copy of bill of lading (more
            buyer-friendly).
          </li>
          <li>50/50 (when MOQs are small).</li>
        </ul>
        <p>
          Cost is just bank wire fees ($25–60). Risk allocation depends entirely
          on the split — 100% advance puts all risk on the buyer;
          payment-after-delivery puts all risk on the seller.
        </p>

        <h2>Escrow</h2>
        <p>
          A neutral third party holds funds until both sides confirm the
          transaction. Useful for moderate orders ($5k–$100k) where an LC is too
          expensive but neither side trusts T/T. Modern fintech escrow services
          for B2B trade charge ~0.5–2% and integrate with inspection providers,
          so funds release on Pass PSI report.
        </p>

        <h2>ECGE — Egyptian Export Credit Guarantee Company</h2>
        <p>
          ECGE is the Egyptian export credit agency, offering credit insurance
          to Egyptian exporters that protects them against buyer default and
          country risk. From the buyer&apos;s perspective, an ECGE-insured
          supplier is more willing to offer open account or extended-credit
          terms (D/A 60, D/A 90), because ECGE absorbs the buyer-default risk
          for the seller.
        </p>

        <h2>Central Bank of Egypt foreign-currency rules</h2>
        <p>
          The CBE has imposed varying levels of foreign-currency control since
          2022, with multiple rounds of devaluation. Current practical
          realities:
        </p>
        <ul>
          <li>
            <strong>Inbound payments.</strong> USD, EUR, GBP, etc. are received
            without restriction. The bank converts a portion to EGP unless the
            seller has an FX retention account.
          </li>
          <li>
            <strong>Repatriation.</strong> Egyptian exporters are generally
            allowed to retain export proceeds in FX accounts for working
            capital, subject to current CBE circulars.
          </li>
          <li>
            <strong>Quote currency.</strong> Quote and contract in USD or EUR.
            EGP-denominated export contracts are unusual.
          </li>
        </ul>

        <Callout tone='info' title='The currency is volatile'>
          <p>
            Between 2022 and 2024 the EGP devalued more than 60% against the
            USD. Egyptian suppliers now consistently quote in hard currency.
            Long-dated contracts ({">"}6 months) should include an FX adjustment
            clause for input cost components priced in EGP, or a review trigger.
          </p>
        </Callout>

        <h2>What to write in your contract</h2>
        <p>
          A clean payment clause names: the instrument; the currency; the
          beneficiary; the issuing bank&apos;s SWIFT BIC; the documents
          required; the latest shipment date; the LC validity period (typically
          21 days after the latest shipment date); the partial shipment /
          transhipment allowance; and the governing rules (UCP 600 for LCs, URC
          522 for collections).
        </p>
        <p>
          A messy payment clause causes disputes that drag for months. Spend the
          time to write it precisely.
        </p>
      </>
    ),
  },
};
