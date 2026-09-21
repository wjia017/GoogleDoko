import { Check } from "lucide-react";

import type { AccountOrderStatus } from "../../data/mockOrders";

const steps = [
  "Order Placed",
  "Order Confirmed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
] as const;

function statusIndex(status: AccountOrderStatus) {
  if (status === "Cancelled") {
    return -1;
  }
  if (status === "Pending") {
    return 0;
  }
  return steps.findIndex((step) => step === status);
}

function OrderTimeline({ status }: { status: AccountOrderStatus }) {
  const current = statusIndex(status);

  return (
    <ol className="account-timeline">
      {steps.map((step, index) => {
        const state =
          current < 0
            ? "upcoming"
            : index < current
              ? "completed"
              : index === current
                ? "current"
                : "upcoming";

        return (
          <li key={step} className={`account-timeline-step ${state}`}>
            <span className="account-timeline-dot">
              {state === "completed" ? <Check size={14} /> : index + 1}
            </span>
            <span>{step}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default OrderTimeline;
