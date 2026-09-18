import {
  Apple,
  Banana,
  Bean,
  Cherry,
  Citrus,
  Clover,
  CupSoda,
  Droplets,
  Egg,
  Flame,
  Flower2,
  LeafyGreen,
  Milk,
  Nut,
  Salad,
  Sprout,
  Wheat,
  type LucideIcon,
} from "lucide-react";

type ProductBadge = {
  icon: LucideIcon;
  className: string;
};

const productBadges: Record<string, ProductBadge> = {
  Apple: { icon: Apple, className: "badge-apple" },
  Honey: { icon: Droplets, className: "badge-honey" },
  Orange: { icon: Citrus, className: "badge-orange" },
  Avocado: { icon: Salad, className: "badge-avocado" },
  Banana: { icon: Banana, className: "badge-banana" },
  Tomato: { icon: Cherry, className: "badge-tomato" },
  Potato: { icon: Nut, className: "badge-potato" },
  Spinach: { icon: LeafyGreen, className: "badge-spinach" },
  Turmeric: { icon: Flower2, className: "badge-turmeric" },
  Chili: { icon: Flame, className: "badge-chili" },
  Cumin: { icon: Clover, className: "badge-cumin" },
  Milk: { icon: Milk, className: "badge-milk" },
  Eggs: { icon: Egg, className: "badge-eggs" },
  Yogurt: { icon: CupSoda, className: "badge-yogurt" },
  Rice: { icon: Sprout, className: "badge-rice" },
  Wheat: { icon: Wheat, className: "badge-wheat" },
  Lentils: { icon: Bean, className: "badge-lentils" },
};

const fallbackBadge: ProductBadge = {
  icon: Apple,
  className: "badge-apple",
};

export function getProductBadge(name: string): ProductBadge {
  return productBadges[name] ?? fallbackBadge;
}
