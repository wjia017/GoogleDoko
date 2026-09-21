import OfferCard from "./OfferCard";
import { Link } from "react-router-dom";

import explorePlacesImage from "../assets/images/offers/explore-places.jpg";
import popularNearYouImage from "../assets/images/offers/popular-near-you.jpg";
import seasonalImage from "../assets/images/offers/seasonal.jpg";

const offers = [
  {
    id: 1,
    title: "Explore by Places",
    description: "Fresh picks from local farmers near you",
    buttonText: "Explore Now",
    image: explorePlacesImage,
    theme: "green" as const,
    to: "/places",
  },
  {
    id: 2,
    title: "Popular Near You",
    description: "Top loved picks in your area",
    buttonText: "Explore Now",
    image: popularNearYouImage,
    theme: "yellow" as const,
    to: "/shop",
  },
  {
    id: 3,
    title: "Seasonal Products",
    description: "Handpicked freshness for every season",
    buttonText: "Discover Now",
    image: seasonalImage,
    theme: "blue" as const,
    to: "/shop",
  },
];

function SpecialOffers() {
  return (
    <section className="offers-section">
      <div className="section-header">
        <h2>Special Offers</h2>
        <Link to="/shop" className="section-view-all">
          View all
        </Link>
      </div>

      <div className="offers-grid">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            description={offer.description}
            buttonText={offer.buttonText}
            image={offer.image}
            theme={offer.theme}
            to={offer.to}
          />
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
