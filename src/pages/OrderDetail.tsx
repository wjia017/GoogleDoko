import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Banknote,
  CalendarDays,
  Check,
  Download,
  MapPin,
  RotateCcw,
  Truck,
  UserRound,
} from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { products } from "../data/products";
import type { Order } from "../data/orders";
import { useOrders } from "../context/OrdersContext";
import { useCart } from "../context/CartContext";

const trackerSteps = [
  "Ordered",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
] as const;

function statusIndex(status: Order["status"]) {
  if (status === "Delivered") return 4;
  if (status === "Shipped") return 3;
  if (status === "Processing") return 2;
  return 0;
}

function dateOnly(value: string) {
  return value.split(",")[0].trim();
}

function addDaysLabel(value: string, days: number) {
  const parsed = new Date(dateOnly(value));

  if (Number.isNaN(parsed.getTime())) {
    return dateOnly(value);
  }

  parsed.setDate(parsed.getDate() + days);

  return parsed.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function enrichItem(item: Order["products"][number]) {
  const catalog = products.find((product) => product.name === item.name);

  return {
    ...item,
    origin: item.origin ?? catalog?.origin ?? "Nepal",
    seller: item.seller ?? catalog?.seller ?? "Local Seller",
    unit: item.unit ?? catalog?.weight ?? "1 kg",
    image: item.image || catalog?.image || "",
    productId: catalog?.id,
  };
}

function trackerDates(order: Order) {
  const ordered = dateOnly(order.date);

  return {
    Ordered: ordered,
    Confirmed: ordered,
    Processing: ordered,
    Shipped:
      order.status === "Shipped" || order.status === "Delivered"
        ? addDaysLabel(order.date, 1)
        : "",
    Delivered: order.status === "Delivered" ? order.deliveryDate : "",
  };
}

function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders } = useOrders();
  const { addToCart } = useCart();
  const order = orders.find((item) => item.id === id);

  if (!order) {
    return (
      <>
        <TopBar />
        <Navbar />
        <main className="order-detail-page">
          <div className="order-detail-missing">
            <h1>Order not found</h1>
            <p>This order is not available right now.</p>
            <Link to="/orders">Back to orders</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const items = order.products.map(enrichItem);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 50;
  const rawTotal = subtotal + deliveryFee;
  const discount = Math.max(0, rawTotal - order.total);
  const total = order.total;
  const currentStep = statusIndex(order.status);
  const dates = trackerDates(order);
  const paid = order.status === "Delivered";

  function reorder() {
    items.forEach((item) => {
      const catalog = products.find((product) => product.name === item.name);

      if (catalog) {
        addToCart(catalog, item.quantity);
      }
    });

    navigate("/cart");
  }

  function downloadInvoice() {
    const lines = [
      "GoogleDoko Invoice",
      `Order #${order.id}`,
      `Placed on ${order.date}`,
      `Status: ${order.status}`,
      "",
      "Items:",
      ...items.map(
        (item) =>
          `- ${item.name} (${item.origin}) x${item.quantity} @ Rs ${item.price} = Rs ${item.price * item.quantity}`,
      ),
      "",
      `Subtotal: Rs ${subtotal}`,
      `Delivery Fee: Rs ${deliveryFee}`,
      `Discount: Rs ${discount}`,
      `Total: Rs ${total}`,
      "",
      "Payment Method: Cash on Delivery",
      `Payment Status: ${paid ? "Paid" : "Pending"}`,
      "Delivery: Standard Delivery",
      "Address: Lahana Lawaju, Kathmandu, Nepal",
    ].join("\n");

    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `GoogleDoko-Invoice-${order.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="order-detail-page">
        <div className="order-detail-wrap">
          <nav className="product-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/orders">Orders</Link>
            <span>/</span>
            <strong>Order #{order.id}</strong>
          </nav>

          <section className="od-header">
            <Link to="/orders" className="od-back">
              <ArrowLeft size={18} />
              Back to Orders
            </Link>

            <div className="od-header-row">
              <div>
                <h1>Order #{order.id}</h1>
                <p>
                  <CalendarDays size={16} />
                  Placed on {order.date}
                </p>
              </div>

              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
          </section>

          <section className="od-card od-tracker">
            <div className="od-tracker-row">
              {trackerSteps.map((step, index) => {
                const complete = currentStep >= index && order.status !== "Cancelled";
                const current =
                  currentStep === index &&
                  order.status !== "Cancelled" &&
                  order.status !== "Delivered";

                return (
                  <div
                    className={`od-step ${complete ? "complete" : ""} ${current ? "current" : ""}`}
                    key={step}
                  >
                    {index > 0 && <span className="od-step-line" />}
                    <span className="od-step-dot">
                      {complete ? <Check size={14} /> : index + 1}
                    </span>
                    <strong>{step}</strong>
                    <small>
                      {dates[step] || (complete ? dateOnly(order.date) : "Pending")}
                    </small>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="od-layout">
            <div className="od-card od-items">
              <h2>Ordered Items</h2>

              {items.map((item) => (
                <article className="od-item" key={`${item.name}-${item.origin}`}>
                  <img src={item.image} alt={item.name} />

                  <div className="od-item-info">
                    <h3>{item.name}</h3>
                    <p>
                      <MapPin size={14} />
                      Origin: {item.origin}
                    </p>
                    <p>
                      <UserRound size={14} />
                      Seller: {item.seller}
                    </p>
                    <span>
                      {item.quantity} × Rs. {item.price}/{item.unit.replace(/^\d+\s*/, "") || "kg"}
                    </span>
                  </div>

                  <div className="od-item-total">
                    <small>Subtotal</small>
                    <strong>Rs. {(item.price * item.quantity).toLocaleString()}</strong>
                  </div>
                </article>
              ))}
            </div>

            <aside className="od-sidebar">
              <section className="od-card">
                <h2>Delivery Information</h2>

                <div className="od-info-row">
                  <MapPin size={20} />
                  <div>
                    <span>Delivery address</span>
                    <strong>Lahana Lawaju</strong>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="od-info-row">
                  <CalendarDays size={20} />
                  <div>
                    <span>Delivery date</span>
                    <strong>{order.deliveryDate}</strong>
                  </div>
                </div>

                <div className="od-info-row">
                  <Truck size={20} />
                  <div>
                    <span>Delivery method</span>
                    <strong>Standard Delivery</strong>
                  </div>
                </div>
              </section>

              <section className="price-details od-card od-price">
                <h2>Price Details</h2>

                <div className="price-row">
                  <span>Subtotal</span>
                  <strong>Rs. {subtotal.toLocaleString()}</strong>
                </div>

                <div className="price-row">
                  <span>Delivery Fee</span>
                  <strong>Rs. {deliveryFee}</strong>
                </div>

                <div className="price-row">
                  <span>Discount</span>
                  <strong>Rs. {discount}</strong>
                </div>

                <div className="price-divider" />

                <div className="total-row">
                  <span>Total</span>
                  <strong>Rs. {total.toLocaleString()}</strong>
                </div>
              </section>

              <section className="od-card od-payment">
                <h2>Payment Information</h2>

                <div className="od-info-row">
                  <Banknote size={20} />
                  <div>
                    <span>Payment Method</span>
                    <strong>Cash on Delivery</strong>
                  </div>
                </div>

                <div className="od-info-row">
                  <Check size={20} />
                  <div>
                    <span>Payment Status</span>
                    <strong className={paid ? "paid" : "pending"}>
                      {paid ? "Paid" : "Pending"}
                    </strong>
                  </div>
                </div>
              </section>
            </aside>
          </section>

          <div className="od-actions">
            <button type="button" className="od-action-secondary" onClick={downloadInvoice}>
              <Download size={18} />
              Download Invoice
            </button>
            <button type="button" className="od-action-primary" onClick={reorder}>
              <RotateCcw size={18} />
              Reorder
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default OrderDetail;
