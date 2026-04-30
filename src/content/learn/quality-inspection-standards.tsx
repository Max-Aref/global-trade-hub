import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "quality-inspection-standards",
  category: "compliance",
  title: {
    en: "Quality inspection standards: PSI, third-party labs, and AQL sampling under ISO 2859-1",
  },
  description: {
    en: "How pre-shipment inspection works in Egypt — booking with SGS, Bureau Veritas, Intertek, or TÜV — what AQL 2.5/4.0/6.5 mean, sample sizes for your order, and how to read the inspection report so you can authorize or reject shipment.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 7,
  related: [
    "manufacturer-vetting-checklist",
    "sourcing-guide-egypt",
    "egyptian-cotton-grades",
  ],
  body: {
    en: (
      <>
        <p>
          Pre-shipment inspection (PSI) is the single highest-leverage quality
          control step in international trade. Conducted in the factory before
          the goods leave for the port, PSI gives you a last chance to require
          corrective action while the goods are still in the supplier&apos;s
          hands and you are still holding the balance payment. Skipping PSI to
          save 0.3–0.6% of order value is the most expensive false economy in
          the import business.
        </p>

        <h2>The four major third-party inspection bodies in Egypt</h2>
        <ul>
          <li>
            <strong>SGS.</strong> Geneva-based; long-established Egyptian
            office; broadest sectoral coverage including textiles, food,
            chemicals, agri.
          </li>
          <li>
            <strong>Bureau Veritas.</strong> Strong in textiles, leather, and
            oil &amp; gas; large Egyptian inspection team.
          </li>
          <li>
            <strong>Intertek.</strong> Strong in apparel, retail, and consumer
            products; runs the SABER scheme&apos;s notified body functions in
            some markets.
          </li>
          <li>
            <strong>TÜV (Rheinland, Nord, Süd).</strong> Strong in engineering,
            electrical, and machinery.
          </li>
        </ul>
        <p>
          Beyond the big four, there are credible regional firms (e.g. Cotecna,
          AsiaInspection, QIMA) with Egyptian inspector coverage. Whichever you
          choose, ensure they are accredited to ISO/IEC 17020 (inspection
          bodies) and ISO/IEC 17025 (testing laboratories) for your specific
          product type.
        </p>

        <h2>Inspection types in the order timeline</h2>
        <ComparisonTable
          caption='When each inspection type is used'
          headers={["Inspection", "When", "Purpose"]}
          rows={[
            [
              "IPI (Initial Production Inspection)",
              "Day 1 of production",
              "Verify raw materials and components match approved sample",
            ],
            [
              "DPI / DUPRO (During Production Inspection)",
              "10–30% completed",
              "Catch process drift before all units are made",
            ],
            [
              "PSI / FRI (Pre-shipment / Final Random Inspection)",
              "≥80% completed and 100% packed",
              "Final acceptance decision",
            ],
            [
              "Container Loading Check (LS)",
              "Loading day",
              "Verify quantity loaded, packaging condition, container seal",
            ],
          ]}
        />

        <h2>AQL sampling under ISO 2859-1</h2>
        <p>
          The Acceptable Quality Limit (AQL) system in ISO 2859-1 (= ANSI/ASQ
          Z1.4) is how PSI inspectors decide how many units to inspect from your
          order, and how many defects to accept. The system has three pieces:
        </p>
        <ol>
          <li>
            <strong>Lot size</strong> (your order quantity).
          </li>
          <li>
            <strong>Inspection level</strong> — typically Level II for general
            inspection.
          </li>
          <li>
            <strong>AQL value</strong> — the maximum percentage of defective
            units acceptable in a lot. Standard AQLs are 0.65, 1.0, 1.5, 2.5,
            4.0, 6.5.
          </li>
        </ol>

        <p>
          For most consumer goods, the contract specifies separate AQLs per
          defect class:
        </p>
        <ul>
          <li>
            <strong>Critical defects: AQL 0.</strong> Any critical defect (e.g.
            broken zipper that can cut a child&apos;s skin) triggers rejection.
          </li>
          <li>
            <strong>Major defects: AQL 2.5.</strong> Defects that affect the
            function or marketability of the product.
          </li>
          <li>
            <strong>Minor defects: AQL 4.0.</strong> Cosmetic or trivial defects
            that don&apos;t affect function.
          </li>
        </ul>

        <ComparisonTable
          caption='Sample size per ISO 2859-1, Single sampling, Level II'
          headers={["Lot size", "Sample size", "Accept @ 2.5", "Reject @ 2.5"]}
          rows={[
            ["91–150", "20", "1", "2"],
            ["151–280", "32", "2", "3"],
            ["281–500", "50", "3", "4"],
            ["501–1,200", "80", "5", "6"],
            ["1,201–3,200", "125", "7", "8"],
            ["3,201–10,000", "200", "10", "11"],
            ["10,001–35,000", "315", "14", "15"],
          ]}
        />

        <Callout tone='info' title='Reading the AQL table'>
          <p>
            For an order of 5,000 pieces with AQL 2.5 on major defects, the
            inspector will draw a random sample of 200 units. If 10 or fewer
            have major defects, the lot passes. If 11 or more, it fails and you
            have grounds to demand rework or refuse the shipment.
          </p>
        </Callout>

        <h2>Defect classification</h2>
        <p>
          Defining what counts as critical, major, or minor is your job as
          buyer, in advance, in writing. A vague spec produces arguments at the
          factory floor. A good defect classification appendix:
        </p>
        <ul>
          <li>
            Lists defect types specific to your product (e.g. for textiles:
            skipped stitches, holes, color shading, fabric defects, dimensional
            out-of-tolerance).
          </li>
          <li>Assigns each defect type to critical / major / minor.</li>
          <li>
            Includes photographic limits where possible (a picture showing
            acceptable vs unacceptable shading is worth a paragraph).
          </li>
        </ul>

        <h2>Special tests for specific sectors</h2>
        <ul>
          <li>
            <strong>Textiles.</strong> Color fastness (ISO 105 series), tensile
            strength, GSM, pilling, shrinkage, AZO dye absence, phthalates,
            formaldehyde (OEKO-TEX limits).
          </li>
          <li>
            <strong>Food.</strong> Microbiology (Salmonella, E. coli, Listeria),
            pesticide residues per Codex MRLs, heavy metals, mycotoxins.
          </li>
          <li>
            <strong>Toys.</strong> EN 71 (EU) or ASTM F963 (US) mechanical,
            flammability, and chemical safety.
          </li>
          <li>
            <strong>Electrical.</strong> CE LVD/EMC, FCC Part 15, RoHS, REACH
            SVHC.
          </li>
          <li>
            <strong>Furniture.</strong> Stability tests (BS EN 14749), CARB
            Phase 2 for formaldehyde in wood panels.
          </li>
        </ul>

        <h2>Reading a PSI report</h2>
        <p>
          A standard PSI report from SGS, BV, or Intertek opens with an overall
          result: <strong>Pass</strong>, <strong>Fail</strong>, or{" "}
          <strong>Pending</strong>. The body of the report breaks down:
        </p>
        <ul>
          <li>Order details and inspection scope.</li>
          <li>Sample size and AQL applied.</li>
          <li>Defect counts by class with photographs.</li>
          <li>Quantity verification (totals shipped vs ordered).</li>
          <li>Workmanship findings.</li>
          <li>Carton drop test (where applicable).</li>
          <li>Barcode scan check (retail).</li>
          <li>Marking and labelling verification.</li>
        </ul>

        <Callout tone='warning' title='Pending is not pass'>
          <p>
            A &quot;Pending&quot; result usually means production wasn&apos;t
            ready or critical specifications hadn&apos;t been confirmed. Treat
            it as fail and require a re-inspection. Authorizing shipment on a
            Pending report shifts the burden of any downstream defect to you
            commercially.
          </p>
        </Callout>

        <h2>Getting it into the contract</h2>
        <p>
          Your purchase order should state, at minimum: that PSI is mandatory;
          the inspection body (or a panel of acceptable ones); the inspection
          level (typically II); the AQLs by defect class; that the inspection
          cost is paid by the seller; that the buyer&apos;s authorization to
          ship is contingent on a Pass report; and that re-inspection costs from
          a Fail are paid by the seller.
        </p>
      </>
    ),
  },
};
