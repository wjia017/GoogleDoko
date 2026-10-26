import { Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function NotFound() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>404</span>
            <h1>Page not found</h1>
            <p>This page is not available. Go back home or browse products.</p>
            <p>
              <Link to="/">Home</Link>
              {" · "}
              <Link to="/shop">Shop</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
