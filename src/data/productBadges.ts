import type { ComponentType } from "react";
import {
  AppleBadgeIcon,
  HoneyBadgeIcon,
  OrangeBadgeIcon,
  AvocadoBadgeIcon,
  BananaBadgeIcon,
  TomatoBadgeIcon,
  PotatoBadgeIcon,
  SpinachBadgeIcon,
  TurmericBadgeIcon,
  ChiliBadgeIcon,
  CuminBadgeIcon,
  MilkBadgeIcon,
  EggsBadgeIcon,
  YogurtBadgeIcon,
  RiceBadgeIcon,
  WheatBadgeIcon,
  LentilsBadgeIcon,
  CarrotBadgeIcon,
  GarlicBadgeIcon,
  GingerBadgeIcon,
  OnionBadgeIcon,
  MangoBadgeIcon,
  GrapesBadgeIcon,
  LemonBadgeIcon,
  TeaBadgeIcon,
  CoffeeBadgeIcon,
  GheeBadgeIcon,
  type ProductBadgeIconProps,
} from "../components/icons/ProductBadgeIcons";

export type ProductBadge = {
  icon: ComponentType<ProductBadgeIconProps>;
  className: string;
};

const directBadges: Record<string, ProductBadge> = {
  Apple: { icon: AppleBadgeIcon, className: "badge-apple" },
  Honey: { icon: HoneyBadgeIcon, className: "badge-honey" },
  Orange: { icon: OrangeBadgeIcon, className: "badge-orange" },
  Avocado: { icon: AvocadoBadgeIcon, className: "badge-avocado" },
  Banana: { icon: BananaBadgeIcon, className: "badge-banana" },
  Tomato: { icon: TomatoBadgeIcon, className: "badge-tomato" },
  Potato: { icon: PotatoBadgeIcon, className: "badge-potato" },
  Spinach: { icon: SpinachBadgeIcon, className: "badge-spinach" },
  Turmeric: { icon: TurmericBadgeIcon, className: "badge-turmeric" },
  Chili: { icon: ChiliBadgeIcon, className: "badge-chili" },
  Cumin: { icon: CuminBadgeIcon, className: "badge-cumin" },
  Milk: { icon: MilkBadgeIcon, className: "badge-milk" },
  Eggs: { icon: EggsBadgeIcon, className: "badge-eggs" },
  Yogurt: { icon: YogurtBadgeIcon, className: "badge-yogurt" },
  Rice: { icon: RiceBadgeIcon, className: "badge-rice" },
  Wheat: { icon: WheatBadgeIcon, className: "badge-wheat" },
  Lentils: { icon: LentilsBadgeIcon, className: "badge-lentils" },
  Carrot: { icon: CarrotBadgeIcon, className: "badge-carrot" },
  Garlic: { icon: GarlicBadgeIcon, className: "badge-garlic" },
  Ginger: { icon: GingerBadgeIcon, className: "badge-ginger" },
  Onion: { icon: OnionBadgeIcon, className: "badge-onion" },
  Mango: { icon: MangoBadgeIcon, className: "badge-mango" },
  Grapes: { icon: GrapesBadgeIcon, className: "badge-grapes" },
  Lemon: { icon: LemonBadgeIcon, className: "badge-lemon" },
  Tea: { icon: TeaBadgeIcon, className: "badge-tea" },
  Coffee: { icon: CoffeeBadgeIcon, className: "badge-coffee" },
  Ghee: { icon: GheeBadgeIcon, className: "badge-ghee" },
};

const fallbackBadge: ProductBadge = {
  icon: AppleBadgeIcon,
  className: "badge-apple",
};

/**
 * Returns the matching icon and badge class dynamically based on product name (and optional category).
 */
