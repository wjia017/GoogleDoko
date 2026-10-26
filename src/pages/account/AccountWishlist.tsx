import { Link } from "react-router-dom";

import AccountShell from "../../components/account/AccountShell";
import ProductCard from "../../components/product/ProductCard";
import { useWishlist } from "../../context/WishlistContext";

function AccountWishlist() {
  const { wishlist } = useWishlist();

  return (
    <AccountShell title="Wishlist">
      {wishlist.length > 0 ? (
        <div className="categories-products-grid account-wishlist-products">
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
    </AccountShell>
  );
}

export default AccountWishlist;
