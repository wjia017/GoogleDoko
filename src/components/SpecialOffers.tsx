import OfferCard from "./OfferCard";

const offers = [
  {
    id: 1,
    title: "Explore by Places",
    description: "Fresh picks from local farmers near you",
    buttonText: "Explore Now",
    image: "/src/assets/images/offers/explore-places.jpg",
    theme: "green" as const,
  },
  {
    id: 2,
    title: "Popular Near You",
    description: "Top loved picks in your area",
    buttonText: "Explore Now",
    image: "/src/assets/images/offers/popular-near-you.jpg",
    theme: "yellow" as const,
    badge: "Trending Now",
  },
  {
    id: 3,
    title: "Seasonal Products",
    description: "Handpicked freshness for every season",
    buttonText: "Discover Now",
    image: "/src/assets/images/offers/seasonal.jpg",
    theme: "blue" as const,
    badge: "Best",
  },
];

function SpecialOffers() {
  return (
    <section className="offers-section">
      <div className="section-header">
        <h2>Special Offers</h2>

        <button type="button">
          View all
        </button>
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
            badge={offer.badge}
          />
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;