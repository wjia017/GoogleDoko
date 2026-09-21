import { Link, useSearchParams } from "react-router-dom";

import AccountShell from "../../components/account/AccountShell";
import OrderStatusBadge from "../../components/account/OrderStatusBadge";
import {
  accountOrderFilters,
  queryToStatus,
  statusToQuery,
} from "../../data/mockOrders";
import { useAccount } from "../../context/AccountContext";

function AccountOrders() {
  const { orders } = useAccount();
  const [params, setParams] = useSearchParams();
  const active = queryToStatus(params.get("status"));

  const visible =
    active === "All"
      ? orders
      : orders.filter((order) => order.status === active);

  return (
    <AccountShell title="My Orders">
      <div className="account-filter-row">
        {accountOrderFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={active === filter ? "account-chip active" : "account-chip"}
            onClick={() => {
              if (filter === "All") {
                setParams({});
              } else {
                setParams({ status: statusToQuery(filter) });
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="account-empty">No orders in this status yet.</div>
      ) : (
        <div className="account-order-list">
          {visible.map((order) => (
            <article key={order.id} className="account-order-card">
              <div>
                <h3>Order #{order.id}</h3>
                <p>{order.date}</p>
                <OrderStatusBadge status={order.status} />
              </div>
              <div className="account-order-card-side">
                <strong>Rs {order.total.toLocaleString()}</strong>
                <Link to={`/account/orders/${order.id}`}>View Details</Link>
                {order.status === "Delivered" ? (
                  <>
                    <Link to={`/account/orders/${order.id}?action=buy-again`}>
                      Buy Again
                    </Link>
                    <Link to={`/account/reviews?write=${order.id}`}>
                      Write Review
                    </Link>
                  </>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </AccountShell>
  );
}

export default AccountOrders;
