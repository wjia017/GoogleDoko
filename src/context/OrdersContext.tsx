import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../data/products";
import { products } from "../data/products";
import { orders as seedOrders, type Order } from "../data/orders";

interface OrdersContextValue {
  orders: Order[];
  addOrder: (product: Product, quantity?: number) => void;
}

const OrdersContext = createContext<OrdersContextValue | null>(null);

const storageKey = "googledoko-orders";

function formatOrderDate(date: Date) {
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDeliveryDate(date: Date) {
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function withProductId(order: Order): Order {
  if (order.productId) {
    return order;
  }

  const match = products.find(
    (item) =>
      item.name === order.category ||
      item.name === order.products[0]?.name,
  );

  return {
    ...order,
    productId: match?.id ?? "1",
  };
}

function readOrders(): Order[] {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved
      ? (JSON.parse(saved) as Order[]).map(withProductId)
      : seedOrders;
  } catch {
    return seedOrders;
  }
}

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(readOrders);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(orders));
  }, [orders]);

  const value = useMemo<OrdersContextValue>(
    () => ({
      orders,
      addOrder: (product, quantity = 1) => {
        const now = new Date();
        const delivery = new Date(now);
        delivery.setDate(delivery.getDate() + 2);

        const order: Order = {
          id: `LM${now.getTime()}`,
          productId: product.id,
          status: "Processing",
          date: formatOrderDate(now),
          items: quantity,
          total: product.price * quantity,
          image: product.image,
          category: product.name,
          deliveryDate: formatDeliveryDate(delivery),
          products: [
            {
              name: product.name,
              image: product.image,
              price: product.price,
              quantity,
              origin: product.origin,
              seller: product.seller,
              unit: product.weight,
            },
          ],
        };

        setOrders((current) => [order, ...current]);
      },
    }),
    [orders],
  );

  return (
    <OrdersContext.Provider value={value}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrdersProvider");
  }

  return context;
}
