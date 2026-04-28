import { Callout } from "@/components/learn/Callout";
import { ComparisonTable } from "@/components/learn/ComparisonTable";
import type { Article } from "./types";

export const article: Article = {
  slug: "shipping-from-egypt",
  category: "logistics",
  title: {
    en: "Shipping from Egypt: ports, transit times, FCL vs LCL, and Suez Canal economics",
    ar: "الشحن من مصر: الموانئ، أوقات العبور، FCL مقابل LCL، واقتصاديات قناة السويس",
  },
  description: {
    en: "Practical guide to choosing the right Egyptian port and shipping mode — FCL vs LCL break-even, transit times to major regions, the Suez Canal toll picture, and the Certificate of Conformity (COC) requirement for GCC destinations.",
    ar: "دليل عملي لاختيار الميناء ووضع الشحن المناسب — نقطة التعادل بين FCL وLCL، أوقات العبور للأسواق الرئيسية، صورة رسوم قناة السويس، ومتطلب شهادة المطابقة (COC) لوجهات الخليج.",
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
    ar: (
      <>
        <p>
          تمنح جغرافيا مصر مزايا طبيعية للشحن إلى ثلاث قارات. تحمل قناة السويس
          وحدها نحو ١٢٪ من تجارة العالم بالحجم في الظروف العادية. لكن الجغرافيا
          لا تترجم تلقائيًا إلى تكاليف منخفضة — اختيار الميناء والناقل ووضع
          الشحن الصحيح هو ما يحدد ما إذا كانت تكلفتك النهائية تنافسية.
        </p>

        <h2>الموانئ التصديرية الرئيسية الخمسة</h2>
        <ComparisonTable
          dir='rtl'
          caption='موانئ التصدير المصرية الرئيسية — نقاط القوة والاستخدام الأمثل'
          headers={["الميناء", "البحر", "نقاط القوة", "الأنسب لـ"]}
          rows={[
            [
              "الإسكندرية والدخيلة",
              "المتوسط",
              "بضائع عامة، حاويات، رورو، محطة حبوب",
              "الاتحاد الأوروبي، تركيا، شمال أفريقيا، أمريكا الشمالية",
            ],
            [
              "دمياط",
              "المتوسط",
              "حاويات، حبوب، يوريا، موالح",
              "الاتحاد الأوروبي، تركيا، روسيا، تصدير الموالح",
            ],
            [
              "شرق بورسعيد (SCCT)",
              "متوسط/سويس",
              "إعادة شحن مياه عميقة",
              "الشرق الأقصى، أوروبا، الأمريكيتان عبر إعادة الشحن",
            ],
            [
              "غرب بورسعيد",
              "المتوسط",
              "تغذية، شحنات مشروعات",
              "المغذيات الإقليمية",
            ],
            [
              "السخنة (العين السخنة)",
              "البحر الأحمر",
              "العمود الفقري لـ SCZONE، حاويات وبترول",
              "الخليج، الهند، شرق أفريقيا، الشرق الأقصى",
            ],
          ]}
        />

        <h2>أوقات العبور التأشيرية</h2>
        <p>
          تتفاوت أوقات العبور حسب خدمة الناقل والمسار. الأرقام أدناه نمطية من
          ميناء إلى ميناء للخدمات المباشرة، باستثناء التحميل والتخليص.
        </p>
        <ComparisonTable
          dir='rtl'
          caption='أوقات عبور نمطية للحاويات من الإسكندرية / السخنة'
          headers={["المنشأ", "الوجهة", "أيام العبور"]}
          rows={[
            ["الإسكندرية", "هامبورغ / روتردام", "٩–١٢"],
            ["الإسكندرية", "جنوة / مرسيليا", "٣–٥"],
            ["الإسكندرية", "إسطنبول / مرسين", "٣–٥"],
            ["الإسكندرية", "نيويورك", "١٤–١٨"],
            ["السخنة", "جبل علي (الإمارات)", "٥–٧"],
            ["السخنة", "جدة (السعودية)", "٣–٤"],
            ["السخنة", "مومباي (نهافا شيفا)", "٩–١٢"],
            ["شرق بورسعيد", "سنغافورة (إعادة شحن)", "١٨–٢٢"],
          ]}
        />

        <h2>FCL مقابل LCL: أين تقع نقطة التعادل</h2>
        <p>
          الحاوية الكاملة (FCL) تعني حجز حاوية ٢٠ أو ٤٠ قدمًا كاملة؛ بينما أقل
          من حاوية (LCL) يعني مشاركة الحاوية مع شاحنين آخرين والدفع بالمتر
          المكعب.
        </p>
        <ul>
          <li>
            <strong>حاوية ٢٠ قدم قياسية.</strong> نحو ٣٣ م³ مفيد، ~٢١ طن متري
            حمولة.
          </li>
          <li>
            <strong>حاوية ٤٠ قدم قياسية.</strong> نحو ٦٧ م³ مفيد، ~٢٦ طن متري
            حمولة.
          </li>
          <li>
            <strong>حاوية ٤٠ قدم HC.</strong> نحو ٧٦ م³ مفيد، نفس الحمولة — نفس
            تكلفة الشحن في معظم الحالات، فاطلب HC إذا كانت بضاعتك محدودة بالحجم
            لا الوزن.
          </li>
        </ul>
        <p>
          نقطة التعادل بين LCL وحاوية ٢٠ قدم FCL تقع نمطيًا عند ١٢–١٥ م³ على
          خطوط مصر-الاتحاد الأوروبي، و١٤–١٨ م³ على مصر-أمريكا الشمالية. تحت ذلك،
          LCL أرخص؛ فوقه، FCL أرخص <em>وأكثر موثوقية</em> (مخاطر تجميع أقل،
          أضرار أقل في CFS).
        </p>

        <Callout tone='tip' title='سعّر الاثنين دائمًا'>
          <p>
            احصل على عروض موازية لـ LCL بالمتر المكعب و FCL بسعر ثابت حتى لو
            ظننت أنك تعرف الإجابة. الأسعار الفورية متقلبة؛ نقطة التعادل تتحرك
            معها.
          </p>
        </Callout>

        <h2>صورة رسوم قناة السويس</h2>
        <p>
          بالنسبة للبائعين في مصر، تتعلق قناة السويس بمنفعة وقت العبور أكثر من
          تكلفة الرسم المباشرة — فبضاعتك تعبر قبل تطبيق الرسم (يدفعه الناقل، لا
          الشاحنة). غير أنه منذ ٢٠٢٣، تعطلت أحجام العبور بسبب أحداث أمنية في
          البحر الأحمر، حيث أعاد كثير من الناقلين تحويل المسار حول رأس الرجاء
          الصالح، مضيفين ١٠–١٤ يومًا لرحلات آسيا-أوروبا ورافعين الأسعار. تحقق من
          المسار الحالي للناقل في حجزك، خاصة للبضاعة الخارجة من السخنة. تعدّل
          هيئة القناة الرسوم دوريًا، ويمررها الناقلون كرسوم وقود أو أمن
          (BAF/SAF).
        </p>

        <h2>شهادة المطابقة (COC) لوجهات الخليج</h2>
        <p>
          تشغل السعودية والإمارات والكويت والبحرين وقطر وعُمان كل منها برنامج
          تقييم مطابقة يستلزم اختبار وشهادة السلع الاستهلاكية المستوردة{" "}
          <em>قبل</em> الشحن. أبرز البرامج:
        </p>
        <ul>
          <li>
            <strong>السعودية — سابر (SABER).</strong> منصة إلكترونية لشهادات
            مطابقة المنتج والشحنة.
          </li>
          <li>
            <strong>الإمارات — ECAS / EQM.</strong> برنامج الإمارات لتقييم
            المطابقة؛ مع برامج خاصة للمجوهرات والحلال وغيرها.
          </li>
          <li>
            <strong>الكويت — KUCAS.</strong> برنامج الكويت لضمان المطابقة.
          </li>
          <li>
            <strong>العراق — VOC.</strong> التحقق من المطابقة عبر COSQC، إلزامي
            لفئات منتجات كثيرة.
          </li>
        </ul>
        <p>
          الفشل في الحصول على COC <em>قبل</em> الشحن يؤدي إلى احتجاز الحاويات في
          الوجهة وإعادة تصديرها أو إتلافها أو الإفراج عنها بعد تعديل مكلف. اضمن
          إجراء COC ضمن جدولك: ٥–١٥ يوم عمل حسب الاختبار المطلوب.
        </p>

        <Callout tone='warning' title='خطط لـ COC قبل حجز السفينة'>
          <p>
            تعامل مع COC كجزء من ما قبل الشحن، لا بعده. تحتاج جهة الإصدار إلى
            الفاتورة المبدئية وتقارير الاختبار وفن التغليف. البدء بعد إصدار سند
            الشحن يسبب أرضية في ميناء الوجهة.
          </p>
        </Callout>

        <h2>EUR.1 وGSP ومنشأ اتفاقيات التجارة</h2>
        <p>
          مصر طرف في شبكة اتفاقيات تجارة تفضيلية تلغي أو تخفض الرسوم على المشتري
          حين تطبق صحيحًا. أبرزها:
        </p>
        <ul>
          <li>
            <strong>اتفاقية الشراكة المصرية-الأوروبية.</strong> معظم البضائع
            الصناعية تدخل الاتحاد بدون رسوم بشهادة EUR.1 أو تصريح فاتورة وفق
            قواعد منشأ Pan-Euro-Med.
          </li>
          <li>
            <strong>اتفاقية أغادير.</strong> تجارة حرة بين مصر والأردن والمغرب
            وتونس مع تراكم تحت PEM.
          </li>
          <li>
            <strong>كوميسا (COMESA).</strong> منطقة تجارة تفضيلية ٢١ دولة في شرق
            وجنوب أفريقيا.
          </li>
          <li>
            <strong>الجافتا (GAFTA).</strong> تجارة عربية حرة.
          </li>
          <li>
            <strong>AfCFTA.</strong> منطقة التجارة الحرة القارية الأفريقية — مصر
            دولة طرف وتحرير جمركي تدريجي قائم.
          </li>
          <li>
            <strong>اتفاقية الشراكة بين المملكة المتحدة ومصر.</strong>
            تعكس اتفاقية الاتحاد بعد بريكست؛ تستخدم EUR.1 مع تسمية المملكة
            المتحدة.
          </li>
          <li>
            <strong>اتفاقية تركيا-مصر FTA.</strong> تجارة حرة في البضائع
            الصناعية.
          </li>
          <li>
            <strong>اتفاقية ميركوسور-مصر FTA.</strong> تحرير تدريجي مع الأرجنتين
            والبرازيل وباراغواي وأوروغواي.
          </li>
        </ul>

        <h2>اختيار وكيل الشحن</h2>
        <p>وكيل الشحن هو أكبر محدد فردي لجودة التسليم. وكيل مصري كفء يقدم:</p>
        <ul>
          <li>عقود مباشرة مع ناقلين متعددين (مرونة في السعر).</li>
          <li>وصول لنافذة نافذة الموحدة (نتناولها في دليل الجمارك).</li>
          <li>ترخيص مخلص جمركي داخلي.</li>
          <li>قدرة اكتتاب تأمين أو لجنة تأمين.</li>
          <li>تكامل EDI / فواتير إلكترونية معك.</li>
        </ul>
        <p>
          تجنب الوكلاء الذين يعرضون أسعارًا فورية دون ذكر الناقل ودون شفافية في
          GRI / الرسوم الإضافية — الرقم الشامل عادة ينمو بين العرض وسند الشحن.
        </p>
      </>
    ),
  },
};
