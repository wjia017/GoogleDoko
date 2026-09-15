import {
  Apple,
  Leaf,
  Carrot,
  ShoppingBag,
} from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  icon: "fruits" | "spices" | "vegetables" | "others";
  theme: "orange" | "green" | "red" | "teal";
}

const icons = {
  fruits: Apple,
  spices: Leaf,
  vegetables: Carrot,
  others: ShoppingBag,
};

function CategoryCard({
  name,
  description,
  image,
  icon,
  theme,
}: CategoryCardProps) {
  const Icon = icons[icon];

  return (
    <article className={`category-card ${theme}`}>
      {/* Image */}
      <div className="category-image">
        <img src={image} alt={name} />
      </div>

      {/* Information */}
      <div className="category-info">
        <div className="category-icon">
          <Icon size={38} strokeWidth={1.8} />
        </div>

        <div className="category-text">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default CategoryCard;