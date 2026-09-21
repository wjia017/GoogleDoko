import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../data/products";
import { products } from "../data/products";

interface WishlistContextValue {
  wishlist: Product[];
  toast: string | null;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const storageKey = "googledoko-wishlist";

function readWishlist(): Product[] {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved) as Product[];
    }
  } catch {
    return products.slice(0, 12);
  }
  return products.slice(0, 12);
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>(readWishlist);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>(0);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(wishlist));
  }, [wishlist]);

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
        const saved = wishlist.some((item) => item.id === product.id);

        setWishlist((items) => {
          if (items.some((item) => item.id === product.id)) {
            return items.filter((item) => item.id !== product.id);
          }
          return [product, ...items];
        });

        showToast(
          saved
            ? "Removed from wishlist"
            : "Successfully added to wishlist",
        );
      },
      removeFromWishlist: (id) => {
        setWishlist((items) => items.filter((item) => item.id !== id));
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
