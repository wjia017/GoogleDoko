import {
    Home as HomeIcon,
    ChevronRight,
    MapPin,
    UserRound,
    Plus,
    Minus,
    ShoppingCart,
    ShoppingBag,
    Leaf,
    ShieldCheck,
    Truck,
    CircleCheck,
    Star,
    Heart,
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  
  import ProductCard from "../components/ProductCard";
  import { products } from "../data/products";
  
  function ProductDetails() {
    const product = {
      name: "Fresh Red Apple",
      category: "Fruits",
      price: 150,
      weight: "1 kg",
      rating: 4.8,
      reviews: 24,
      origin: "Kullu, HP",
      seller: "Himalaya Farm",
      description:
        "Crisp, juicy and naturally sweet red apples, grown by local farmers using organic methods. Perfect for snacking, juicing or adding to your favourite recipes.",
    };
  
    const popularProducts = products;
  
    return (
      <>
        <Navbar />
  
        <main className="product-details-page">
  
          {/* ========================================
              BREADCRUMB
          ======================================== */}
  
          <div className="product-breadcrumb">
            <div className="product-container breadcrumb-inner">
  
              <Link to="/">
                <HomeIcon size={17} />
                <span>Home</span>
              </Link>
  
              <ChevronRight size={15} />
  
              <Link to="/categories">
                Fruits
              </Link>
  
              <ChevronRight size={15} />
  
              <span className="current-breadcrumb">
                Apple
              </span>
  
            </div>
          </div>
  
  
          {/* ========================================
              PRODUCT MAIN SECTION
          ======================================== */}
  
          <section className="product-main-section">
  
            <div className="product-container product-main-grid">
  
              {/* ====================================
                  LEFT - PRODUCT IMAGES
              ==================================== */}
  
              <div className="product-gallery">
  
                <div className="main-product-image">
  
                  {/* Replace this placeholder with your
                      actual apple image later */}
  
                  <img
                    src="/images/products/apple.png"
                    alt="Fresh Red Apple"
                  />
  
                </div>
  
  
                {/* Thumbnails */}
  
                <div className="product-thumbnails">
  
                  <button className="thumbnail active">
                    <img
                      src="/images/products/apple.png"
                      alt="Apple thumbnail"
                    />
                  </button>
  
                  <button className="thumbnail">
                    <img
                      src="/images/products/apple.png"
                      alt="Apple thumbnail"
                    />
                  </button>
  
                  <button className="thumbnail">
                    <img
                      src="/images/products/apple.png"
                      alt="Apple thumbnail"
                    />
                  </button>
  
                  <button className="thumbnail">
                    <img
                      src="/images/products/apple.png"
                      alt="Apple thumbnail"
                    />
                  </button>
  
                </div>
  
              </div>
  
  
              {/* ====================================
                  RIGHT - PRODUCT INFORMATION
              ==================================== */}
  
              <div className="product-information">
  
                <div className="product-title-row">
  
                  <h1>
                    {product.name}
                  </h1>
  
                  <button
                    type="button"
                    className="product-detail-wishlist"
                    aria-label="Add product to wishlist"
                  >
                    <Heart size={21} />
                  </button>
  
                </div>
  
  
                {/* Rating */}
  
                <div className="product-detail-rating">
  
                  <div className="stars">
  
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} fill="currentColor" />
                    <Star size={19} />
  
                  </div>
  
                  <strong>
                    {product.rating}
                  </strong>
  
                  <span>
                    ({product.reviews} reviews)
                  </span>
  
                </div>
  
  
                {/* Price */}
  
                <div className="product-detail-price">
                  Rs. {product.price}
                  <span> /kg</span>
                </div>
  
  
                {/* Tags */}
  
                <div className="product-tags">
  
                  <span>Fresh</span>
                  <span>Organic</span>
                  <span>Locally Sourced</span>
  
                </div>
  
  
                {/* Description */}
  
                <p className="product-description">
                  {product.description}
                </p>
  
  
                {/* Origin + Seller */}
  
                <div className="product-origin-seller">
  
                  <div className="origin-detail">
  
                    <div className="detail-icon">
                      <MapPin size={18} />
                    </div>
  
                    <div>
                      <small>Origin</small>
                      <strong>{product.origin}</strong>
                    </div>
  
                  </div>
  
  
                  <div className="detail-divider"></div>
  
  
                  <div className="seller-detail">
  
                    <div className="detail-icon">
                      <UserRound size={18} />
                    </div>
  
                    <div>
                      <small>Seller</small>
                      <strong>{product.seller}</strong>
                    </div>
  
                  </div>
  
                </div>
  
  
                {/* Quantity */}
  
                <div className="quantity-section">
  
                  <span>
                    Quantity
                  </span>
  
                  <div className="product-quantity-control">
  
                    <button type="button">
                      <Minus size={14} />
                    </button>
  
                    <span>1 kg</span>
  
                    <button type="button">
                      <Plus size={14} />
                    </button>
  
                  </div>
  
                </div>
  
  
                {/* Buttons */}
  
                <div className="product-detail-actions">
  
                  <button
                    type="button"
                    className="detail-cart-button"
                  >
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
  
                  <button
                    type="button"
                    className="detail-buy-button"
                  >
                    <ShoppingBag size={17} />
                    Buy Now
                  </button>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
  
          {/* ========================================
              PRODUCT INFORMATION TABS
          ======================================== */}
  
          <section className="product-information-section">
  
            <div className="product-container">
  
              <div className="product-tabs">
  
                <button className="active">
                  About this product
                </button>
  
                <button>
                  Nutritional Information
                </button>
  
                <button>
                  Reviews ({product.reviews})
                </button>
  
              </div>
  
  
              <div className="product-info-content">
  
                {/* About */}
  
                <div className="about-product">
  
                  <h3>
                    About this product
                  </h3>
  
                  <p>
                    Our fresh red apples are carefully selected
                    from trusted local farms. They are rich in
                    essential nutrients, naturally sweet and
                    perfect for a healthy lifestyle. Enjoy them
                    as a snack, in your breakfast or in your
                    favourite recipes.
                  </p>
  
                </div>
  
  
                {/* Key Benefits */}
  
                <div className="key-benefits">
  
                  <h3>
                    Key Benefits
                  </h3>
  
                  <ul>
  
                    <li>
                      <Leaf size={15} />
                      Freshly harvested
                    </li>
  
                    <li>
                      <MapPin size={15} />
                      Locally sourced
                    </li>
  
                    <li>
                      <CircleCheck size={15} />
                      Quality checked
                    </li>
  
                    <li>
                      <Truck size={15} />
                      Farm-to-door delivery
                    </li>
  
                  </ul>
  
                </div>
  
              </div>
  
  
              {/* ==================================
                  NUTRITION
              ================================== */}
  
              <div className="nutrition-box">
  
                <h3>
                  Nutritional Information
                  <span>(per 100g)</span>
                </h3>
  
  
                <div className="nutrition-items">
  
                  <div className="nutrition-item">
  
                    <div className="nutrition-circle"></div>
  
                    <div>
                      <span>Calories</span>
                      <strong>52 kcal</strong>
                    </div>
  
                  </div>
  
  
                  <div className="nutrition-divider"></div>
  
  
                  <div className="nutrition-item">
  
                    <div className="nutrition-circle"></div>
  
                    <div>
                      <span>Protein</span>
                      <strong>0.3 g</strong>
                    </div>
  
                  </div>
  
  
                  <div className="nutrition-divider"></div>
  
  
                  <div className="nutrition-item">
  
                    <div className="nutrition-circle"></div>
  
                    <div>
                      <span>Fiber</span>
                      <strong>2.4 g</strong>
                    </div>
  
                  </div>
  
  
                  <div className="nutrition-divider"></div>
  
  
                  <div className="nutrition-item">
  
                    <div className="nutrition-circle"></div>
  
                    <div>
                      <span>Vitamin C</span>
                      <strong>4.6 mg</strong>
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
  
          {/* ========================================
              WHY CHOOSE US
          ======================================== */}
  
          <section className="why-choose-section">
  
            <div className="product-container">
  
              <div className="why-heading">
  
                <span>Frame</span>
  
                <div className="heading-line"></div>
  
                <h2>
                  Why Choose Us
                </h2>
  
                <div className="heading-line"></div>
  
                <span className="heading-dot">•</span>
  
              </div>
  
  
              <div className="why-grid">
  
                <div className="why-card">
  
                  <div className="why-icon">
                    <Leaf size={43} />
                  </div>
  
                  <h3>
                    100% Organic
                  </h3>
  
                  <p>
                    No Harmful Chemicals
                  </p>
  
                </div>
  
  
                <div className="why-card">
  
                  <div className="why-icon">
                    <UserRound size={43} />
                  </div>
  
                  <h3>
                    Local Farmers
                  </h3>
  
                  <p>
                    Support local livelihood
                  </p>
  
                </div>
  
  
                <div className="why-card">
  
                  <div className="why-icon">
                    <Leaf size={43} />
                  </div>
  
                  <h3>
                    Fresh & Natural
                  </h3>
  
                  <p>
                    Fresh to table
                  </p>
  
                </div>
  
  
                <div className="why-card">
  
                  <div className="why-icon">
                    <ShieldCheck size={43} />
                  </div>
  
                  <h3>
                    Quality Assured
                  </h3>
  
                  <p>
                    Strict quality check
                  </p>
  
                </div>
  
  
                <div className="why-card">
  
                  <div className="why-icon">
                    <ShoppingBag size={43} />
                  </div>
  
                  <h3>
                    Safe Delivery
                  </h3>
  
                  <p>
                    Hygienic & timely
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
  
          {/* ========================================
              POPULAR PRODUCTS
          ======================================== */}
  
          <section className="product-popular-section">
  
            <div className="product-container">
  
              <div className="product-section-header">
  
                <h2>
                  Most Popular Items
                </h2>
  
                <Link to="/categories">
                  View all
                </Link>
  
              </div>
  
  
              <div className="product-popular-grid">
  
                {popularProducts.map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                  />
                ))}
  
              </div>
  
            </div>
  
          </section>
  
  
          {/* ========================================
              CUSTOMER REVIEWS
          ======================================== */}
  
          <section className="customer-reviews-section">
  
            <div className="product-container">
  
              <h2>
                What Our Customers Say
              </h2>
  
  
              <div className="reviews-grid">
  
                <article className="review-card">
  
                  <p>
                    The vegetables are so fresh and organic.
                    I can really taste the difference.
                    Highly recommended!
                  </p>
  
                  <div className="review-user">
  
                    <div className="review-avatar">
                      <span>👩</span>
                    </div>
  
                    <div>
                      <strong>
                        Sneha M.
                      </strong>
  
                      <div className="review-stars">
                        ★★★★★
                      </div>
                    </div>
  
                  </div>
  
                </article>
  
  
                <article className="review-card">
  
                  <p>
                    Great quality products and super fast
                    delivery. I love how they support local
                    farmers.
                  </p>
  
                  <div className="review-user">
  
                    <div className="review-avatar">
                      <span>👨</span>
                    </div>
  
                    <div>
                      <strong>
                        Arjun K.
                      </strong>
  
                      <div className="review-stars">
                        ★★★★★
                      </div>
  
                    </div>
  
                  </div>
  
                </article>
  
  
                <article className="review-card">
  
                  <p>
                    This is my go-to store for all fresh
                    produce. Everything is always top notch!
                  </p>
  
                  <div className="review-user">
  
                    <div className="review-avatar">
                      <span>👩</span>
                    </div>
  
                    <div>
                      <strong>
                        Pooja R.
                      </strong>
  
                      <div className="review-stars">
                        ★★★★★
                      </div>
                    </div>
  
                  </div>
  
                </article>
  
              </div>
  
  
              <div className="review-dots">
  
                <span className="active"></span>
                <span></span>
                <span></span>
  
              </div>
  
            </div>
  
          </section>
  
  
          {/* ========================================
              NEWSLETTER
          ======================================== */}
  
          <section className="product-newsletter">
  
            <h2>
              Get the latest deals
            </h2>
  
            <div className="newsletter-form">
  
              <input
                type="email"
                placeholder="Enter Your Email Address"
              />
  
              <button type="button">
                Subscribe
              </button>
  
            </div>
  
          </section>
  
        </main>
  
        <Footer />
      </>
    );
  }
  
  export default ProductDetails;