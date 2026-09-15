export interface Product {
  id: string;
  name: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  sold: string;
  origin: string;
  seller: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  sold: string;
  origin: string;
  seller: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Apple",
    category: "Fruits",
    weight: "1 kg",
    price: 650,
    rating: 4.7,
    sold: "320+",
    origin: "Kullu, HP",
    seller: "Himalaya Farm",
    image: "/src/assets/images/products/apple.jpg",
  },

  {
    id: "2",
    name: "Honey",
    category: "Honey",
    weight: "1 kg",
    price: 1800,
    rating: 4.8,
    sold: "250+",
    origin: "Mustang, Nepal",
    seller: "Pure Natural",
    image: "/src/assets/images/products/honey.jpg",
  },

  {
    id: "3",
    name: "Orange",
    category: "Fruits",
    weight: "1 kg",
    price: 650,
    rating: 4.6,
    sold: "280+",
    origin: "Sunsari, Nepal",
    seller: "Fresh Valley",
    image: "/src/assets/images/products/orange.jpg",
  },

  {
    id: "4",
    name: "Avocado",
    category: "Fruits",
    weight: "1 kg",
    price: 850,
    rating: 4.7,
    sold: "200+",
    origin: "Damak, Nepal",
    seller: "Green Harvest",
    image: "/src/assets/images/products/avocado.jpg",
  },
];