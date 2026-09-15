import {
  ShoppingCart,
  Star,
  MapPin,
  UserRound,
  Apple,
  Leaf,
  Carrot,
} from "lucide-react";

import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Category Icon */}
        <div className={`product-category-icon ${product.category.toLowerCase()}`}>

          {product.category === "Honey" ? (
            <Leaf size={38} strokeWidth={2} />
          ) : product.name === "Apple" ? (
            <Apple size={38} strokeWidth={2} />
          ) : product.name === "Orange" ? (
            <Apple size={38} strokeWidth={2} />
          ) : product.name === "Avocado" ? (
            <Leaf size={38} strokeWidth={2} />
          ) : (
            <Carrot size={38} strokeWidth={2} />
          )}

        </div>

      </div>


      {/* Product Information */}
      <div className="product-info">

        {/* Name + Weight */}
        <div className="product-title-row">

          <h3>
            {product.name}
          </h3>

          <span className="product-weight">
            {product.weight}
          </span>

        </div>


        {/* Price */}
        <div className="product-price">
          Rs {product.price.toLocaleString()}
        </div>


        {/* Rating + Sold */}
        <div className="product-rating">

          <div className="rating">
            <Star
              size={18}
              fill="currentColor"
            />

            <span>
              {product.rating}
            </span>

            <span className="rating-count">
              ({product.sold})
            </span>
          </div>

          <span className="sold">
            {product.sold + 192} + sold
          </span>

        </div>


        {/* Origin + Seller */}
        <div className="product-location-box">

          <div className="product-location">

            <MapPin size={18} />

            <div>
              <span>Origin</span>
              <strong>
                {product.origin}
              </strong>
            </div>

          </div>


          <div className="product-divider"></div>


          <div className="product-seller-info">

            <UserRound size={18} />

            <div>
              <span>Seller</span>
              <strong>
                {product.seller}
              </strong>
            </div>

          </div>

        </div>


        {/* Buttons */}
        <div className="product-actions">

          <button
            type="button"
            className="buy-button"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="add-cart-button"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={23} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;