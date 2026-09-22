import { useEffect, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The vegetables are so fresh and organic. I can really taste the difference. Highly recommended!",
    name: "Sneha M.",
    image: "/src/assets/images/customers/sneha.webp",
  },
  {
    id: 2,
    text: "Great quality products and super fast delivery. I love how they support local farmers.",
    name: "Arjun K.",
    image: "/src/assets/images/customers/arjun.jpeg",
  },
  {
    id: 3,
    text: "This is my go-to store for all fresh produce. Everything is always top notch!",
    name: "Pooja R.",
    image: "/src/assets/images/customers/pooja.avif",
  },
  {
    id: 4,
    text: "The spices arrived well packed and the aroma is incredible. GoogleDoko has become my weekly grocery stop.",
    name: "Niraj S.",
    image: "/src/assets/images/customers/arjun.jpeg",
  },
  {
    id: 5,
    text: "Seasonal fruits were perfectly ripe and the delivery was on time. I will definitely order again!",
    name: "Anisha T.",
    image: "/src/assets/images/customers/sneha.webp",
  },
];

function visibleCount() {
  if (typeof window === "undefined") {
    return 3;
  }
  if (window.innerWidth <= 600) {
    return 1;
  }
  if (window.innerWidth <= 900) {
    return 2;
  }
  return 3;
}

function CustomerReviews() {
  const [visible, setVisible] = useState(visibleCount);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - visible);

  useEffect(() => {
    function update() {
      setVisible(visibleCount());
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  function goTo(next: number) {
    setIndex(Math.min(maxIndex, Math.max(0, next)));
  }

  return (
    <section className="customer-reviews-section">
      <div className="customer-reviews-container">
        <h2 className="customer-reviews-title">What Our Customers Say</h2>

        <div
          className="customer-reviews-viewport"
          style={
            {
              "--review-visible": visible,
              "--review-gap": visible === 1 ? "20px" : visible === 2 ? "25px" : "38px",
            } as CSSProperties
          }
        >
          <div
            className="customer-reviews-track"
            style={{
              transform: `translateX(calc(-${index} * (100% + var(--review-gap)) / ${visible}))`,
            }}
          >
            {reviews.map((review) => (
              <article className="customer-review-card" key={review.id}>
                <p className="customer-review-text">{review.text}</p>

                <div className="customer-info">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="customer-image"
                  />

                  <div className="customer-details">
                    <h3>{review.name}</h3>
                    <div className="customer-stars" aria-label="5 out of 5 stars">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="review-dots">
          <button
            type="button"
            className="review-arrow"
            aria-label="Previous reviews"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
          >
            <ChevronLeft size={22} />
          </button>

          {Array.from({ length: maxIndex + 1 }, (_, page) => (
            <button
              key={page}
              type="button"
              className={page === index ? "review-dot active" : "review-dot"}
              aria-label={`Review page ${page + 1}`}
              onClick={() => goTo(page)}
            />
          ))}

          <button
            type="button"
            className="review-arrow"
            aria-label="Next reviews"
            onClick={() => goTo(index + 1)}
            disabled={index === maxIndex}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
