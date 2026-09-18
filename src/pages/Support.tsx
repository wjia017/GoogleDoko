import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Support() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>CONTACT SUPPORT</span>
            <h1>We are here to help with your orders</h1>
            <p>
              Track your delivery, ask about payments, or get help
              from our support team.
            </p>
            <p>Email: support@googledoko.com</p>
            <p>Phone: +91 111-111-1111</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Support;
