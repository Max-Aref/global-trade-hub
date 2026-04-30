import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "customs-and-export-procedures",
  category: "logistics",
  title: {
    en: "Egyptian customs & export procedures: NAFEZA, ACI, HS codes, and free zones",
  },
  description: {
    en: "How NAFEZA single window works, the Advance Cargo Information (ACI) requirement for imports into Egypt, HS classification basics, and how Egypt's free zones and SCZONE alter your customs treatment.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "shipping-from-egypt",
    "incoterms-2020-explained",
    "intellectual-property-protection",
  ],
  body: {
    en: (
      <>
        <p>
          Egypt has digitalized its trade clearance system substantially since
          2021. The two acronyms that matter most to anyone trading with Egypt
          are <strong>NAFEZA</strong> (the national single window) and{" "}
          <strong>ACI</strong> (Advance Cargo Information). Together they govern
          almost every shipment moving in or out of the country.
        </p>

        <h2>NAFEZA — the national single window</h2>
        <p>
          NAFEZA is Egypt&apos;s electronic trade single window, operated by
          Misr Technology Services (MTS) on behalf of the Ministry of Finance.
          It connects Customs (the Egyptian Customs Authority, ECA), GOEIC, the
          National Food Safety Authority (NFSA), the Egyptian Drug Authority
          (EDA), and other ministries into a single electronic interface for
          clearance, permits, and risk management.
        </p>
        <p>
          For exporters, NAFEZA is where the export declaration is submitted,
          supporting documents are uploaded, and risk lanes (green/yellow/red)
          are assigned. Most documents are now accepted as scans rather than
          original wet ink.
        </p>

        <h2>ACI — Advance Cargo Information</h2>
        <p>
          Since October 2021 (Decree 38/2021), all imports into Egypt must be
          pre-declared on NAFEZA before the vessel sails from the port of
          loading. The mandatory data set includes:
        </p>
        <ul>
          <li>Importer&apos;s tax ID and registration on NAFEZA.</li>
          <li>Exporter&apos;s details (name, address, country).</li>
          <li>HS codes per line.</li>
          <li>Commercial invoice and packing list.</li>
          <li>
            Bill of lading or air waybill (preliminary acceptable, with final to
            follow).
          </li>
          <li>ACID number (a unique 19-digit identifier issued by NAFEZA).</li>
        </ul>
        <p>
          The exporter must include the ACID number on the bill of lading, the
          invoice, and the packing list. Without an ACID, the shipment will not
          clear into Egypt.
        </p>

        <Callout tone='warning' title='ACI affects exporters too'>
          <p>
            Even though ACI is an import system, exporters from any country
            shipping <em>to</em> Egypt are practically required to coordinate.
            The Egyptian importer registers the ACI; you, the exporter, cannot
            ship until the ACID number arrives. Build 5–10 working days of
            pre-shipment coordination into your timeline.
          </p>
        </Callout>

        <h2>HS classification</h2>
        <p>
          The Harmonized System (HS) is the WCO&apos;s six-digit classification
          structure, extended by countries to 8 or 10 digits. Egypt uses 8-digit
          tariff lines based on the HS-2022 edition. HS classification drives:
        </p>
        <ul>
          <li>The applicable customs duty rate at destination.</li>
          <li>The export card category that authorizes you to ship.</li>
          <li>Whether your product is restricted or requires permits.</li>
          <li>
            Eligibility for trade-agreement preferential origin (rules of origin
            are HS-based).
          </li>
        </ul>

        <ComparisonTable
          caption='Examples of common Egyptian export HS codes (HS-2022)'
          headers={["Product", "HS code (6-digit)", "Notes"]}
          rows={[
            [
              "Cotton, not carded or combed",
              "5201.00",
              "Raw lint export, ALCOTEXA monitoring",
            ],
            [
              "Cotton bedlinen, woven",
              "6302.21",
              "Egyptian cotton specifications often required",
            ],
            ["Marble, polished slabs", "6802.91", "By type and finish"],
            ["Fresh oranges", "0805.10", "Phytosanitary certificate required"],
            ["Frozen strawberries", "0811.10", "Cold chain documentation"],
            [
              "Urea, fertilizer grade",
              "3102.10",
              "Subject to export licensing during peak demand",
            ],
            ["Wooden bedroom furniture", "9403.50", "FSC where required"],
          ]}
        />

        <Callout tone='info' title='Get a binding ruling for ambiguous goods'>
          <p>
            If your product is novel or could be classified more than one way,
            request a binding tariff classification ruling from the destination
            country&apos;s customs administration before shipping in volume. The
            cost is small; the cost of being reclassified at landed cost is much
            larger.
          </p>
        </Callout>

        <h2>Required export documents</h2>
        <p>A standard Egyptian export shipment to a third country requires:</p>
        <ol>
          <li>
            <strong>Commercial invoice</strong> (in English, with HS code,
            quantity, unit price, total, Incoterm 2020, payment terms).
          </li>
          <li>
            <strong>Packing list</strong> (carton-level detail, gross and net
            weight, dimensions).
          </li>
          <li>
            <strong>Certificate of origin.</strong> Issued by the Federation of
            Egyptian Chambers of Commerce or the relevant export council. Use
            EUR.1 for the EU/UK, the Pan-Arab COO for GAFTA, and standard Form A
            for non-preferential origin.
          </li>
          <li>
            <strong>Bill of lading / air waybill.</strong> Issued by the carrier
            or its agent.
          </li>
          <li>
            <strong>Phytosanitary certificate</strong> (for plants, seeds, fresh
            produce). Issued by the General Organization for Veterinary Services
            or the Central Administration for Plant Quarantine.
          </li>
          <li>
            <strong>Health / sanitary certificate</strong> (for animal products
            and processed food). Issued by NFSA.
          </li>
          <li>
            <strong>Pre-shipment inspection report</strong> (if required by the
            buyer or destination country).
          </li>
          <li>
            <strong>COC / SABER</strong> for GCC destinations.
          </li>
        </ol>

        <h2>E-invoicing (ETA)</h2>
        <p>
          Since 2021, the Egyptian Tax Authority requires registered taxpayers
          to issue e-invoices through the ETA portal. Your Egyptian
          supplier&apos;s commercial invoice for an export shipment will carry
          an ETA UUID and a QR code. The system is fully integrated with NAFEZA
          — meaning that an e-invoice is part of the export declaration, not a
          separate document.
        </p>

        <h2>Free zones and SCZONE</h2>
        <p>
          Egypt operates several economic regimes that change customs treatment:
        </p>
        <ul>
          <li>
            <strong>Public free zones.</strong> Locations such as Alexandria
            public free zone, Nasr City, Port Said. Goods entering and leaving
            are not subject to Egyptian customs duty or VAT. Excellent for
            re-export operations and assembly.
          </li>
          <li>
            <strong>Private free zones.</strong> Single-investor equivalents.
          </li>
          <li>
            <strong>Special Economic Zone of the Suez Canal (SCZONE).</strong>A
            landmark special-status zone with its own one-stop shop, tax
            incentives, and customs procedures. Houses Sokhna port, East Port
            Said, Qantara West, and the industrial zones at Ain Sokhna and East
            Port Said.
          </li>
          <li>
            <strong>Investment zones.</strong> Sectoral zones (e.g. Polaris
            Smart Industrial Park) with streamlined services.
          </li>
          <li>
            <strong>Drawback / temporary admission.</strong> Inputs imported for
            use in goods that will be re-exported can be admitted free of duty
            (drawback) or under temporary admission schemes. Useful for
            finishing operations.
          </li>
        </ul>

        <h2>Practical timeline</h2>
        <p>
          A first-time export shipment from an Egyptian factory to an overseas
          buyer typically follows this timeline:
        </p>
        <ol>
          <li>
            Day 1–3: Buyer issues PO; supplier confirms; ACI registered if
            importer is in Egypt&apos;s ACI scope (rare for exports, unless
            DDP).
          </li>
          <li>Day 4–25: Production.</li>
          <li>
            Day 26–28: Pre-shipment inspection; COC if GCC; export declaration
            on NAFEZA.
          </li>
          <li>
            Day 29–31: Container stuffing, transport to port, customs clearance
            (green lane usually 24h, yellow 48h, red 5–10 days).
          </li>
          <li>Day 32: Loaded on board; bill of lading issued.</li>
        </ol>
        <p>
          Realistic order-to-departure for a first shipment is 30–35 days;
          experienced repeat suppliers cut this to 20–25.
        </p>
      </>
    ),
  },
};
