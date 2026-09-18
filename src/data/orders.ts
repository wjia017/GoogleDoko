export interface OrderProduct {
  name: string;
  image: string;
  price: number;
  quantity: number;
  origin?: string;
  seller?: string;
  unit?: string;
}

export interface Order {
  id: string;
  productId: string;
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
  date: string;
  items: number;
  total: number;
  image: string;
  category: string;
  deliveryDate: string;
  products: OrderProduct[];
}

export const orders: Order[] = [
  {
    id: "LM20260830",
    productId: "1",
    status: "Delivered",
    date: "30 Aug 2026, 10:24 AM",
    items: 5,
    total: 560,
    image: "/src/assets/images/categories/vegetables.jpg",
    category: "Fruits & Vegetables",
    deliveryDate: "2 Sep 2026",
    products: [
      {
        name: "Apple",
        image: "/src/assets/images/products/apple.jpg",
        price: 650,
        quantity: 1,
      },
      {
        name: "Tomato",
        image: "/src/assets/images/products/tomato.jpg",
        price: 120,
        quantity: 2,
      },
      {
        name: "Spinach",
        image: "/src/assets/images/products/spinach.jpg",
        price: 80,
        quantity: 2,
      },
    ],
  },
  {
    id: "LM20260831",
    productId: "2",
    status: "Processing",
    date: "30 Aug 2026, 10:24 AM",
    items: 2,
    total: 1980,
    image: "/src/assets/images/products/honey.jpg",
    category: "Honey",
    deliveryDate: "3 Sep 2026",
    products: [
      {
        name: "Honey",
        image: "/src/assets/images/products/honey.jpg",
        price: 1800,
        quantity: 1,
      },
    ],
  },
  {
    id: "LM20260832",
    productId: "10",
    status: "Shipped",
    date: "30 Aug 2026, 10:24 AM",
    items: 3,
    total: 570,
    image: "/src/assets/images/products/chili.jpg",
    category: "Spices",
    deliveryDate: "2 Sep 2026",
    products: [
      {
        name: "Chili",
        image: "/src/assets/images/products/chili.jpg",
        price: 160,
        quantity: 1,
      },
      {
        name: "Turmeric",
        image: "/src/assets/images/products/turmeric.jpg",
        price: 220,
        quantity: 1,
      },
      {
        name: "Cumin",
        image: "/src/assets/images/products/cumin.jpg",
        price: 190,
        quantity: 1,
      },
    ],
  },
  {
    id: "LM20260833",
    productId: "13",
    status: "Delivered",
    date: "30 Aug 2026, 10:24 AM",
    items: 3,
    total: 480,
    image: "/src/assets/images/products/eggs.jpg",
    category: "Dairy & Eggs",
    deliveryDate: "2 Sep 2026",
    products: [
      {
        name: "Eggs",
        image: "/src/assets/images/products/eggs.jpg",
        price: 240,
        quantity: 1,
      },
      {
        name: "Milk",
        image: "/src/assets/images/products/milk.jpg",
        price: 110,
        quantity: 1,
      },
      {
        name: "Yogurt",
        image: "/src/assets/images/products/yogurt.jpg",
        price: 130,
        quantity: 1,
      },
    ],
  },
];
