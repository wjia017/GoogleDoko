import { Link, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  Bike,
  ChevronRight,
  ClipboardList,
  Gift,
  Heart,
  HelpCircle,
  LogOut,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Truck,
  UserRound,
} from "lucide-react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useOrders } from "../context/OrdersContext";

function countByStatus(
  orders: { status: string }[],
  status: string,
) {
  return orders.filter((order) => order.status === status).length;
}

function Account() {
  const navigate = useNavigate();
  const { orders } = useOrders();

  const pending = countByStatus(orders, "Pending");
  const processing = countByStatus(orders, "Processing");
  const shipped = countByStatus(orders, "Shipped");
  const outForDelivery = countByStatus(orders, "Out for Delivery");
  const delivered = countByStatus(orders, "Delivered");

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="profile-page">
        <div className="profile-page-inner">
          <h1>Your profile</h1>

          <section className="profile-shell">
            <div className="profile-hero">
              <div className="profile-avatar" aria-hidden="true" />

              <div>
                <h2>Lahana Lawaju</h2>
                <p>
                  <MapPin size={16} />
                  Kathmandu, Nepal
                </p>
                <span className="profile-verified">
                  <BadgeCheck size={14} />
                  Verified Customer
                </span>
              </div>
            </div>

            <div className="profile-stats">
              <Link to="/orders" className="profile-stat">
                <ShoppingBag size={22} />
                <strong>24</strong>
                <span>Total Orders</span>
                <em>View all &gt;</em>
              </Link>

              <Link to="/wishlist" className="profile-stat">
                <Heart size={22} />
                <strong>12</strong>
                <span>Wishlist</span>
                <em>View all &gt;</em>
              </Link>

              <Link to="/account" className="profile-stat">
                <MapPin size={22} />
                <strong className="profile-stat-label">Address</strong>
                <em>Manage &gt;</em>
              </Link>

              <Link to="/account" className="profile-stat">
                <ClipboardList size={22} />
                <strong>Rs 320</strong>
                <span>Reward Points</span>
                <em>Redeem &gt;</em>
              </Link>
            </div>

            <div className="profile-columns">
              <div className="profile-column">
                <article className="profile-panel">
                  <div className="profile-panel-head">
                    <h3>My Orders</h3>
                    <Link to="/orders">
                      View All Orders
                      <ChevronRight size={16} />
                    </Link>
                  </div>

                  <div className="profile-order-status">
                    <div>
                      <span className="profile-status-icon">
                        <ShoppingBag size={20} />
                        {pending > 0 ? <b>{pending}</b> : <b>2</b>}
                      </span>
                      <small>Pending</small>
                    </div>
                    <div>
                      <span className="profile-status-icon">
                        <ShoppingBag size={20} />
                        {processing > 0 ? <b>{processing}</b> : <b>3</b>}
                      </span>
                      <small>Processing</small>
                    </div>
                    <div>
                      <span className="profile-status-icon">
                        <Truck size={20} />
                        {shipped > 0 ? <b>{shipped}</b> : <b>1</b>}
                      </span>
                      <small>Shipped</small>
                    </div>
                    <div>
                      <span className="profile-status-icon peach">
                        <Bike size={20} />
                        {outForDelivery > 0 ? <b>{outForDelivery}</b> : <b>1</b>}
                      </span>
                      <small>Out for Delivery</small>
                    </div>
                    <div>
                      <span className="profile-status-icon">
                        <PackageCheck size={20} />
                        {delivered > 0 ? <b>{delivered}</b> : <b>2</b>}
                      </span>
                      <small>Delivered</small>
                    </div>
                  </div>
                </article>

                <article className="profile-panel profile-menu">
                  <Link to="/account" className="profile-menu-row">
                    <span className="profile-menu-icon mint">
                      <UserRound size={18} />
                    </span>
                    <span>
                      <strong>Personal Information</strong>
                      <small>Manage your name,email and phone number</small>
                    </span>
                    <ChevronRight size={18} />
                  </Link>

                  <Link to="/account" className="profile-menu-row">
                    <span className="profile-menu-icon peach">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <strong>Addresses</strong>
                      <small>Manage your delivery addresses</small>
                    </span>
                    <ChevronRight size={18} />
                  </Link>

                  <Link to="/account" className="profile-menu-row">
                    <span className="profile-menu-icon mint">
                      <ClipboardList size={18} />
                    </span>
                    <span>
                      <strong>My Reviews</strong>
                      <small>See you review and setting</small>
                    </span>
                    <ChevronRight size={18} />
                  </Link>

                  <Link to="/about" className="profile-menu-row">
                    <span className="profile-menu-icon peach">
                      <HelpCircle size={18} />
                    </span>
                    <span>
                      <strong>About Us</strong>
                      <small>Learn more about our mission</small>
                    </span>
                    <ChevronRight size={18} />
                  </Link>

                  <button
                    type="button"
                    className="profile-menu-row"
                    onClick={() => navigate("/")}
                  >
                    <span className="profile-menu-icon mint">
                      <LogOut size={18} />
                    </span>
                    <span>
                      <strong>Log Out</strong>
                      <small>Log out of all sessions</small>
                    </span>
                    <ChevronRight size={18} />
                  </button>
                </article>
              </div>

              <div className="profile-column">
                <article className="profile-panel profile-settings">
                  <h3>Account Settings</h3>

                  <button type="button" className="profile-menu-row">
                    <span className="profile-settings-dot" />
                    Change Password
                    <ChevronRight size={18} />
                  </button>
                  <button type="button" className="profile-menu-row">
                    <span className="profile-settings-dot" />
                    Notification Settings
                    <ChevronRight size={18} />
                  </button>
                  <button type="button" className="profile-menu-row">
                    <span className="profile-settings-dot" />
                    Language
                    <ChevronRight size={18} />
                  </button>
                  <button type="button" className="profile-menu-row">
                    <span className="profile-settings-dot" />
                    Dark Mode
                    <ChevronRight size={18} />
                  </button>
                </article>

                <article className="profile-invite">
                  <div>
                    <h3>Invite Friends and get rewards</h3>
                    <p>Invite friends and earn rewards points</p>
                    <button type="button">Invite Now</button>
                  </div>
                  <Gift size={72} strokeWidth={1.4} />
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Account;
