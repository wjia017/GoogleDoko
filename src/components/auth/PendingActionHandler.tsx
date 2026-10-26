import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAccount } from "../../context/AccountContext";
import { useAuthFlow } from "../../context/AuthFlowContext";
import { useCart } from "../../context/CartContext";
import { useCheckout } from "../../context/CheckoutContext";
import { useWishlist } from "../../context/WishlistContext";

function PendingActionHandler() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAccount();
  const { pending, clearPending } = useAuthFlow();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { beginBuyNow } = useCheckout();
  const handled = useRef(false);

  useEffect(() => {
    if (!isLoggedIn || !pending || handled.current) {
      if (!isLoggedIn) {
        handled.current = false;
      }
      return;
    }

    handled.current = true;
    const action = pending;
    clearPending();

    if (action.product && action.intent === "cart-add") {
      addToCart(action.product, action.quantity ?? 1);
      navigate(action.returnTo, { replace: true });
      return;
    }

    if (action.product && action.intent === "wishlist-add") {
      if (!isInWishlist(action.product.id)) {
        toggleWishlist(action.product);
      }
      navigate(action.returnTo, { replace: true });
      return;
    }

    if (action.product && action.intent === "buy") {
      beginBuyNow(action.product, action.quantity ?? 1);
      navigate("/checkout", { replace: true });
      return;
    }

    if (action.returnTo) {
      navigate(action.returnTo, { replace: true });
    }
  }, [
    addToCart,
    beginBuyNow,
    clearPending,
    isInWishlist,
    isLoggedIn,
    navigate,
    pending,
    toggleWishlist,
  ]);

  return null;
}

export default PendingActionHandler;
