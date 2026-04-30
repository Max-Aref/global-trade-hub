import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "incoterms-2020-explained",
  category: "logistics",
  title: {
    en: "Incoterms 2020 explained for Egyptian export buyers",
  },
  description: {
    en: "All 11 Incoterms 2020 rules — EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF — with the cost split, risk transfer, and the right rule for each Egyptian port (Alexandria, Port Said East/West, Damietta, Sokhna).",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "shipping-from-egypt",
    "customs-and-export-procedures",
    "payment-and-trade-finance",
  ],
  body: {
    en: (
      <>
        <p>
          Incoterms — short for International Commercial Terms — are the
          International Chamber of Commerce&apos;s standardized three-letter
          rules that allocate cost, risk, and obligations between seller and
          buyer in cross-border trade. The current version, Incoterms 2020,
          contains 11 rules. Choosing the right one for your contract is one of
          the highest-leverage decisions you make: it determines which side pays
          for what, where the goods become your problem, and what insurance you
          need.
        </p>

        <Callout tone='info' title='Always state the year'>
          <p>
            Write &quot;FOB Alexandria, Incoterms 2020&quot; — never just
            &quot;FOB&quot;. Older versions are still cited in some contracts,
            and DPU did not exist before 2020 (it replaced DAT).
          </p>
        </Callout>

        <h2>The two families of rules</h2>
        <p>
          Incoterms 2020 split into two groups:{" "}
          <strong>any mode of transport</strong> (used for road, rail, air,
          multimodal, and containerized sea) and{" "}
          <strong>sea/inland waterway only</strong>
          (used for bulk and break-bulk where the goods are loaded directly on a
          vessel at a named port).
        </p>

        <h3>Any mode of transport</h3>
        <ul>
          <li>
            <strong>EXW — Ex Works.</strong> Seller makes goods available at its
            premises. Buyer arranges everything else. Maximum buyer obligation.
            Avoid for export from Egypt: the buyer technically handles export
            clearance but lacks Egyptian standing to do so.
          </li>
          <li>
            <strong>FCA — Free Carrier.</strong> Seller delivers cleared for
            export to a named carrier or place. Excellent default for
            containerized cargo from Egypt.
          </li>
          <li>
            <strong>CPT — Carriage Paid To.</strong> Seller pays carriage to a
            named destination but risk transfers when handed to first carrier in
            Egypt.
          </li>
          <li>
            <strong>CIP — Carriage and Insurance Paid To.</strong> Same as CPT
            plus seller buys insurance — and under 2020 the required insurance
            level is now Institute Cargo Clauses (A) (all-risks).
          </li>
          <li>
            <strong>DAP — Delivered at Place.</strong> Seller delivers to a
            named destination ready for unloading; buyer handles import
            clearance.
          </li>
          <li>
            <strong>DPU — Delivered at Place Unloaded.</strong> Same as DAP but
            seller also unloads. The only Incoterm where the seller is
            responsible for unloading.
          </li>
          <li>
            <strong>DDP — Delivered Duty Paid.</strong> Seller does everything
            including import clearance and duty. Maximum seller obligation;
            rarely accepted by Egyptian SME exporters.
          </li>
        </ul>

        <h3>Sea and inland waterway only</h3>
        <ul>
          <li>
            <strong>FAS — Free Alongside Ship.</strong> Seller places goods
            alongside the vessel at the named port. Used for bulk like stone
            slabs or commodities.
          </li>
          <li>
            <strong>FOB — Free On Board.</strong> Seller places goods on board
            the vessel. Risk transfers once the goods are on board.
          </li>
          <li>
            <strong>CFR — Cost and Freight.</strong> Seller pays freight to
            destination port; risk transfers on board at origin.
          </li>
          <li>
            <strong>CIF — Cost, Insurance and Freight.</strong> CFR plus seller
            buys minimum insurance (ICC Clause C). Buyers wanting all-risks
            should require CIP instead, or top up the policy.
          </li>
        </ul>

        <Callout tone='warning' title='FOB and CIF are not for containers'>
          <p>
            ICC&apos;s own guidance states that FOB, CFR, and CIF should
            <em>not</em> be used for containerized cargo. The risk transfer
            point — the ship&apos;s rail — is meaningless for containers handed
            over at a yard or terminal days before loading. Use FCA, CPT, or CIP
            for containers leaving Egypt.
          </p>
        </Callout>

        <h2>Cost and risk at a glance</h2>
        <ComparisonTable
          caption='Cost and risk allocation under Incoterms 2020 (S = Seller, B = Buyer)'
          headers={[
            "Rule",
            "Export clearance",
            "Main carriage",
            "Insurance",
            "Import clearance",
          ]}
          rows={[
            ["EXW", "B (problematic)", "B", "B", "B"],
            ["FCA", "S", "B", "B (recommended)", "B"],
            ["FAS", "S", "B", "B", "B"],
            ["FOB", "S", "B", "B", "B"],
            ["CFR", "S", "S", "B", "B"],
            ["CIF", "S", "S", "S (ICC C)", "B"],
            ["CPT", "S", "S", "B", "B"],
            ["CIP", "S", "S", "S (ICC A)", "B"],
            ["DAP", "S", "S", "S (de facto)", "B"],
            ["DPU", "S", "S + unload", "S (de facto)", "B"],
            ["DDP", "S", "S", "S", "S"],
          ]}
        />

        <h2>Which rule for which Egyptian port</h2>
        <p>
          Egypt has five primary commercial seaports relevant to exports. The
          right Incoterm depends both on the cargo type and the port.
        </p>
        <ul>
          <li>
            <strong>Alexandria + Dekheila.</strong> Egypt&apos;s primary
            general-cargo and container gateway. For containers: FCA Alexandria
            or CIF/CIP destination. For bulk grains, cotton: FAS or FOB.
          </li>
          <li>
            <strong>Port Said East (East Port Said / SCCT).</strong> Major
            transhipment hub for Far East and EU services. Use FCA or CIP for
            containers.
          </li>
          <li>
            <strong>Port Said West.</strong> Domestic and feeder services; same
            rules as Alexandria.
          </li>
          <li>
            <strong>Damietta.</strong> Strong on grains, urea, container
            services, and cars. FAS for bulk; FCA/CPT for containers.
          </li>
          <li>
            <strong>Sokhna.</strong> Red Sea gateway via the Suez Canal Economic
            Zone (SCZONE). Best for cargo destined for Asia, the Gulf, and East
            Africa. FCA or CPT are the standard recommendations.
          </li>
        </ul>

        <h2>Air and road shipments</h2>
        <p>
          For air freight from Cairo International Airport (CAI) or Borg El Arab
          (HBE), use FCA airport or CPT/CIP destination. For truck freight to
          Sudan, Libya, Jordan, or the GCC via Saudi land borders, FCA or CPT to
          the named place is standard.
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>
            <strong>Using EXW from Egypt.</strong> The buyer cannot legally do
            Egyptian export clearance without an Egyptian agent. Use FCA
            instead.
          </li>
          <li>
            <strong>Insuring under CIF and assuming all-risks.</strong>
            CIF requires only ICC Clause C, which excludes many common losses.
            Either buy your own additional cover or specify CIP with ICC Clause
            A.
          </li>
          <li>
            <strong>FOB for a 40&apos; container.</strong> Risk transfer is
            unclear because the container is loaded by terminal staff hours
            after the seller delivers it. Use FCA.
          </li>
          <li>
            <strong>DDP without checking import licensing.</strong> The Egyptian
            seller may not be entitled to act as importer of record in your
            country. Confirm before agreeing.
          </li>
        </ul>

        <h2>Putting it in your contract</h2>
        <p>
          A correctly cited Incoterm follows the format: rule + named place +
          &quot;Incoterms 2020&quot;. For example:{" "}
          <code>FCA Alexandria Container Terminal, Incoterms 2020</code>, or{" "}
          <code>CIP Hamburg, Incoterms 2020</code>. The named place must be
          specific enough to remove ambiguity — &quot;FCA Egypt&quot; is not
          specific enough.
        </p>
      </>
    ),
  },
};
