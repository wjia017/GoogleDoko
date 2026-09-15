import {
    ChevronRight,
    CalendarDays,
} from "lucide-react";

export interface Order {
    id: string;
    status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
    date: string;
    items: number;
    total: number;
    image: string;
    category: string;
    deliveryDate: string;
}

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
            <div className="order-delivery">

                <strong>{order.status}</strong>

                <span>Delivered on</span>

                <span>{order.deliveryDate}</span>

            </div>

            {/* Right side */}
            <div className="order-card-actions">

                <ChevronRight
                    size={26}
                    className="order-arrow"
                />

                <button
                    type="button"
                    className="view-details-button"
                >
                    View Details
                </button>

            </div>

        </article>
    );
}

export default OrderCard;