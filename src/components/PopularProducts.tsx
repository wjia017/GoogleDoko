import ProductCard from "./ProductCard";
import { products } from "../data/products";

function PopularProducts() {
  return (
    <section className="popular-products-section">

      <div className="section-header">

        <h2>Most Popular Items</h2>

        <button type="button">
          View all
        </button>

      </div>


      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default PopularProducts;