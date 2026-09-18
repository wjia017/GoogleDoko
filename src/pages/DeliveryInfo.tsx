import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DeliveryInfo() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="shop-page">
        <section className="shop-banner">
          <div className="shop-banner-content">
            <span>FAST & RELIABLE DELIVERY</span>
            <h1>Fresh products at your doorstep</h1>
            <p>
              We deliver organic groceries quickly and safely,
              from local farms to your home.
            </p>
            <p>Same-day delivery in selected areas.</p>
            <p>Hygienic packing and careful handling.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DeliveryInfo;
