export interface MockReview {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  rating: number;
  text: string;
  date: string;
  orderId?: string;
}

export const defaultMockReviews: MockReview[] = [
  {
    id: "rev-1",
    productId: "1",
    productName: "Fresh Apples",
    productImage: "/src/assets/images/products/apple.jpg",
    rating: 5,
    text: "Crisp, sweet and exactly as fresh as promised. Will order again.",
    date: "Sep 19, 2026",
    orderId: "ORD-1001",
  },
  {
    id: "rev-2",
    productId: "6",
    productName: "Organic Tomatoes",
    productImage: "/src/assets/images/products/tomato.jpg",
    rating: 4,
    text: "Juicy and well packed. A couple were a little soft, but flavour was great.",
    date: "Sep 19, 2026",
    orderId: "ORD-1001",
  },
  {
    id: "rev-3",
    productId: "13",
    productName: "Milk",
    productImage: "/src/assets/images/products/milk.jpg",
    rating: 5,
    text: "Fresh dairy with a long chill life. Delivery was on time.",
    date: "Sep 9, 2026",
    orderId: "ORD-1006",
  },
];
