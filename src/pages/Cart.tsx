import { useState } from "react";
import {
  Trash2,
  Minus,
  Plus,
  Tag,
} from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface CartItem {
  id: number;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Apple",
    weight: "1 kg",
    price: 150,
    quantity: 1,
    image: "/images/products/apple.png",
  },
  {
    id: 2,
    name: "Apple",
    weight: "1 kg",
    price: 150,
    quantity: 1,
    image: "/images/products/apple.png",
  },
  {
    id: 3,
    name: "Apple",
    weight: "1 kg",
    price: 150,
    quantity: 1,
    image: "/images/products/apple.png",
  },
  {
    id: 4,
    name: "Apple",
    weight: "1 kg",
    price: 150,
    quantity: 1,
    image: "/images/products/apple.png",
  },
];

function Cart() {
  const [cartItems, setCartItems] =
    useState<CartItem[]>(initialCartItems);

  const [paymentMethod, setPaymentMethod] =
    useState("esewa");

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (
    id: number,
    change: number
  ) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(
                  1,
                  item.quantity + change
                ),
              }
            : item
        )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 50 : 0;

  const total = subtotal + deliveryFee;

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">

          {/* Page heading */}
          <div className="cart-heading">
            <h1>Your Cart</h1>

            <p>
              {cartItems.reduce(
                (total, item) =>
                  total + item.quantity,
                0
              )}{" "}
              items in your cart
            </p>
          </div>


          {/* Main cart layout */}
          <div className="cart-layout">

            {/* =========================
                LEFT SIDE
            ========================= */}

            <section className="cart-items">

              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <h2>Your cart is empty</h2>
                  <p>
                    Add some products to your cart
                    to continue shopping.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >

                    {/* Product image */}
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>


                    {/* Product information */}
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>

                      <strong>
                        {item.weight}
                      </strong>

                      <span className="cart-item-price">
                        Rs. {item.price} /kg
                      </span>
                    </div>


                    {/* Quantity */}
                    <div className="quantity-control">

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            -1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={15} />
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={15} />
                      </button>

                    </div>


                    {/* Item total */}
                    <div className="cart-item-total">
                      Rs.{" "}
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </div>


                    {/* Delete */}
                    <button
                      type="button"
                      className="remove-cart-item"
                      onClick={() =>
                        removeItem(item.id)
                      }
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={20} />
                    </button>

                  </article>
                ))
              )}

            </section>


            {/* =========================
                RIGHT SIDE
            ========================= */}

            <aside className="cart-sidebar">

              {/* Price Details */}

              <section className="price-details">

                <h2>Price Details</h2>

                <div className="price-row">
                  <span>Sub total</span>

                  <strong>
                    Rs.{" "}
                    {subtotal.toLocaleString()}
                  </strong>
                </div>

                <div className="price-row">
                  <span>Delivery Fee</span>

                  <strong>
                    Rs. {deliveryFee}
                  </strong>
                </div>

                <div className="price-divider"></div>

                <div className="total-row">
                  <span>Total</span>

                  <strong>
                    Rs.{" "}
                    {total.toLocaleString()}
                  </strong>
                </div>


                {/* Payment method */}

                <h3 className="payment-heading">
                  Choose Payment Method
                </h3>

                <div className="payment-methods">

                  <button
                    type="button"
                    className={`payment-card ${
                      paymentMethod === "esewa"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("esewa")
                    }
                  >
                    <div className="payment-circle">
                      <span>e</span>
                    </div>

                    <strong>eSewa</strong>

                    <small>
                      Pay via eSewa
                    </small>
                  </button>


                  <button
                    type="button"
                    className={`payment-card ${
                      paymentMethod === "khalti"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("khalti")
                    }
                  >
                    <div className="payment-circle">
                      <span>k</span>
                    </div>

                    <strong>Khalti</strong>

                    <small>
                      Pay via khalti
                    </small>
                  </button>


                  <button
                    type="button"
                    className={`payment-card ${
                      paymentMethod === "bank"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("bank")
                    }
                  >
                    <div className="payment-circle">
                      <span>৳</span>
                    </div>

                    <strong>
                      Bank Transfer
                    </strong>

                    <small>
                      Pay via Bank
                    </small>
                  </button>


                  <button
                    type="button"
                    className={`payment-card ${
                      paymentMethod === "cod"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentMethod("cod")
                    }
                  >
                    <div className="payment-circle">
                      <span>Rs</span>
                    </div>

                    <strong>
                      Cash on Delivery
                    </strong>

                    <small>
                      Pay on Delivery
                    </small>
                  </button>

                </div>


                {/* Proceed button */}

                <button
                  type="button"
                  className="proceed-payment-button"
                >
                  Proceed to Payment →
                </button>

                <p className="payment-safe">
                  Your payment information is
                  safe and secure
                </p>

              </section>


              {/* Promo code */}

              <section className="promo-section">

                <h3>
                  Have a promo code? Enter code
                  and get discount
                </h3>

                <div className="promo-box">

                  <div className="promo-icon">
                    <Tag size={19} />
                  </div>

                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    value={promoCode}
                    onChange={(event) =>
                      setPromoCode(
                        event.target.value
                      )
                    }
                  />

                  <button type="button">
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