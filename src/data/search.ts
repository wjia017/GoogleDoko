import { products, type Product } from "./products";

export type PlaceResult = {
  origin: string;
  name: string;
  products: number;
  image: string;
};

function placeImage(origin: string) {
  const slug = origin.split(",")[0].trim().toLowerCase().replace(/\s+/g, "-");
  return `/src/assets/images/places/${slug}.jpg`;
}

function placeName(origin: string) {
  return origin.split(",")[0].trim();
}

function soldCount(sold: string) {
  const value = Number.parseInt(sold.replace(/[^\d]/g, ""), 10);
  return Number.isNaN(value) ? 0 : value;
}

export function uniquePlaces(): PlaceResult[] {
  return products.reduce<PlaceResult[]>((list, product) => {
    const existing = list.find((place) => place.origin === product.origin);

    if (existing) {
      existing.products += soldCount(product.sold);
      return list;
    }

    list.push({
      origin: product.origin,
      name: placeName(product.origin),
      products: soldCount(product.sold),
      image: placeImage(product.origin),
    });

    return list;
  }, []);
}

export function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}

export function searchProducts(query: string): Product[] {
  const q = normalizeQuery(query);

  if (!q) {
    return [];
  }

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.category,
      product.origin,
      product.seller,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });
}

export function searchPlaces(query: string): PlaceResult[] {
  const q = normalizeQuery(query);

  if (!q) {
    return [];
  }

  return uniquePlaces().filter((place) =>
    `${place.name} ${place.origin}`.toLowerCase().includes(q),
  );
}
