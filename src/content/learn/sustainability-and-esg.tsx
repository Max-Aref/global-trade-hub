import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "sustainability-and-esg",
  category: "compliance",
  title: {
    en: "Sustainability and ESG for Egyptian exporters: GOTS, OEKO-TEX, BCI, and EU CBAM",
    ar: "الاستدامة وحوكمة ESG للمصدّرين المصريين: GOTS و OEKO-TEX و BCI و CBAM الأوروبي",
  },
  description: {
    en: "Why ESG documentation is now a precondition of EU and UK retail contracts, the leading textile and food sustainability schemes, and how the EU Carbon Border Adjustment Mechanism affects Egyptian cement, steel, aluminium, fertilizer, and electricity exports.",
    ar: "لماذا أصبحت وثائق ESG شرطًا للعقود مع تجار التجزئة في الاتحاد الأوروبي والمملكة المتحدة، أبرز برامج الاستدامة في المنسوجات والأغذية، وكيف تؤثر آلية تعديل الكربون الأوروبية على صادرات الأسمنت والصلب والألومنيوم والأسمدة والكهرباء المصرية.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "manufacturer-vetting-checklist",
    "egyptian-cotton-grades",
    "intellectual-property-protection",
  ],
  body: {
    en: (
      <>
        <p>
          Sustainability has moved from optional marketing claim to mandatory
          contract requirement in many EU and UK supply chains. For Egyptian
          exporters, two pressures now stack:{" "}
          <strong>retailer-driven scheme requirements</strong> (GOTS, OEKO-TEX,
          BCI, GlobalGAP, etc.), and{" "}
          <strong>regulator-driven cross-border mechanisms</strong> like the EU
          Carbon Border Adjustment Mechanism (CBAM). This article maps both.
        </p>

        <Callout tone='warning' title='Legal review required'>
          <p>
            CBAM and CSRD/CSDDD obligations are evolving rapidly. Verify current
            thresholds, in-scope goods, and reporting deadlines with qualified
            counsel before structuring contracts. (LEGAL REVIEW REQUIRED before
            publication.)
          </p>
        </Callout>

        <h2>Why ESG is suddenly mandatory</h2>
        <p>Three forces converge:</p>
        <ul>
          <li>
            <strong>Retailer purchasing policies.</strong> Tier-1 retailers
            (M&amp;S, H&amp;M, Inditex/Zara, IKEA, Lidl, Aldi, Decathlon) impose
            minimum ESG standards on suppliers as a contractual condition.
          </li>
          <li>
            <strong>Investor and lender pressure.</strong> Funds and banks
            demand ESG reporting from their portfolio companies, who then push
            it down the supply chain.
          </li>
          <li>
            <strong>EU and UK regulation.</strong> CSRD (Corporate
            Sustainability Reporting Directive), CSDDD (Corporate Sustainability
            Due Diligence Directive), Forced Labour Regulation, EUDR
            (Deforestation), and CBAM all impose traceability and disclosure
            obligations on importers — who push them onto exporters.
          </li>
        </ul>

        <h2>Textile sustainability schemes relevant to Egypt</h2>
        <ComparisonTable
          caption='Major textile sustainability schemes'
          headers={["Scheme", "Focus", "Audit body", "Egyptian relevance"]}
          rows={[
            [
              "GOTS (Global Organic Textile Standard)",
              "Organic fiber + social + chemical",
              "GOTS-approved CBs (Control Union, ECOCERT, CU Inspections)",
              "Critical for organic cotton; Giza varieties grown organically",
            ],
            [
              "OEKO-TEX Standard 100",
              "Tested for harmful substances",
              "OEKO-TEX institutes",
              "Most-requested by EU buyers; trims, fabric, finished garments",
            ],
            [
              "OEKO-TEX STeP",
              "Sustainable production facility",
              "OEKO-TEX institutes",
              "For dyeing/finishing mills",
            ],
            [
              "Better Cotton Initiative (BCI)",
              "Mass-balance sustainable cotton",
              "BCI accredited verifiers",
              "Egyptian cotton farms enrolled via BCI Egypt",
            ],
            [
              "Higg Index (FEM/FSLM)",
              "Facility environmental + social",
              "Cascale (formerly SAC)",
              "Used by H&M, Nike, Inditex; self-assessed + verified",
            ],
            [
              "bluesign",
              "Chemical input restriction",
              "bluesign technologies",
              "Specialty mills; full input control",
            ],
            [
              "GRS / RCS (Recycled)",
              "Recycled content traceability",
              "Textile Exchange CBs",
              "Growing as recycled cotton/polyester demand rises",
            ],
            [
              "LEATHER WG (LWG)",
              "Tanneries",
              "LWG auditors",
              "Robbiki Leather City compliance",
            ],
          ]}
        />

        <h2>Food / agricultural schemes</h2>
        <ul>
          <li>
            <strong>GlobalG.A.P.</strong> The default food-safety + good
            agricultural practice scheme for fresh produce destined for EU/UK
            retail. Egyptian growers of strawberries, table grapes, citrus,
            herbs, and beans need GlobalG.A.P.
          </li>
          <li>
            <strong>BRCGS</strong> (Brand Reputation Compliance Global
            Standard). For processed food, packaging, and storage. UK and EU
            retailer-driven.
          </li>
          <li>
            <strong>IFS Food.</strong> Continental EU equivalent of BRCGS.
          </li>
          <li>
            <strong>FSSC 22000.</strong> ISO 22000-based. Increasingly accepted
            by global brands.
          </li>
          <li>
            <strong>Rainforest Alliance / UTZ.</strong> For coffee, cocoa, tea,
            fruits.
          </li>
          <li>
            <strong>Fairtrade.</strong> For premium positioning in
            consumer-aware markets.
          </li>
        </ul>

        <h2>Social compliance schemes</h2>
        <p>
          Repeating from the manufacturer vetting article: BSCI/amfori, SEDEX
          SMETA, WRAP, SA8000 are the four most-asked social audits. Most
          Egyptian factories supplying tier-1 EU retail have at least one. SMETA
          4-pillar (with environment + business ethics) is becoming the new
          floor.
        </p>

        <h2>EU CBAM — the mechanism that Egyptian exporters must understand</h2>
        <p>
          The EU Carbon Border Adjustment Mechanism puts a carbon price on
          certain imports into the EU, equivalent to the carbon price paid by EU
          producers under the EU Emissions Trading System (ETS). The goal is to
          prevent &quot;carbon leakage&quot; — producers relocating to
          lower-regulation countries. CBAM is phased:
        </p>
        <ul>
          <li>
            <strong>Transitional phase (Oct 2023 – Dec 2025).</strong>
            EU importers of in-scope goods must report quarterly the embedded
            emissions. No financial obligation. Exporters have been asked by EU
            buyers for verified emissions data on each shipment.
          </li>
          <li>
            <strong>Definitive phase (from 1 Jan 2026).</strong> EU importers
            must purchase CBAM certificates priced to match the EU ETS price for
            embedded emissions exceeding the EU ETS free allocation. Free
            allocation phases out 2026–2034.
          </li>
        </ul>

        <p>
          In-scope goods (current list):{" "}
          <strong>
            cement, iron and steel, aluminium, fertilizers, electricity,
            hydrogen,
          </strong>{" "}
          plus some downstream products like screws, bolts, and steel
          structures. Egypt is a meaningful exporter to the EU in cement, steel
          rebar, aluminium products, and urea/ammonium nitrate fertilizers — all
          in-scope.
        </p>

        <Callout tone='warning' title='CBAM is real money'>
          <p>
            Egyptian electricity is heavily natural-gas-fired (~85%), with some
            renewables but well above the EU&apos;s declining average. For
            Egyptian aluminium, steel, and cement destined for the EU, the
            embedded-emissions number — and therefore the CBAM cost — will be
            substantial unless the producer can prove use of renewable
            electricity and efficient processes. Plan supply contracts with
            CBAM-cost-pass-through clauses.
          </p>
        </Callout>

        <h2>What Egyptian exporters in CBAM scope must do</h2>
        <ol>
          <li>
            Calculate <strong>direct emissions</strong> (Scope 1 — own
            combustion) and <strong>indirect emissions</strong> (Scope 2 —
            purchased electricity), per the EU&apos;s prescribed methodology in
            Implementing Regulation 2023/1773.
          </li>
          <li>
            Get the calculation <strong>third-party verified</strong> by an
            EU-accredited verifier (TÜV, Bureau Veritas, SGS, etc.).
          </li>
          <li>
            Provide the verified emissions report to the EU importer for each
            shipment.
          </li>
          <li>
            Track and prove any <strong>carbon price already paid</strong>
            in Egypt (currently nil at federal level) for credit against CBAM.
          </li>
          <li>
            Negotiate the <strong>commercial allocation</strong> of CBAM cost
            between exporter and importer — usually a renegotiation point.
          </li>
        </ol>

        <h2>EUDR — Deforestation Regulation</h2>
        <p>
          EU Regulation 2023/1115 (the Deforestation Regulation) prohibits the
          placement on the EU market of certain commodities and derived products
          if they were produced on land deforested after 31 December 2020.
          In-scope: cattle, cocoa, coffee, oil palm, rubber, soya, wood, and
          many derived products. For Egypt, the most directly relevant
          commodities are <strong>wood products</strong> (e.g. furniture, wood
          panels) and <strong>processed cocoa or coffee</strong> from
          re-exporters. Compliance requires geolocation of plot of origin and
          due diligence statements.
        </p>

        <h2>Forced Labour Regulation</h2>
        <p>
          The EU Forced Labour Regulation (Regulation 2024/3015) prohibits
          products made wholly or partly by forced labour from being placed on
          the EU market. The US has a parallel regime (UFLPA). Egyptian
          exporters need supply-chain traceability documentation, particularly
          for cotton inputs that may have passed through Xinjiang or other
          high-risk regions.
        </p>

        <h2>Practical sustainability roadmap for an Egyptian SME exporter</h2>
        <ol>
          <li>
            <strong>Year 0:</strong> Get OEKO-TEX Standard 100 (textiles) or
            GlobalG.A.P. (produce). Run a SMETA 4-pillar audit.
          </li>
          <li>
            <strong>Year 1:</strong> Add scheme certifications relevant to your
            largest customer (BCI, GOTS organic, GRS, BRCGS, etc.). Begin Scope
            1+2 emissions inventory.
          </li>
          <li>
            <strong>Year 1–2:</strong> If in CBAM scope, contract a verified
            emissions calculation; lock CBAM-pass-through into EU contracts.
          </li>
          <li>
            <strong>Year 2:</strong> Renewable electricity sourcing (rooftop
            solar PPA is increasingly available in Egypt), water and chemical
            reduction projects.
          </li>
          <li>
            <strong>Year 2–3:</strong> Publish a sustainability report aligned
            to GRI or to ISSB IFRS S1/S2. This becomes a sales asset for tier-1
            EU/UK accounts.
          </li>
        </ol>

        <Callout tone='tip' title='Sustainability spend has revenue impact'>
          <p>
            EU and UK retailers pay a measurable premium — and grant larger
            orders — to suppliers that meet their published ESG criteria. Treat
            ESG investment as growth capex, not compliance cost. The first
            Egyptian textile and food exporters to lock in full-stack
            certification (OEKO-TEX + GOTS + BCI + SMETA + verified Scope 1+2 +
            CBAM-ready) gain a lasting competitive moat in EU sourcing.
          </p>
        </Callout>
      </>
    ),
    ar: (
      <>
        <p>
          انتقلت الاستدامة من ادعاء تسويقي اختياري إلى شرط تعاقدي إلزامي في كثير
          من سلاسل التوريد الأوروبية والبريطانية. للمصدّر المصري يتراكم ضغطان:{" "}
          <strong>برامج التجزئة</strong> (GOTS و OEKO-TEX و BCI و GlobalG.A.P.
          وغيرها)، و<strong>الآليات التنظيمية عبر الحدود</strong> مثل آلية تعديل
          الكربون الأوروبية (CBAM). يرسم هذا المقال خريطة الاثنين.
        </p>

        <Callout tone='warning' title='مراجعة قانونية مطلوبة'>
          <p>
            التزامات CBAM و CSRD/CSDDD تتطور بسرعة. تحقق من العتبات الحالية
            والسلع المشمولة ومواعيد الإبلاغ مع مستشار مؤهل قبل هيكلة العقود.
            (مطلوب مراجعة قانونية قبل النشر.)
          </p>
        </Callout>

        <h2>لماذا صارت ESG إلزامية فجأة</h2>
        <p>تتقاطع ثلاث قوى:</p>
        <ul>
          <li>
            <strong>سياسات الشراء لتجار التجزئة.</strong> يفرض تجار التجزئة من
            المستوى الأول (M&amp;S، H&amp;M، إنديتكس/زارا، إيكيا، ليدل، ألدي،
            ديكاتلون) معايير ESG دنيا على الموردين كشرط تعاقدي.
          </li>
          <li>
            <strong>ضغط المستثمرين والممولين.</strong> تطلب الصناديق والبنوك
            إفصاح ESG من شركاتها، التي تنقله إلى السلسلة.
          </li>
          <li>
            <strong>التشريع الأوروبي والبريطاني.</strong> CSRD و CSDDD ولائحة
            العمل القسري و EUDR (إزالة الغابات) و CBAM كلها تفرض التتبع والإفصاح
            على المستوردين — الذين ينقلونها للمصدّرين.
          </li>
        </ul>

        <h2>برامج استدامة المنسوجات الموثوقة لمصر</h2>
        <ComparisonTable
          dir='rtl'
          caption='أبرز برامج استدامة المنسوجات'
          headers={["البرنامج", "التركيز", "جهة التدقيق", "الصلة المصرية"]}
          rows={[
            [
              "GOTS (المعيار العالمي للمنسوجات العضوية)",
              "ألياف عضوية + اجتماعي + كيميائي",
              "هيئات معتمدة من GOTS (Control Union، ECOCERT)",
              "حاسمة للقطن العضوي؛ أصناف جيزة المزروعة عضويًا",
            ],
            [
              "OEKO-TEX Standard 100",
              "اختبار المواد الضارة",
              "معاهد OEKO-TEX",
              "الأكثر طلبًا من المشترين الأوروبيين؛ ملحقات وأقمشة وملابس",
            ],
            [
              "OEKO-TEX STeP",
              "منشأة إنتاج مستدامة",
              "معاهد OEKO-TEX",
              "لمصانع الصباغة والتشطيب",
            ],
            [
              "مبادرة القطن الأفضل (BCI)",
              "قطن مستدام بميزان الكتلة",
              "مدققو BCI المعتمدون",
              "مزارع قطن مصرية مسجلة عبر BCI Egypt",
            ],
            [
              "مؤشر Higg (FEM/FSLM)",
              "بيئي + اجتماعي للمنشأة",
              "Cascale (سابقًا SAC)",
              "تستخدمه H&M ونايكي وإنديتكس",
            ],
            [
              "bluesign",
              "تقييد المدخلات الكيميائية",
              "bluesign technologies",
              "مصانع متخصصة",
            ],
            [
              "GRS / RCS (إعادة تدوير)",
              "تتبع المحتوى المعاد تدويره",
              "هيئات Textile Exchange",
              "ينمو مع طلب القطن/البوليستر المعاد",
            ],
            [
              "LEATHER WG (LWG)",
              "المدابغ",
              "مدققو LWG",
              "امتثال مدينة الجلود الروبيكي",
            ],
          ]}
        />

        <h2>برامج الأغذية / الزراعة</h2>
        <ul>
          <li>
            <strong>GlobalG.A.P.</strong> برنامج سلامة الغذاء وممارسات الزراعة
            الجيدة الافتراضي للمنتجات الطازجة المتجهة لتجزئة الاتحاد الأوروبي
            والمملكة المتحدة. مزارعو الفراولة وعنب المائدة والحمضيات والأعشاب
            والفاصوليا في مصر يحتاجونه.
          </li>
          <li>
            <strong>BRCGS.</strong> للأغذية المصنعة والتغليف والتخزين. مدفوع من
            تجزئة بريطانيا والاتحاد.
          </li>
          <li>
            <strong>IFS Food.</strong> مكافئ قاري لـ BRCGS.
          </li>
          <li>
            <strong>FSSC 22000.</strong> قائم على ISO 22000. مقبول بشكل متزايد
            لدى العلامات العالمية.
          </li>
          <li>
            <strong>Rainforest Alliance / UTZ.</strong> للقهوة والكاكاو والشاي
            والفواكه.
          </li>
          <li>
            <strong>Fairtrade.</strong> لتموضع متميز في الأسواق الواعية.
          </li>
        </ul>

        <h2>برامج الامتثال الاجتماعي</h2>
        <p>
          تكرارًا لمقال تأهيل المصنّع: BSCI/amfori و SEDEX SMETA و WRAP و SA8000
          هي أربعة التدقيقات الاجتماعية الأكثر طلبًا. أغلب المصانع المصرية
          الموردة لتجزئة الاتحاد الأوروبي المستوى الأول لديها واحد منها على
          الأقل. SMETA 4-pillar (مع البيئة وأخلاقيات العمل) يصبح الأرضية
          الجديدة.
        </p>

        <h2>CBAM الأوروبي — الآلية التي يجب على المصدّر المصري فهمها</h2>
        <p>
          آلية تعديل الكربون عند الحدود الأوروبية تضع سعر كربون على واردات معينة
          للاتحاد، يعادل سعر الكربون الذي يدفعه المنتج الأوروبي ضمن نظام تداول
          الانبعاثات (ETS). الهدف منع «تسرب الكربون» — انتقال المنتجين لدول أقل
          تنظيمًا. CBAM مرحلي:
        </p>
        <ul>
          <li>
            <strong>المرحلة الانتقالية (أكتوبر ٢٠٢٣ – ديسمبر ٢٠٢٥).</strong>{" "}
            يُلزم المستوردون الأوروبيون للسلع المشمولة بالإبلاغ ربع السنوي عن
            الانبعاثات المضمَّنة. لا التزام مالي. طلب المشترون الأوروبيون من
            المصدّرين بيانات انبعاثات موثقة لكل شحنة.
          </li>
          <li>
            <strong>المرحلة النهائية (من ١ يناير ٢٠٢٦).</strong> يجب على
            المستورد الأوروبي شراء شهادات CBAM بسعر يطابق سعر ETS عن الانبعاثات
            المضمَّنة الزائدة عن التخصيص المجاني. يتلاشى التخصيص المجاني
            تدريجيًا ٢٠٢٦–٢٠٣٤.
          </li>
        </ul>

        <p>
          السلع المشمولة (القائمة الحالية):{" "}
          <strong>
            الأسمنت، الحديد والصلب، الألومنيوم، الأسمدة، الكهرباء، الهيدروجين،
          </strong>
          إلى جانب بعض المنتجات اللاحقة كالبراغي والصواميل والهياكل الفولاذية.
          مصر مصدّر معتبر للاتحاد الأوروبي في الأسمنت وحديد التسليح ومنتجات
          الألومنيوم وأسمدة اليوريا/نترات الأمونيوم — كلها مشمولة.
        </p>

        <Callout tone='warning' title='CBAM مال حقيقي'>
          <p>
            الكهرباء المصرية تعتمد بشدة على الغاز الطبيعي (~٨٥٪)، مع بعض
            المتجددات لكن أعلى بكثير من المتوسط الأوروبي المتراجع. للألومنيوم
            والصلب والأسمنت المصري المتجه للاتحاد، رقم الانبعاثات المضمَّنة —
            وبالتالي تكلفة CBAM — سيكون كبيرًا ما لم يثبت المنتج استخدام كهرباء
            متجددة وعمليات كفؤة. خطط عقود التوريد ببنود تمرير تكلفة CBAM.
          </p>
        </Callout>

        <h2>ما يجب على المصدّر المصري في نطاق CBAM فعله</h2>
        <ol>
          <li>
            احسب <strong>الانبعاثات المباشرة</strong> (النطاق ١ — احتراق ذاتي) و
            <strong>غير المباشرة</strong> (النطاق ٢ — الكهرباء المشتراة)، وفق
            المنهجية الأوروبية في اللائحة التنفيذية ٢٠٢٣/١٧٧٣.
          </li>
          <li>
            احصل على <strong>تحقق طرف ثالث</strong> من حاسب معتمد أوروبيًا (TÜV،
            Bureau Veritas، SGS، إلخ).
          </li>
          <li>
            قدم تقرير الانبعاثات المتحقق منه للمستورد الأوروبي عن كل شحنة.
          </li>
          <li>
            تتبع وأثبت أي <strong>سعر كربون مدفوع</strong> في مصر (حاليًا صفر
            اتحاديًا) للائتمان مقابل CBAM.
          </li>
          <li>
            تفاوض على <strong>توزيع تكلفة</strong> CBAM بين المصدّر والمستورد —
            عادة نقطة إعادة تفاوض.
          </li>
        </ol>

        <h2>EUDR — لائحة إزالة الغابات</h2>
        <p>
          لائحة الاتحاد ٢٠٢٣/١١١٥ تحظر طرح سلع معينة ومشتقاتها في سوق الاتحاد
          إذا أُنتجت على أرض أُزيلت غاباتها بعد ٣١ ديسمبر ٢٠٢٠. المشمولة:
          الماشية والكاكاو والقهوة وزيت النخيل والمطاط والصويا والأخشاب وكثير من
          المنتجات المشتقة. لمصر الأكثر صلة <strong>منتجات الأخشاب</strong>{" "}
          (الأثاث، ألواح الخشب) و<strong>الكاكاو أو القهوة المصنعة</strong> من
          المعيدين. الامتثال يتطلب تحديد إحداثيات قطعة المنشأ وإفادات العناية
          الواجبة.
        </p>

        <h2>لائحة العمل القسري</h2>
        <p>
          لائحة الاتحاد للعمل القسري (٢٠٢٤/٣٠١٥) تحظر طرح المنتجات المصنوعة
          كليًا أو جزئيًا بالعمل القسري في سوق الاتحاد. الولايات المتحدة لديها
          نظام مواز (UFLPA). يحتاج المصدّر المصري وثائق تتبع سلسلة التوريد، خاصة
          لمدخلات القطن التي قد تكون مرت عبر شينجيانغ أو مناطق عالية الخطر.
        </p>

        <h2>خريطة طريق استدامة عملية لمصدّر مصري صغير</h2>
        <ol>
          <li>
            <strong>السنة صفر:</strong> احصل على OEKO-TEX Standard 100 (منسوجات)
            أو GlobalG.A.P. (منتجات). أجرِ تدقيق SMETA 4-pillar.
          </li>
          <li>
            <strong>السنة ١:</strong> أضف اعتمادات البرامج الخاصة بأكبر عميل
            (BCI، GOTS، GRS، BRCGS). ابدأ جرد انبعاثات النطاق ١+٢.
          </li>
          <li>
            <strong>السنة ١–٢:</strong> إن كنت في نطاق CBAM، تعاقد على حساب
            انبعاثات متحقق منه؛ اربط بنود تمرير CBAM في عقود الاتحاد.
          </li>
          <li>
            <strong>السنة ٢:</strong> توريد كهرباء متجددة (PPA للطاقة الشمسية
            أصبح متاحًا في مصر)، مشاريع تقليل المياه والكيماويات.
          </li>
          <li>
            <strong>السنة ٢–٣:</strong> انشر تقرير استدامة وفق GRI أو ISSB IFRS
            S1/S2. يصبح أصلًا تجاريًا لحسابات الاتحاد والمملكة المستوى الأول.
          </li>
        </ol>

        <Callout tone='tip' title='إنفاق الاستدامة له أثر إيرادي'>
          <p>
            يدفع تجار التجزئة الأوروبيون والبريطانيون علاوة قابلة للقياس —
            ويمنحون طلبات أكبر — للموردين الذين يلبون معاييرهم المعلنة لـ ESG.
            اعتبر استثمار ESG رأس مال نمو، لا تكلفة امتثال. المصدّرون المصريون
            الأوائل في المنسوجات والأغذية الذين يحرزون شهادات الحزمة الكاملة
            (OEKO-TEX + GOTS + BCI + SMETA + النطاق ١+٢ متحقق + جاهز CBAM)
            يكسبون خندقًا تنافسيًا دائمًا في توريد الاتحاد.
          </p>
        </Callout>
      </>
    ),
  },
};