export function getProductBadge(name?: string, category?: string): ProductBadge {
  const rawName = (name || "").trim();
  if (directBadges[rawName]) {
    return directBadges[rawName];
  }

  const normalizedName = rawName.toLowerCase();
  const normalizedCategory = (category || "").toLowerCase().trim();

  // 1. Keyword matching on product name
  if (normalizedName.includes("apple") || normalizedName.includes("seb")) {
    return { icon: AppleBadgeIcon, className: "badge-apple" };
  }
  if (
    normalizedName.includes("honey") ||
    normalizedName.includes("maha") ||
    normalizedName.includes("madhu")
  ) {
    return { icon: HoneyBadgeIcon, className: "badge-honey" };
  }
  if (
    normalizedName.includes("orange") ||
    normalizedName.includes("citrus") ||
    normalizedName.includes("suntala") ||
    normalizedName.includes("mandarin") ||
    normalizedName.includes("tangerine")
  ) {
    return { icon: OrangeBadgeIcon, className: "badge-orange" };
  }
  if (
    normalizedName.includes("avocado") ||
    normalizedName.includes("butter fruit")
  ) {
    return { icon: AvocadoBadgeIcon, className: "badge-avocado" };
  }
  if (
    normalizedName.includes("banana") ||
    normalizedName.includes("kera") ||
    normalizedName.includes("kele")
  ) {
    return { icon: BananaBadgeIcon, className: "badge-banana" };
  }
  if (
    normalizedName.includes("tomato") ||
    normalizedName.includes("golbheda") ||
    normalizedName.includes("tamatar")
  ) {
    return { icon: TomatoBadgeIcon, className: "badge-tomato" };
  }
  if (
    normalizedName.includes("potato") ||
    normalizedName.includes("alu") ||
    normalizedName.includes("aaloo")
  ) {
    return { icon: PotatoBadgeIcon, className: "badge-potato" };
  }
  if (
    normalizedName.includes("spinach") ||
    normalizedName.includes("palak") ||
    normalizedName.includes("saag") ||
    normalizedName.includes("lettuce") ||
    normalizedName.includes("greens") ||
    normalizedName.includes("leaf")
  ) {
    return { icon: SpinachBadgeIcon, className: "badge-spinach" };
  }
  if (
    normalizedName.includes("turmeric") ||
    normalizedName.includes("haldi") ||
    normalizedName.includes("besar")
  ) {
    return { icon: TurmericBadgeIcon, className: "badge-turmeric" };
  }
  if (
    normalizedName.includes("chili") ||
    normalizedName.includes("chilli") ||
    normalizedName.includes("chile") ||
    normalizedName.includes("khursani") ||
    normalizedName.includes("pepper") ||
    normalizedName.includes("mirch")
  ) {
    return { icon: ChiliBadgeIcon, className: "badge-chili" };
  }
  if (
    normalizedName.includes("cumin") ||
    normalizedName.includes("jeera") ||
    normalizedName.includes("jira")
  ) {
    return { icon: CuminBadgeIcon, className: "badge-cumin" };
  }
  if (
    normalizedName.includes("milk") ||
    normalizedName.includes("dudh") ||
    normalizedName.includes("dairy")
  ) {
    return { icon: MilkBadgeIcon, className: "badge-milk" };
  }
  if (
    normalizedName.includes("egg") ||
    normalizedName.includes("eggs") ||
    normalizedName.includes("anda")
  ) {
    return { icon: EggsBadgeIcon, className: "badge-eggs" };
  }
  if (
    normalizedName.includes("yogurt") ||
    normalizedName.includes("yoghurt") ||
    normalizedName.includes("curd") ||
    normalizedName.includes("dahi")
  ) {
    return { icon: YogurtBadgeIcon, className: "badge-yogurt" };
  }
  if (
    normalizedName.includes("rice") ||
    normalizedName.includes("chamal") ||
    normalizedName.includes("dhan") ||
    normalizedName.includes("basmati")
  ) {
    return { icon: RiceBadgeIcon, className: "badge-rice" };
  }
  if (
    normalizedName.includes("wheat") ||
    normalizedName.includes("gahu") ||
    normalizedName.includes("atta") ||
    normalizedName.includes("flour") ||
    normalizedName.includes("maida")
  ) {
    return { icon: WheatBadgeIcon, className: "badge-wheat" };
  }
  if (
    normalizedName.includes("lentil") ||
    normalizedName.includes("lentils") ||
    normalizedName.includes("dal") ||
    normalizedName.includes("daal") ||
    normalizedName.includes("pulse") ||
    normalizedName.includes("bean") ||
    normalizedName.includes("bodi") ||
    normalizedName.includes("chana") ||
    normalizedName.includes("gram")
  ) {
    return { icon: LentilsBadgeIcon, className: "badge-lentils" };
  }
  if (
    normalizedName.includes("carrot") ||
    normalizedName.includes("gajar")
  ) {
    return { icon: CarrotBadgeIcon, className: "badge-carrot" };
  }
  if (
    normalizedName.includes("garlic") ||
    normalizedName.includes("lasun") ||
    normalizedName.includes("lahsun")
  ) {
    return { icon: GarlicBadgeIcon, className: "badge-garlic" };
  }
  if (
    normalizedName.includes("ginger") ||
    normalizedName.includes("aduwa") ||
    normalizedName.includes("adrak")
  ) {
    return { icon: GingerBadgeIcon, className: "badge-ginger" };
  }
  if (
    normalizedName.includes("onion") ||
    normalizedName.includes("pyaj") ||
    normalizedName.includes("pyaaz")
  ) {
    return { icon: OnionBadgeIcon, className: "badge-onion" };
  }
  if (
    normalizedName.includes("mango") ||
    normalizedName.includes("aap") ||
    normalizedName.includes("aam")
  ) {
    return { icon: MangoBadgeIcon, className: "badge-mango" };
  }
  if (
    normalizedName.includes("grape") ||
    normalizedName.includes("angur")
  ) {
    return { icon: GrapesBadgeIcon, className: "badge-grapes" };
  }
  if (
    normalizedName.includes("lemon") ||
    normalizedName.includes("lime") ||
    normalizedName.includes("kagati")
  ) {
    return { icon: LemonBadgeIcon, className: "badge-lemon" };
  }
  if (
    normalizedName.includes("tea") ||
    normalizedName.includes("chiya") ||
    normalizedName.includes("chai")
  ) {
    return { icon: TeaBadgeIcon, className: "badge-tea" };
  }
  if (normalizedName.includes("coffee")) {
    return { icon: CoffeeBadgeIcon, className: "badge-coffee" };
  }
  if (
    normalizedName.includes("ghee") ||
    normalizedName.includes("butter") ||
    normalizedName.includes("makhan") ||
    normalizedName.includes("paneer")
  ) {
    return { icon: GheeBadgeIcon, className: "badge-ghee" };
  }

  // 2. Category level matching fallback
  if (normalizedCategory.includes("fruit")) {
    return { icon: AppleBadgeIcon, className: "badge-apple" };
  }
  if (
    normalizedCategory.includes("vegetable") ||
    normalizedCategory.includes("veg")
  ) {
    return { icon: SpinachBadgeIcon, className: "badge-spinach" };
  }
  if (normalizedCategory.includes("spice")) {
    return { icon: ChiliBadgeIcon, className: "badge-chili" };
  }
  if (
    normalizedCategory.includes("dairy") ||
    normalizedCategory.includes("egg")
  ) {
    return { icon: MilkBadgeIcon, className: "badge-milk" };
  }
  if (
    normalizedCategory.includes("grain") ||
    normalizedCategory.includes("cereal")
  ) {
    return { icon: WheatBadgeIcon, className: "badge-wheat" };
  }
  if (normalizedCategory.includes("honey")) {
    return { icon: HoneyBadgeIcon, className: "badge-honey" };
  }

  return fallbackBadge;
}
