import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { api, getToken } from "../api/client";
import type { Product } from "../data/products";
import { SHOP_SESSION_EVENT, type ShopSessionKind } from "../utils/shopSession";

interface WishlistContextValue {
  wishlist: Product[];
  toast: string | null;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const storageKey = "googledoko-wishlist";

function getUserKey(prefix: string): string {
  try {
    const raw = localStorage.getItem("googledoko-user");
    if (raw) {
      const u = JSON.parse(raw);
      if (u.email) return `${prefix}_${u.email.toLowerCase().trim()}`;
      if (u.id) return `${prefix}_${u.id}`;
    }
  } catch {
    // Ignore JSON parse errors
  }
  return prefix;
}

function readLocalWishlist(): Product[] {
  try {
    const userKey = getUserKey(storageKey);
    if (userKey !== storageKey) {
      const userSaved = localStorage.getItem(userKey);
      if (userSaved) {
        const parsed = JSON.parse(userSaved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved) as Product[];
  } catch {
    return [];
  }
  return [];
}

function writeLocalWishlist(items: Product[]) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
    const userKey = getUserKey(storageKey);
    if (userKey !== storageKey) {
      localStorage.setItem(userKey, JSON.stringify(items));
    }
  } catch { /* ignore quota errors */ }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>(readLocalWishlist);
  const isLoggedIn = useRef(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>(0);

  // Keep localStorage in sync for offline/guest access
  useEffect(() => {
    writeLocalWishlist(wishlist);
  }, [wishlist]);

  // Initial sync on mount if already authenticated
  useEffect(() => {
    if (getToken()) {
      isLoggedIn.current = true;
      api.getWishlist()
        .then((rows) => {
          const list = Array.isArray(rows) ? rows : [];
          if (list.length > 0) {
            const mapped: Product[] = list.map((r: any) => ({
              id: String(r.id),
              name: r.name,
              category: r.category,
              price: r.price,
              rating: r.rating,
              sold: r.sold,
              origin: r.origin,
              seller: r.seller,
              image: r.image,
              weight: r.weight,
              stock: r.stock,
              gallery: [r.image],
            } as unknown as Product));
            setWishlist(mapped);
            writeLocalWishlist(mapped);
          }
        })
        .catch(() => {});
    }
  }, []);

  // Load wishlist from server when session is established; merge with user cached
  useEffect(() => {
    function handleSession(event: Event) {
      const detail = (event as CustomEvent<{ kind?: ShopSessionKind; wishlist?: Product[] }>).detail;
      const token = getToken();

      if (token) {
        isLoggedIn.current = true;
        const localSaved = readLocalWishlist();
        api.getWishlist()
          .then(async (rows) => {
            const list = Array.isArray(rows) ? rows : [];
            const mapped: Product[] = list.map((r: any) => ({
              id: String(r.id),
              name: r.name,
              category: r.category,
              price: r.price,
              rating: r.rating,
              sold: r.sold,
              origin: r.origin,
              seller: r.seller,
              image: r.image,
              weight: r.weight,
              stock: r.stock,
              gallery: [r.image],
            } as unknown as Product));

            // Sync any local user items not yet on the server
            const missingOnServer = localSaved.filter(
              (saved) => !mapped.some((m) => m.id === saved.id)
            );
            for (const item of missingOnServer) {
              await api.addToWishlist(item.id).catch(() => {});
            }

            const combined = [...mapped, ...missingOnServer];
            const finalWishlist = combined.length > 0
              ? combined
              : (Array.isArray(detail?.wishlist) && detail.wishlist.length > 0
                  ? detail.wishlist
                  : localSaved);
            setWishlist(finalWishlist);
            writeLocalWishlist(finalWishlist);
          })
          .catch(() => {
            const fallback = localSaved.length > 0
              ? localSaved
              : (Array.isArray(detail?.wishlist) ? detail.wishlist : []);
            setWishlist(fallback);
            writeLocalWishlist(fallback);
          });
      } else {
        isLoggedIn.current = false;
        if (Array.isArray(detail?.wishlist)) {
          setWishlist(detail.wishlist);
        } else if (detail?.kind === "fresh") {
          setWishlist([]);
          try { localStorage.setItem(storageKey, "[]"); } catch { /* ignore storage error */ }
        }
      }
    }

    window.addEventListener(SHOP_SESSION_EVENT, handleSession);
    return () => window.removeEventListener(SHOP_SESSION_EVENT, handleSession);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(toastTimer.current);
  }, []);

  function showToast(message: string) {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2500);
  }

  const value = useMemo<WishlistContextValue>(
    () => ({
      wishlist,
      toast,
      isInWishlist: (id) => wishlist.some((item) => item.id === id),
      toggleWishlist: (product) => {
        const isIn = wishlist.some((item) => item.id === product.id);
        const nextList = isIn
          ? wishlist.filter((item) => item.id !== product.id)
          : [product, ...wishlist];

        setWishlist(nextList);
        writeLocalWishlist(nextList);

        if (getToken()) {
          if (isIn) {
            api.removeFromWishlist(product.id).catch(() => {});
          } else {
            api.addToWishlist(product.id).catch(() => {});
          }
        }

        showToast(isIn ? "Removed from wishlist" : "Successfully added to wishlist");
      },
      removeFromWishlist: (id) => {
        const nextList = wishlist.filter((item) => item.id !== id);
        setWishlist(nextList);
        writeLocalWishlist(nextList);

        if (getToken()) {
          api.removeFromWishlist(id).catch(() => {});
        }
        showToast("Removed from wishlist");
      },
    }),
    [wishlist, toast],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }
  return context;
}
