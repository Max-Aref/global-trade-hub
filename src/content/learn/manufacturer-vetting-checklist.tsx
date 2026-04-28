import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "manufacturer-vetting-checklist",
  category: "sourcing",
  title: {
    en: "Manufacturer vetting checklist for Egyptian suppliers",
    ar: "قائمة فحص المصنعين لتقييم الموردين المصريين",
  },
  description: {
    en: "Step-by-step due diligence on an Egyptian factory: GAFI registry checks, GOEIC export card, tax card, social compliance audits (BSCI, SEDEX, WRAP, SA8000), quality certifications (ISO 9001, 14001, 45001), and the financial signals that matter.",
    ar: "العناية الواجبة خطوة بخطوة لمصنع مصري: فحوصات سجل GAFI، بطاقة GOEIC، البطاقة الضريبية، تدقيقات الامتثال الاجتماعي (BSCI، SEDEX، WRAP، SA8000)، شهادات الجودة (ISO 9001، 14001، 45001)، والإشارات المالية المهمة.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 9,
  related: [
    "sourcing-guide-egypt",
    "quality-inspection-standards",
    "sustainability-and-esg",
  ],
  body: {
    en: (
      <>
        <p>
          A manufacturer is either capable of executing your order on time and
          at spec, or they are not. The purpose of vetting is to predict that
          outcome before money is committed. This checklist is the same process
          used by professional buyers, sourcing agencies, and the Global Trade
          Hub verification team. Run all of it before placing a first order, and
          a subset annually thereafter.
        </p>

        <h2>1. Legal entity and registry checks</h2>
        <p>
          The starting point is to confirm the supplier is a real, legally
          operating Egyptian company. Three documents establish this.
        </p>
        <ul>
          <li>
            <strong>Commercial register (السجل التجاري).</strong> Issued by
            GAFI. Confirms the legal name, address, share capital, authorized
            signatory, and registered activity. The register number is unique
            and verifiable.
          </li>
          <li>
            <strong>Tax card (البطاقة الضريبية).</strong> Issued by the Egyptian
            Tax Authority (ETA). Carries the national tax ID and confirms the
            entity files returns. From 2023, ETA also issues VAT registration
            numbers integrated with the e-invoice system.
          </li>
          <li>
            <strong>Industrial register (السجل الصناعي).</strong> Issued by the
            Industrial Development Authority (IDA) for actual manufacturers. A
            trading-only company will not have one.
          </li>
        </ul>

        <Callout tone='info' title='How to verify online'>
          <p>
            GAFI&apos;s e-services portal allows lookup of commercial register
            entries by number. The tax card can be cross-referenced with
            ETA&apos;s e-invoice taxpayer search. Both are free of charge.
          </p>
        </Callout>

        <h2>2. Export-specific licensing</h2>
        <p>
          Manufacturing rights do not equal export rights in Egypt. Two
          documents authorize export.
        </p>
        <ul>
          <li>
            <strong>GOEIC export card.</strong> Issued by the General
            Organization for Export and Import Control. Lists specific product
            categories (HS-aligned). Valid for 5 years, renewable.
          </li>
          <li>
            <strong>Importer card</strong> (where the supplier is also importing
            inputs) — separate document, also from GOEIC.
          </li>
        </ul>
        <p>
          Always request a scan of both cards, check the expiry date, and
          confirm that your specific HS codes appear on the export card.
        </p>

        <h2>3. Capacity verification</h2>
        <p>
          A factory&apos;s claimed capacity rarely equals its sustainable
          capacity. Sustainable capacity is roughly 70–80% of theoretical
          capacity, accounting for downtime, changeovers, and quality rejects.
          Verify capacity in three ways.
        </p>
        <ol>
          <li>
            <strong>Machinery list.</strong> Number, brand, model, age, and
            condition of key machines. Cross-check against the production volume
            you need.
          </li>
          <li>
            <strong>Headcount.</strong> Total workers, broken down between
            production, QC, and admin. Compare to industry norms (e.g. apparel:
            10–15 sewn pieces per machine operator per hour for simple knit,
            less for complex woven).
          </li>
          <li>
            <strong>Order book.</strong> Ask what percentage of capacity is
            already booked for your shipment window. A factory at 95% booked
            will deprioritize you under pressure.
          </li>
        </ol>

        <h2>4. Quality and management certifications</h2>
        <ComparisonTable
          caption='Standard certifications relevant to Egyptian export factories'
          headers={["Standard", "Scope", "Why it matters"]}
          rows={[
            [
              "ISO 9001:2015",
              "Quality management system",
              "Documented processes, traceable defects, corrective action",
            ],
            [
              "ISO 14001:2015",
              "Environmental management",
              "Required by EU buyers under CSDDD/CSRD trajectory",
            ],
            [
              "ISO 45001:2018",
              "Occupational health & safety",
              "Reduces audit failures on social compliance",
            ],
            [
              "ISO 22000 / BRCGS / IFS",
              "Food safety",
              "Mandatory for retail food contracts in EU/UK",
            ],
            [
              "GOTS / OEKO-TEX 100",
              "Textile chemistry & organic",
              "Required for organic and skin-contact retail",
            ],
            [
              "FSSC 22000",
              "Food packaging & ingredients",
              "Common ask from FMCG multinationals",
            ],
          ]}
        />

        <h2>5. Social compliance audits</h2>
        <p>
          Most international retailers require a recent (≤12 month) social
          compliance audit before onboarding. Common frameworks in Egypt:
        </p>
        <ul>
          <li>
            <strong>amfori BSCI</strong> — most prevalent in textiles and
            consumer goods exporting to EU.
          </li>
          <li>
            <strong>SEDEX SMETA</strong> (2-pillar or 4-pillar) — preferred by
            UK and U.S. retailers.
          </li>
          <li>
            <strong>WRAP</strong> — apparel-focused, common with U.S. buyers.
          </li>
          <li>
            <strong>SA8000</strong> — the highest bar; certification, not just
            an audit.
          </li>
          <li>
            <strong>Sedex / Higg FEM &amp; FSLM</strong> — fashion
            industry-specific environmental and social tooling.
          </li>
        </ul>
        <p>
          Ask for the most recent audit report, not just a certificate. The
          report contains corrective action items — and how long they take to
          close tells you a lot about the factory&apos;s discipline.
        </p>

        <Callout tone='warning' title='Audit fatigue is real'>
          <p>
            Egyptian factories complain about &quot;audit fatigue&quot; —
            running 8–10 different buyer audits per year. If you can accept an
            existing valid SMETA or BSCI report instead of demanding your own,
            you become a preferred customer and unlock better pricing and lead
            times.
          </p>
        </Callout>

        <h2>6. Financial signals</h2>
        <p>
          You generally won&apos;t see audited financials from a private
          Egyptian SME, but you can triangulate financial health.
        </p>
        <ul>
          <li>
            <strong>Bank reference.</strong> Ask for a letter from the
            supplier&apos;s primary bank confirming the relationship.
          </li>
          <li>
            <strong>Trade reference.</strong> Two existing buyer references,
            with permission to contact.
          </li>
          <li>
            <strong>Payment terms requested.</strong> A 100% T/T advance demand
            from a sizeable factory often signals cash-flow distress. Healthy
            factories accept LC at sight or 30/70.
          </li>
          <li>
            <strong>Workforce stability.</strong> High turnover or recent
            layoffs are a red flag for delivery reliability.
          </li>
        </ul>

        <h2>7. On-site verification</h2>
        <p>
          The single highest-value step is a physical visit — by you, your
          agent, or a third party such as Global Trade Hub&apos;s verification
          team. A site visit checks that the address is real, the machinery
          exists, the worker count matches the claim, and working conditions
          match the audit narrative.
        </p>
        <p>
          If you cannot travel, commission a video walk-through with a
          documented checklist, not a sales-led tour. Sample script: serial
          numbers on machines, the warehouse with current production, the QC
          area, the canteen and dormitory if applicable, fire safety equipment,
          and the time card system.
        </p>

        <h2>8. Final go/no-go</h2>
        <p>
          A supplier passes vetting only if all of the following are true: legal
          documents valid and verifiable; export card covers your HS codes;
          certifications appropriate to your sector and current; a social audit
          no older than 12 months with closed major NCs; bank and trade
          references verified; capacity and order book match your needs; on-site
          verification completed.
        </p>
        <p>
          Any single failure should pause the relationship until resolved. The
          cost of vetting properly is a single-digit percentage of the cost of a
          failed order.
        </p>
      </>
    ),
    ar: (
      <>
        <p>
          المصنع إما قادر على تنفيذ طلبك في الوقت المحدد ووفقًا للمواصفات، أو
          لا. الغرض من التقييم هو التنبؤ بهذه النتيجة قبل الالتزام بأموال. هذه
          القائمة هي العملية ذاتها التي يستخدمها المشترون المحترفون ووكالات
          التوريد وفريق التحقق في Global Trade Hub. نفّذها بالكامل قبل أول طلب،
          وجزءًا منها سنويًا بعد ذلك.
        </p>

        <h2>١. فحص الكيان القانوني والسجلات</h2>
        <p>
          نقطة البداية هي تأكيد أن المورد شركة مصرية حقيقية تعمل قانونيًا. ثلاث
          وثائق تثبت ذلك.
        </p>
        <ul>
          <li>
            <strong>السجل التجاري.</strong> يصدر عن GAFI. يؤكد الاسم القانوني
            والعنوان ورأس المال والمفوض بالتوقيع والنشاط المسجل. رقم السجل فريد
            وقابل للتحقق.
          </li>
          <li>
            <strong>البطاقة الضريبية.</strong> تصدر عن مصلحة الضرائب المصرية.
            تحمل الرقم الضريبي القومي وتؤكد أن الكيان يقدم الإقرارات. منذ ٢٠٢٣،
            تصدر المصلحة أيضًا أرقام تسجيل ضريبة القيمة المضافة المتكاملة مع
            نظام الفاتورة الإلكترونية.
          </li>
          <li>
            <strong>السجل الصناعي.</strong> يصدر عن هيئة التنمية الصناعية
            للمصنعين الفعليين. الشركة التجارية فقط لن يكون لديها سجل صناعي.
          </li>
        </ul>

        <Callout tone='info' title='كيفية التحقق إلكترونيًا'>
          <p>
            تتيح بوابة الخدمات الإلكترونية لـ GAFI البحث عن السجل التجاري
            بالرقم. يمكن مطابقة البطاقة الضريبية مع نظام البحث عن المسجلين
            بالفاتورة الإلكترونية. كلاهما مجاني.
          </p>
        </Callout>

        <h2>٢. تراخيص التصدير المتخصصة</h2>
        <p>
          حقوق التصنيع لا تساوي حقوق التصدير في مصر. وثيقتان تخوّلان التصدير.
        </p>
        <ul>
          <li>
            <strong>بطاقة GOEIC للتصدير.</strong> تصدر عن الهيئة العامة للرقابة
            على الصادرات والواردات. تحدد فئات منتجات (متوافقة مع HS). صالحة ٥
            سنوات، قابلة للتجديد.
          </li>
          <li>
            <strong>بطاقة المستورد</strong> (إذا كان المورد يستورد مدخلات أيضًا)
            — وثيقة منفصلة، أيضًا من GOEIC.
          </li>
        </ul>
        <p>
          اطلب نسخة من كلا البطاقتين دائمًا، تحقق من تاريخ الانتهاء، وأكد أن
          أكواد HS الخاصة بك مدرجة في بطاقة التصدير.
        </p>

        <h2>٣. التحقق من السعة الإنتاجية</h2>
        <p>
          السعة المعلنة للمصنع نادرًا ما تساوي السعة المستدامة. السعة المستدامة
          تقريبًا ٧٠–٨٠٪ من النظرية، مع احتساب التوقفات وتغيير الموديلات
          والمرفوضات. تحقق من السعة بثلاث طرق.
        </p>
        <ol>
          <li>
            <strong>قائمة الماكينات.</strong> العدد، العلامة التجارية، الموديل،
            العمر، والحالة. قارن مع الكمية التي تحتاجها.
          </li>
          <li>
            <strong>عدد العمالة.</strong> إجمالي العاملين، موزعًا بين الإنتاج
            وضبط الجودة والإدارة. قارن بمعايير الصناعة.
          </li>
          <li>
            <strong>دفتر الطلبات.</strong> اسأل ما نسبة السعة المحجوزة بالفعل
            لنافذة شحنتك. المصنع المحجوز ٩٥٪ سيؤجل ترتيبك تحت الضغط.
          </li>
        </ol>

        <h2>٤. شهادات الجودة والإدارة</h2>
        <ComparisonTable
          dir='rtl'
          caption='شهادات قياسية ذات صلة بمصانع التصدير المصرية'
          headers={["المعيار", "النطاق", "أهميته"]}
          rows={[
            [
              "ISO 9001:2015",
              "نظام إدارة الجودة",
              "عمليات موثقة، عيوب قابلة للتتبع، إجراء تصحيحي",
            ],
            [
              "ISO 14001:2015",
              "إدارة بيئية",
              "مطلوبة من المشترين الأوروبيين تحت CSDDD/CSRD",
            ],
            [
              "ISO 45001:2018",
              "صحة وسلامة مهنية",
              "تقلل من إخفاق التدقيقات الاجتماعية",
            ],
            [
              "ISO 22000 / BRCGS / IFS",
              "سلامة الغذاء",
              "إلزامية لعقود الأغذية بالتجزئة في الاتحاد الأوروبي/المملكة المتحدة",
            ],
            [
              "GOTS / OEKO-TEX 100",
              "كيمياء النسيج والعضوية",
              "مطلوبة للعضوي وملامسة الجلد",
            ],
            [
              "FSSC 22000",
              "تغليف ومكونات الغذاء",
              "طلب شائع من شركات السلع الاستهلاكية متعددة الجنسيات",
            ],
          ]}
        />

        <h2>٥. تدقيقات الامتثال الاجتماعي</h2>
        <p>
          يتطلب معظم تجار التجزئة الدوليين تدقيقًا اجتماعيًا حديثًا (أحدث من ١٢
          شهرًا) قبل الإدراج. الأطر الشائعة في مصر:
        </p>
        <ul>
          <li>
            <strong>amfori BSCI</strong> — الأكثر انتشارًا في المنسوجات والسلع
            الاستهلاكية المصدّرة للاتحاد الأوروبي.
          </li>
          <li>
            <strong>SEDEX SMETA</strong> (٢ ركيزة أو ٤ ركائز) — مفضّل من تجار
            التجزئة في المملكة المتحدة والولايات المتحدة.
          </li>
          <li>
            <strong>WRAP</strong> — موجه للملابس، شائع مع المشترين الأمريكيين.
          </li>
          <li>
            <strong>SA8000</strong> — أعلى مستوى؛ شهادة، وليس مجرد تدقيق.
          </li>
          <li>
            <strong>Higg FEM و FSLM</strong> — أدوات بيئية واجتماعية خاصة بصناعة
            الأزياء.
          </li>
        </ul>
        <p>
          اطلب أحدث تقرير تدقيق، وليس مجرد الشهادة. التقرير يحتوي على بنود
          الإجراء التصحيحي — والمدة التي يستغرقها إغلاقها تخبرك بالكثير عن
          انضباط المصنع.
        </p>

        <Callout tone='warning' title='إجهاد التدقيق حقيقي'>
          <p>
            تشكو المصانع المصرية من «إجهاد التدقيق» — إجراء ٨–١٠ تدقيقات مختلفة
            لمشترين سنويًا. إذا قبلت تقرير SMETA أو BSCI ساري بدلًا من المطالبة
            بتقريرك الخاص، تصبح عميلًا مفضلًا وتفتح أسعارًا ومدد تسليم أفضل.
          </p>
        </Callout>

        <h2>٦. الإشارات المالية</h2>
        <p>
          عمومًا لن ترى قوائم مالية مدققة من شركة مصرية متوسطة، لكن يمكنك
          استنتاج الصحة المالية بطرق غير مباشرة.
        </p>
        <ul>
          <li>
            <strong>مرجع بنكي.</strong> اطلب خطابًا من البنك الرئيسي للمورد يؤكد
            العلاقة.
          </li>
          <li>
            <strong>مرجع تجاري.</strong> مرجعان من مشترين قائمين، مع إذن
            بالتواصل.
          </li>
          <li>
            <strong>شروط الدفع المطلوبة.</strong> طلب دفعة مقدمة ١٠٠٪ من مصنع
            كبير غالبًا ما يشير إلى أزمة سيولة. المصانع السليمة تقبل LC at sight
            أو ٣٠/٧٠.
          </li>
          <li>
            <strong>استقرار العمالة.</strong> دوران مرتفع أو تسريحات حديثة إشارة
            حمراء على موثوقية التسليم.
          </li>
        </ul>

        <h2>٧. التحقق الميداني</h2>
        <p>
          أعلى خطوة قيمة هي الزيارة الميدانية — منك أو من وكيلك أو من طرف ثالث
          مثل فريق التحقق في Global Trade Hub. الزيارة الميدانية تتحقق من حقيقة
          العنوان، ووجود الماكينات، ومطابقة عدد العمال للمدعى، ومطابقة ظروف
          العمل لما ورد في التدقيق.
        </p>
        <p>
          إذا تعذر السفر، اطلب جولة فيديو موثقة بقائمة فحص لا جولة بقيادة
          المبيعات. أمثلة بنود: الأرقام التسلسلية على الماكينات، المستودع مع
          الإنتاج الحالي، منطقة ضبط الجودة، الكافيتيريا والمسكن إن وجد، معدات
          الإطفاء، نظام بصمة الحضور.
        </p>

        <h2>٨. القرار النهائي</h2>
        <p>
          ينجح المورد في التقييم فقط إذا تحقق كل ما يلي: المستندات القانونية
          سارية وقابلة للتحقق؛ بطاقة التصدير تغطي أكواد HS الخاصة بك؛ الشهادات
          مناسبة لقطاعك وسارية؛ تدقيق اجتماعي حديث أحدث من ١٢ شهرًا مع إغلاق
          الملاحظات الكبرى؛ المراجع البنكية والتجارية مؤكدة؛ السعة ودفتر الطلبات
          يطابقان احتياجاتك؛ التحقق الميداني مكتمل.
        </p>
        <p>
          أي إخفاق منفرد يجب أن يُوقف العلاقة حتى يُحل. تكلفة التقييم الصحيح
          نسبة مئوية أحادية الرقم من تكلفة طلب فاشل.
        </p>
      </>
    ),
  },
};
