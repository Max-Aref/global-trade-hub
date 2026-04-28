import type { LegalDoc, LegalCategory } from "./types";
import { privacyPolicy } from "./privacy-policy";
import { termsOfService } from "./terms-of-service";
import { cookiePolicy } from "./cookie-policy";
import { acceptableUse } from "./acceptable-use";
import { refundAndReturns } from "./refund-and-returns";
import { shippingPolicy } from "./shipping-policy";
import { imprint } from "./imprint";

const docs: LegalDoc[] = [
  privacyPolicy,
  termsOfService,
  cookiePolicy,
  acceptableUse,
  refundAndReturns,
  shippingPolicy,
  imprint,
];

export function getAllLegalDocs(): LegalDoc[] {
  return docs;
}

export function getLegalDocBySlug(slug: string): LegalDoc | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getLegalDocsByCategory(category: LegalCategory): LegalDoc[] {
  return docs.filter((d) => d.category === category);
}

export type { LegalDoc, LegalCategory } from "./types";
