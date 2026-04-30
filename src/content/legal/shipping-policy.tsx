import type { LegalDoc } from "./types";

const ShippingEN = (
  <>
    <p>
      Global Trade Hub does not ship goods. Shipping is arranged directly
      between exporter and buyer, typically under an Incoterms 2020 rule agreed
      at order. This Shipping Policy explains the standards we expect our
      exporter members to meet, and the support we provide.
    </p>

    <h2>1. Recommended Incoterms 2020 rules</h2>
    <ul>
      <li>
        <strong>FOB / FCA:</strong> common for buyers who arrange their own
        carriage from an Egyptian port or the seller&apos;s facility.
      </li>
      <li>
        <strong>CIF / CIP:</strong> seller arranges main carriage and minimum
        cargo insurance to a named destination.
      </li>
      <li>
        <strong>DAP / DDP:</strong> seller delivers to the buyer&apos;s address.
        Under DDP the seller is responsible for import clearance and duties —
        confirm this is feasible before agreeing.
      </li>
    </ul>
    <p>
      For details, see our{" "}
      <a href='/en/learn/incoterms-2020-explained'>Incoterms 2020 Explained</a>{" "}
      guide.
    </p>

    <h2>2. Standards we expect from exporters</h2>
    <ul>
      <li>
        Honour the agreed Incoterms 2020 rule and shipping window. Material
        delays must be communicated promptly, in writing, with a revised ETD.
      </li>
      <li>
        Provide accurate documents: commercial invoice, packing list, bill of
        lading or air waybill, certificate of origin, and any required
        certificates (GOTS, OEKO-TEX, halal, EUR.1, etc.).
      </li>
      <li>
        Use packing suitable for ocean or air freight, including export cartons,
        palletisation, and moisture protection where appropriate.
      </li>
      <li>
        Comply with Egyptian customs procedures, including NAFEZA / ACI
        registration and ETA e-invoicing where applicable. See our{" "}
        <a href='/en/learn/customs-and-export-procedures'>
          Customs &amp; Export Procedures
        </a>{" "}
        guide.
      </li>
    </ul>

    <h2>3. Risk &amp; insurance</h2>
    <p>
      Risk transfer follows the agreed Incoterms 2020 rule. Cargo insurance
      under ICC (A) is recommended for high-value or sensitive goods. Where the
      seller is responsible (CIF/CIP), seller must provide a copy of the policy
      or certificate.
    </p>

    <h2>4. Damage, shortage, and inspection</h2>
    <p>
      Buyers should inspect goods promptly on arrival, retain packaging,
      photograph any damage, and notify the seller and carrier in writing within
      the time specified by the contract or applicable convention (e.g.
      Hague-Visby for ocean carriage). Pre-shipment inspection (PSI) is
      recommended for material orders — see our{" "}
      <a href='/en/learn/quality-inspection-standards'>
        Quality Inspection Standards
      </a>{" "}
      guide.
    </p>

    <h2>5. Sanctions screening</h2>
    <p>
      Exporters must screen counterparties and destinations against applicable
      sanctions lists (UN, EU, UK, US OFAC). Global Trade Hub may decline to
      facilitate transactions that present sanctions risk.
    </p>

    <h2>6. Restricted goods</h2>
    <p>
      Goods restricted under Egyptian export controls or destination-country
      import controls (e.g. dual-use items, certain agricultural products,
      controlled chemicals, antiquities) require prior licence. The exporter is
      responsible for obtaining and presenting the licence to customs.
    </p>
  </>
);

export const shippingPolicy: LegalDoc = {
  slug: "shipping-policy",
  category: "platform",
  title: { en: "Shipping Policy" },
  description: {
    en: "Standards Global Trade Hub expects from exporters for international shipping, documentation, and Incoterms 2020.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: ShippingEN },
};
