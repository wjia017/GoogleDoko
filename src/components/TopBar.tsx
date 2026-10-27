import { Link } from "react-router-dom";
import { Truck, Tag, Clock, Leaf, Sparkles, HelpCircle } from "lucide-react";

const TICKER_ITEMS = [
  { icon: <Truck size={13} />, text: "Free delivery on orders above Rs. 1,500 across Nepal" },
  { icon: <Tag size={13} />, text: "Use coupon FRESHFARM for Rs. 100 OFF your first order" },
  { icon: <Leaf size={13} />, text: "100% organic & farm-fresh produce direct from local farmers" },
  { icon: <Clock size={13} />, text: "Same-day delivery in Kathmandu Valley — order before 11 AM" },
  { icon: <Sparkles size={13} />, text: "Fresh morning harvests: apples, avocados, spinach & dairy" },
  { icon: <Truck size={13} />, text: "Cash on Delivery (COD), eSewa & Khalti supported" },
  { icon: <Leaf size={13} />, text: "Supporting 200+ verified partner farms across Nepal" },
];

function TopBar() {
  return (
    <aside className="top-bar" aria-label="Announcement bar">
      <div className="top-bar-inner">
        {/* Subtle pill tag */}
        <div className="top-bar-tag">
          <Leaf size={11} className="top-bar-tag-icon" />
          <span>FARM FRESH</span>
        </div>

        {/* Smooth Scrolling Ticker */}
        <div className="top-bar-ticker-wrap">
          <div className="top-bar-ticker">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-icon">{item.icon}</span>
                <span className="ticker-text">{item.text}</span>
                <span className="ticker-dot">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Quick Links */}
        <nav className="top-bar-links" aria-label="Quick links">
          <Link to="/orders" className="top-bar-link">
            <Truck size={12} />
            <span>Track Order</span>
          </Link>
          <span className="top-bar-divider" aria-hidden="true" />
          <Link to="/support" className="top-bar-link">
            <HelpCircle size={12} />
            <span>Help &amp; Support</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default TopBar;
