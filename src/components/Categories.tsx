import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Fruits",
    description: "Fresh & juicy handpicked",
    image: "/images/categories/fruits.png",
    icon: "fruits" as const,
    theme: "orange" as const,
  },
  {
    id: 2,
    name: "Spices",
    description: "Aroma rich & natural",
    image: "/images/categories/spices.png",
    icon: "spices" as const,
    theme: "green" as const,
  },
  {
    id: 3,
    name: "Vegetables",
    description: "Farm fresh & healthy",
    image: "/images/categories/vegetables.png",
    icon: "vegetables" as const,
    theme: "red" as const,
  },
  {
    id: 4,
    name: "Others",
    description: "More good things for you",
    image: "/images/categories/others.png",
    icon: "others" as const,
    theme: "teal" as const,
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>Shop By Categories</h2>

        <button type="button">
          View all
        </button>
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
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;