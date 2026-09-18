import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { Link } from "react-router-dom";

function PopularProducts() {
  return (
    <section className="popular-products-section">

      <div className="section-header">

        <h2>Most Popular Items</h2>

        <Link to="/shop" className="section-view-all">
          View all
        </Link>

      </div>


      <div className="products-grid">

        {products.slice(0, 4).map((product) => (
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