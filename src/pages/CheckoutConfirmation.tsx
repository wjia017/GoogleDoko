import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Check, Truck, ShoppingBag, Eye } from "lucide-react";

import CheckoutShell from "../components/CheckoutShell";
import { useCheckout } from "../context/CheckoutContext";
import { useOrders } from "../context/OrdersContext";
import { useAccount } from "../context/AccountContext";
import { normalizeOrder, type NormalizedOrder } from "../utils/normalizeOrder";
import { api, getToken } from "../api/client";

function CheckoutConfirmation() {
  const location = useLocation();
  const { lastOrderId, clearCheckout } = useCheckout();
  const { orders } = useOrders();
  const { orders: accountOrders } = useAccount();

  // Find order from state, lastOrderId, or recent orders
  const targetId = location.state?.orderId || lastOrderId;
  const initialOrder =
    location.state?.order ||
    orders.find((item) => item.id === targetId) ||
    accountOrders.find((item) => item.id === targetId) ||
    orders[0] ||
    accountOrders[0] ||
    null;

  const [order, setOrder] = useState<NormalizedOrder | null>(
    initialOrder ? normalizeOrder(initialOrder) : null
  );

  const clearedRef = useRef(false);
  useEffect(() => {
    if (!clearedRef.current) {
      clearedRef.current = true;
      clearCheckout();
    }
  }, [clearCheckout]);

  useEffect(() => {
    if (!order && targetId && getToken()) {
      api.getOrderById(targetId)
        .then((res) => {
          if (res) {
            setOrder(normalizeOrder(res));
          }
        })
        .catch(() => {});
    }
  }, [order, targetId]);

  const activeId = order?.id || targetId || "GD-ORD";

  const vendors = Array.from(
    new Set(
      (order?.products || []).map(
        (item) =>
          `${item.seller ?? "Local Seller"}${item.origin ? ` (${item.origin})` : ""}`
      )
    )
  );

  return (
    <CheckoutShell step={4}>
      <div className="co-success-card">
        <div className="co-success-icon">
          <Check size={32} />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for supporting Nepalese organic farmers and local producers.</p>

        <div className="co-order-number">
          Order Number: <strong>{activeId}</strong>
        </div>

        <dl className="co-success-meta">
          <div>
            <dt>Payment Status</dt>
            <dd className="pending">
              {order?.paymentStatus ?? "Pending (Cash on Delivery)"}
            </dd>
          </div>
          <div>
            <dt>Delivery Destination</dt>
            <dd>{order?.deliveryAddress ?? "Kathmandu, Nepal"}</dd>
          </div>
          <div>
            <dt>Estimated Delivery</dt>
            <dd className="eta">2–3 Days</dd>
          </div>
        </dl>

        {vendors.length > 0 && (
          <div className="co-vendors">
            <span>SOURCED VENDORS</span>
            <ul>
              {vendors.map((vendor) => (
                <li key={vendor}>{vendor}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="co-success-actions">
          <Link
            to={`/orders/${activeId}/track`}
            state={{ order, orderId: activeId }}
            className="co-continue"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Truck size={18} />
            Track Order
          </Link>

          <Link
            to={`/orders/${activeId}`}
            state={{ order, orderId: activeId }}
            className="co-ghost"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Eye size={18} />
            Open Order Details
          </Link>
        </div>

        <Link
          to="/shop"
          className="co-shop-link"
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "var(--brand-primary, #0c831f)",
            fontWeight: 600,
            fontSize: "1rem",
            marginTop: "1.25rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
          }}
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </Link>
      </div>
    </CheckoutShell>
  );
}

export default CheckoutConfirmation;
