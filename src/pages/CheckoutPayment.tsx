import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Check, Smartphone, Wallet } from "lucide-react";

import CheckoutShell from "../components/CheckoutShell";
import OrderSummaryCard from "../components/OrderSummaryCard";
import {
  useCheckout,
  type PaymentMethod,
} from "../context/CheckoutContext";

const methods: {
  id: PaymentMethod;
  title: string;
  text: string;
  icon: typeof Wallet;
}[] = [
  {
    id: "esewa",
    title: "eSewa Mobile Wallet",
    text: "Pay instantly via your eSewa Nepalese digital wallet.",
    icon: Wallet,
  },
  {
    id: "khalti",
    title: "Khalti Wallet",
    text: "Quick mobile payment utilizing Khalti digital system.",
    icon: Smartphone,
  },
  {
    id: "cod",
    title: "Cash on Delivery",
    text: "Pay with local currency when the delivery partner reaches your door.",
    icon: Wallet,
  },
  {
    id: "bank",
    title: "Direct Bank Transfer",
    text: "Transfer directly using mobile banking / ConnectIPS.",
    icon: Building2,
  },
];

function CheckoutPayment() {
  const navigate = useNavigate();
  const { items, paymentMethod, setPaymentMethod } = useCheckout();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [items.length, navigate]);

  return (
    <CheckoutShell step={2}>
      <div className="checkout-layout">
        <div className="co-main">
          <h1>Select Payment Method</h1>

          <div className="co-pay-list">
            {methods.map((method) => {
              const Icon = method.icon;
              const selected = paymentMethod === method.id;

              return (
                <button
                  type="button"
                  key={method.id}
                  className={`co-pay-card ${selected ? "selected" : ""}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <span className="co-pay-icon">
                    <Icon size={18} />
                  </span>
                  <span>
                    <strong>{method.title}</strong>
                    <small>{method.text}</small>
                  </span>
                  <span className="co-pay-radio">
                    {selected && <Check size={14} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <OrderSummaryCard
          items={items}
          actionLabel="Review Order"
          onAction={() => navigate("/checkout/review")}
        />
      </div>
    </CheckoutShell>
  );
}

export default CheckoutPayment;
