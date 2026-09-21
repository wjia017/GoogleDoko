import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CartItem } from "./CartContext";
import type { Product } from "../data/products";

export type AddressType = "Home" | "Work" | "Other";
export type PaymentMethod = "esewa" | "khalti" | "cod" | "bank";

export interface SavedAddress {
  id: string;
  label: AddressType;
  title: string;
  line: string;
  phone: string;
  fullName: string;
  province: string;
  district: string;
  area: string;
  street: string;
  landmark: string;
  postalCode: string;
}

export interface RecipientForm {
  fullName: string;
  phone: string;
  province: string;
  district: string;
  area: string;
  street: string;
  landmark: string;
  postalCode: string;
  addressType: AddressType;
}

interface CheckoutContextValue {
  items: CartItem[];
  fromCart: boolean;
  selectedAddressId: string;
  addresses: SavedAddress[];
  form: RecipientForm;
  paymentMethod: PaymentMethod;
  lastOrderId: string | null;
  beginCheckout: (items: CartItem[], fromCart: boolean) => void;
  beginBuyNow: (product: Product, quantity?: number) => void;
  selectAddress: (id: string) => void;
  startNewAddress: () => void;
  updateForm: (field: keyof RecipientForm, value: string) => void;
  saveCurrentAddress: () => boolean;
  setPaymentMethod: (method: PaymentMethod) => void;
  setLastOrderId: (id: string | null) => void;
  clearCheckout: () => void;
}

const storageKey = "googledoko-checkout";

const defaultAddresses: SavedAddress[] = [
  {
    id: "home",
    label: "Home",
    title: "Kathmandu Address",
    line: "Budhanilkantha-08, Gairigaon, Landmark: Near Ganesh Mandir, Kathmandu, Bagmati Province",
    phone: "9851012345",
    fullName: "Lahana Lawaju",
    province: "Bagmati Province",
    district: "Kathmandu",
    area: "Budhanilkantha Area",
    street: "Gairigaon Marg",
    landmark: "Near Ganesh Mandir",
    postalCode: "44600",
  },
  {
    id: "work",
    label: "Work",
    title: "Lalitpur Office",
    line: "Pulchowk Road, Lalitpur, Landmark: Next to Sajha Yatayat, Lalitpur, Bagmati Province",
    phone: "9801234567",
    fullName: "Lahana Lawaju",
    province: "Bagmati Province",
    district: "Lalitpur",
    area: "Pulchowk",
    street: "Pulchowk Road",
    landmark: "Next to Sajha Yatayat",
    postalCode: "44700",
  },
];

function formFromAddress(address: SavedAddress): RecipientForm {
  return {
    fullName: address.fullName,
    phone: address.phone,
    province: address.province,
    district: address.district,
    area: address.area,
    street: address.street,
    landmark: address.landmark,
    postalCode: address.postalCode,
    addressType: address.label,
  };
}

const emptyForm: RecipientForm = {
  fullName: "",
  phone: "",
  province: "Bagmati Province",
  district: "",
  area: "",
  street: "",
  landmark: "",
  postalCode: "",
  addressType: "Other",
};

interface PersistedCheckout {
  items: CartItem[];
  fromCart: boolean;
  selectedAddressId: string;
  addresses: SavedAddress[];
  form: RecipientForm;
  paymentMethod: PaymentMethod;
  lastOrderId: string | null;
}

function readCheckout(): PersistedCheckout {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved) as PersistedCheckout;
    }
  } catch {
    /* ignore */
  }

  return {
    items: [],
    fromCart: false,
    selectedAddressId: "home",
    addresses: defaultAddresses,
    form: formFromAddress(defaultAddresses[0]),
    paymentMethod: "cod",
    lastOrderId: null,
  };
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const initial = readCheckout();
  const [items, setItems] = useState<CartItem[]>(initial.items);
  const [fromCart, setFromCart] = useState(initial.fromCart);
  const [addresses, setAddresses] = useState<SavedAddress[]>(initial.addresses);
  const [selectedAddressId, setSelectedAddressId] = useState(
    initial.selectedAddressId,
  );
  const [form, setForm] = useState<RecipientForm>(initial.form);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    initial.paymentMethod,
  );
  const [lastOrderId, setLastOrderId] = useState<string | null>(
    initial.lastOrderId,
  );

  useEffect(() => {
    const payload: PersistedCheckout = {
      items,
      fromCart,
      selectedAddressId,
      addresses,
      form,
      paymentMethod,
      lastOrderId,
    };
    localStorage.setItem(storageKey, JSON.stringify(payload));
  }, [
    items,
    fromCart,
    selectedAddressId,
    addresses,
    form,
    paymentMethod,
    lastOrderId,
  ]);

  const value = useMemo<CheckoutContextValue>(
    () => ({
      items,
      fromCart,
      selectedAddressId,
      addresses,
      form,
      paymentMethod,
      lastOrderId,
      beginCheckout: (nextItems, nextFromCart) => {
        setItems(nextItems);
        setFromCart(nextFromCart);
      },
      beginBuyNow: (product, quantity = 1) => {
        setItems([
          {
            id: product.id,
            name: product.name,
            weight: product.weight,
            price: product.price,
            quantity,
            image: product.image,
            origin: product.origin,
            seller: product.seller,
          },
        ]);
        setFromCart(false);
      },
      selectAddress: (id) => {
        const address = addresses.find((item) => item.id === id);
        setSelectedAddressId(id);
        if (address) {
          setForm(formFromAddress(address));
        }
      },
      startNewAddress: () => {
        setSelectedAddressId("new");
        setForm(emptyForm);
      },
      updateForm: (field, value) => {
        setForm((current) => ({ ...current, [field]: value }));
      },
      saveCurrentAddress: () => {
        const required: (keyof RecipientForm)[] = [
          "fullName",
          "phone",
          "province",
          "district",
          "area",
          "street",
        ];

        if (required.some((field) => !form[field].trim())) {
          return false;
        }

        if (!/^9\d{9}$/.test(form.phone.trim())) {
          return false;
        }

        const line = [
          form.street,
          form.area,
          form.landmark ? `Landmark: ${form.landmark}` : "",
          form.district,
          form.province,
        ]
          .filter(Boolean)
          .join(", ");

        const nextAddress: SavedAddress = {
          id: selectedAddressId === "new" ? `addr-${Date.now()}` : selectedAddressId,
          label: form.addressType,
          title:
            form.addressType === "Home"
              ? `${form.district} Address`
              : form.addressType === "Work"
                ? `${form.district} Office`
                : "Other Address",
          line,
          phone: form.phone.trim(),
          fullName: form.fullName.trim(),
          province: form.province,
          district: form.district,
          area: form.area,
          street: form.street,
          landmark: form.landmark,
          postalCode: form.postalCode,
        };

        setAddresses((current) => {
          const exists = current.some((item) => item.id === nextAddress.id);
          return exists
            ? current.map((item) =>
                item.id === nextAddress.id ? nextAddress : item,
              )
            : [...current, nextAddress];
        });
        setSelectedAddressId(nextAddress.id);
        return true;
      },
      setPaymentMethod,
      setLastOrderId,
      clearCheckout: () => {
        setItems((current) => (current.length === 0 ? current : []));
        setFromCart(false);
      },
    }),
    [items, fromCart, selectedAddressId, addresses, form, paymentMethod, lastOrderId],
  );

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider");
  }

  return context;
}

export const paymentLabels: Record<PaymentMethod, string> = {
  esewa: "eSewa Mobile Wallet",
  khalti: "Khalti Wallet",
  cod: "Cash on Delivery",
  bank: "Direct Bank Transfer",
};
