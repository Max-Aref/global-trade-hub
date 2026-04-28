import type { LegalDoc } from "./types";

const CookieEN = (
  <>
    <p>
      This Cookie Policy explains how Global Trade Hub uses cookies and similar
      technologies on globaltradehub.com. It supplements our{" "}
      <a href='/en/legal/privacy-policy'>Privacy Policy</a>.
    </p>

    <h2>1. What are cookies?</h2>
    <p>
      Cookies are small text files placed on your device when you visit a
      website. We also use related technologies such as local storage and
      pixels. Cookies may be &quot;session&quot; (deleted when you close your
      browser) or &quot;persistent&quot; (remain until expiry or deletion).
    </p>

    <h2>2. Categories we use</h2>
    <ul>
      <li>
        <strong>Strictly necessary:</strong> required for the Platform to
        function (authentication, security, load balancing). Cannot be disabled.
      </li>
      <li>
        <strong>Functional:</strong> remember your language (EN/AR),
        preferences, and recently viewed listings.
      </li>
      <li>
        <strong>Analytics:</strong> measure traffic and usage patterns to
        improve the Platform. Loaded only after you accept analytics cookies.
      </li>
      <li>
        <strong>Marketing:</strong> not used by default. If we introduce
        marketing cookies in the future, we will request explicit consent.
      </li>
    </ul>

    <h2>3. Your choices</h2>
    <p>
      On your first visit, our cookie banner lets you accept all, reject
      non-essential, or customise. You can change your choice at any time via
      the &quot;Cookie settings&quot; link in the footer. Most browsers also
      allow you to block or delete cookies through their settings.
    </p>

    <h2>4. Third parties</h2>
    <p>
      Some cookies may be placed by third-party providers we use for hosting,
      analytics, security, or fraud prevention. These providers act as our
      processors and are bound by data-processing agreements.
    </p>

    <h2>5. Updates</h2>
    <p>
      We may update this Cookie Policy. The &quot;Last updated&quot; date
      reflects the most recent revision. Material changes will be notified via
      the cookie banner or platform notification.
    </p>
  </>
);

const CookieAR = (
  <>
    <p>
      توضّح سياسة ملفات تعريف الارتباط هذه كيفية استخدام Global Trade Hub لملفات
      تعريف الارتباط والتقنيات المشابهة على globaltradehub.com. وهي مكمّلة لـ{" "}
      <a href='/ar/legal/privacy-policy'>سياسة الخصوصية</a>.
    </p>

    <h2>1. ما هي ملفات تعريف الارتباط؟</h2>
    <p>
      ملفات تعريف الارتباط هي ملفات نصية صغيرة تُحفظ على جهازك عند زيارة الموقع.
      ونستخدم أيضًا تقنيات ذات صلة مثل التخزين المحلي والبكسلات. وقد تكون
      &quot;للجلسة&quot; (تُحذف عند إغلاق المتصفح) أو &quot;دائمة&quot; (تبقى
      حتى انتهاء صلاحيتها أو حذفها).
    </p>

    <h2>2. الفئات التي نستخدمها</h2>
    <ul>
      <li>
        <strong>ضرورية تمامًا:</strong> لازمة لعمل المنصّة (المصادقة والأمان
        وموازنة الأحمال). لا يمكن تعطيلها.
      </li>
      <li>
        <strong>وظيفية:</strong> تتذكّر لغتك (EN/AR) وتفضيلاتك والقوائم التي
        عرضتها مؤخرًا.
      </li>
      <li>
        <strong>تحليلية:</strong> لقياس حركة المرور وأنماط الاستخدام لتحسين
        المنصّة. تُحمَّل فقط بعد قبولك.
      </li>
      <li>
        <strong>تسويقية:</strong> لا تُستخدم افتراضيًا. وفي حال إدخالها
        مستقبلاً، سنطلب موافقة صريحة.
      </li>
    </ul>

    <h2>3. خياراتك</h2>
    <p>
      عند أول زيارة، يتيح لك شريط ملفات تعريف الارتباط القبول الكامل أو رفض غير
      الضرورية أو التخصيص. يمكنك تغيير اختيارك في أي وقت من رابط &quot;إعدادات
      ملفات تعريف الارتباط&quot; في التذييل. كما تتيح المتصفّحات حظرها أو حذفها
      من الإعدادات.
    </p>

    <h2>4. أطراف ثالثة</h2>
    <p>
      قد توضع بعض الملفات بواسطة مزوّدين خارجيين نستعين بهم للاستضافة والتحليلات
      والأمان ومنع الاحتيال. ويتصرّف هؤلاء بصفتهم معالجين نيابة عنّا، وهم ملزمون
      باتفاقيات معالجة البيانات.
    </p>

    <h2>5. التحديثات</h2>
    <p>
      قد نُحدّث هذه السياسة. ويعكس تاريخ &quot;آخر تحديث&quot; الإصدار الأخير.
      وستُعلَن التغييرات الجوهرية عبر شريط ملفات تعريف الارتباط أو إشعار
      المنصّة.
    </p>
  </>
);

export const cookiePolicy: LegalDoc = {
  slug: "cookie-policy",
  category: "privacy",
  title: { en: "Cookie Policy", ar: "سياسة ملفات تعريف الارتباط" },
  description: {
    en: "How Global Trade Hub uses cookies and similar technologies, and how to control them.",
    ar: "كيف تستخدم Global Trade Hub ملفات تعريف الارتباط والتقنيات المشابهة، وكيف تتحكّم فيها.",
  },
  lastUpdated: "2026-04-26",
  reviewStatus: "draft",
  body: { en: CookieEN, ar: CookieAR },
};
