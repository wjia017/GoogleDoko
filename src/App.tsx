import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Profile from "./pages/profile";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/account"
          element={<Profile />}
        />

        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />

        <Route
          path="/wishlist"
          element={
            <h1>Wishlist - Coming Soon</h1>
          }
        />

        <Route
          path="/about"
          element={
            <h1>About Us - Coming Soon</h1>
          }
        />

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