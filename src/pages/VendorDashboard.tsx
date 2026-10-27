import { Clock3, LayoutDashboard, Package } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAccount } from "../context/AccountContext";

function VendorDashboard() {
  const { isLoggedIn, user } = useAccount();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: "/vendor" }} />;
  }

  if (user.role !== "vendor") {
    return <Navigate to="/account" replace />;
  }

  const status = user.vendor?.status ?? "under_review";

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="profile-page">
        <div className="profile-page-inner vendor-dash">
          <h1>Vendor dashboard</h1>
          <section className="profile-shell">
            <div className="vendor-dash-head">
              <LayoutDashboard size={22} />
              <div>
                <h2>{user.vendor?.businessName || `${user.firstName}'s shop`}</h2>
                <p>
                  {user.vendor?.location || user.location} ·{" "}
                  {user.vendor?.vendorType || "Vendor"}
                </p>
              </div>
            </div>

            {status === "under_review" ? (
              <div className="vendor-review-banner">
                <Clock3 size={20} />
                <div>
                  <strong>Verification under review</strong>
                  <p>
                    You can browse the marketplace while we review your vendor
                    information. Product listing will be available after
                    verification.
                  </p>
                </div>
              </div>
            ) : (
              <div className="vendor-review-banner ready">
                <Package size={20} />
                <div>
                  <strong>Your shop is ready</strong>
                  <p>Add products, prices and stock from this dashboard.</p>
                </div>
              </div>
            )}

            <div className="vendor-dash-actions">
              <Link to="/" className="account-btn">
                Back to Home
              </Link>
              <Link to="/account" className="account-btn ghost">
                Account
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VendorDashboard;
