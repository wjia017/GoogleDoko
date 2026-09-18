import { Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>WISHLIST</span>
            <h1>Saved products you love</h1>
            <p>
              {wishlist.length} item{wishlist.length === 1 ? "" : "s"} in your wishlist
            </p>
          </div>
        </section>

        <section className="all-products-section">
          {wishlist.length > 0 ? (
            <div className="categories-products-grid">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-wishlist">
              <h2>Your wishlist is empty</h2>
              <p>Tap the heart on any product to save it here.</p>
              <Link to="/shop">Browse products</Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Wishlist;
