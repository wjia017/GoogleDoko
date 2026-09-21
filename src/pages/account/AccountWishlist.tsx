import { Star } from "lucide-react";

import AccountShell from "../../components/account/AccountShell";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function AccountWishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <AccountShell title="Wishlist">
      {wishlist.length === 0 ? (
        <div className="account-empty">Your wishlist is empty.</div>
      ) : (
        <div className="account-wishlist-grid">
          {wishlist.map((product) => {
            const original = Math.round(product.price / 0.85);
            const discount = Math.round(((original - product.price) / original) * 100);

            return (
              <article key={product.id} className="account-wish-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="account-price">
                  Rs {product.price.toLocaleString()}
                  <s>Rs {original.toLocaleString()}</s>
                  <em>{discount}% off</em>
                </p>
                <p className="account-rating">
                  <Star size={14} fill="currentColor" /> {product.rating}
                </p>
                <div className="account-form-actions">
                  <button
                    type="button"
                    className="account-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="account-btn ghost"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </AccountShell>
  );
}

export default AccountWishlist;
