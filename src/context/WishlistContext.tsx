import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../data/products";

interface WishlistContextValue {
  wishlist: Product[];
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

const storageKey = "googledoko-wishlist";

function readWishlist(): Product[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? (JSON.parse(saved) as Product[]) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>(readWishlist);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(wishlist));
  }, [wishlist]);

  const value = useMemo<WishlistContextValue>(
    () => ({
      wishlist,
      isInWishlist: (id) => wishlist.some((item) => item.id === id),
      toggleWishlist: (product) => {
        setWishlist((items) => {
          if (items.some((item) => item.id === product.id)) {
            return items.filter((item) => item.id !== product.id);
          }
          return [product, ...items];
        });
      },
      removeFromWishlist: (id) => {
        setWishlist((items) => items.filter((item) => item.id !== id));
      },
    }),
    [wishlist],
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
