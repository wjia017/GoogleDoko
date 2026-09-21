import type { AccountOrderStatus } from "../../data/mockOrders";

function OrderStatusBadge({ status }: { status: AccountOrderStatus }) {
  const slug = status.toLowerCase().replace(/\s+/g, "-");
  return <span className={`account-status-badge ${slug}`}>{status}</span>;
}

export default OrderStatusBadge;
