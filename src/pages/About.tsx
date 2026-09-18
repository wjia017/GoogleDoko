import {
  ArrowRight,
  MapPin,
  Leaf,
  ShieldCheck,
  ShoppingBasket,
  Store,
  Truck,
  Sparkles,
  BadgeCheck,
  Users,
  Handshake,
  CircleCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const missionCards = [
  {
    icon: MapPin,
    color: "teal",
    title: "Discover by Place",
    description:
      "Explore products based on their original locations and discover what different places in Nepal are known for.",
  },
  {
    icon: Leaf,
    color: "orange",
    title: "Support Local",
    description:
      "Connect customers with local farmers, producers and merchants.",
  },
  {
    icon: ShieldCheck,
    color: "teal",
    title: "Build Trust",
    description:
      "Provide clear product, seller and origin information so customers can shop with confidence.",
  },
  {
    icon: ShoppingBasket,
    color: "orange",
    title: "Shop Easily",
    description:
      "Discover, compare and purchase local products through one convenient marketplace.",
  },
];

const whyCards = [
  {
    title: "Authentic Origins",
    description:
      "Every product is connected to its place of origin, helping customers understand where their products come from.",
    image: "/src/assets/images/why-choose-us/organic.jpg",
  },
  {
    title: "Local Producers",
    description:
      "Discover products from local farmers, producers and merchants across different communities.",
    image: "/src/assets/images/why-choose-us/farmers.jpg",
  },
  {
    title: "Fresh & Local",
    description:
      "Find fresh fruits, vegetables and agricultural products sourced from local sellers.",
    image: "/src/assets/images/why-choose-us/fresh.jpg",
  },
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Explore a Place",
    description:
      "Discover districts, cities, villages and regions across Nepal.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Discover Products",
    description:
      "See the fruits, vegetables, crops, spices and other products associated with the place.",
  },
  {
    number: "03",
    icon: Store,
    title: "Choose a Seller",
    description:
      "View product details, origin, availability and seller information.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Order & Enjoy",
    description:
      "Add products to your cart and have them delivered to you.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Freshness",
    description: "Helping customers discover fresh and quality local products.",
  },
  {
    icon: BadgeCheck,
    title: "Authenticity",
    description:
      "Keeping the connection between products and their places of origin clear.",
  },
  {
    icon: Users,
    title: "Local Communities",
    description:
      "Creating opportunities for local farmers, producers and merchants.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Making product, seller and origin information clear for customers.",
  },
];

