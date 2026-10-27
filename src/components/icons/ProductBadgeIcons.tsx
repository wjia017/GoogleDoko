import type { FC } from "react";

export interface ProductBadgeIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/**
 * 1. Apple: Matching exact outline from reference screenshot
 * (Apple shape with double-leaf stem, indented base, and side reflection arcs)
 */
export const AppleBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Double leaf & stem on top */}
    <path d="M12 6.2C12 4.4 12.8 3.2 13.8 3" />
    <path d="M12 5.2C10.6 3.8 8.6 3.8 7.6 5.2C7.6 6.6 9.6 6.6 12 5.2Z" />
    <path d="M12 5.2C13.4 3.8 15.4 3.8 16.4 5.2C16.4 6.6 14.4 6.6 12 5.2Z" />
    {/* Plump apple silhouette */}
    <path d="M12 7.2C10.5 5.8 5.2 5.8 3.8 10.2C2.4 14.6 5.2 20.5 8.6 20.5C10.2 20.5 11.2 19.4 12 19.4C12.8 19.4 13.8 20.5 15.4 20.5C18.8 20.5 21.6 14.6 20.2 10.2C18.8 5.8 13.5 5.8 12 7.2Z" />
    {/* Inner curved reflection lines */}
    <path d="M6.2 10.5C5.6 12 5.6 14.2 6.6 16.2" />
    <path d="M17.8 10.5C18.4 12 18.4 14.2 17.4 16.2" />
  </svg>
);

/**
 * 2. Honey: Traditional honey jar with cloth lid tie and honey drop
 */
export const HoneyBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Jar lid */}
    <rect x="7" y="3" width="10" height="2.5" rx="1" />
    {/* Jar rim/tie */}
    <path d="M6 5.5C8 6.5 16 6.5 18 5.5" />
    {/* Honey pot body */}
    <path d="M6.5 6.5L5.5 12C4.5 16.5 6.5 20.5 12 20.5C17.5 20.5 19.5 16.5 18.5 12L17.5 6.5" />
    {/* Honey droplet symbol */}
    <path d="M12 10C12 10 10 12.5 10 14.2C10 15.3 10.9 16.2 12 16.2C13.1 16.2 14 15.3 14 14.2C14 12.5 12 10 12 10Z" />
  </svg>
);

/**
 * 3. Orange: Fresh citrus fruit with stem, leaf, and radiating pulp segments
 */
export const OrangeBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 5.5V3" />
    <path d="M12 4C14 2.2 17 3.2 17 5C17 6.4 14.6 6 12 4Z" />
    <circle cx="12" cy="13" r="8" />
    <circle cx="12" cy="13" r="2.5" />
    <path d="M12 10.5V7" />
    <path d="M12 15.5V19" />
    <path d="M9.5 13H6" />
    <path d="M14.5 13H18" />
    <path d="M10.2 11.2L7.5 8.5" />
    <path d="M13.8 14.8L16.5 17.5" />
    <path d="M13.8 11.2L16.5 8.5" />
    <path d="M10.2 14.8L7.5 17.5" />
  </svg>
);

/**
 * 4. Avocado: Pear-shaped avocado half with outer rind and central round seed
 */
export const AvocadoBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5V4" />
    {/* Outer skin */}
    <path d="M12 4C8.5 4 7 7.5 6 11C4.5 15.5 6 21 12 21C18 21 19.5 15.5 18 11C17 7.5 15.5 4 12 4Z" />
    {/* Inner seed */}
    <circle cx="12" cy="14.2" r="3.2" />
    {/* Seed reflection */}
    <path d="M11 13C11.5 12.3 12.5 12.3 13 13" />
  </svg>
);

/**
 * 5. Banana: Ripe curved banana bunch
 */
export const BananaBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Top stem */}
    <rect x="4" y="3" width="3" height="3" rx="0.8" />
    {/* Main banana curve */}
    <path d="M5.5 5.5C7.5 9.5 9 14.5 17.5 17.8C18.8 18.3 19.2 19.2 18.2 19.8C17.2 20.2 15.5 19.5 13.5 18.5C7 15.5 4.8 10 5.2 5.5" />
    {/* Longitudinal peel facet */}
    <path d="M5.8 7C8.2 11.2 10.8 14.8 16.8 17.8" />
    {/* Second back banana curve */}
    <path d="M6.8 5C9.8 7.5 12 11.8 19 14.2C20.2 14.8 20.2 16.2 19.2 16.8" />
  </svg>
);

/**
 * 6. Tomato: Plump round tomato with iconic star calyx on top
 */
