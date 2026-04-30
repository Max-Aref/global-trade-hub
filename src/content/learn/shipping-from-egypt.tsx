import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "shipping-from-egypt",
  category: "logistics",
  title: {
    en: "Shipping from Egypt: ports, transit times, FCL vs LCL, and Suez Canal economics",
  },
  description: {
    en: "Practical guide to choosing the right Egyptian port and shipping mode — FCL vs LCL break-even, transit times to major regions, the Suez Canal toll picture, and the Certificate of Conformity (COC) requirement for GCC destinations.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "incoterms-2020-explained",
    "customs-and-export-procedures",
    "payment-and-trade-finance",
  ],
  body: {
    en: (
      <>
        <p>
          Egypt&apos;s geography gives it natural advantages for shipping to
          three continents. The Suez Canal alone carries roughly 12% of world
          trade by volume in normal conditions. But geography does not
          automatically translate into low costs — the right choice of port,
          carrier, and mode determines whether your landed cost is competitive.
        </p>

        <h2>The five primary export ports</h2>
        <ComparisonTable
          caption='Primary Egyptian export ports — strengths and best use'
          headers={["Port", "Sea", "Strengths", "Best for"]}
          rows={[
            [
              "Alexandria + Dekheila",
              "Mediterranean",
              "General cargo, containers, ro-ro, grains terminal",
              "EU, Türkiye, North Africa, North America",
            ],
            [
              "Damietta",
              "Mediterranean",
              "Containers, grains, urea, citrus",
              "EU, Türkiye, Russia, citrus exports",
            ],
            [
              "Port Said East (SCCT)",
              "Mediterranean / Suez",
              "Deep-water transhipment, ULCV calls",
              "Far East, EU, Americas via transhipment",
            ],
            [
              "Port Said West",
              "Mediterranean",
              "Feeder, project cargo",
              "Domestic and Mediterranean feeders",
            ],
            [
              "Sokhna (Ain Sokhna)",
              "Red Sea",
              "SCZONE backbone, containers, oil",
              "GCC, India, East Africa, Far East",
            ],
          ]}
        />

        <h2>Indicative transit times</h2>
        <p>
          Transit times vary by carrier service and routing. The figures below
          are typical port-to-port for direct services, exclusive of loading and
          clearance.
        </p>
        <ComparisonTable
          caption='Typical container transit times from Alexandria / Sokhna'
          headers={["Origin", "Destination", "Transit days"]}
          rows={[
            ["Alexandria", "Hamburg / Rotterdam", "9–12"],
            ["Alexandria", "Genoa / Marseille", "3–5"],
            ["Alexandria", "Istanbul / Mersin", "3–5"],
            ["Alexandria", "New York", "14–18"],
            ["Sokhna", "Jebel Ali (UAE)", "5–7"],
            ["Sokhna", "Jeddah (KSA)", "3–4"],
            ["Sokhna", "Mumbai (Nhava Sheva)", "9–12"],
            ["Port Said East", "Singapore (transhipment)", "18–22"],
          ]}
        />

        <h2>FCL vs LCL: where the break-even sits</h2>
        <p>
          Full container load (FCL) means you book a whole 20&apos; or 40&apos;
          container; less-than-container load (LCL) means you share a container
          with other shippers, paying per cubic metre.
        </p>
        <ul>
          <li>
            <strong>20&apos; standard container.</strong> Roughly 33 m³ usable,
            ~21 metric tonnes payload.
          </li>
          <li>
            <strong>40&apos; standard container.</strong> Roughly 67 m³ usable,
            ~26 metric tonnes payload.
          </li>
          <li>
            <strong>40&apos; high-cube (HC).</strong> Roughly 76 m³ usable, same
            payload — same freight cost in most cases, so always ask for HC if
            your cargo is volume-limited rather than weight-limited.
          </li>
        </ul>
        <p>
          The break-even between LCL and a 20&apos; FCL typically occurs at
          12–15 m³ on Egypt-EU lanes, and 14–18 m³ on Egypt-North America. Below
          that, LCL is cheaper; above it, FCL is cheaper <em>and</em>
          handles more reliably (less consolidation risk, less damage at the
          CFS).
        </p>

        <Callout tone='tip' title='Always price both'>
          <p>
            Get parallel quotes for LCL by m³ and FCL flat rate even when you
            think you know the answer. Spot rates fluctuate; the break-even
            moves with them.
          </p>
        </Callout>

        <h2>The Suez Canal toll picture</h2>
        <p>
          For sellers based in Egypt, the Suez Canal is more about transit-time
          benefit than direct toll cost — your goods cross before the canal toll
          applies (toll is paid by the vessel, not the cargo). However, since
          2023, transit volumes have been disrupted by Red Sea security
          incidents, with many carriers rerouting around the Cape of Good Hope,
          adding 10–14 days to Asia-Europe runs and pushing rates up. Check the
          carrier&apos;s current routing in your booking, especially for
          Sokhna-origin cargo. The Suez Canal Authority (SCA) periodically
          adjusts tolls; carriers pass through these changes as bunker or
          security adjustment factors (BAF/SAF).
        </p>

        <h2>The Certificate of Conformity (COC) for GCC destinations</h2>
        <p>
          Saudi Arabia, the UAE, Kuwait, Bahrain, Qatar, and Oman each operate
          conformity assessment programs requiring imported consumer goods to be
          tested and certified <em>before</em>
          shipment. The dominant programs:
        </p>
        <ul>
          <li>
            <strong>Saudi Arabia — SABER.</strong> Online platform for Product
            and Shipment Certificates of Conformity.
          </li>
          <li>
            <strong>UAE — ECAS / EQM.</strong> Emirates Conformity Assessment
            Scheme; specific schemes for jewelry, halal, and others.
          </li>
          <li>
            <strong>Kuwait — KUCAS.</strong> Kuwait Conformity Assurance Scheme.
          </li>
          <li>
            <strong>Iraq — VOC.</strong> COSQC&apos;s Verification of
            Conformity, mandatory for many product categories.
          </li>
        </ul>
        <p>
          Failure to obtain COC <em>before</em> shipment results in containers
          being held at destination and either re-exported, destroyed, or
          released only after costly amendment. Build COC procurement into your
          timeline: 5–15 working days depending on the testing required.
        </p>

        <Callout tone='warning' title='Plan COC before booking the vessel'>
          <p>
            Treat COC as part of pre-shipment, not post-shipment. The certifying
            body needs the Performa Invoice, the test reports, and packaging
            artwork. Starting after the BL is issued causes demurrage at the
            destination port.
          </p>
        </Callout>

        <h2>EUR.1, GSP, and trade-agreement origin</h2>
        <p>
          Egypt is party to a network of preferential trade agreements that,
          when correctly applied, eliminate or reduce import duty for the buyer.
          The most significant:
        </p>
        <ul>
          <li>
            <strong>EU-Egypt Association Agreement.</strong> Most industrial
            goods enter the EU duty-free with a EUR.1 certificate or invoice
            declaration meeting Pan-Euro-Med rules of origin.
          </li>
          <li>
            <strong>Agadir Agreement.</strong> Free trade among Egypt, Jordan,
            Morocco, Tunisia, with cumulation under PEM.
          </li>
          <li>
            <strong>COMESA.</strong> 21-state preferential trade area in East
            and Southern Africa.
          </li>
          <li>
            <strong>GAFTA.</strong> Pan-Arab free trade.
          </li>
          <li>
            <strong>AfCFTA.</strong> African Continental Free Trade Area — Egypt
            is a state party with phased tariff liberalization in progress.
          </li>
          <li>
            <strong>UK-Egypt Association Agreement.</strong> Mirrors the EU
            agreement post-Brexit; uses EUR.1 with the United Kingdom named.
          </li>
          <li>
            <strong>Türkiye-Egypt FTA.</strong> Free trade in industrial goods.
          </li>
          <li>
            <strong>Mercosur-Egypt FTA.</strong> Phased liberalization with
            Argentina, Brazil, Paraguay, Uruguay.
          </li>
        </ul>

        <h2>Choosing your freight forwarder</h2>
        <p>
          The freight forwarder is your single biggest determinant of delivery
          quality. A capable Egyptian forwarder offers:
        </p>
        <ul>
          <li>Direct contracts with multiple carriers (rate flexibility).</li>
          <li>
            NAFEZA single-window access (we cover NAFEZA in our customs guide).
          </li>
          <li>In-house customs broker license.</li>
          <li>Insurance underwriting capability or panel.</li>
          <li>EDI / e-bill integration with you.</li>
        </ul>
        <p>
          Avoid forwarders who quote spot rates without naming the carrier and
          without GRI / surcharge transparency — the all-in number tends to grow
          between the quote and the bill of lading.
        </p>
      </>
    ),
  },
};
