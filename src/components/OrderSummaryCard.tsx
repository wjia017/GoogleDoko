import type { CartItem } from "../context/CartContext";

interface OrderSummaryCardProps {
  items: CartItem[];
  actionLabel: string;
  onAction: () => void;
  disabled?: boolean;
}

function OrderSummaryCard({
  items,
  actionLabel,
  onAction,
  disabled,
}: OrderSummaryCardProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = items.length > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <aside className="co-summary">
      <h2>Order Summary</h2>

      <div className="co-summary-items">
        {items.map((item) => (
          <div className="co-summary-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <strong>{item.name}</strong>
              <small>
                {item.quantity} {item.weight.replace(/^\d+\s*/, "") || "kg"}
                {item.seller ? ` • ${item.seller}` : ""}
              </small>
            </div>
            <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="co-summary-row">
        <span>Subtotal</span>
        <strong>Rs. {subtotal.toLocaleString()}</strong>
      </div>
      <div className="co-summary-row">
        <span>Delivery Fee</span>
        <strong>Rs. {deliveryFee}</strong>
      </div>
      <div className="co-summary-total">
        <span>Grand Total</span>
        <strong>Rs. {total.toLocaleString()}</strong>
      </div>

      <button
        type="button"
        className="co-continue"
        onClick={onAction}
        disabled={disabled || items.length === 0}
      >
        {actionLabel}
        <span>→</span>
      </button>
    </aside>
  );
}

export default OrderSummaryCard;