export const TomatoBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Stem */}
    <path d="M12 2.5C12.2 4 11.8 5 12 6" />
    {/* 5-point star sepals/calyx */}
    <path d="M12 6L10 3.8" />
    <path d="M12 6L14 3.8" />
    <path d="M12 6L7.5 5.5" />
    <path d="M12 6L16.5 5.5" />
    <path d="M12 6L9 7.8" />
    <path d="M12 6L15 7.8" />
    {/* Plump tomato body */}
    <path d="M12 7C9.5 5.5 4 6.5 3.5 12C3 17.5 7.5 21.5 12 21.5C16.5 21.5 21 17.5 20.5 12C20 6.5 14.5 5.5 12 7Z" />
    {/* Highlight curve */}
    <path d="M6.5 11C6 13 6.5 15.5 8 17" />
  </svg>
);

/**
 * 7. Potato: Natural oval potato with Characteristic dimpled eyes
 */
export const PotatoBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Organic potato contour */}
    <path d="M7 6C11 4.5 16 5 19 8C22 11 21.5 16 19 18.5C16.5 21 11 21.5 7 19.5C3 17.5 2.5 12 4.5 8.5C5.5 6.8 6.2 6.3 7 6Z" />
    {/* Potato eyes */}
    <path d="M8 9.5C8.6 9.5 9 9.8 8.6 10.3" />
    <path d="M14 8C14.6 8 15 8.4 14.6 8.8" />
    <path d="M11 13C12 13 12.4 13.5 11.5 13.8" />
    <path d="M7 15C7.6 15 8 15.4 7.6 15.8" />
    <path d="M16 14.5C16.6 14.5 17 14.9 16.6 15.3" />
  </svg>
);

/**
 * 8. Spinach: Fresh broad leafy green with defined central stalk and veins
 */
export const SpinachBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21.5V10" />
    <path d="M12 3C8 3 5 7 5 11.5C5 15.5 7.5 18 12 18C16.5 18 19 15.5 19 11.5C19 7 16 3 12 3Z" />
    <path d="M12 7L9 9.5" />
    <path d="M12 7L15 9.5" />
    <path d="M12 11L8 13.5" />
    <path d="M12 11L16 13.5" />
    <path d="M12 15L9.5 16.5" />
    <path d="M12 15L14.5 16.5" />
  </svg>
);

/**
 * 9. Turmeric: Knobby turmeric root rhizome segments
 */
export const TurmericBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 14C4 11 6.5 9 10 9C12 9 13.5 9.8 15 9C17 8 18 6 19.5 6C20.5 6 21 6.8 21 8C21 10 18.5 12 16.5 12.5C15.5 13.5 15 15 15 17C15 19 13.5 20.5 11 20.5C8 20.5 4 18 4 14Z" />
    <path d="M10 9C9.5 7 8 5.5 6.5 5.5C5.5 5.5 5 6.2 5 7.5C5 9.5 7 11 8.5 11.5" />
    <path d="M7 11.5C7.5 13.5 8 15 7.5 17" />
    <path d="M11 11.5C11.5 13.5 12 16 11.5 18" />
    <path d="M14 12C14.5 14 14.5 16 14 17.5" />
  </svg>
);

/**
 * 10. Chili: Slender fiery curved chili pepper
 */
export const ChiliBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.5 3.5C17.5 4.5 16 5 14.5 5.5" />
    <path d="M12 5C13 5.5 15.5 6 17 7.5C16.5 9 15 9.5 13.5 9" />
    <path d="M15.5 7.5C14 11 11 15 7 18C4.5 20 3 20.5 3 20C3 18.5 4.5 15.5 7.5 12C10.5 8.5 13 6.5 14.5 6" />
    <path d="M13.5 9C11.5 12 9 15 6 17.5" />
  </svg>
);

/**
 * 11. Cumin: Fragrant ribbed cumin spice seeds
 */
export const CuminBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M8 17C6 14 6 10 9 7C12 4 16 4 18 7C20 10 20 14 17 17C14 20 10 20 8 17Z" />
    <path d="M9 7C11 10 12 14 17 17" />
    <path d="M11 5.5C12.5 8.5 13.5 12.5 16.5 15" />
    <path d="M8 10C10 12 12.5 15 15 18" />
    <path d="M4 11C3 9 3.5 6.5 5.5 5C7.5 3.5 10 4 11 6C12 8 11.5 10.5 9.5 12C7.5 13.5 5 13 4 11Z" />
  </svg>
);

/**
 * 12. Milk: Classic glass milk bottle with droplet
 */
export const MilkBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="9" y="2.5" width="6" height="2" rx="0.8" />
    <path d="M10 4.5V7C10 8.5 7 10 7 12V19.5C7 20.8 8.2 21.5 9.5 21.5H14.5C15.8 21.5 17 20.8 17 19.5V12C17 10 14 8.5 14 7V4.5" />
    <path d="M7 13.5C9 14.5 11 13 13 14C15 15 16 14 17 13.5" />
    <path d="M12 15C12 15 10.5 16.8 10.5 17.8C10.5 18.6 11.2 19.2 12 19.2C12.8 19.2 13.5 18.6 13.5 17.8C13.5 16.8 12 15 12 15Z" />
  </svg>
);

