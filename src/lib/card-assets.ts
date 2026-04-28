/**
 * Global Trade Hub — Feature Card Visual Registry
 *
 * Central registry for all feature card illustrations.
 * Update src paths here when swapping visuals — never hardcode paths
 * directly in page/section components.
 *
 * All current visuals are custom SVG illustrations (Track B):
 *   - Self-contained, brand-consistent, animated
 *   - Infinite resolution — no degradation at any screen size
 *   - No external dependencies, no attribution required
 *   - Stored in /public/illustrations/
 *
 * To replace a card with a photograph:
 *   1. Add a WebP file to /public/images/feature-cards/
 *   2. Change type to "photo" and update src/width/height
 *   3. Add blurDataURL (base64) and credit fields
 *   4. Ensure image is ≤200KB and min 800×500px
 */

export type CardId       = "buyers-access" | "market-analytics" | "zero-cost" | "expert-support";
export type VisualType   = "photo" | "svg-illustration";

export interface CardCredit {
  photographer: string;
  source:       string;
  url:          string;
  license:      string;
}

export interface CardAsset {
  id:           CardId;
  type:         VisualType;
  src:          string;          // path relative to /public
  alt:          string;          // English alt text (accessibility)
  altAr:        string;          // Arabic alt text
  width:        number;          // native SVG viewBox width
  height:       number;          // native SVG viewBox height
  blurDataURL?: string;          // base64 placeholder (photos only)
  credit?:      CardCredit;      // attribution (photos only)
}

export const CARD_ASSETS: Record<CardId, CardAsset> = {

  "buyers-access": {
    id:     "buyers-access",
    type:   "svg-illustration",
    src:    "/illustrations/buyers-access.svg",
    alt:    "Animated trade network map connecting Cairo, Egypt to New York, USA — showing live buyer connections",
    altAr:  "خريطة شبكة تجارية متحركة تربط القاهرة بنيويورك — تُظهر روابط المشترين الحيّة",
    width:  400,
    height: 250,
  },

  "market-analytics": {
    id:     "market-analytics",
    type:   "svg-illustration",
    src:    "/illustrations/market-analytics.svg",
    alt:    "AI-powered analytics dashboard showing an upward growth chart with +300% sales performance indicator",
    altAr:  "لوحة تحكم تحليلات مدعومة بالذكاء الاصطناعي تُظهر مخططاً صاعداً بمؤشر نمو +300%",
    width:  400,
    height: 250,
  },

  "zero-cost": {
    id:     "zero-cost",
    type:   "svg-illustration",
    src:    "/illustrations/zero-cost.svg",
    alt:    "Large $0 symbol surrounded by sparkles — representing free platform access with no fees or commissions",
    altAr:  "رمز $0 الكبير محاط بلمعات — يمثل الوصول المجاني للمنصة بدون رسوم أو عمولات",
    width:  400,
    height: 250,
  },

  "expert-support": {
    id:     "expert-support",
    type:   "svg-illustration",
    src:    "/illustrations/expert-support.svg",
    alt:    "24/7 multilingual support hub showing language badges in Arabic, English, French and Spanish with broadcast signal rings",
    altAr:  "مركز دعم متعدد اللغات على مدار الساعة يعرض شارات اللغات العربية والإنجليزية والفرنسية والإسبانية",
    width:  400,
    height: 250,
  },

};

/** Ordered array matching the WhyToJoinUS card sequence */
export const CARD_ASSET_ORDER: CardId[] = [
  "buyers-access",
  "market-analytics",
  "zero-cost",
  "expert-support",
];
