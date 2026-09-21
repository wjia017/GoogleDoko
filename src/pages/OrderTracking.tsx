import { Link, useNavigate, useParams } from "react-router-dom";
import { Check } from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportModal from "../components/SupportModal";
import { useOrders } from "../context/OrdersContext";
import { useState } from "react";

const trackSteps = [
  "Order Placed",
  "Order Confirmed",
  "Preparing",
  "Ready for Pickup",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function currentTrackIndex(status: string) {
  if (status === "Delivered") return 6;
  if (status === "Shipped") return 4;
  if (status === "Processing") return 2;
  return 0;
}

function OrderTracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders } = useOrders();
  const [supportOpen, setSupportOpen] = useState(false);
  const order = orders.find((item) => item.id === id);

  if (!order) {
    return (
      <>
        <TopBar />
        <Navbar />
        <main className="checkout-page">
          <div className="checkout-wrap">
            <h1>Order not found</h1>
            <Link to="/orders">Back to orders</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const active = currentTrackIndex(order.status);
  const vendors = order.products.reduce<
    { seller: string; names: string; status: string }[]
  >((list, item, index) => {
    const seller = item.seller ?? "Local Seller";
    const existing = list.find((entry) => entry.seller === seller);
    const status =
      order.status === "Delivered"
        ? "Delivered"
        : order.status === "Shipped" && index === 0
          ? "Shipped"
          : "Preparing";

    if (existing) {
      existing.names += `, ${item.name} (${item.quantity})`;
      return list;
    }

    list.push({
      seller,
      names: `${item.name} (${item.quantity} ${item.unit ?? ""})`.trim(),
      status,
    });
    return list;
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="checkout-page">
        <div className="checkout-wrap">
          <div className="track-head">
            <div>
              <h1>Order Tracking</h1>
              <p>
                Order ID: <strong>{order.id}</strong>
              </p>
            </div>
            <button
              type="button"
              className="co-ghost"
              onClick={() => setSupportOpen(true)}
            >
              Contact Support
            </button>
          </div>

          <div className="track-layout">
            <section className="co-form-card">
              <h2>Shipment Progress</h2>
              <ol className="track-timeline">
                {trackSteps.map((step, index) => {
                  const complete = index < active;
                  const current = index === active;

                  return (
                    <li
                      key={step}
                      className={`${complete ? "complete" : ""} ${current ? "current" : ""}`}
                    >
                      <span className="track-dot">
                        {complete || current ? <Check size={12} /> : null}
                      </span>
                      <div>
                        <strong>{step}</strong>
                        <small>
                          {complete
                            ? order.date
                            : current
                              ? "In Progress"
                              : "Upcoming"}
                        </small>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            <aside className="track-side">
              <section className="co-form-card">
                <h2>Vendor Package Breakdown</h2>
                {vendors.map((vendor) => (
                  <div className="track-vendor" key={vendor.seller}>
                    <div>
                      <strong>{vendor.seller}</strong>
                      <small>{vendor.names}</small>
                    </div>
                    <span className={`track-pill ${vendor.status.toLowerCase()}`}>
                      {vendor.status}
                    </span>
                  </div>
                ))}
              </section>

              <section className="co-form-card">
                <h2>Delivery Address</h2>
                <strong>
                  {order.recipientName ?? "Lahana Lawaju"}
                </strong>
                <p>{order.deliveryAddress ?? "Kathmandu, Nepal"}</p>
                {order.recipientPhone && <p>Contact: {order.recipientPhone}</p>}
                <button
                  type="button"
                  className="co-shop-link"
                  onClick={() => navigate(`/orders/${order.id}`)}
                >
                  View order details
                </button>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <SupportModal open={supportOpen} onClose={() => setSupportOpen(false)} />
      <Footer />
    </>
  );
}

export default OrderTracking;
