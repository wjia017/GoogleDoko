import {
  Search,
  Heart,
  UserRound,
  ShoppingCart,
  ChevronDown,
  MapPin,
} from "lucide-react";

import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { searchPlaces, searchProducts } from "../data/search";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import LogoMark from "./LogoMark";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const searchWrapRef = useRef<HTMLFormElement>(null);

  const categoriesActive =
    location.pathname.startsWith("/categories") ||
    location.pathname === "/places";

  useEffect(() => {
    if (location.pathname === "/search") {
      setQuery(searchParams.get("q") ?? "");
    }
  }, [location.pathname, searchParams]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(event.target as Node)
      ) {
        setSuggestionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productSuggestions = useMemo(
    () => searchProducts(query).slice(0, 5),
    [query],
  );
  const placeSuggestions = useMemo(
    () => searchPlaces(query).slice(0, 4),
    [query],
  );
  const showSuggestions =
    suggestionsOpen &&
    query.trim().length > 0 &&
    (productSuggestions.length > 0 || placeSuggestions.length > 0);

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    const trimmed = query.trim();

    if (!trimmed) {
      return;
    }

    setSuggestionsOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ================================
            LOGO
        ================================= */}

        <Link to="/" className="logo">
          <LogoMark className="logo-icon" decorative />
          <span>GoogleDoko</span>
        </Link>


        {/* ================================
            NAVIGATION
        ================================= */}

        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>


          <div
            className={`nav-dropdown ${categoriesOpen ? "open" : ""}`}
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              className={`category-link ${categoriesActive ? "active" : ""}`}
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
              onClick={() => setCategoriesOpen((open) => !open)}
            >
              Categories
              <ChevronDown size={16} />
            </button>

            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-panel">
                <NavLink
                  to="/places"
                  onClick={() => setCategoriesOpen(false)}
                >
                  Categories by place
                </NavLink>
                <NavLink
                  to="/categories"
                  onClick={() => setCategoriesOpen(false)}
                >
                  Categories by product
                </NavLink>
              </div>
            </div>
          </div>


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
            aria-label={
              cartCount > 0
                ? `Cart, ${cartCount} ${cartCount === 1 ? "product" : "products"}`
                : "Cart"
            }
          >
            Cart
            <span className="nav-action-icon">
              <ShoppingCart size={19} />
              {cartCount > 0 && (
                <span className="nav-count-badge">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </span>
          </NavLink>


        </div>


        {/* ================================
            SEARCH
        ================================= */}

        <form
          className="search-wrap"
          ref={searchWrapRef}
          onSubmit={submitSearch}
          role="search"
        >
          <div className="search-container">
            <input
              type="search"
              value={query}
              placeholder="Search products or places"
              aria-label="Search products or places"
              autoComplete="off"
              onChange={(event) => {
                setQuery(event.target.value);
                setSuggestionsOpen(true);
              }}
              onFocus={() => setSuggestionsOpen(true)}
            />

            <button type="submit" aria-label="Search">
              <Search size={22} />
            </button>
          </div>

          {showSuggestions && (
            <div className="search-suggestions">
              {placeSuggestions.length > 0 && (
                <div className="search-suggestion-group">
                  <p>Places</p>
                  {placeSuggestions.map((place) => (
                    <Link
                      key={place.origin}
                      to={`/categories?place=${encodeURIComponent(place.origin)}`}
                      onClick={() => setSuggestionsOpen(false)}
                    >
                      <MapPin size={16} />
                      <span>
                        {place.name}
                        <small>{place.origin}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {productSuggestions.length > 0 && (
                <div className="search-suggestion-group">
                  <p>Products</p>
                  {productSuggestions.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => setSuggestionsOpen(false)}
                    >
                      <img src={product.image} alt="" />
                      <span>
                        {product.name}
                        <small>{product.origin}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </form>


        {/* ================================
            ACTIONS
        ================================= */}

        <div className="nav-actions">

          <Link
            to="/wishlist"
            className={`nav-action ${location.pathname === "/wishlist" ? "active" : ""}`}
            aria-label={
              wishlistCount > 0
                ? `Wishlist, ${wishlistCount} saved ${wishlistCount === 1 ? "product" : "products"}`
                : "Wishlist"
            }
          >
            <span className="nav-action-icon">
              <Heart size={23} />
              {wishlistCount > 0 && (
                <span className="nav-count-badge">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </span>
            <span>Wishlist</span>
          </Link>


          <Link
            to="/account"
            className={`nav-action ${location.pathname === "/account" ? "active" : ""}`}
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
