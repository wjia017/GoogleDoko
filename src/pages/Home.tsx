import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import SpecialOffers from "../components/SpecialOffers";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import HowItWorks from "../components/HowItWorks";
import OrganicPromo from "../components/OrganicPromo";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

//react router

function Home() {
  return (
    <>
      <TopBar />

      <Navbar />

      <main>
        <Hero />

        <Benefits />

        <SpecialOffers />

        <Categories />

        <PopularProducts />

        <HowItWorks />

        <OrganicPromo />

        <WhyChooseUs />

        <CustomerReviews />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default Home;