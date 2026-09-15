import {
  Search,
  Heart,
  UserRound,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ================================
            LOGO
        ================================= */}

        <Link to="/" className="logo">
          <div className="logo-icon">🌿</div>
          <span>GoogleDoko</span>
        </Link>


        {/* ================================
            NAVIGATION
        ================================= */}

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
            className={({ isActive }) =>
              `category-link ${isActive ? "active" : ""}`
            }
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
            className={({ isActive }) =>
              `cart-link ${isActive ? "active" : ""}`
            }
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


        {/* ================================
            SEARCH
        ================================= */}

        <div className="search-container">

          <input
            type="text"
            placeholder="Search products or places"
          />

          <button type="button" aria-label="Search">
            <Search size={22} />
          </button>

        </div>


        {/* ================================
            ACTIONS
        ================================= */}

        <div className="nav-actions">

          <Link
            to="/wishlist"
            className="nav-action"
          >
            <Heart size={23} />
            <span>Wishlist</span>
          </Link>


          <Link
            to="/account"
            className="nav-action"
          >
            <UserRound size={23} />
            <span>Account</span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;