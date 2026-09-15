import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

function App() {
  return (
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


        {/* ================================
            CART
        ================================= */}

        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* ================================
            TEMPORARY PAGES
            Build these later
        ================================= */}

        <Route
          path="/about"
          element={
            <h1>About Us - Coming Soon</h1>
          }
        />

        <Route
          path="/wishlist"
          element={
            <h1>Wishlist - Coming Soon</h1>
          }
        />

        <Route
          path="/account"
          element={
            <h1>Account - Coming Soon</h1>
          }
        />


        {/* ================================
            404 PAGE
        ================================= */}

        <Route
          path="*"
          element={
            <div
              style={{
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h1>404</h1>
              <p>Page not found.</p>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;