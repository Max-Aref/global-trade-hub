import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "egyptian-cotton-grades",
  category: "sourcing",
  title: {
    en: "Egyptian cotton grades explained: Giza 86, 87, 88, 92, 94, 96 and the CES trademark",
    ar: "شرح أصناف القطن المصري: جيزة ٨٦، ٨٧، ٨٨، ٩٢، ٩٤، ٩٦ وعلامة CES التجارية",
  },
  description: {
    en: "What 'Egyptian cotton' actually means at a fiber level — staple length, micronaire, strength — how Giza varieties compare, and how the Cotton Egypt Association (CEA) Egyptian Cotton Seal protects buyers from mislabelling.",
    ar: "ما الذي تعنيه عبارة «قطن مصري» فعليًا على مستوى الألياف — طول التيلة والميكرونير والقوة — وكيف تقارن أصناف جيزة، وكيف تحمي علامة Egyptian Cotton Seal من جمعية القطن المصري المشترين من التضليل.",
  },
  reviewedDate: "2026-04-26",
  readingMinutes: 8,
  related: [
    "sourcing-guide-egypt",
    "quality-inspection-standards",
    "manufacturer-vetting-checklist",
  ],
  body: {
    en: (
      <>
        <p>
          &quot;Egyptian cotton&quot; is one of the most counterfeited claims in
          the global textile trade. A 2017 audit by a major U.S. retailer found
          that products labelled as 100% Egyptian cotton in fact contained no
          Egyptian fiber at all. To buy correctly, you have to understand three
          things: the fiber properties that make cotton premium, the specific
          Giza varieties grown in Egypt, and the authentication mark that lets
          you trace the claim.
        </p>

        <h2>The fiber properties that matter</h2>
        <p>
          Cotton is graded internationally on a small set of measurable fiber
          properties. The two that drive quality — and therefore price — most
          are <strong>staple length</strong> and{" "}
          <strong>fineness (micronaire)</strong>.
        </p>

        <ul>
          <li>
            <strong>Staple length.</strong> Measured in millimetres or 32nds of
            an inch. Cotton is classified short-staple (&lt;25 mm), medium
            (25–28 mm), long (28–34 mm), and extra-long (&gt;34 mm). Long-staple
            and ELS produce stronger, finer, and softer yarn.
          </li>
          <li>
            <strong>Micronaire (fineness/maturity).</strong> A composite measure
            of fiber diameter and maturity. Premium cotton is in the range
            3.7–4.2.
          </li>
          <li>
            <strong>Strength (g/tex).</strong> How much force a bundle of fibers
            can take before breaking. Premium long-staple is typically 33–40
            g/tex.
          </li>
          <li>
            <strong>Uniformity.</strong> The percentage of fibers close to the
            mean length. Above 85% is excellent.
          </li>
          <li>
            <strong>Color and trash.</strong> Spinnable color grade and
            non-fiber content. Premium grades are very white with very low
            trash.
          </li>
        </ul>

        <h2>The Giza varieties currently in commerce</h2>
        <p>
          The Cotton Research Institute under Egypt&apos;s Agricultural Research
          Center develops and releases new Giza varieties on a regular cycle.
          Older varieties are retired as newer ones replace them. The varieties
          most relevant to buyers in 2026 are below.
        </p>

        <ComparisonTable
          caption='Selected Giza cotton varieties — fiber properties (typical bale averages)'
          headers={[
            "Variety",
            "Class",
            "Staple length",
            "Micronaire",
            "Strength (g/tex)",
            "Use case",
          ]}
          rows={[
            [
              "Giza 87",
              "ELS",
              "33–35 mm",
              "3.8–4.2",
              "40–43",
              "Premium fine yarns, high-end home textiles",
            ],
            [
              "Giza 92",
              "ELS",
              "34–36 mm",
              "3.7–4.0",
              "42–45",
              "Top-tier ELS, replaces legacy Giza 45/70",
            ],
            [
              "Giza 96",
              "ELS",
              "33–34 mm",
              "3.9–4.2",
              "40–43",
              "ELS targeted at fine knit and shirting",
            ],
            [
              "Giza 86",
              "Long staple",
              "31–33 mm",
              "4.0–4.5",
              "36–40",
              "Bedding, towelling, mid-fine ring spun",
            ],
            [
              "Giza 94",
              "Long staple",
              "30–32 mm",
              "4.1–4.6",
              "35–38",
              "General apparel, bed and bath",
            ],
            [
              "Giza 88",
              "ELS (legacy)",
              "33–34 mm",
              "3.7–4.1",
              "40–42",
              "Specialty contracts, declining acreage",
            ],
          ]}
        />

        <Callout tone='info' title='ELS vs long-staple is not just marketing'>
          <p>
            Extra-long staple (ELS) cotton has measurably different properties
            from long-staple cotton. The price premium is real — ELS Giza 92
            typically trades at 30–60% over standard long-staple cotton,
            depending on the season. If a quote for &quot;Giza cotton&quot;
            doesn&apos;t name the variety, it is almost certainly long-staple,
            not ELS.
          </p>
        </Callout>

        <h2>The Egyptian Cotton Seal (CES)</h2>
        <p>
          The Cotton Egypt Association (CEA) operates the official Egyptian
          Cotton trademark, identified by a black-and-white logo of a cotton
          boll with the words &quot;Egyptian Cotton&quot;. Brands and mills that
          license the CES trademark must:
        </p>
        <ol>
          <li>
            Source verified Egyptian-grown lint, traceable from the farm through
            ginning.
          </li>
          <li>
            Submit yarn or fabric samples to CEA-approved laboratories for DNA
            testing — Applied DNA Sciences&apos; SigNature T platform is the
            most commonly used. The DNA traces back to the original cotton seed
            used for that variety.
          </li>
          <li>Pay licensing fees and submit to ongoing audit.</li>
        </ol>
        <p>
          For buyers, the CES logo on packaging is the only externally
          verifiable proof of authenticity for finished goods. Without it, you
          are relying entirely on the supplier&apos;s honesty.
        </p>

        <h2>How to specify cotton in a purchase order</h2>
        <p>
          When ordering Egyptian cotton products, your spec sheet should name
          the variety, the staple class, and the certifications required. For
          example, for a bedding contract:
        </p>
        <ul>
          <li>
            <strong>Fiber:</strong> 100% Egyptian cotton, Giza 86 (long staple)
            — or Giza 92 (ELS) for premium product.
          </li>
          <li>
            <strong>Yarn count:</strong> Ne 80/2 combed ring spun, or as
            specified per SKU.
          </li>
          <li>
            <strong>Construction:</strong> e.g. percale 200 TC, sateen 300 TC,
            with weave thread count notation explained.
          </li>
          <li>
            <strong>Certification:</strong> Egyptian Cotton Seal (CES) licensed;
            OEKO-TEX Standard 100 Class I (skin contact); GOTS for organic SKUs.
          </li>
          <li>
            <strong>Testing:</strong> Pre-shipment DNA test on yarn, with
            certificate from a CEA-approved laboratory.
          </li>
        </ul>

        <Callout tone='warning' title='Beware of vague claims'>
          <p>
            &quot;Made with Egyptian cotton&quot;, &quot;Egyptian-style
            cotton&quot;, and &quot;Egyptian quality cotton&quot; are marketing
            language with no defined meaning. Your contract should require the
            variety name and the CES license number — nothing less.
          </p>
        </Callout>

        <h2>Pricing and seasonality</h2>
        <p>
          The Egyptian cotton harvest runs roughly September through November.
          The Alexandria Cotton Exporters Association (ALCOTEXA) publishes
          weekly minimum export prices in cents/lb during the season. ELS
          varieties carry a substantial premium over the New York ICE No. 2
          contract — historically 40–80%, with peaks above 100% when supply is
          short. If you are quoted a price that is too close to standard upland
          cotton, the variety claim probably isn&apos;t authentic.
        </p>

        <h2>Where to verify</h2>
        <p>
          Before placing a textile contract, check three things: that the mill
          is a CES licensee (the CEA publishes the licensee list); that the yarn
          invoice references a specific Giza variety and lot number; and that
          pre-shipment testing is contractually mandated and paid for, not
          optional.
        </p>
      </>
    ),
    ar: (
      <>
        <p>
          عبارة «القطن المصري» من أكثر الادعاءات تزويرًا في تجارة المنسوجات
          العالمية. كشف تدقيق أجراه عام ٢٠١٧ أحد كبار تجار التجزئة في الولايات
          المتحدة أن منتجات تحمل علامة «قطن مصري ١٠٠٪» لم تحتوِ في الواقع على أي
          ألياف مصرية. لشراء القطن بشكل صحيح، عليك أن تفهم ثلاثة أمور: خصائص
          الألياف التي تجعل القطن متميزًا، أصناف جيزة المزروعة في مصر، وعلامة
          المصادقة التي تتيح لك تتبع الادعاء.
        </p>

        <h2>خصائص الألياف المهمة</h2>
        <p>
          يُصنّف القطن دوليًا وفق مجموعة محدودة من الخصائص القابلة للقياس. أهمها
          — والمحرك الأساسي للجودة والسعر — هما <strong>طول التيلة</strong> و
          <strong>الميكرونير (الدقة)</strong>.
        </p>

        <ul>
          <li>
            <strong>طول التيلة.</strong> يُقاس بالملليمتر أو بأجزاء الإنش.
            يُصنّف القطن قصير التيلة (أقل من ٢٥ مم)، متوسط (٢٥–٢٨ مم)، طويل
            (٢٨–٣٤ مم)، وفائق الطول (أكثر من ٣٤ مم). التيلة الطويلة وفائقة الطول
            تنتج خيوطًا أقوى وأدق وأنعم.
          </li>
          <li>
            <strong>الميكرونير.</strong> مقياس مركب لقطر الألياف ونضجها. القطن
            الممتاز في النطاق ٣٫٧–٤٫٢.
          </li>
          <li>
            <strong>القوة (جم/تكس).</strong> القوة التي تتحملها حزمة من الألياف
            قبل الكسر. القطن الطويل التيلة الممتاز عادة ٣٣–٤٠ جم/تكس.
          </li>
          <li>
            <strong>التجانس.</strong> نسبة الألياف القريبة من متوسط الطول.
            النسبة فوق ٨٥٪ ممتازة.
          </li>
          <li>
            <strong>اللون والشوائب.</strong> درجة لون قابلة للغزل ومحتوى غير
            ليفي. الدرجات الممتازة شديدة البياض ومنخفضة الشوائب جدًا.
          </li>
        </ul>

        <h2>أصناف جيزة المتداولة حاليًا</h2>
        <p>
          يطوّر معهد بحوث القطن التابع لمركز البحوث الزراعية المصري أصنافًا
          جديدة من جيزة في دورات منتظمة. تُسحب الأصناف القديمة بمجرد إحلال
          الجديدة محلها. الأصناف الأكثر صلة بالمشترين في عام ٢٠٢٦ موضحة أدناه.
        </p>

        <ComparisonTable
          dir='rtl'
          caption='أصناف مختارة من قطن جيزة — خصائص الألياف (متوسطات نمطية للبالة)'
          headers={[
            "الصنف",
            "الفئة",
            "طول التيلة",
            "الميكرونير",
            "القوة (جم/تكس)",
            "حالة الاستخدام",
          ]}
          rows={[
            [
              "جيزة ٨٧",
              "فائق الطول",
              "٣٣–٣٥ مم",
              "٣٫٨–٤٫٢",
              "٤٠–٤٣",
              "خيوط دقيقة فاخرة، مفروشات راقية",
            ],
            [
              "جيزة ٩٢",
              "فائق الطول",
              "٣٤–٣٦ مم",
              "٣٫٧–٤٫٠",
              "٤٢–٤٥",
              "أعلى فئة ELS، يحل محل جيزة ٤٥/٧٠",
            ],
            [
              "جيزة ٩٦",
              "فائق الطول",
              "٣٣–٣٤ مم",
              "٣٫٩–٤٫٢",
              "٤٠–٤٣",
              "ELS موجه للحياكة الدقيقة والقمصان",
            ],
            [
              "جيزة ٨٦",
              "طويل التيلة",
              "٣١–٣٣ مم",
              "٤٫٠–٤٫٥",
              "٣٦–٤٠",
              "مفروشات، مناشف، غزل حلقي متوسط",
            ],
            [
              "جيزة ٩٤",
              "طويل التيلة",
              "٣٠–٣٢ مم",
              "٤٫١–٤٫٦",
              "٣٥–٣٨",
              "ملابس عامة، مفروشات وحمام",
            ],
            [
              "جيزة ٨٨",
              "ELS (موروث)",
              "٣٣–٣٤ مم",
              "٣٫٧–٤٫١",
              "٤٠–٤٢",
              "عقود متخصصة، تتراجع المساحات",
            ],
          ]}
        />

        <Callout
          tone='info'
          title='الفرق بين ELS والتيلة الطويلة ليس مجرد تسويق'
        >
          <p>
            القطن فائق الطول (ELS) له خصائص قابلة للقياس مختلفة عن القطن طويل
            التيلة. علاوة السعر حقيقية — جيزة ٩٢ عادة بسعر أعلى ٣٠–٦٠٪ من القطن
            طويل التيلة القياسي، حسب الموسم. إذا لم يحدد العرض اسم الصنف لـ«قطن
            جيزة»، فمن المرجح جدًا أنه طويل التيلة وليس ELS.
          </p>
        </Callout>

        <h2>علامة القطن المصري (CES)</h2>
        <p>
          تدير جمعية القطن المصري (CEA) العلامة التجارية الرسمية للقطن المصري،
          التي تُعرف بشعار أبيض وأسود لجوزة قطن مع عبارة «Egyptian Cotton». على
          العلامات التجارية والمصانع المرخصة باستخدام CES أن:
        </p>
        <ol>
          <li>تشتري قطنًا مصريًا موثقًا، قابل للتتبع من المزرعة عبر المحلج.</li>
          <li>
            تقدم عينات خيوط أو نسيج لمختبرات معتمدة من CEA لاختبار الحمض النووي
            — منصة Applied DNA Sciences&apos; SigNature T هي الأكثر استخدامًا.
            يعود الحمض النووي إلى بذرة القطن الأصلية لذلك الصنف.
          </li>
          <li>تدفع رسوم الترخيص وتخضع للتدقيق المستمر.</li>
        </ol>
        <p>
          بالنسبة للمشترين، شعار CES على التغليف هو الدليل الوحيد القابل للتحقق
          خارجيًا على أصالة المنتج النهائي. بدونه، أنت تعتمد كليًا على نزاهة
          المورد.
        </p>

        <h2>كيف تحدد القطن في أمر الشراء</h2>
        <p>
          عند طلب منتجات قطنية مصرية، يجب أن تذكر ورقة المواصفات اسم الصنف، فئة
          التيلة، والشهادات المطلوبة. مثال على عقد مفروشات:
        </p>
        <ul>
          <li>
            <strong>الألياف:</strong> ١٠٠٪ قطن مصري، جيزة ٨٦ (طويل التيلة) — أو
            جيزة ٩٢ (ELS) للمنتج الفاخر.
          </li>
          <li>
            <strong>عدد الخيوط:</strong> Ne 80/2 ممشّط حلقي، أو حسب كل SKU.
          </li>
          <li>
            <strong>التركيب:</strong> مثلًا برسيل ٢٠٠ TC، ساتان ٣٠٠ TC، مع شرح
            لطريقة عد الخيوط.
          </li>
          <li>
            <strong>الشهادة:</strong> ترخيص علامة القطن المصري CES؛ OEKO-TEX
            Standard 100 Class I (تلامس الجلد)؛ GOTS للأصناف العضوية.
          </li>
          <li>
            <strong>الاختبار:</strong> اختبار DNA قبل الشحن على الخيط، مع شهادة
            من مختبر معتمد من CEA.
          </li>
        </ul>

        <Callout tone='warning' title='احذر من الادعاءات الغامضة'>
          <p>
            «مصنوع من قطن مصري»، «قطن على الطريقة المصرية»، و«قطن بجودة مصرية»
            جميعها لغة تسويقية بلا معنى محدد. يجب أن يطلب عقدك اسم الصنف ورقم
            ترخيص CES — لا أقل من ذلك.
          </p>
        </Callout>

        <h2>التسعير والموسمية</h2>
        <p>
          يبدأ موسم حصاد القطن المصري تقريبًا من سبتمبر إلى نوفمبر. تنشر جمعية
          مصدري الأقطان بالإسكندرية (ALCOTEXA) أسعار تصدير دنيا أسبوعية
          بالسنت/رطل خلال الموسم. يحمل ELS علاوة كبيرة على عقد نيويورك ICE No. 2
          — تاريخيًا ٤٠–٨٠٪، مع قمم تتجاوز ١٠٠٪ عند شح المعروض. إذا عُرض عليك
          سعر قريب جدًا من القطن الأمريكي القياسي، فمن المرجح أن ادعاء الصنف غير
          أصيل.
        </p>

        <h2>أين تتحقق</h2>
        <p>
          قبل التعاقد على نسيج، تأكد من ثلاثة أمور: أن المصنع مرخص لـ CES (تنشر
          CEA قائمة المرخص لهم)؛ أن فاتورة الخيط تذكر صنف جيزة محددًا ورقم
          تشغيلة؛ وأن اختبار ما قبل الشحن مفروض تعاقديًا ومدفوع، لا اختياري.
        </p>
      </>
    ),
  },
};