/**
 * 13. Eggs: Pair of smooth farm fresh eggs
 */
export const EggsBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M10 4C7 4 5 7.5 5 12C5 16.5 7 20.5 10 20.5C13 20.5 15 16.5 15 12C15 7.5 13 4 10 4Z" />
    <path d="M8 8C7.5 9.5 7.5 12 8 14" />
    <path d="M14.5 9C17 9.5 19.5 12 19.5 15.5C19.5 19 17.5 20.5 15 20.5" />
  </svg>
);

/**
 * 14. Yogurt: Fresh yogurt cup with spoon
 */
export const YogurtBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="5" y="7" width="14" height="2.5" rx="1" />
    <path d="M6.5 9.5L7.8 19.5C8 20.8 9 21.5 10.5 21.5H13.5C15 21.5 16 20.8 16.2 19.5L17.5 9.5" />
    <path d="M12 7V3C12 2.5 12.8 2 13.5 2.5L15 4" />
    <path d="M8 14C10 15.5 14 12.5 16 14" />
  </svg>
);

/**
 * 15. Rice: Warm bowl of aromatic rice grains with steam
 */
export const RiceBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 20.5H15" />
    <path d="M10 18.5L9.5 20.5" />
    <path d="M14 18.5L14.5 20.5" />
    <path d="M4 11C4 16 7.5 18.5 12 18.5C16.5 18.5 20 16 20 11H4Z" />
    <path d="M5 11C5.5 8 8 6 12 6C16 6 18.5 8 19 11" />
    <path d="M9 4C9 3 9.5 2 10 2" />
    <path d="M12 4C12 2.8 12.5 2 13 2" />
    <path d="M15 4C15 3 15.5 2 16 2" />
  </svg>
);

/**
 * 16. Wheat: Golden ear of wheat with ripe grains
 */
export const WheatBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 22V3" />
    <path d="M12 4L9 2M12 4L15 2" />
    <path d="M12 7C10.5 5.5 8 6 7 8C8.5 9 11 8.5 12 7Z" />
    <path d="M12 7C13.5 5.5 16 6 17 8C15.5 9 13 8.5 12 7Z" />
    <path d="M12 11C10.5 9.5 8 10 7 12C8.5 13 11 12.5 12 11Z" />
    <path d="M12 11C13.5 9.5 16 10 17 12C15.5 13 13 12.5 12 11Z" />
    <path d="M12 15C10.5 13.5 8 14 7 16C8.5 17 11 16.5 12 15Z" />
    <path d="M12 15C13.5 13.5 16 14 17 16C15.5 17 13 16.5 12 15Z" />
  </svg>
);

/**
 * 17. Lentils: Pure organic lentils and pulses
 */
export const LentilsBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 12C4 16.5 7.5 19.5 12 19.5C16.5 19.5 20 16.5 20 12H4Z" />
    <path d="M9 19.5L8.5 21H15.5L15 19.5" />
    <circle cx="8.5" cy="9.5" r="2" />
    <circle cx="12" cy="7.5" r="2" />
    <circle cx="15.5" cy="9.5" r="2" />
    <circle cx="10" cy="11.5" r="1.8" />
    <circle cx="14" cy="11.5" r="1.8" />
  </svg>
);

/**
 * 18. Carrot: Crunchy carrot with leafy greens
 */
export const CarrotBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15.5 3.5L13 7M18 5L14 8M19.5 2.5L14.5 6.5" />
    <path d="M14.5 6.5C11.5 5 8.5 8 8 10L5 19C4.5 20.5 5.5 21.5 7 21L16 18C18 17.5 21 14.5 19.5 11.5L14.5 6.5Z" />
    <path d="M10 13L13 14" />
    <path d="M8 16L11 17" />
  </svg>
);

/**
 * 19. Garlic: Garlic bulb with cloves
 */
export const GarlicBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5V6" />
    <path d="M12 6C9 6 5 8.5 5 13C5 17.5 8 20.5 12 20.5C16 20.5 19 17.5 19 13C19 8.5 15 6 12 6Z" />
    <path d="M12 6C10.5 9 10 14 10 20.5" />
    <path d="M12 6C13.5 9 14 14 14 20.5" />
    <path d="M10.5 20.5L10 22M12 20.5V22.5M13.5 20.5L14 22" />
  </svg>
);

/**
 * 20. Ginger: Knobby ginger root
 */
