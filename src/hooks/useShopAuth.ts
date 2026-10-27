import { useLocation } from "react-router-dom";

import { useAccount } from "../context/AccountContext";
import { useAuthFlow, type AuthIntent } from "../context/AuthFlowContext";
import type { Product } from "../data/products";

export function useShopAuth() {
  const location = useLocation();
  const { isLoggedIn } = useAccount();
  const { requestAuth } = useAuthFlow();

  function allow(
    intent: AuthIntent,
    product?: Product,
    quantity?: number,
  ) {
    if (isLoggedIn) {
      return true;
    }
    requestAuth(intent, {
      product,
      quantity,
      returnTo: `${location.pathname}${location.search}`,
    });
    return false;
  }

  return { isLoggedIn, allow };
}
