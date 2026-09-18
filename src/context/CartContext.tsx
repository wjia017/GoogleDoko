import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../data/products";

export interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, change: number) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const storageKey = "googledoko-cart";

function readCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(readCart);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems]);

  const value = useMemo<CartContextValue>(
    () => ({
      cartItems,
      addToCart: (product, quantity = 1) => {
        setCartItems((items) => {
          const existing = items.find((item) => item.id === product.id);

          if (existing) {
            return items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }

          return [
            ...items,
            {
              id: product.id,
              name: product.name,
              weight: product.weight,
              price: product.price,
              quantity,
              image: product.image,
            },
          ];
        });
      },
      updateQuantity: (id, change) => {
        setCartItems((items) =>
          items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, item.quantity + change),
                }
              : item,
          ),
        );
      },
      removeItem: (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
      },
    }),
    [cartItems],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