export const GingerBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 15C4 12 5.5 9 8 9C9 9 10 9.5 10.5 9C11 8 10 6 11.5 4.5C13 3 15 4 15.5 5.5C16 7 15 8 16 9C17.5 9 19 7.5 20 8.5C21 9.5 20.5 11.5 19 12.5C18 13 18 14 18.5 15.5C19 17 17.5 19.5 15.5 20C13 20.5 10 20 8.5 18.5C7.5 17.5 5.5 17 5 15Z" />
    <path d="M8 12C9 14 10 16 9.5 17.5" />
    <path d="M13 8C14 10 14.5 13 14 16" />
  </svg>
);

/**
 * 21. Onion: Onion with stem and roots
 */
export const OnionBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C11.5 4 12 5.5 12 7" />
    <path d="M12 3.5C13.5 4.5 14 5.5 14 7" />
    <path d="M12 7C7 7 4 10.5 4 14.5C4 18.5 7.5 21 12 21C16.5 21 20 18.5 20 14.5C20 10.5 17 7 12 7Z" />
    <path d="M12 7C9.5 10 9 15 10 20.5" />
    <path d="M12 7C14.5 10 15 15 14 20.5" />
    <path d="M11 21L10.5 22.5M12 21V23M13 21L13.5 22.5" />
  </svg>
);

/**
 * 22. Mango: Juicy mango fruit
 */
export const MangoBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 4.5V2.5" />
    <path d="M12 3.5C14 2.5 16.5 3 17 4.5C17 6 15 6 12 4.5Z" />
    <path d="M12 5C8.5 5 5 8 5 12.5C5 17.5 8 21.5 12.5 21.5C17 21.5 19.5 18 19.5 13.5C19.5 9 16 5 12 5Z" />
    <path d="M7 11C6.5 13 7 15.5 8.5 17.5" />
  </svg>
);

/**
 * 23. Grapes: Cluster of grapes on vine
 */
export const GrapesBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.5V5M12 4C14 3 17 4 16 6" />
    <circle cx="8.5" cy="8" r="2.2" />
    <circle cx="12" cy="7.5" r="2.2" />
    <circle cx="15.5" cy="8" r="2.2" />
    <circle cx="10" cy="12" r="2.2" />
    <circle cx="14" cy="12" r="2.2" />
    <circle cx="8.5" cy="15.5" r="2.2" />
    <circle cx="12" cy="15.5" r="2.2" />
    <circle cx="15.5" cy="15.5" r="2.2" />
    <circle cx="12" cy="19.5" r="2" />
  </svg>
);

/**
 * 24. Lemon: Fresh lemon citrus with cross section
 */
export const LemonBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 12C3 6.5 6.5 3 12 3C17.5 3 21 6.5 21 12C21 17.5 17.5 21 12 21C6.5 21 3 17.5 3 12Z" />
    <path d="M2 12C2 12 3 11 3.5 12C3 13 2 12 2 12Z" />
    <path d="M22 12C22 12 21 11 20.5 12C21 13 22 12 22 12Z" />
    <circle cx="12" cy="12" r="5.5" strokeDasharray="2 2" />
    <path d="M12 6.5V17.5M6.5 12H17.5" />
  </svg>
);

/**
 * 25. Tea: Fresh tea leaves and hot cup
 */
export const TeaBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 9H17V14C17 17.5 14 20 10.5 20C7 20 4 17.5 4 14V9Z" />
    <path d="M17 11H19C20.1 11 21 11.9 21 13C21 14.1 20.1 15 19 15H17" />
    <path d="M3 21H18" />
    <path d="M9 4C9 4 10.5 5 10.5 6.5" />
    <path d="M13 3C13 3 14.5 4 14.5 5.5" />
  </svg>
);

/**
 * 26. Coffee: Warm coffee mug
 */
export const CoffeeBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 8H16V13C16 16.5 13.5 19 10 19C6.5 19 4 16.5 4 13V8Z" />
    <path d="M16 10H18.5C19.8 10 21 11.2 21 12.5C21 13.8 19.8 15 18.5 15H16" />
    <path d="M3 21H17" />
    <path d="M7 3C7 4.5 9 4.5 9 5.5" />
    <path d="M12 3C12 4.5 14 4.5 14 5.5" />
  </svg>
);

/**
 * 27. Ghee: Pure ghee pot
 */
export const GheeBadgeIcon: FC<ProductBadgeIconProps> = ({
  size = 38,
  strokeWidth = 2,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="7" y="3" width="10" height="2.5" rx="1" />
    <path d="M8 5.5V7C8 7 5 9 5 13C5 18 8 21 12 21C16 21 19 18 19 13C19 9 16 7 16 7V5.5" />
    <path d="M12 11C12 11 10 13 10 14.5C10 15.6 10.9 16.5 12 16.5C13.1 16.5 14 15.6 14 14.5C14 13 12 11 12 11Z" />
  </svg>
);
