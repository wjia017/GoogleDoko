import { DEMO_CUSTOMER_EMAIL } from "../data/authOptions";

export const SHOP_SESSION_EVENT = "googledoko-shop-session";

export type ShopSessionKind = "demo" | "fresh";

export function isDemoCustomerEmail(email: string) {
  return email.trim().toLowerCase() === DEMO_CUSTOMER_EMAIL.toLowerCase();
}

export function emitShopSession(
  kind: ShopSessionKind,
  extra?: { cart?: unknown; wishlist?: unknown; orders?: unknown; addresses?: unknown },
) {
  window.dispatchEvent(
    new CustomEvent(SHOP_SESSION_EVENT, { detail: { kind, ...extra } }),
  );
}
