import { useState } from "react";
import {
    HelpCircle,
    Truck,
} from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderCard from "../components/OrderCard";

import type { Order } from "../components/OrderCard";

const orders: Order[] = [
    {
        id: "LM20260830",
        status: "Delivered",
        date: "30 Aug 2026, 10:24 AM",
        items: 5,
        total: 560,
        image: "/images/products/apple.png",
        category: "Fruits & Vegetables",
        deliveryDate: "2 Sep 2026",
    },
    {
        id: "LM20260830",
        status: "Processing",
        date: "30 Aug 2026, 10:24 AM",
        items: 5,
        total: 560,
        image: "/images/products/apple.png",
        category: "Fruits & Vegetables",
        deliveryDate: "2 Sep 2026",
    },
    {
        id: "LM20260830",
        status: "Shipped",
        date: "30 Aug 2026, 10:24 AM",
        items: 5,
        total: 560,
        image: "/images/products/apple.png",
        category: "Fruits & Vegetables",
        deliveryDate: "2 Sep 2026",
    },
    {
        id: "LM20260830",
        status: "Delivered",
        date: "30 Aug 2026, 10:24 AM",
        items: 5,
        total: 560,
        image: "/images/products/apple.png",
        category: "Fruits & Vegetables",
        deliveryDate: "2 Sep 2026",
    },
];

const tabs = [
    "All Orders",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
];

function Orders() {
    const [activeTab, setActiveTab] = useState("All Orders");

    const filteredOrders =
        activeTab === "All Orders"
            ? orders
            : orders.filter(
                (order) => order.status === activeTab
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
                                <strong>24</strong>
                            </div>

                            <div className="summary-row">
                                <span>Average Rating</span>
                                <strong>4.8</strong>
                            </div>

                            <div className="summary-row">
                                <span>Added to Cart</span>
                                <strong>12</strong>
                            </div>

                            <div className="summary-row">
                                <span>Wallet Balance</span>
                                <strong>Rs . 320</strong>
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

                            <button type="button">
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

                                <button type="button">
                                    Learn more
                                </button>

                            </div>

                            <div className="delivery-icon">
                                <Truck size={55} />
                            </div>

                        </div>

                    </aside>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Orders;