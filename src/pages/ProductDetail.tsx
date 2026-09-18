import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, Heart, MapPin, Minus, Plus, Star, UserRound } from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularProducts from "../components/PopularProducts";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

import { products } from "../data/products";
import { getProductDetails } from "../data/productDetails";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { useWishlist } from "../context/WishlistContext";

type DetailTab = "about" | "nutrition" | "reviews";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addOrder } = useOrders();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<DetailTab>("about");

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <TopBar />
        <Navbar />
        <main className="product-detail-page">
          <div className="product-not-found">
            <h1>Product not found</h1>
            <p>This product is not available right now.</p>
            <Link to="/shop">Back to shop</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const details = getProductDetails(product.id, product.name);
  const gallery = product.gallery;

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="product-detail-page">
        <div className="product-detail-container">
          <nav className="product-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/categories">{product.category}</Link>
            <span>/</span>
            <strong>{product.name}</strong>
          </nav>

          <section className="product-detail-hero">
            <div className="product-gallery">
              <div className="product-main-image">
                <img
                  src={gallery[activeImage]}
                  alt={product.name}
                />
                <button
                  type="button"
                  className={`product-wishlist-button ${isInWishlist(product.id) ? "active" : ""}`}
                  aria-label={
                    isInWishlist(product.id)
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                  onClick={() => toggleWishlist(product)}
                >
                  <Heart
                    size={18}
                    fill={isInWishlist(product.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <div className="product-thumbnails">
                {gallery.map((image, index) => (
                  <button
                    key={`${product.id}-thumb-${index}`}
                    type="button"
                    className={
                      activeImage === index
                        ? "product-thumbnail active"
                        : "product-thumbnail"
                    }
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail-info">
              <h1>{product.name}</h1>

              <div className="product-detail-rating">
                <div className="product-detail-stars">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span>
                  {product.rating} ({details.reviewCount} reviews)
                </span>
              </div>

              <div className="product-detail-price">
                Rs. {product.price.toLocaleString()}
                <small>/{product.weight}</small>
              </div>

              <div className="product-detail-tags">
                <span>Fresh</span>
                <span>Organic</span>
                <span>locally sourced</span>
              </div>

              <p className="product-detail-summary">
                {details.about}
              </p>

              <div className="product-detail-meta">
                <div>
                  <MapPin size={18} />
                  <div>
                    <span>Origin</span>
                    <strong>{product.origin}</strong>
                  </div>
                </div>

                <div>
                  <UserRound size={18} />
                  <div>
                    <span>Seller</span>
                    <strong>{product.seller}</strong>
                  </div>
                </div>
              </div>

              <div className="product-detail-actions">
                <div className="product-qty">
                  <span>Quantity</span>
                  <div>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <strong>{quantity}</strong>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="product-add-cart"
                  onClick={() => {
                    addToCart(product, quantity);
                    navigate("/cart");
                  }}
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="product-buy-now"
                  onClick={() => {
                    addOrder(product, quantity);
                    navigate("/orders");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </section>

          <section className="product-detail-tabs">
            <div className="product-tab-buttons">
              <button
                type="button"
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About this product
              </button>
              <button
                type="button"
                className={activeTab === "nutrition" ? "active" : ""}
                onClick={() => setActiveTab("nutrition")}
              >
                Nutritional Information
              </button>
              <button
                type="button"
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({details.reviewCount})
              </button>
            </div>

            {activeTab === "about" && (
              <div className="product-tab-panel">
                <div>
                  <h2>About this product</h2>
                  <p>{details.about}</p>
                </div>

                <div>
                  <h3>Key Benefits</h3>
                  <ul>
                    {details.benefits.map((benefit) => (
                      <li key={benefit}>
                        <Check size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="product-nutrition">
                <h2>Nutritional Information (per 100g)</h2>
                <div className="product-nutrition-grid">
                  <article>
                    <span>Calories</span>
                    <strong>{details.calories}</strong>
                  </article>
                  <article>
                    <span>Protein</span>
                    <strong>{details.protein}</strong>
                  </article>
                  <article>
                    <span>Fiber</span>
                    <strong>{details.fiber}</strong>
                  </article>
                  <article>
                    <span>Vitamin C</span>
                    <strong>{details.vitaminC}</strong>
                  </article>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="product-reviews-panel">
                <h2>Customer reviews</h2>
                <p>
                  {product.name} is rated {product.rating} by {details.reviewCount} customers.
                </p>
              </div>
            )}
          </section>
        </div>

        <WhyChooseUs />
        <PopularProducts />
        <CustomerReviews />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default ProductDetail;
