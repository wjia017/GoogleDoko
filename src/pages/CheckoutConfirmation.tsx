import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

import CheckoutShell from "../components/CheckoutShell";
import { useCheckout } from "../context/CheckoutContext";
import { useOrders } from "../context/OrdersContext";
import { useEffect } from "react";

function CheckoutConfirmation() {
  const navigate = useNavigate();
  const { lastOrderId, clearCheckout } = useCheckout();
  const { orders } = useOrders();
  const order = orders.find((item) => item.id === lastOrderId);

  useEffect(() => {
    clearCheckout();
  }, [clearCheckout]);

  if (!order) {
    return (
      <CheckoutShell step={4}>
        <div className="co-success-card">
          <h1>Order not found</h1>
          <Link to="/orders">View Orders</Link>
        </div>
      </CheckoutShell>
    );
  }

  const vendors = Array.from(
    new Set(
      order.products.map(
        (item) =>
          `${item.seller ?? "Local Seller"}${item.origin ? ` (${item.origin})` : ""}`,
      ),
    ),
  );

  return (
    <CheckoutShell step={4}>
      <div className="co-success-card">
        <div className="co-success-icon">
          <Check size={32} />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for supporting Nepalese organic farmers.</p>

        <div className="co-order-number">
          Order Number: <strong>{order.id}</strong>
        </div>

        <dl className="co-success-meta">
          <div>
            <dt>Payment Status</dt>
            <dd className="pending">{order.paymentStatus ?? "Pending (Cash on Delivery)"}</dd>
          </div>
          <div>
            <dt>Delivery Destination</dt>
            <dd>{order.deliveryAddress ?? "Kathmandu, Nepal"}</dd>
          </div>
          <div>
            <dt>Estimated Delivery</dt>
            <dd className="eta">2–3 Days</dd>
          </div>
        </dl>

        <div className="co-vendors">
          <span>SOURCED VENDORS</span>
          <ul>
            {vendors.map((vendor) => (
              <li key={vendor}>{vendor}</li>
            ))}
          </ul>
        </div>

        <div className="co-success-actions">
          <button
            type="button"
            className="co-continue"
            onClick={() => navigate(`/orders/${order.id}/track`)}
          >
            Track Order
          </button>
          <button
            type="button"
            className="co-ghost"
            onClick={() => navigate("/orders")}
          >
            View Orders
          </button>
        </div>

        <Link to="/shop" className="co-shop-link">
          Continue Shopping
        </Link>
      </div>
    </CheckoutShell>
  );
}

export default CheckoutConfirmation;
