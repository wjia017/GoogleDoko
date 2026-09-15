import {
  Search,
  Heart,
  UserRound,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">🌿</div>
          <span>GoogleDoko</span>
        </Link>


        {/* Navigation Links */}
        <div className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className="category-link"
          >
            Categories
            <ChevronDown size={16} />
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/cart"
            className="cart-link"
          >
            Cart
            <ShoppingCart size={19} />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About Us
          </NavLink>

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


        {/* Actions */}
        <div className="nav-actions">

          <button
            type="button"
            className="nav-action"
          >
            <Heart size={23} />
            <span>Wishlist</span>
          </button>

          <button
            type="button"
            className="nav-action"
          >
            <UserRound size={23} />
            <span>Account</span>
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;