function About() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="about-page">
        <section className="hero-section about-hero">
          <div className="hero-content about-hero-content">
            <div className="hero-text">
              <span className="banner-label">ABOUT GOOGLE DOKO</span>

              <h1>
                Connecting Nepal’s Local Products
                <br />
                with the People Who Love Them
              </h1>

              <p>
                GoogleDoko is a location-based marketplace that helps you
                discover fresh, authentic and locally sourced products from
                different places across Nepal.
              </p>

              <p className="about-hero-line">
                From the farms and communities of Nepal to your doorstep.
              </p>

              <div className="hero-buttons">
                <Link to="/shop" className="primary-button">
                  Explore Products
                  <ArrowRight size={17} />
                </Link>

                <Link to="/places" className="secondary-button">
                  <MapPin size={22} />
                  Explore Local Places
                </Link>
              </div>
            </div>

            <div className="about-hero-media">
              <img
                src="/src/assets/images/organic-vegetables.jpg"
                alt="Fresh fruits, vegetables and local produce from Nepal"
              />

              <span className="about-float-card about-float-card-one">
                Local Sellers
              </span>
              <span className="about-float-card about-float-card-two">
                Fresh Products
              </span>
              <span className="about-float-card about-float-card-three">
                Authentic Origins
              </span>
            </div>
          </div>
        </section>

        <section className="about-story-section">
          <div className="about-story-content">
            <div className="about-story-image">
              <img
                src="/src/assets/images/why-choose-us/farmers.jpg"
                alt="Local farmer with a basket of fresh produce"
              />
            </div>

            <div className="about-story-text">
              <span className="banner-label">OUR STORY</span>
              <h2>Discover the story behind every product.</h2>

              <p>
                Every place has something special to offer. From fresh apples
                grown in the hills to honey, spices, vegetables and traditional
                products made by local communities, Nepal is rich in products
                connected to their place of origin.
              </p>

              <p>
                GoogleDoko was created to make these products easier to
                discover. Instead of simply searching for a product, customers
                can discover where it comes from, learn about its origin and
                find trusted sellers.
              </p>

              <p>
                Our goal is to bring local products closer to customers while
                helping local producers and merchants reach more people.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works-section about-mission-section">
          <div className="how-it-works-container">
            <div className="how-it-works-heading">
              <div className="heading-decoration">
                <span className="heading-line"></span>
                <span className="heading-dot"></span>
              </div>
              <h2>Our Mission</h2>
              <div className="heading-decoration right">
                <span className="heading-dot"></span>
                <span className="heading-line"></span>
              </div>
            </div>

            <p className="how-it-works-subtitle">
              Making local products easier to discover, trust and purchase.
            </p>

            <div className="benefits-grid about-mission-grid">
              {missionCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article className="benefit-card" key={card.title}>
                    <div className={`benefit-large-icon ${card.color}`}>
                      <Icon size={48} strokeWidth={2.5} />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-why-section">
          <div className="why-choose-us-container">
            <div className="why-choose-us-heading">
              <div className="why-heading-decoration">
                <span className="why-heading-line"></span>
                <span className="why-heading-dot"></span>
              </div>
              <h2>Why GoogleDoko?</h2>
              <div className="why-heading-decoration right">
                <span className="why-heading-dot"></span>
                <span className="why-heading-line"></span>
              </div>
            </div>

            <p className="how-it-works-subtitle about-section-subtitle">
              More than a marketplace — a way to discover Nepal.
            </p>

            <div className="about-why-grid">
              {whyCards.map((card) => (
                <article className="why-choose-us-item" key={card.title}>
                  <div className="why-choose-us-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how-it-works-section">
          <div className="how-it-works-container">
            <div className="how-it-works-heading">
              <div className="heading-decoration">
                <span className="heading-line"></span>
                <span className="heading-dot"></span>
              </div>
              <h2>How GoogleDoko Works</h2>
              <div className="heading-decoration right">
                <span className="heading-dot"></span>
                <span className="heading-line"></span>
              </div>
            </div>

            <p className="how-it-works-subtitle">
              From discovering a place to receiving local products at your
              doorstep.
            </p>

            <div className="steps-container">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="step-wrapper" key={step.number}>
                    <div className="step">
                      <div className="step-image-wrapper">
                        <span className="step-number about-step-number">
                          {step.number}
                        </span>
                        <div className="step-image about-step-icon">
                          <Icon size={36} strokeWidth={2} />
                        </div>
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="step-arrow" aria-hidden="true">
                        <ArrowRight size={25} strokeWidth={2} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="how-it-works-container">
            <div className="why-choose-us-heading">
              <div className="why-heading-decoration">
                <span className="why-heading-line"></span>
                <span className="why-heading-dot"></span>
              </div>
              <h2>What We Value</h2>
              <div className="why-heading-decoration right">
                <span className="why-heading-dot"></span>
                <span className="why-heading-line"></span>
              </div>
            </div>

            <div className="benefits-grid about-values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article className="about-value-card" key={value.title}>
                    <div className="benefit-large-icon teal">
                      <Icon size={36} strokeWidth={2.2} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-nepal-section">
          <div className="about-nepal-content">
            <div className="about-nepal-image">
              <img
                src="/src/assets/images/places/mustang.jpg"
                alt="Hills and farms of Nepal"
              />
            </div>

            <div className="about-nepal-panel">
              <h2>From the Hills to Your Home</h2>
              <p>
                Nepal is home to diverse landscapes, climates and communities,
                each producing unique foods and agricultural products.
              </p>
              <p>
                GoogleDoko brings these local discoveries together so customers
                can explore products by place and support the people behind
                them.
              </p>
              <Link to="/places" className="category-promo-button">
                Explore Local Places
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-promise-section">
          <span className="banner-label">OUR PROMISE</span>
          <h2>Know where your products come from.</h2>
          <p>
            We want customers to have a clearer connection with the products
            they buy — from the place they come from to the people who produce
            and sell them.
          </p>

          <div className="about-promise-list">
            <span>
              <CircleCheck size={20} />
              Clear Product Information
            </span>
            <span>
              <CircleCheck size={20} />
              Seller Information
            </span>
            <span>
              <CircleCheck size={20} />
              Origin Information
            </span>
          </div>
        </section>

        <section className="category-promo-section about-cta-section">
          <div className="category-promo-content">
            <div className="category-promo-text">
              <h2>Ready to Discover Local Nepal?</h2>
              <p>
                Explore fresh products, discover their origins and support
                local sellers across Nepal.
              </p>

              <div className="about-cta-buttons">
                <Link to="/shop" className="category-promo-button">
                  Shop Products
                  <ArrowRight size={17} />
                </Link>
                <Link to="/places" className="about-cta-secondary">
                  Explore Places
                </Link>
              </div>
            </div>

            <div className="category-promo-image">
              <img
                src="/src/assets/images/organic-vegetables.jpg"
                alt="Basket of apples, vegetables, honey and spices"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
