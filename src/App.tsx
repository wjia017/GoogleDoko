import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";
import { WishlistProvider } from "./context/WishlistContext";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import LocalPlaces from "./pages/LocalPlaces";
import ProductDetail from "./pages/ProductDetail";
import DeliveryInfo from "./pages/DeliveryInfo";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Search from "./pages/Search";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <OrdersProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/support" element={<Support />} />
              <Route path="/delivery" element={<DeliveryInfo />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/places" element={<LocalPlaces />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/account" element={<Account />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </OrdersProvider>
    </CartProvider>
  );
}

export default App;