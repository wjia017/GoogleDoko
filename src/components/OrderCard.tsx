import {
    ChevronRight,
    CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Order } from "../data/orders";

interface OrderCardProps {
    order: Order;
}

function OrderCard({ order }: OrderCardProps) {
    return (
        <article className="order-card">

            {/* Left side */}
            <div className="order-main">

                <div className={`order-status ${order.status.toLowerCase()}`}>
                    {order.status}
                </div>

                <div className="order-content">

                    <img
                        src={order.image}
                        alt={order.category}
                        className="order-image"
                    />

                    <div className="order-information">

                        <span className="order-id">
                            Order # {order.id}
                        </span>

                        <h3>{order.category}</h3>

                        <p className="order-items">
                            {order.items} items&nbsp; . &nbsp;Rs {order.total}
                        </p>

                        <div className="order-date">
                            <CalendarDays size={16} />
                            <span>{order.date}</span>
                        </div>

                    </div>

                </div>
            </div>

            {/* Middle */}
            <div className={`order-delivery ${order.status.toLowerCase()}`}>

                <strong>{order.status}</strong>

                <span>
                    {order.status === "Delivered"
                        ? "Delivered on"
                        : "Est Delivered on"}
                </span>

                <span>{order.deliveryDate}</span>

            </div>

            {/* Right side */}
            <div className="order-card-actions">

                <Link
                    to={`/orders/${order.id}`}
                    className="order-arrow"
                    aria-label={`View order ${order.id} details`}
                >
                    <ChevronRight size={26} />
                </Link>

                <Link
                    to={`/orders/${order.id}`}
                    className="view-details-button"
                >
                    View Details
                </Link>

            </div>

        </article>
    );
}

export default OrderCard;
