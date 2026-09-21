import { useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

import AccountShell from "../../components/account/AccountShell";
import OrderStatusBadge from "../../components/account/OrderStatusBadge";
import OrderTimeline from "../../components/account/OrderTimeline";
import { useAccount } from "../../context/AccountContext";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";

function AccountOrderDetail() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { orders, showToast } = useAccount();
  const { addToCart } = useCart();
  const order = orders.find((item) => item.id === orderId);

  useEffect(() => {
    if (order && params.get("action") === "buy-again") {
      buyAgain();
      navigate(`/account/orders/${order.id}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  if (!order) {
    return (
      <AccountShell title="Order Details" backTo="/account/orders">
        <div className="account-empty">Order not found.</div>
      </AccountShell>
    );
  }

  function buyAgain() {
    if (!order) {
      return;
    }
    order.items.forEach((line) => {
      const product = products.find((item) => item.id === line.productId);
      if (product) {
        addToCart(product, line.quantity);
      }
    });
    showToast("Product added to cart");
  }

  return (
    <AccountShell title={`Order #${order.id}`} backTo="/account/orders" backLabel="Back to Orders">
      <div className="account-order-hero">
        <div>
          <p>{order.date}</p>
          <OrderStatusBadge status={order.status} />
        </div>
        {order.status === "Delivered" ? (
          <div className="account-form-actions">
            <button type="button" className="account-btn" onClick={buyAgain}>
              Buy Again
            </button>
            <Link className="account-btn ghost" to={`/account/reviews?write=${order.id}`}>
              Write Review
            </Link>
          </div>
        ) : null}
      </div>

      <h3 className="account-section-title">Track Order</h3>
      {order.status === "Cancelled" ? (
        <p className="account-note">This order was cancelled, so tracking is not available.</p>
      ) : (
        <OrderTimeline status={order.status} />
      )}

      <h3 className="account-section-title">Products</h3>
      <div className="account-product-rows">
        {order.items.map((line) => (
          <div key={`${order.id}-${line.productId}`} className="account-product-row">
            <img src={line.image} alt={line.name} />
            <div>
              <strong>{line.name}</strong>
              <p>
                {line.weight} · Qty {line.quantity}
              </p>
            </div>
            <span>Rs {(line.price * line.quantity).toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="account-summary-grid">
        <p>
          <span>Subtotal</span>
          <strong>Rs {order.subtotal.toLocaleString()}</strong>
        </p>
        <p>
          <span>Delivery fee</span>
          <strong>Rs {order.deliveryFee.toLocaleString()}</strong>
        </p>
        <p>
          <span>Discount</span>
          <strong>Rs {order.discount.toLocaleString()}</strong>
        </p>
        <p className="total">
          <span>Total</span>
          <strong>Rs {order.total.toLocaleString()}</strong>
        </p>
      </div>

      <div className="account-meta-grid">
        <p>
          <span>Payment method</span>
          {order.paymentMethod}
        </p>
        <p>
          <span>Payment status</span>
          {order.paymentStatus}
        </p>
        <p>
          <span>Recipient</span>
          {order.recipientName}
        </p>
        <p>
          <span>Phone</span>
          {order.recipientPhone}
        </p>
        <p className="wide">
          <span>Delivery address</span>
          {order.deliveryAddress}
        </p>
      </div>
    </AccountShell>
  );
}

export default AccountOrderDetail;
