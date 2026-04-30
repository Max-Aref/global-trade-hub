import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "sourcing-guide-egypt",
  category: "sourcing",
  title: {
    en: "The complete buyer's guide to sourcing wholesale from Egypt",
  },
  description: {
    en: "How international buyers find verified Egyptian manufacturers, run sample orders, negotiate MOQs, and structure their first purchase order — across textiles, leather, marble, food, furniture, and chemicals.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 9,
  related: [
    "manufacturer-vetting-checklist",
    "egyptian-cotton-grades",
    "incoterms-2020-explained",
  ],
  body: {
    en: (
      <>
        <p>
          Egypt sits at one of the most economically valuable points on the map.
          From any factory in the Nile Delta a 40-foot container can reach the
          U.S. East Coast in 14–18 days, the Mediterranean in 3–5 days, Northern
          Europe in 9–12 days, and the GCC in 5–8 days. Combine that with the
          country&apos;s long-standing manufacturing depth in cotton textiles,
          leather, marble and granite, processed food, furniture and fertilizers
          — and Egypt becomes a credible alternative to suppliers in Türkiye,
          India, China, and Vietnam for buyers who care about lead time, duty
          treatment under trade agreements, and ESG.
        </p>

        <h2>What Egypt actually exports well</h2>
        <p>
          Before contacting suppliers, narrow your category. Egypt is genuinely
          strong in a defined set of industries; demanding unrelated SKUs from a
          generalist trading company is the most common buyer mistake.
        </p>

        <ul>
          <li>
            <strong>Cotton textiles &amp; home goods.</strong> Extra-long staple
            Giza cotton (see our dedicated guide on grades), bed and bath,
            knitted apparel, and yarn. Major clusters: Mahalla al-Kubra, 10th of
            Ramadan, Borg El Arab.
          </li>
          <li>
            <strong>Leather goods.</strong> Tanneries in Robeki (the relocated
            Magra El Oyoun cluster), shoes and bags. Strong heritage in lamb and
            bovine finished leather.
          </li>
          <li>
            <strong>Marble &amp; granite.</strong> Galala, Sinai, and Aswan
            quarries; processing in Shaq Al Thoaban (Cairo). Slabs, tiles, and
            engineered stone.
          </li>
          <li>
            <strong>Agricultural produce &amp; processed food.</strong> Citrus
            (the world&apos;s largest orange exporter in some seasons),
            strawberries, potatoes, dates, herbs, frozen vegetables, olive oil.
          </li>
          <li>
            <strong>Furniture.</strong> Damietta is one of the largest furniture
            clusters in the Middle East — solid wood, classic and modern lines,
            kitchens.
          </li>
          <li>
            <strong>Chemicals &amp; fertilizers.</strong> Urea, ammonia,
            ammonium nitrate, phosphates. Most production is in industrial zones
            near Suez and Damietta.
          </li>
          <li>
            <strong>Pharmaceuticals.</strong> Generics and APIs, regulated by
            the Egyptian Drug Authority (EDA).
          </li>
          <li>
            <strong>Engineering &amp; building materials.</strong> Cables,
            sanitary ware, ceramics, aluminium profiles, cement.
          </li>
        </ul>

        <h2>How verified suppliers differ from generic exporters</h2>
        <p>
          Anyone with a commercial register and an export card can call
          themselves an exporter. A <em>verified</em> supplier on Global Trade
          Hub has cleared four checks before listing:
        </p>
        <ol>
          <li>
            <strong>Legal entity verification</strong> against the General
            Authority for Investment and Free Zones (GAFI) commercial registry
            and the Tax Authority — confirming the company exists, is in good
            standing, and is the actual manufacturer (not a re-seller).
          </li>
          <li>
            <strong>Export card and ownership.</strong> A valid Egyptian Export
            Card from the General Organization for Export and Import Control
            (GOEIC), not expired, listing the products being sold.
          </li>
          <li>
            <strong>Site verification.</strong> A third-party visit to the
            factory address with photos of machinery, line capacity, and
            warehouse — uploaded with timestamps.
          </li>
          <li>
            <strong>Reference orders.</strong> At least one prior shipment
            documented with the bill of lading, packing list, and invoice.
          </li>
        </ol>

        <Callout tone='tip' title='Always insist on the export card number'>
          <p>
            Ask for the supplier&apos;s GOEIC export card number and the
            specific category it covers. A supplier whose card category does not
            match your product cannot legally export it from Egypt without
            partnering with a licensed exporter — and that adds a layer of cost
            and risk.
          </p>
        </Callout>

        <h2>Sample orders: how to structure them</h2>
        <p>
          A sample order is not a free-of-charge gesture. It is a small, paid
          order whose purpose is to verify product quality, finishing, and
          packaging before committing to volume. Run samples like this:
        </p>
        <ul>
          <li>
            <strong>Pay for samples.</strong> Free samples often mean
            cherry-picked production. Pay full unit price plus courier.
          </li>
          <li>
            <strong>Ship by international courier</strong> (DHL, FedEx, UPS) for
            samples under 30 kg. Use sea freight only when the sample is a full
            carton for retail testing.
          </li>
          <li>
            <strong>Define acceptance criteria</strong> in writing: GSM
            tolerance for fabrics, color delta-E, dimensional tolerance,
            packaging artwork.
          </li>
          <li>
            <strong>Hold the sample.</strong> Keep an approved sample in your
            office sealed; refer back to it during PSI on bulk production.
          </li>
        </ul>

        <h2>Typical MOQs and how to negotiate</h2>
        <ComparisonTable
          caption='Indicative MOQs for first orders from Egyptian manufacturers'
          headers={["Category", "Typical first MOQ", "Negotiable to"]}
          rows={[
            [
              "Cotton bedding (sets)",
              "1,000–3,000 sets",
              "300–500 with surcharge",
            ],
            [
              "Knitted T-shirts",
              "500–1,500 pcs / colorway",
              "200–300 with surcharge",
            ],
            ["Leather bags", "300–500 pcs / model", "100 pcs / model"],
            ["Marble slabs", "1× 20' container", "Half-container LCL"],
            ["Frozen produce", "1× 40' reefer", "1× 20' reefer"],
            ["Furniture", "1× 40' HC", "Mixed container"],
          ]}
        />

        <h2>Building your first purchase order</h2>
        <p>
          A clean PO from a foreign buyer to an Egyptian factory contains, at
          minimum: legal entity names and addresses on both sides; HS code per
          line; full product specification (with the approved sample reference);
          quantity and unit price in USD or EUR; Incoterm 2020 with the named
          place; packing instructions; inspection clause (PSI by SGS, Bureau
          Veritas, or Intertek); payment terms (LC, TT 30/70, or escrow); and
          shipment window with a latest shipment date that aligns with your
          commercial deadline.
        </p>

        <Callout tone='warning' title='Currency and pricing reality'>
          <p>
            The Egyptian Pound has had several material devaluations since 2022.
            Quote and pay in USD or EUR, and ask whether prices are CIF or FOB —
            a quote &quot;all in&quot; without an Incoterm is ambiguous and
            produces disputes.
          </p>
        </Callout>

        <h2>Common red flags</h2>
        <ul>
          <li>
            Price 25%+ below the verified market range for the category — the
            supplier is either substituting raw material grade or planning to
            short-ship.
          </li>
          <li>
            Insistence on 100% T/T advance with no LC option. A real factory
            with capacity will accept 30/70 or LC at sight.
          </li>
          <li>
            No willingness to accept third-party inspection. PSI cost is
            ~0.3–0.6% of order value — refusal is a signal.
          </li>
          <li>
            A trading company quoting on factory letterhead. Verify against GAFI
            and the export card category.
          </li>
        </ul>

        <h2>Next steps</h2>
        <p>
          When you&apos;re ready to vet a specific supplier, work through our{" "}
          <a href='manufacturer-vetting-checklist'>
            manufacturer vetting checklist
          </a>
          . To understand cotton specifically before negotiating textile orders,
          read{" "}
          <a href='egyptian-cotton-grades'>Egyptian cotton grades explained</a>.
        </p>
      </>
    ),
  },
};
