export interface ProductDetailInfo {
  about: string;
  benefits: string[];
  calories: string;
  protein: string;
  fiber: string;
  vitaminC: string;
  reviewCount: number;
}

export const productDetails: Record<string, ProductDetailInfo> = {
  "1": {
    about:
      "Our fresh red apples are carefully selected from trusted local farms. They are rich in essential nutrients, naturally sweet and perfect for a healthy lifestyle. Enjoy them as a snack, in your breakfast or in your favourite recipes.",
    benefits: [
      "Freshly harvested",
      "Locally sourced",
      "Quality checked",
      "Farm-to-door delivery",
    ],
    calories: "52 kcal",
    protein: "0.3 g",
    fiber: "2.4 g",
    vitaminC: "4.6 mg",
    reviewCount: 24,
  },
  "2": {
    about:
      "Pure natural honey collected from trusted local beekeepers. It is rich in natural sweetness and perfect for tea, breakfast and everyday cooking.",
    benefits: [
      "Raw and natural",
      "Locally sourced",
      "Quality checked",
      "Farm-to-door delivery",
    ],
    calories: "304 kcal",
    protein: "0.3 g",
    fiber: "0.2 g",
    vitaminC: "0.5 mg",
    reviewCount: 18,
  },
  "3": {
    about:
      "Juicy oranges grown by trusted local farmers. They are naturally sweet, refreshing and perfect for juice, snacks and a healthy daily diet.",
    benefits: [
      "Freshly harvested",
      "Locally sourced",
      "Quality checked",
      "Farm-to-door delivery",
    ],
    calories: "47 kcal",
    protein: "0.9 g",
    fiber: "2.4 g",
    vitaminC: "53 mg",
    reviewCount: 21,
  },
  "4": {
    about:
      "Creamy avocados selected from trusted local farms. They are rich in healthy fats and perfect for salads, toast and everyday meals.",
    benefits: [
      "Freshly harvested",
      "Locally sourced",
      "Quality checked",
      "Farm-to-door delivery",
    ],
    calories: "160 kcal",
    protein: "2.0 g",
    fiber: "6.7 g",
    vitaminC: "10 mg",
    reviewCount: 16,
  },
};

export function getProductDetails(id: string, name: string): ProductDetailInfo {
  const saved = productDetails[id];

  if (saved) {
    return saved;
  }

  return {
    about: `Our ${name.toLowerCase()} is carefully selected from trusted local farms. It is naturally fresh, quality checked and perfect for a healthy lifestyle.`,
    benefits: [
      "Freshly harvested",
      "Locally sourced",
      "Quality checked",
      "Farm-to-door delivery",
    ],
    calories: "80 kcal",
    protein: "2.0 g",
    fiber: "2.0 g",
    vitaminC: "8 mg",
    reviewCount: 12,
  };
}
