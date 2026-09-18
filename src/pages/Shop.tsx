import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { products } from "../data/products";

function Shop() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>SHOP NOW</span>
            <h1>Fresh products from trusted local sellers</h1>
            <p>
              Browse all available items and order authentic food
              from their original places.
            </p>
          </div>
        </section>

        <section className="all-products-section">
          <div className="all-products-heading">
            <h2>All Products</h2>
            <p>Fresh products, better living</p>
          </div>

          <div className="categories-products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Shop;
