import {
  ShoppingCart,
  Star,
  MapPin,
  UserRound,
  Heart,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import type { Product } from "../data/products";
import { getProductBadge } from "../data/productBadges";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { useWishlist } from "../context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { beginBuyNow } = useCheckout();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const saved = isInWishlist(product.id);
  const badge = getProductBadge(product.name);
  const BadgeIcon = badge.icon;

  return (
    <article
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      {/* Product Image */}
      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button
          type="button"
          className={`product-wishlist-button ${saved ? "active" : ""}`}
          aria-label={
            saved
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          onClick={(event) => {
            event.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <Heart size={18} fill={saved ? "currentColor" : "none"} />
        </button>

        {/* Category Icon */}
        <div className={`product-category-icon ${badge.className}`}>
          <BadgeIcon size={38} strokeWidth={2} />
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
            onClick={(event) => {
              event.stopPropagation();
              beginBuyNow(product);
              navigate("/checkout");
            }}
          >
            Buy Now
          </button>

          <button
            type="button"
            className="add-cart-button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(event) => {
              event.stopPropagation();
              addToCart(product);
            }}
          >
            <ShoppingCart size={23} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;