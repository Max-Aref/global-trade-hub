import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "intellectual-property-protection",
  category: "compliance",
  title: {
    en: "Intellectual property protection for Egyptian exports: trademarks, designs, and customs recordation",
  },
  description: {
    en: "Why an Egyptian exporter needs trademark and design rights in destination markets, how the Madrid Protocol simplifies cross-border filings, and how customs recordation prevents counterfeit shipments from impersonating your brand.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 7,
  related: [
    "customs-and-export-procedures",
    "manufacturer-vetting-checklist",
    "sustainability-and-esg",
  ],
  body: {
    en: (
      <>
        <p>
          Intellectual property is the most under-protected asset of most
          Egyptian SME exporters. A trademark or design that is unregistered
          abroad is, for practical purposes, free for competitors to use against
          you in those markets. This article covers the core IP regime in Egypt
          and the realistic path to international protection.
        </p>

        <Callout tone='warning' title='Legal review required'>
          <p>
            This article is general information only. IP filings have strict
            deadlines and language requirements; engage an IP attorney qualified
            in each target jurisdiction before filing. (LEGAL REVIEW REQUIRED
            before publication.)
          </p>
        </Callout>

        <h2>The Egyptian IP framework</h2>
        <p>
          Egypt&apos;s primary IP statute is Law No. 82 of 2002 on the
          Protection of Intellectual Property Rights, supplemented by
          implementing regulations and amendments. Key institutions:
        </p>
        <ul>
          <li>
            <strong>Egyptian Patent Office (EPO).</strong> Patents and utility
            models, under the Academy of Scientific Research and Technology.
          </li>
          <li>
            <strong>Trademark Office</strong> within the Internal Trade
            Development Authority (ITDA), Ministry of Supply. Handles trademarks
            and industrial designs registration.
          </li>
          <li>
            <strong>
              Information Technology Industry Development Agency (ITIDA).
            </strong>{" "}
            Software copyright registration.
          </li>
          <li>
            <strong>Egyptian Customs Authority.</strong> Records registered IP
            rights and intercepts counterfeit imports/transits.
          </li>
        </ul>

        <p>
          Egypt is a member of the WTO TRIPS Agreement, the Paris Convention,
          the Madrid Protocol (since 2009), the Berne Convention, and the Patent
          Cooperation Treaty (PCT). This membership matters: it means Egyptian
          exporters can use international filing routes rather than file
          separately in every market.
        </p>

        <h2>Trademarks — your most important IP asset</h2>
        <p>
          A trademark protects the names, logos, and marks that distinguish your
          products. It is the IP right most relevant to exporters because
          counterfeiters typically copy the brand before they copy anything
          else.
        </p>

        <p>
          Trademark rights are <strong>territorial</strong>: a registration in
          Egypt gives you no rights in Saudi Arabia, France, or the United
          States. To enforce against a counterfeiter in those markets you need a
          registration there.
        </p>

        <ComparisonTable
          caption='Trademark filing routes from Egypt'
          headers={["Route", "Coverage", "Filing", "Cost (rough)"]}
          rows={[
            [
              "National (Egypt only)",
              "Egypt",
              "ITDA Trademark Office",
              "EGP 2–5k per class",
            ],
            [
              "Madrid Protocol via WIPO",
              "Up to 130+ countries",
              "WIPO via the Egyptian office",
              "CHF 653 base + per-country fees",
            ],
            [
              "EUIPO direct",
              "All EU 27 countries",
              "EUIPO Alicante",
              "EUR 850–1,300 per mark",
            ],
            ["UKIPO direct", "United Kingdom", "UKIPO", "GBP 170–340"],
            [
              "USPTO direct",
              "United States",
              "USPTO with use evidence",
              "USD 350–650 per class",
            ],
          ]}
        />

        <Callout tone='info' title='Madrid Protocol is usually the right route'>
          <p>
            The Madrid Protocol lets you file one application in Egypt (in
            Arabic or English), then designate any number of member countries.
            One renewal, one register, one address change. For an SME exporting
            to 5+ countries it is dramatically cheaper than filing nationally
            everywhere.
          </p>
        </Callout>

        <h2>Industrial designs</h2>
        <p>
          A registered industrial design protects the appearance of a product —
          shape, surface ornamentation, pattern. For Egyptian textile,
          furniture, jewelry, and packaging exporters, designs are highly
          relevant and frequently neglected. Egypt grants design protection for
          a renewable 5-year term up to 15 years total. International protection
          is available via the <strong>Hague Agreement</strong> (Egypt is a
          member), which works like Madrid but for designs.
        </p>

        <h2>Patents and utility models</h2>
        <p>
          Patents protect inventions; utility models protect smaller incremental
          innovations. Most Egyptian SMEs do not have patentable inventions, but
          those who do should file via the
          <strong> PCT</strong> route to preserve options across jurisdictions.
          Patent costs scale rapidly: budget USD 30–80k for full international
          protection of a single invention.
        </p>

        <h2>Copyright and software</h2>
        <p>
          Copyright in Egypt arises automatically on creation; no registration
          is needed. ITIDA does provide voluntary software and digital-content
          registration, which is useful as evidence in disputes but not legally
          required. Berne Convention membership means Egyptian works are
          automatically protected in 179 other member countries.
        </p>

        <h2>Customs recordation against counterfeits</h2>
        <p>
          Most major customs administrations will hold suspected counterfeit
          shipments at the border <strong>only if</strong> the right-holder has
          recorded its IP with that customs authority in advance. The
          recordation costs little but requires:
        </p>
        <ul>
          <li>
            Proof of trademark / design registration in the customs
            jurisdiction.
          </li>
          <li>
            Detailed description of genuine product packaging, markings, and
            identifiable counterfeit indicators.
          </li>
          <li>
            A point of contact who can confirm authenticity within tight
            deadlines (often 10 working days under EU rules).
          </li>
          <li>
            An indemnity for storage costs and damages if a hold is wrongly
            invoked.
          </li>
        </ul>

        <p>Key recordation systems for an Egyptian exporter to consider:</p>
        <ul>
          <li>
            <strong>EU AFA</strong> (Application For Action) under EU Regulation
            608/2013. One filing covers all 27 EU member states.
          </li>
          <li>
            <strong>UK Customs IPR</strong> recordation via the IPO.
          </li>
          <li>
            <strong>US CBP e-Recordation.</strong> Trademarks and copyrights can
            be recorded with US Customs and Border Protection.
          </li>
          <li>
            <strong>Saudi Customs IPR system</strong> via SFDA / Saudi Customs
            portal.
          </li>
          <li>
            <strong>Egyptian Customs.</strong> Recordation under Egyptian
            customs law for IP rights enforced at Egyptian borders (relevant for
            re-export and transhipment).
          </li>
        </ul>

        <Callout tone='tip' title='Coordinate with your distributor'>
          <p>
            In many markets the practical enforcement comes from your local
            distributor or licensee. Make sure the contract assigns them the
            duty (and budget) to file customs recordation, monitor online
            marketplaces, and bring infringement actions on your behalf — with
            you reimbursing or splitting recoveries.
          </p>
        </Callout>

        <h2>Bad-faith filings — a real Egyptian export problem</h2>
        <p>
          A common problem: an Egyptian SME ships to a new market for a year or
          two, then learns its Arabic-name trademark has been registered there
          by a local competitor or even by a former distributor. This is a
          bad-faith filing under most modern trademark laws and can be
          challenged, but the procedure is slow and expensive. Prevention is
          much cheaper:
        </p>
        <ol>
          <li>
            File trademark and design applications in target markets
            <em> before</em> first export shipment.
          </li>
          <li>
            Include both Latin and Arabic script versions of the brand in each
            filing.
          </li>
          <li>
            Watch the trademark registers in your top 5 markets. Many IP firms
            offer affordable monitoring services (USD 200–400/year per market).
          </li>
        </ol>

        <h2>Geographical indications (GIs)</h2>
        <p>
          Egypt has invested in protecting GIs for specific regional products:
          Egyptian cotton, Aswan mango, Fayoum dates, Siwa olives. If your
          product fits within a recognized GI, using the GI label can be a
          significant marketing asset and an enforceable right against
          imitators. The <strong>Lisbon System</strong> (Geneva Act)
          administered by WIPO provides international registration of GIs,
          although coverage is narrower than Madrid for trademarks.
        </p>

        <h2>Practical first-year IP plan for an Egyptian exporter</h2>
        <ol>
          <li>
            Month 1–2: National trademark filing in Egypt for the brand (Latin +
            Arabic).
          </li>
          <li>
            Month 2–3: Madrid Protocol application designating top 5 export
            markets.
          </li>
          <li>
            Month 3–4: Hague design filing for any distinctive product shape or
            pattern.
          </li>
          <li>
            Month 4–6: Customs recordation in EU AFA + UK + USA + Saudi Arabia.
          </li>
          <li>
            Month 6+: Enforce — monitoring, takedowns, distributor enforcement
            clauses.
          </li>
        </ol>
      </>
    ),
  },
};
