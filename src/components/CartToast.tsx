import { Check, Heart } from "lucide-react";

import { useAccount } from "../context/AccountContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function CartToast() {
  const { toast: cartToast } = useCart();
  const { toast: wishlistToast } = useWishlist();
  const { toast: accountToast } = useAccount();
  const toast = accountToast ?? wishlistToast ?? cartToast;

  if (!toast) {
    return null;
  }

  const removed = toast.toLowerCase().includes("removed");

  return (
    <div className="cart-toast" role="status" aria-live="polite">
      <span className={`cart-toast-icon ${removed ? "remove" : ""}`}>
        {removed ? <Heart size={16} /> : <Check size={16} />}
      </span>
      <span>{toast}</span>
    </div>
  );
}

export default CartToast;
