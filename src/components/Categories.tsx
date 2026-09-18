import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Fruits",
    description: "Fresh & juicy handpicked",
    image: "/src/assets/images/categories/fruits.jpg",
    icon: "fruits" as const,
    theme: "orange" as const,
    to: "/categories?category=Fruits",
  },
  {
    id: 2,
    name: "Spices",
    description: "Aroma rich & natural",
    image: "/src/assets//images/categories/spices.jpg",
    icon: "spices" as const,
    theme: "green" as const,
    to: "/categories?category=Spices",
  },
  {
    id: 3,
    name: "Vegetables",
    description: "Farm fresh & healthy",
    image: "/src/assets//images/categories/vegetables.jpg",
    icon: "vegetables" as const,
    theme: "red" as const,
    to: "/categories?category=Vegetables",
  },
  {
    id: 4,
    name: "Others",
    description: "More good things for you",
    image: "/src/assets//images/categories/others.jpg",
    icon: "others" as const,
    theme: "teal" as const,
    to: "/categories",
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>Shop By Categories</h2>

        <Link to="/categories" className="section-view-all">
          View all
        </Link>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            description={category.description}
            image={category.image}
            icon={category.icon}
            theme={category.theme}
            to={category.to}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;