import ProductCard from "./product/ProductCard";
import { products, type Product } from "../data/products";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../store/api/apiSlice";

function PopularProducts() {
  const { data: serverProducts } = useGetProductsQuery();
  const displayProducts = (serverProducts && serverProducts.length > 0
    ? (serverProducts as unknown as Product[])
    : products);

  return (
    <section className="popular-products-section">
      <div className="section-header">
        <h2>Most Popular Items</h2>
        <Link to="/shop" className="section-view-all">
          View all
        </Link>
      </div>

      <div className="products-grid">
        {displayProducts.slice(0, 4).map((product) => (
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