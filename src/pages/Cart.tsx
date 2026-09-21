import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus, Tag } from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem } = useCart();
  const { beginCheckout } = useCheckout();

  const [promoCode, setPromoCode] = useState("");

  /* ========================================
       PRICE CALCULATIONS
    ======================================== */

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 50 : 0;

  const total = subtotal + deliveryFee;

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">
          {/* ========================================
              PAGE HEADING
          ======================================== */}

          <div className="cart-heading">
            <h1>Your Cart</h1>

            <p>{itemCount} items in your cart</p>
          </div>

          {/* ========================================
              MAIN LAYOUT
          ======================================== */}

          <div className="cart-layout">
            {/* ======================================
                LEFT — CART ITEMS
            ====================================== */}

            <section className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <h2>Your cart is empty</h2>

                  <p>Add some products to your cart to continue shopping.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <article className="cart-item" key={item.id}>
                    {/* PRODUCT IMAGE */}

                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>

                    {/* PRODUCT INFORMATION */}

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>

                      <strong>{item.weight}</strong>

                      <span className="cart-item-price">
                        Rs. {item.price} /kg
                      </span>
                    </div>

                    {/* QUANTITY */}

                    <div className="quantity-control">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    {/* ITEM TOTAL */}

                    <div className="cart-item-total">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </div>

                    {/* DELETE */}

                    <button
                      type="button"
                      className="remove-cart-item"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={20} />
                    </button>
                  </article>
                ))
              )}
            </section>

            {/* ======================================
                RIGHT — SIDEBAR
            ====================================== */}

            <aside className="cart-sidebar">
              {/* ====================================
                  PRICE DETAILS
              ==================================== */}

              <section className="price-details">
                <h2>Price Details</h2>

                <div className="price-row">
                  <span>Sub total</span>

                  <strong>Rs. {subtotal.toLocaleString()}</strong>
                </div>

                <div className="price-row">
                  <span>Delivery Fee</span>

                  <strong>Rs. {deliveryFee}</strong>
                </div>

                <div className="price-divider" />

                <div className="total-row">
                  <span>Total</span>

                  <strong>Rs. {total.toLocaleString()}</strong>
                </div>

                <div className="cart-payment-action">
                  <button
                    type="button"
                    className="cart-proceed-btn"
                    disabled={cartItems.length === 0}
                    onClick={() => {
                      beginCheckout(cartItems, true);
                      navigate("/checkout");
                    }}
                  >
                    Proceed to Checkout →
                  </button>

                  <p className="cart-payment-safe">
                    Your payment information is safe and secure
                  </p>
                </div>
              </section>

              {/* ====================================
                  PROMO CODE
              ==================================== */}

              <section className="promo-section">
                <h3>Have a promo code? Enter code and get discount</h3>

                <div className="promo-box">
                  <div className="promo-icon">
                    <Tag size={20} />
                  </div>

                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                  />

                  <button type="button" className="promo-apply-button">
                    Apply
                  </button>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
