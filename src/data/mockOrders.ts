import { products } from "./products";

export type AccountOrderStatus =
  | "Pending"
  | "Processing"
  | "Shipped"
  | "Out for Delivery"
  | "Delivered"
  | "Cancelled";

export interface AccountOrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  weight: string;
}

export interface AccountOrder {
  id: string;
  date: string;
  status: AccountOrderStatus;
  items: AccountOrderItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  paymentMethod: string;
  paymentStatus: string;
  deliveryAddress: string;
  recipientName: string;
  recipientPhone: string;
}

function item(id: string, quantity: number): AccountOrderItem {
  const product = products.find((entry) => entry.id === id) ?? products[0];
  return {
    productId: product.id,
    name: product.name === "Apple" ? "Fresh Apples" : product.name === "Tomato" ? "Organic Tomatoes" : product.name,
    image: product.image,
    quantity,
    price: product.price,
    weight: product.weight,
  };
}

function order(
  data: Omit<AccountOrder, "subtotal" | "total"> & { subtotal?: number; total?: number },
): AccountOrder {
  const subtotal = data.items.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const total = subtotal + data.deliveryFee - data.discount;
  return { ...data, subtotal, total };
}

export const defaultAccountOrders: AccountOrder[] = [
  order({
    id: "ORD-1001",
    date: "Sep 18, 2026",
    status: "Delivered",
    items: [item("1", 1), item("6", 2), item("8", 1), item("5", 2)],
    deliveryFee: 80,
    discount: 120,
    paymentMethod: "eSewa",
    paymentStatus: "Paid",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1002",
    date: "Sep 16, 2026",
    status: "Out for Delivery",
    items: [item("3", 2), item("4", 1)],
    deliveryFee: 80,
    discount: 0,
    paymentMethod: "Khalti",
    paymentStatus: "Paid",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1003",
    date: "Sep 14, 2026",
    status: "Processing",
    items: [item("8", 2), item("6", 3)],
    deliveryFee: 50,
    discount: 0,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    deliveryAddress: "Jawalakhel, Lalitpur, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1004",
    date: "Sep 12, 2026",
    status: "Shipped",
    items: [item("2", 1)],
    deliveryFee: 80,
    discount: 50,
    paymentMethod: "eSewa",
    paymentStatus: "Paid",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1005",
    date: "Sep 10, 2026",
    status: "Pending",
    items: [item("15", 1), item("17", 2)],
    deliveryFee: 80,
    discount: 0,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1006",
    date: "Sep 8, 2026",
    status: "Delivered",
    items: [item("13", 2), item("14", 1)],
    deliveryFee: 50,
    discount: 40,
    paymentMethod: "Khalti",
    paymentStatus: "Paid",
    deliveryAddress: "Jawalakhel, Lalitpur, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1007",
    date: "Sep 6, 2026",
    status: "Cancelled",
    items: [item("9", 1), item("10", 1)],
    deliveryFee: 50,
    discount: 0,
    paymentMethod: "eSewa",
    paymentStatus: "Refunded",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1008",
    date: "Sep 4, 2026",
    status: "Delivered",
    items: [item("11", 1), item("12", 2), item("7", 3)],
    deliveryFee: 80,
    discount: 60,
    paymentMethod: "Visa",
    paymentStatus: "Paid",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1009",
    date: "Sep 2, 2026",
    status: "Processing",
    items: [item("16", 1)],
    deliveryFee: 80,
    discount: 0,
    paymentMethod: "eSewa",
    paymentStatus: "Paid",
    deliveryAddress: "Baneshwor, Kathmandu, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
  order({
    id: "ORD-1010",
    date: "Aug 30, 2026",
    status: "Pending",
    items: [item("5", 4), item("3", 2)],
    deliveryFee: 50,
    discount: 30,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    deliveryAddress: "Jawalakhel, Lalitpur, Nepal",
    recipientName: "Lahana Lawaju",
    recipientPhone: "+977 980-123-4567",
  }),
];

export const accountOrderFilters = [
  "All",
  "Pending",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
] as const;

export function statusToQuery(status: string) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

export function queryToStatus(query: string | null): AccountOrderStatus | "All" {
  if (!query) {
    return "All";
  }

  const match = accountOrderFilters.find(
    (filter) => statusToQuery(filter) === query.toLowerCase(),
  );

  return (match as AccountOrderStatus | "All") ?? "All";
}
