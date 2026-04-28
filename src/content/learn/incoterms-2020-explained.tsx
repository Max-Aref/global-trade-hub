import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "incoterms-2020-explained",
  category: "logistics",
  title: {
    en: "Incoterms 2020 explained for Egyptian export buyers",
    ar: "شرح Incoterms 2020 للمشترين من الصادرات المصرية",
  },
  description: {
    en: "All 11 Incoterms 2020 rules — EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF — with the cost split, risk transfer, and the right rule for each Egyptian port (Alexandria, Port Said East/West, Damietta, Sokhna).",
    ar: "جميع قواعد Incoterms 2020 الإحدى عشرة — EXW وFCA وCPT وCIP وDAP وDPU وDDP وFAS وFOB وCFR وCIF — مع تقسيم التكاليف ونقل المخاطر، والقاعدة المناسبة لكل ميناء مصري (الإسكندرية، شرق وغرب بورسعيد، دمياط، السخنة).",
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
    ar: (
      <>
        <p>
          Incoterms — اختصار International Commercial Terms — هي قواعد ثلاثية
          الحروف موحدة من غرفة التجارة الدولية، تخصص التكاليف والمخاطر
          والالتزامات بين البائع والمشتري في التجارة العابرة للحدود. الإصدار
          الحالي Incoterms 2020 يحتوي على ١١ قاعدة. اختيار القاعدة الصحيحة لعقدك
          من أعلى القرارات تأثيرًا: فهي تحدد من يدفع ثمن ماذا، وأين تصبح البضاعة
          مشكلتك، وما التأمين المطلوب.
        </p>

        <Callout tone='info' title='اذكر السنة دائمًا'>
          <p>
            اكتب «FOB Alexandria, Incoterms 2020» — وليس «FOB» فقط. لا تزال
            إصدارات أقدم تُذكر في بعض العقود، كما أن DPU لم تكن موجودة قبل ٢٠٢٠
            (حلت محل DAT).
          </p>
        </Callout>

        <h2>عائلتا القواعد</h2>
        <p>
          تنقسم Incoterms 2020 إلى مجموعتين: <strong>أي وسيلة نقل</strong>
          (تستخدم للطرق والسكك والجو والمتعدد الوسائط والبحري بالحاويات)، و
          <strong>البحري والمجاري المائية فقط</strong> (للسائب وغير الحاوي حيث
          تُحمل البضاعة مباشرة على السفينة في ميناء محدد).
        </p>

        <h3>أي وسيلة نقل</h3>
        <ul>
          <li>
            <strong>EXW — تسليم المصنع.</strong> يضع البائع البضاعة في مقره.
            المشتري يتولى كل ما عداه. أقصى التزام للمشتري. تجنّبه للتصدير من
            مصر: المشتري قانونيًا يتولى التخليص، لكنه يفتقر للصفة المصرية.
          </li>
          <li>
            <strong>FCA — تسليم الناقل.</strong> يسلم البائع مخلَّصًا للتصدير
            إلى ناقل أو مكان محدد. الافتراضي الأمثل للحاويات من مصر.
          </li>
          <li>
            <strong>CPT — النقل مدفوع إلى.</strong> يدفع البائع النقل إلى وجهة
            محددة، لكن الخطر ينتقل عند التسليم لأول ناقل في مصر.
          </li>
          <li>
            <strong>CIP — النقل والتأمين مدفوعان إلى.</strong> مثل CPT مع شراء
            البائع التأمين — ويلزم تأمين Institute Cargo Clauses (A) تحت ٢٠٢٠
            (شامل ضد الأخطار).
          </li>
          <li>
            <strong>DAP — التسليم في المكان.</strong> يسلم البائع في وجهة محددة
            جاهزة للتفريغ؛ المشتري يتولى التخليص الاستيرادي.
          </li>
          <li>
            <strong>DPU — التسليم في المكان مفرَّغًا.</strong> مثل DAP مع تولي
            البائع التفريغ. القاعدة الوحيدة التي يفرغ فيها البائع.
          </li>
          <li>
            <strong>DDP — التسليم خالص الرسوم.</strong> يقوم البائع بكل شيء بما
            فيه التخليص الاستيرادي والرسوم. أقصى التزام للبائع؛ نادرًا ما تقبله
            المصانع المصرية المتوسطة.
          </li>
        </ul>

        <h3>البحري والمجاري المائية فقط</h3>
        <ul>
          <li>
            <strong>FAS — التسليم بجوار السفينة.</strong> يضع البائع البضاعة
            بجوار السفينة في الميناء المحدد. للسوائب مثل ألواح الحجر أو السلع.
          </li>
          <li>
            <strong>FOB — التسليم على ظهر السفينة.</strong> يضع البائع البضاعة
            على ظهر السفينة. ينتقل الخطر بمجرد التحميل.
          </li>
          <li>
            <strong>CFR — التكلفة والشحن.</strong> يدفع البائع الشحن إلى ميناء
            الوصول؛ ينتقل الخطر على ظهر السفينة في المنشأ.
          </li>
          <li>
            <strong>CIF — التكلفة والتأمين والشحن.</strong> CFR مع شراء البائع
            تأمينًا أدنى (ICC Clause C). من يريد تأمينًا شاملًا يطلب CIP بدلًا.
          </li>
        </ul>

        <Callout tone='warning' title='FOB و CIF ليست للحاويات'>
          <p>
            توجيه ICC ذاته ينص على أن FOB و CFR و CIF <em>ينبغي</em>
            ألا تستخدم للحاويات. نقطة انتقال الخطر — حاجز السفينة — بلا معنى
            للحاويات المسلمة في الساحة قبل التحميل بأيام. استخدم FCA أو CPT أو
            CIP للحاويات الخارجة من مصر.
          </p>
        </Callout>

        <h2>التكلفة والمخاطر بنظرة سريعة</h2>
        <ComparisonTable
          dir='rtl'
          caption='توزيع التكلفة والمخاطر تحت Incoterms 2020 (B = البائع، M = المشتري)'
          headers={[
            "القاعدة",
            "تخليص التصدير",
            "النقل الرئيسي",
            "التأمين",
            "تخليص الاستيراد",
          ]}
          rows={[
            ["EXW", "M (إشكالي)", "M", "M", "M"],
            ["FCA", "B", "M", "M (موصى به)", "M"],
            ["FAS", "B", "M", "M", "M"],
            ["FOB", "B", "M", "M", "M"],
            ["CFR", "B", "B", "M", "M"],
            ["CIF", "B", "B", "B (ICC C)", "M"],
            ["CPT", "B", "B", "M", "M"],
            ["CIP", "B", "B", "B (ICC A)", "M"],
            ["DAP", "B", "B", "B فعليًا", "M"],
            ["DPU", "B", "B + تفريغ", "B فعليًا", "M"],
            ["DDP", "B", "B", "B", "B"],
          ]}
        />

        <h2>أي قاعدة لأي ميناء مصري</h2>
        <p>
          لمصر خمسة موانئ تجارية رئيسية ذات صلة بالصادرات. تختلف القاعدة
          المناسبة حسب نوع البضاعة والميناء.
        </p>
        <ul>
          <li>
            <strong>الإسكندرية + الدخيلة.</strong> البوابة الأولى للبضائع العامة
            والحاويات. للحاويات: FCA Alexandria أو CIF/CIP إلى الوجهة. للسوائب
            من حبوب وقطن: FAS أو FOB.
          </li>
          <li>
            <strong>شرق بورسعيد (East Port Said / SCCT).</strong> مركز رئيسي
            لإعادة الشحن لخدمات الشرق الأقصى وأوروبا. استخدم FCA أو CIP
            للحاويات.
          </li>
          <li>
            <strong>غرب بورسعيد.</strong> خدمات محلية ومغذية؛ نفس قواعد
            الإسكندرية.
          </li>
          <li>
            <strong>دمياط.</strong> قوي في الحبوب واليوريا والحاويات والسيارات.
            FAS للسوائب؛ FCA/CPT للحاويات.
          </li>
          <li>
            <strong>السخنة.</strong> بوابة البحر الأحمر عبر منطقة قناة السويس
            الاقتصادية. الأنسب للبضائع المتجهة إلى آسيا والخليج وشرق أفريقيا.
            FCA أو CPT هي الموصى بها.
          </li>
        </ul>

        <h2>الشحنات الجوية والبرية</h2>
        <p>
          للشحن الجوي من مطار القاهرة الدولي (CAI) أو برج العرب (HBE)، استخدم
          FCA airport أو CPT/CIP إلى الوجهة. للشحن بالشاحنات إلى السودان وليبيا
          والأردن أو دول الخليج عبر الحدود البرية السعودية، FCA أو CPT إلى
          المكان المحدد.
        </p>

        <h2>الأخطاء الشائعة</h2>
        <ul>
          <li>
            <strong>استخدام EXW من مصر.</strong> المشتري لا يستطيع قانونيًا
            تخليص التصدير المصري دون وكيل مصري. استخدم FCA.
          </li>
          <li>
            <strong>التأمين تحت CIF بافتراض شامل.</strong> CIF يتطلب فقط ICC
            Clause C الذي يستثني خسائر شائعة كثيرة. اشترِ تغطية إضافية أو حدد
            CIP مع ICC Clause A.
          </li>
          <li>
            <strong>FOB لحاوية ٤٠ قدم.</strong> انتقال الخطر غير واضح لأن
            الحاوية تُحمل بواسطة الميناء بعد ساعات من تسليمها. استخدم FCA.
          </li>
          <li>
            <strong>DDP دون فحص الترخيص الاستيرادي.</strong> قد لا يحق للبائع
            المصري التصرف كمستورد رسمي في بلدك. تأكد قبل الموافقة.
          </li>
        </ul>

        <h2>كتابتها في عقدك</h2>
        <p>
          الذكر الصحيح لـ Incoterm يتبع التنسيق: القاعدة + المكان المحدد +
          «Incoterms 2020». مثلًا:{" "}
          <code>FCA Alexandria Container Terminal, Incoterms 2020</code>، أو{" "}
          <code>CIP Hamburg, Incoterms 2020</code>. يجب أن يكون المكان محددًا
          بما يكفي لإزالة الغموض — «FCA Egypt» ليست محددة كفاية.
        </p>
      </>
    ),
  },
};
