import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import CheckoutShell from "../components/CheckoutShell";
import { paymentLabels, useCheckout } from "../context/CheckoutContext";
import { useOrders } from "../context/OrdersContext";
import { useCart } from "../context/CartContext";

function CheckoutReview() {
  const navigate = useNavigate();
  const {
    items,
    form,
    paymentMethod,
    fromCart,
    setLastOrderId,
  } = useCheckout();
  const { placeCheckoutOrder } = useOrders();
  const { clearCart } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = items.length > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  const grouped = items.reduce<Record<string, typeof items>>((groups, item) => {
    const key = item.seller || "Local Seller";
    groups[key] = groups[key] ? [...groups[key], item] : [item];
    return groups;
  }, {});

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [items.length, navigate]);

  function placeOrder() {
    const address = [
      form.street,
      form.area,
      form.landmark ? `Landmark: ${form.landmark}` : "",
      form.district,
      form.province,
    ]
      .filter(Boolean)
      .join(", ");

    const order = placeCheckoutOrder({
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
        origin: item.origin,
        seller: item.seller,
        unit: item.weight,
      })),
      recipientName: form.fullName,
      recipientPhone: form.phone,
      deliveryAddress: address,
      paymentMethod: paymentLabels[paymentMethod],
      total,
    });

    setLastOrderId(order.id);
    if (fromCart) {
      clearCart();
    }
    navigate("/checkout/confirmation");
  }

  return (
    <CheckoutShell step={3}>
      <div className="checkout-layout">
        <div className="co-main">
          <h1>Review Your Order</h1>

          <section className="co-form-card">
            <div className="co-card-head">
              <h2>Products in Order</h2>
              <Link to="/cart">Edit</Link>
            </div>

            {Object.entries(grouped).map(([seller, sellerItems]) => (
              <div className="co-review-store" key={seller}>
                <p className="co-store-label">
                  Store: {seller}
                  {sellerItems[0]?.origin ? ` – ${sellerItems[0].origin}` : ""}
                </p>
                {sellerItems.map((item) => (
                  <div className="co-review-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <small>
                        {item.quantity} {item.weight.replace(/^\d+\s*/, "") || "kg"}
                      </small>
                    </div>
                    <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section className="co-form-card">
            <div className="co-card-head">
              <h2>Delivery Address</h2>
              <Link to="/checkout">Edit</Link>
            </div>
            <p className="co-review-title">
              {form.addressType} Address ({form.district})
            </p>
            <p>
              {form.street}, {form.area}
              {form.landmark ? `, Landmark: ${form.landmark}` : ""}, {form.district},{" "}
              {form.province}
            </p>
            <p>
              <strong>Recipient Phone:</strong> {form.phone}
            </p>
          </section>

          <section className="co-form-card">
            <div className="co-card-head">
              <h2>Payment Method</h2>
              <Link to="/checkout/payment">Edit</Link>
            </div>
            <p className="co-review-title">{paymentLabels[paymentMethod]}</p>
            <p>
              {paymentMethod === "cod"
                ? `You will pay Rs. ${total.toLocaleString()} in local Nepalese rupees when our deliverer safely hands over the items.`
                : `You will complete ${paymentLabels[paymentMethod]} for Rs. ${total.toLocaleString()}.`}
            </p>
          </section>
        </div>

        <aside className="co-summary">
          <h2>Order Summary</h2>
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
          <button type="button" className="co-continue" onClick={placeOrder}>
            Place Order
            <span>→</span>
          </button>
        </aside>
      </div>
    </CheckoutShell>
  );
}

export default CheckoutReview;
