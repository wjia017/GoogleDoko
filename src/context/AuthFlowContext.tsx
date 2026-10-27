import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../data/products";

export type AuthIntent =
  | "cart-add"
  | "wishlist-add"
  | "buy"
  | "cart-page"
  | "wishlist-page"
  | "orders"
  | "checkout"
  | "account";

export interface PendingShopAction {
  intent: AuthIntent;
  returnTo: string;
  product?: Product;
  quantity?: number;
}

export interface AuthPromptCopy {
  title: string;
  message: string;
  showContinue?: boolean;
}

const SHARED_SHOP_PROMPT: AuthPromptCopy = {
  title: "Please log in to continue",
  message:
    "Log in to your account or create a new account to add products to your cart and place orders.",
  showContinue: true,
};

const PROMPTS: Record<AuthIntent, AuthPromptCopy> = {
  "cart-add": SHARED_SHOP_PROMPT,
  "wishlist-add": SHARED_SHOP_PROMPT,
  buy: SHARED_SHOP_PROMPT,
  checkout: SHARED_SHOP_PROMPT,
  "cart-page": SHARED_SHOP_PROMPT,
  "wishlist-page": {
    title: "Please log in to continue",
    message:
      "Log in to your account or create a new account to save products and manage your wishlist.",
    showContinue: true,
  },
  orders: {
    title: "Please log in to continue",
    message: "Log in to your account or create a new account to view your orders.",
    showContinue: true,
  },
  account: {
    title: "Please log in to continue",
    message: "Log in to your account or create a new account to manage your profile.",
    showContinue: true,
  },
};

const STORAGE_KEY = "googledoko-auth-pending";

function readPending(): PendingShopAction | null {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as PendingShopAction) : null;
  } catch {
    return null;
  }
}

function writePending(action: PendingShopAction | null) {
  if (!action) {
    sessionStorage.removeItem(STORAGE_KEY);
    return;
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(action));
}

interface AuthFlowValue {
  prompt: AuthIntent | null;
  pending: PendingShopAction | null;
  copy: AuthPromptCopy | null;
  requestAuth: (intent: AuthIntent, extras?: Partial<PendingShopAction>) => void;
  closePrompt: () => void;
  clearPending: () => void;
}

const AuthFlowContext = createContext<AuthFlowValue | null>(null);

export function AuthFlowProvider({ children }: { children: ReactNode }) {
  const [prompt, setPrompt] = useState<AuthIntent | null>(null);
  const [pending, setPending] = useState<PendingShopAction | null>(readPending);

  const requestAuth = useCallback(
    (intent: AuthIntent, extras?: Partial<PendingShopAction>) => {
      const action: PendingShopAction = {
        intent,
        returnTo: extras?.returnTo || window.location.pathname + window.location.search,
        product: extras?.product,
        quantity: extras?.quantity,
      };
      writePending(action);
      setPending(action);
      setPrompt(intent);
    },
    [],
  );

  const closePrompt = useCallback(() => {
    setPrompt(null);
  }, []);

  const clearPending = useCallback(() => {
    writePending(null);
    setPending(null);
    setPrompt(null);
  }, []);

  const value = useMemo(
    () => ({
      prompt,
      pending,
      copy: prompt ? PROMPTS[prompt] : null,
      requestAuth,
      closePrompt,
      clearPending,
    }),
    [clearPending, closePrompt, pending, prompt, requestAuth],
  );

  return (
    <AuthFlowContext.Provider value={value}>{children}</AuthFlowContext.Provider>
  );
}

export function useAuthFlow() {
  const context = useContext(AuthFlowContext);
  if (!context) {
    throw new Error("useAuthFlow must be used inside AuthFlowProvider");
  }
  return context;
}

export function authPromptCopy(intent: AuthIntent) {
  return PROMPTS[intent];
}
