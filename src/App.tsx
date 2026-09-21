import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import DocumentTitle from "./components/DocumentTitle";
import CartToast from "./components/CartToast";

import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { AccountProvider } from "./context/AccountContext";

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
import AccountProfile from "./pages/account/AccountProfile";
import AccountOrders from "./pages/account/AccountOrders";
import AccountOrderDetail from "./pages/account/AccountOrderDetail";
import AccountWishlist from "./pages/account/AccountWishlist";
import AccountAddresses from "./pages/account/AccountAddresses";
import AccountReviews from "./pages/account/AccountReviews";
import AccountRewards from "./pages/account/AccountRewards";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CheckoutDelivery from "./pages/CheckoutDelivery";
import CheckoutPayment from "./pages/CheckoutPayment";
import CheckoutReview from "./pages/CheckoutReview";
import CheckoutConfirmation from "./pages/CheckoutConfirmation";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <CartProvider>
    <OrdersProvider>
    <WishlistProvider>
    <CheckoutProvider>
    <AccountProvider>
    <BrowserRouter>
      <ScrollToTop />
      <DocumentTitle />
      <CartToast />
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
          path="/orders/:id/track"
          element={<OrderTracking />}
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

        <Route
          path="/checkout"
          element={<CheckoutDelivery />}
        />

        <Route
          path="/checkout/payment"
          element={<CheckoutPayment />}
        />

        <Route
          path="/checkout/review"
          element={<CheckoutReview />}
        />

        <Route
          path="/checkout/confirmation"
          element={<CheckoutConfirmation />}
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
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/profile"
          element={
            <ProtectedRoute>
              <AccountProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/orders"
          element={
            <ProtectedRoute>
              <AccountOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/orders/:orderId"
          element={
            <ProtectedRoute>
              <AccountOrderDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/wishlist"
          element={
            <ProtectedRoute>
              <AccountWishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/addresses"
          element={
            <ProtectedRoute>
              <AccountAddresses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/reviews"
          element={
            <ProtectedRoute>
              <AccountReviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/rewards"
          element={
            <ProtectedRoute>
              <AccountRewards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login />}
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
    </AccountProvider>
    </CheckoutProvider>
    </WishlistProvider>
    </OrdersProvider>
    </CartProvider>
  );
}

export default App;