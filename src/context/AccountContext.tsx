import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  defaultMockAddresses,
  type MockAddress,
} from "../data/mockAddresses";
import { defaultAccountOrders, type AccountOrder } from "../data/mockOrders";
import { defaultMockReviews, type MockReview } from "../data/mockReviews";
import { defaultRewardHistory, type RewardEntry } from "../data/mockRewards";
import {
  defaultNotificationSettings,
  type NotificationSettings,
} from "../data/mockSettings";
import { defaultMockUser, type MockUser } from "../data/mockUser";

export type AccountLanguage = "English" | "Nepali";

interface AccountContextValue {
  isLoggedIn: boolean;
  user: MockUser;
  orders: AccountOrder[];
  addresses: MockAddress[];
  reviews: MockReview[];
  rewards: RewardEntry[];
  points: number;
  notifications: NotificationSettings;
  language: AccountLanguage;
  darkMode: boolean;
  toast: string | null;
  login: () => void;
  logout: () => void;
  updateUser: (next: Partial<MockUser>) => void;
  setPhoto: (photo: string) => void;
  showToast: (message: string) => void;
  saveNotifications: (next: NotificationSettings) => void;
  setLanguage: (language: AccountLanguage) => void;
  setDarkMode: (on: boolean) => void;
  addAddress: (address: Omit<MockAddress, "id">) => void;
  updateAddress: (id: string, address: Partial<MockAddress>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  addReview: (review: Omit<MockReview, "id">) => void;
  updateReview: (id: string, review: Partial<MockReview>) => void;
  deleteReview: (id: string) => void;
  redeemPoints: (amount: number) => boolean;
  changePassword: (current: string, next: string) => string | null;
}

const AccountContext = createContext<AccountContextValue | null>(null);

function readJson<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

function readBool(key: string, fallback: boolean) {
  const saved = localStorage.getItem(key);
  if (saved === null) {
    return fallback;
  }
  return saved === "true";
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    readBool("googledoko-logged-in", true),
  );
  const [user, setUser] = useState<MockUser>(() =>
    readJson("googledoko-user", defaultMockUser),
  );
  const [orders] = useState<AccountOrder[]>(() =>
    readJson("googledoko-account-orders", defaultAccountOrders),
  );
  const [addresses, setAddresses] = useState<MockAddress[]>(() =>
    readJson("googledoko-addresses", defaultMockAddresses),
  );
  const [reviews, setReviews] = useState<MockReview[]>(() =>
    readJson("googledoko-reviews", defaultMockReviews),
  );
  const [rewards, setRewards] = useState<RewardEntry[]>(() =>
    readJson("googledoko-rewards", defaultRewardHistory),
  );
  const [points, setPoints] = useState(() =>
    readJson("googledoko-points", defaultMockUser.rewardPoints),
  );
  const [notifications, setNotifications] = useState<NotificationSettings>(() =>
    readJson("googledoko-notifications", defaultNotificationSettings),
  );
  const [language, setLanguageState] = useState<AccountLanguage>(() =>
    readJson("googledoko-language", "English"),
  );
  const [darkMode, setDarkModeState] = useState(() =>
    readBool("googledoko-dark-mode", false),
  );
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef(0);

  useEffect(() => {
    localStorage.setItem("googledoko-logged-in", String(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    try {
      localStorage.setItem("googledoko-user", JSON.stringify(user));
    } catch {
      // Photo data URLs can exceed quota; keep the in-memory profile anyway.
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("googledoko-addresses", JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    localStorage.setItem("googledoko-reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem("googledoko-rewards", JSON.stringify(rewards));
  }, [rewards]);

  useEffect(() => {
    localStorage.setItem("googledoko-points", JSON.stringify(points));
  }, [points]);

  useEffect(() => {
    localStorage.setItem("googledoko-notifications", JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("googledoko-language", JSON.stringify(language));
  }, [language]);

  useEffect(() => {
    localStorage.setItem("googledoko-dark-mode", "false");
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2500);
  }, []);

  const value = useMemo<AccountContextValue>(
    () => ({
      isLoggedIn,
      user,
      orders,
      addresses,
      reviews,
      rewards,
      points,
      notifications,
      language,
      darkMode,
      toast,
      login: () => setIsLoggedIn(true),
      logout: () => {
        setIsLoggedIn(false);
        showToast("Logged out");
      },
      updateUser: (next) => setUser((current) => ({ ...current, ...next })),
      setPhoto: (photo) => setUser((current) => ({ ...current, photo })),
      showToast,
      saveNotifications: setNotifications,
      setLanguage: setLanguageState,
      setDarkMode: setDarkModeState,
      addAddress: (address) => {
        const id = `addr-${Date.now()}`;
        setAddresses((items) => {
          const next = address.isDefault
            ? items.map((item) => ({ ...item, isDefault: false }))
            : items;
          return [...next, { ...address, id }];
        });
        showToast("Address saved successfully");
      },
      updateAddress: (id, address) => {
        setAddresses((items) => {
          const cleared = address.isDefault
            ? items.map((item) => ({ ...item, isDefault: false }))
            : items;
          return cleared.map((item) =>
            item.id === id ? { ...item, ...address } : item,
          );
        });
        showToast("Address updated successfully");
      },
      deleteAddress: (id) => {
        setAddresses((items) => items.filter((item) => item.id !== id));
        showToast("Address deleted successfully");
      },
      setDefaultAddress: (id) => {
        setAddresses((items) =>
          items.map((item) => ({ ...item, isDefault: item.id === id })),
        );
        showToast("Default address updated");
      },
      addReview: (review) => {
        setReviews((items) => [
          { ...review, id: `rev-${Date.now()}` },
          ...items,
        ]);
        showToast("Review submitted successfully");
      },
      updateReview: (id, review) => {
        setReviews((items) =>
          items.map((item) => (item.id === id ? { ...item, ...review } : item)),
        );
        showToast("Review updated successfully");
      },
      deleteReview: (id) => {
        setReviews((items) => items.filter((item) => item.id !== id));
        showToast("Review deleted");
      },
      redeemPoints: (amount) => {
        if (points < amount) {
          showToast("Not enough reward points");
          return false;
        }
        setPoints((value) => value - amount);
        setRewards((items) => [
          {
            id: `rw-${Date.now()}`,
            label: "Redeemed",
            points: -amount,
            date: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          },
          ...items,
        ]);
        showToast(`${amount} points redeemed`);
        return true;
      },
      changePassword: (current, next) => {
        if (current !== user.password) {
          return "Current password is incorrect";
        }
        setUser((value) => ({ ...value, password: next }));
        showToast("Password updated for this demo");
        return null;
      },
    }),
    [
      addresses,
      darkMode,
      isLoggedIn,
      language,
      notifications,
      orders,
      points,
      reviews,
      rewards,
      showToast,
      toast,
      user,
    ],
  );

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccount must be used inside AccountProvider");
  }
  return context;
}
