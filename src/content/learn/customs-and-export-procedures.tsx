import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "customs-and-export-procedures",
  category: "logistics",
  title: {
    en: "Egyptian customs & export procedures: NAFEZA, ACI, HS codes, and free zones",
    ar: "الجمارك وإجراءات التصدير المصرية: نافذة، ACI، أكواد HS، والمناطق الحرة",
  },
  description: {
    en: "How NAFEZA single window works, the Advance Cargo Information (ACI) requirement for imports into Egypt, HS classification basics, and how Egypt's free zones and SCZONE alter your customs treatment.",
    ar: "كيف تعمل نافذة الموحدة (نافذة)، متطلب المعلومات المسبقة عن الشحنة (ACI) للواردات إلى مصر، أساسيات تصنيف HS، وكيف تغيّر المناطق الحرة و SCZONE معاملتك الجمركية.",
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
    ar: (
      <>
        <p>
          رقمنت مصر نظام التخليص التجاري بشكل كبير منذ عام ٢٠٢١. أهم اختصارين
          لكل من يتاجر مع مصر هما <strong>نافذة</strong> (النافذة الموحدة
          الوطنية) و<strong>ACI</strong> (المعلومات المسبقة عن الشحنة). يحكمان
          معًا تقريبًا كل شحنة تتحرك من البلاد أو إليها.
        </p>

        <h2>نافذة — النافذة الموحدة الوطنية</h2>
        <p>
          نافذة هي النافذة الموحدة الإلكترونية للتجارة في مصر، تشغّلها شركة مصر
          للخدمات التكنولوجية (MTS) نيابة عن وزارة المالية. تربط مصلحة الجمارك
          المصرية و GOEIC والهيئة القومية لسلامة الغذاء وهيئة الدواء وغيرها من
          الجهات في واجهة إلكترونية واحدة للتخليص والتصاريح وإدارة المخاطر.
        </p>
        <p>
          للمصدّرين، نافذة هي حيث يُقدَّم البيان التصديري، وتُرفع المستندات
          الداعمة، وتُعيَّن مسارات المخاطر (أخضر/أصفر/أحمر). معظم المستندات
          مقبولة الآن نسخًا ممسوحة لا أصول حبر.
        </p>

        <h2>ACI — المعلومات المسبقة عن الشحنة</h2>
        <p>
          منذ أكتوبر ٢٠٢١ (قرار ٣٨/٢٠٢١)، يجب الإقرار المسبق عن جميع الواردات
          إلى مصر على نافذة قبل إقلاع السفينة من ميناء التحميل. تشمل البيانات
          الإلزامية:
        </p>
        <ul>
          <li>الرقم الضريبي للمستورد وتسجيله على نافذة.</li>
          <li>تفاصيل المصدّر (الاسم، العنوان، الدولة).</li>
          <li>أكواد HS لكل بند.</li>
          <li>الفاتورة التجارية وقائمة التعبئة.</li>
          <li>
            سند الشحن أو بوليصة الشحن الجوي (يقبل الأولي مع متابعة النهائي).
          </li>
          <li>رقم ACID (معرف فريد ١٩ خانة يصدر من نافذة).</li>
        </ul>
        <p>
          يجب على المصدّر إدراج رقم ACID على سند الشحن والفاتورة وقائمة التعبئة.
          بدون ACID لن تُخلَّص الشحنة في مصر.
        </p>

        <Callout tone='warning' title='ACI يؤثر على المصدّرين أيضًا'>
          <p>
            رغم أن ACI نظام استيراد، فإن المصدّرين من أي دولة يشحنون
            <em> إلى</em> مصر مطالبون عمليًا بالتنسيق. يسجل المستورد المصري ACI؛
            وأنت كمصدّر لا تستطيع الشحن حتى يصل رقم ACID. احسب ٥–١٠ أيام عمل
            تنسيق ما قبل الشحن في جدولك.
          </p>
        </Callout>

        <h2>تصنيف HS</h2>
        <p>
          النظام المنسق (HS) هيكل تصنيف من ست خانات لمنظمة الجمارك العالمية،
          تمدّه الدول إلى ٨ أو ١٠ خانات. تستخدم مصر بنود تعريفة من ٨ خانات بناءً
          على إصدار HS-2022. يحدد التصنيف:
        </p>
        <ul>
          <li>معدل الرسم الجمركي في الوجهة.</li>
          <li>فئة بطاقة التصدير المخوّلة لك بالشحن.</li>
          <li>ما إذا كان منتجك مقيدًا أو يحتاج تصاريح.</li>
          <li>الأهلية للمنشأ التفضيلي في اتفاقيات التجارة.</li>
        </ul>

        <ComparisonTable
          dir='rtl'
          caption='أمثلة لأكواد HS مصرية شائعة في التصدير (HS-2022)'
          headers={["المنتج", "كود HS (٦ خانات)", "ملاحظات"]}
          rows={[
            [
              "قطن غير مندوف ولا ممشط",
              "5201.00",
              "تصدير الشعر الخام، رصد ALCOTEXA",
            ],
            ["مفروشات قطنية محاكة", "6302.21", "غالبًا تطلب مواصفات قطن مصري"],
            ["ألواح رخام مصقولة", "6802.91", "حسب النوع والتشطيب"],
            ["برتقال طازج", "0805.10", "شهادة صحة نباتية مطلوبة"],
            ["فراولة مجمدة", "0811.10", "وثائق سلسلة التبريد"],
            [
              "يوريا، درجة سماد",
              "3102.10",
              "خاضعة لترخيص التصدير في ذروة الطلب",
            ],
            ["أثاث غرف نوم خشبي", "9403.50", "FSC حيث يُطلب"],
          ]}
        />

        <Callout tone='info' title='احصل على قرار ملزم للسلع الغامضة'>
          <p>
            إذا كان منتجك مبتكرًا أو يمكن تصنيفه بأكثر من طريقة، اطلب قرار تصنيف
            تعريفي ملزم من إدارة جمارك بلد الوجهة قبل الشحن بالحجم. التكلفة
            قليلة؛ تكلفة إعادة التصنيف عند التكلفة النهائية أكبر بكثير.
          </p>
        </Callout>

        <h2>مستندات التصدير المطلوبة</h2>
        <p>الشحنة التصديرية المصرية القياسية إلى دولة ثالثة تتطلب:</p>
        <ol>
          <li>
            <strong>فاتورة تجارية</strong> (بالإنجليزية، تشمل كود HS، الكمية،
            سعر الوحدة، الإجمالي، Incoterm 2020، شروط الدفع).
          </li>
          <li>
            <strong>قائمة تعبئة</strong> (تفاصيل بمستوى الكرتون، الوزن القائم
            والصافي، الأبعاد).
          </li>
          <li>
            <strong>شهادة منشأ.</strong> تصدر عن الاتحاد العام للغرف التجارية
            المصرية أو المجلس التصديري المعني. استخدم EUR.1 للاتحاد
            الأوروبي/المملكة المتحدة، شهادة المنشأ العربية للجافتا، والنموذج A
            للمنشأ غير التفضيلي.
          </li>
          <li>
            <strong>سند الشحن / بوليصة الشحن الجوي.</strong> يصدر عن الناقل أو
            وكيله.
          </li>
          <li>
            <strong>شهادة صحة نباتية</strong> (للنبات والبذور والمنتج الطازج).
            تصدر عن الإدارة المركزية للحجر النباتي.
          </li>
          <li>
            <strong>شهادة صحية</strong> (للمنتجات الحيوانية والأغذية المصنعة).
            تصدر عن الهيئة القومية لسلامة الغذاء.
          </li>
          <li>
            <strong>تقرير فحص ما قبل الشحن</strong> (إذا اشترطه المشتري أو دولة
            الوصول).
          </li>
          <li>
            <strong>COC / سابر</strong> لوجهات الخليج.
          </li>
        </ol>

        <h2>الفاتورة الإلكترونية (ETA)</h2>
        <p>
          منذ ٢٠٢١، تُلزم مصلحة الضرائب المصرية المسجلين بإصدار فواتير إلكترونية
          عبر بوابة ETA. ستحمل الفاتورة التجارية للمورّد المصري لشحنة تصديرية
          معرّف UUID ورمز QR. النظام متكامل بالكامل مع نافذة — أي أن الفاتورة
          الإلكترونية جزء من البيان التصديري، لا مستند منفصل.
        </p>

        <h2>المناطق الحرة و SCZONE</h2>
        <p>تشغّل مصر عدة أنظمة اقتصادية تغير المعاملة الجمركية:</p>
        <ul>
          <li>
            <strong>المناطق الحرة العامة.</strong> مواقع مثل المنطقة الحرة
            العامة بالإسكندرية، ومدينة نصر، وبورسعيد. لا تخضع البضائع الداخلة
            والخارجة لرسم جمركي مصري أو ضريبة قيمة مضافة. ممتازة لإعادة التصدير
            والتجميع.
          </li>
          <li>
            <strong>المناطق الحرة الخاصة.</strong> مكافئات لمستثمر واحد.
          </li>
          <li>
            <strong>المنطقة الاقتصادية لقناة السويس (SCZONE).</strong>
            منطقة بوضع خاص بشباك موحد وحوافز ضريبية وإجراءات جمركية. تضم ميناء
            السخنة وشرق بورسعيد والقنطرة غرب والمناطق الصناعية في العين السخنة
            وشرق بورسعيد.
          </li>
          <li>
            <strong>المناطق الاستثمارية.</strong> مناطق قطاعية بخدمات مبسطة.
          </li>
          <li>
            <strong>الاستيراد المؤقت / السماح المؤقت.</strong> المدخلات
            المستوردة لاستخدامها في بضائع ستُعاد تصديرها يمكن إدخالها بدون رسم.
            مفيد لعمليات التشطيب.
          </li>
        </ul>

        <h2>الجدول الزمني العملي</h2>
        <p>
          الشحنة التصديرية الأولى من مصنع مصري إلى مشتر خارجي عادة تتبع هذا
          الجدول:
        </p>
        <ol>
          <li>
            اليوم ١–٣: المشتري يصدر PO؛ المورّد يؤكد؛ يسجل ACI إن كان المستورد
            ضمن نطاق ACI (نادر للتصدير).
          </li>
          <li>اليوم ٤–٢٥: الإنتاج.</li>
          <li>
            اليوم ٢٦–٢٨: فحص ما قبل الشحن؛ COC للخليج؛ البيان التصديري على
            نافذة.
          </li>
          <li>
            اليوم ٢٩–٣١: تحميل الحاوية، النقل للميناء، التخليص (المسار الأخضر
            عادة ٢٤ ساعة، الأصفر ٤٨ ساعة، الأحمر ٥–١٠ أيام).
          </li>
          <li>اليوم ٣٢: التحميل على ظهر السفينة؛ إصدار سند الشحن.</li>
        </ol>
        <p>
          الواقعي للطلب الأول من تاريخ الطلب إلى الإقلاع ٣٠–٣٥ يومًا؛ الموردون
          المتمرسون يقلصونها إلى ٢٠–٢٥.
        </p>
      </>
    ),
  },
};
