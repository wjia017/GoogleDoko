import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HelpCircle,
    Truck,
} from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OrderCard from "../components/OrderCard";
import SupportModal from "../components/SupportModal";

import { useOrders } from "../context/OrdersContext";
import { useCart } from "../context/CartContext";
import { useAccount } from "../context/AccountContext";
import { normalizeOrder } from "../utils/normalizeOrder";

const tabs = [
    "All Orders",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
];

function Orders() {
    const { orders: contextOrders } = useOrders();
    const { orders: accountOrders, points, isLoggedIn } = useAccount();
    const { cartItems } = useCart();
    const [activeTab, setActiveTab] = useState("All Orders");
    const [supportOpen, setSupportOpen] = useState(false);

    const mergedOrdersMap = new Map();
    for (const o of [...accountOrders, ...contextOrders]) {
        if (o && o.id && !mergedOrdersMap.has(o.id)) {
            const norm = normalizeOrder(o);
            if (norm) mergedOrdersMap.set(norm.id, norm);
        }
    }
    const orders = Array.from(mergedOrdersMap.values());

    const cartTotalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

    const filteredOrders =
        activeTab === "All Orders"
            ? orders
            : orders.filter(
                (order) => order.status.toLowerCase() === activeTab.toLowerCase() || (activeTab === "Processing" && order.status.toLowerCase() === "pending")
            );

    return (
        <>
            <TopBar />
            <Navbar />

            <main className="orders-page">

                {/* Page Header */}
                <section className="orders-header">

                    <h1>My Orders</h1>

                    <p>
                        Track and Manage all your orders
                    </p>

                </section>

                {/* Order Tabs */}
                <section className="order-tabs">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={
                                activeTab === tab
                                    ? "order-tab active"
                                    : "order-tab"
                            }
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}

                </section>

                {/* Main Orders Layout */}
                <section className="orders-layout">

                    {/* Orders List */}
                    <div className="orders-list">

                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order, index) => (
                                <OrderCard
                                    key={`${order.id}-${index}`}
                                    order={order}
                                />
                            ))
                        ) : (
                            <div className="no-orders">
                                <h3>No orders found</h3>
                                <p>
                                    You don't have any {activeTab.toLowerCase()} yet.
                                </p>
                            </div>
                        )}

                    </div>

                    {/* Sidebar */}
                    <aside className="orders-sidebar">

                        {/* Order Summary */}
                        <div className="order-summary">

                            <h2>Order Summary</h2>

                            <div className="summary-row">
                                <span>Total Orders</span>
                                <strong>{orders.length}</strong>
                            </div>

                            <div className="summary-row">
                                <span>Average Rating</span>
                                <strong>4.9</strong>
                            </div>

                            <div className="summary-row">
                                <span>Added to Cart</span>
                                <strong>{cartTotalCount}</strong>
                            </div>

                            <div className="summary-row">
                                <span>Wallet Points</span>
                                <strong>{points || (isLoggedIn ? 200 : 0)} pts</strong>
                            </div>

                        </div>

                        {/* Help Card */}
                        <div className="order-help-card">

                            <div className="help-icon">
                                <HelpCircle size={25} />
                            </div>

                            <div className="help-content">

                                <h3>Need Help?</h3>

                                <p>
                                    Track your order or contact our
                                    support team.
                                </p>

                            </div>

                            <button
                                type="button"
                                onClick={() => setSupportOpen(true)}
                            >
                                Contact Support →
                            </button>

                        </div>

                        {/* Delivery Card */}
                        <div className="delivery-card">

                            <div className="delivery-content">

                                <h3>
                                    Fast & Reliable
                                    <br />
                                    Delivery
                                </h3>

                                <p>
                                    Fresh products at your
                                    doorstep
                                </p>

                                <Link to="/delivery">
                                    Learn more
                                </Link>

                            </div>

                            <div className="delivery-icon">
                                <Truck size={55} />
                            </div>

                        </div>

                    </aside>

                </section>

            </main>

            <SupportModal
                open={supportOpen}
                onClose={() => setSupportOpen(false)}
            />

            <Footer />
        </>
    );
}

export default Orders;