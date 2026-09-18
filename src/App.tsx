import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";
import { WishlistProvider } from "./context/WishlistContext";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import LocalPlaces from "./pages/LocalPlaces";
import ProductDetail from "./pages/ProductDetail";
import OrderDetail from "./pages/OrderDetail";
import Support from "./pages/Support";
import DeliveryInfo from "./pages/DeliveryInfo";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
    <OrdersProvider>
    <WishlistProvider>
    <BrowserRouter>
      <Routes>

        {/* ================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================================
            CATEGORIES
        ================================= */}

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />


        {/* ================================
            ORDERS
        ================================= */}

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/orders/:id"
          element={<OrderDetail />}
        />

        <Route
          path="/support"
          element={<Support />}
        />

        <Route
          path="/delivery"
          element={<DeliveryInfo />}
        />


        {/* ================================
            CART
        ================================= */}

        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* ================================
            SHOP
        ================================= */}

        <Route
          path="/shop"
          element={<Shop />}
        />


        {/* ================================
            LOCAL PLACES
        ================================= */}

        <Route
          path="/places"
          element={<LocalPlaces />}
        />


        {/* ================================
            PRODUCT DESCRIPTION
        ================================= */}

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />


        {/* ================================
            ABOUT / WISHLIST / ACCOUNT
        ================================= */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/account"
          element={<Account />}
        />

        <Route
          path="/search"
          element={<Search />}
        />


        {/* ================================
            404 PAGE
        ================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
    </WishlistProvider>
    </OrdersProvider>
    </CartProvider>
  );
}

export default App;