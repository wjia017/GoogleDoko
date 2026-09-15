import {
  Search,
  Heart,
  UserRound,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">🌿</div>
          <span>GoogleDoko</span>
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#" className="active">
            Home
          </a>

          <a href="#" className="category-link">
            Categories
            <ChevronDown size={16} />
          </a>

          <a href="#">Orders</a>

          <a href="#" className="cart-link">
            Cart
            <ShoppingCart size={19} />
          </a>

          <a href="#">About Us</a>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products or places"
          />

          <button type="button">
            <Search size={22} />
          </button>
        </div>

        {/* User actions */}
        <div className="nav-actions">

          <button type="button" className="nav-action">
            <Heart size={23} />
            <span>Wishlist</span>
          </button>

          <button type="button" className="nav-action">
            <UserRound size={23} />
            <span>Account</span>
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;