const reviews = [
  {
    id: 1,
    text: "The vegetables are so fresh and organic. I can really taste the difference. Highly recommended!",
    name: "Sneha M.",
    image: "/images/customers/sneha.png",
  },
  {
    id: 2,
    text: "Great quality products and super fast delivery. I love how they support local farmers.",
    name: "Arjun K.",
    image: "/images/customers/arjun.png",
  },
  {
    id: 3,
    text: "This is my go-to store for all fresh produce. Everything is always top notch!",
    name: "Pooja R.",
    image: "/images/customers/pooja.png",
  },
];

function CustomerReviews() {
  return (
    <section className="customer-reviews-section">
      <div className="customer-reviews-container">

        {/* Heading */}
        <h2 className="customer-reviews-title">
          What Our Customers Say
        </h2>

        {/* Review Cards */}
        <div className="customer-reviews-grid">
          {reviews.map((review) => (
            <article
              className="customer-review-card"
              key={review.id}
            >
              {/* Review */}
              <p className="customer-review-text">
                {review.text}
              </p>

              {/* Customer */}
              <div className="customer-info">

                <img
                  src={review.image}
                  alt={review.name}
                  className="customer-image"
                />

                <div className="customer-details">
                  <h3>{review.name}</h3>

                  <div
                    className="customer-stars"
                    aria-label="5 out of 5 stars"
                  >
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

        {/* Carousel Dots */}
        <div className="review-dots">
          <button
            type="button"
            className="review-dot active"
            aria-label="Review page 1"
          ></button>

          <button
            type="button"
            className="review-dot"
            aria-label="Review page 2"
          ></button>

          <button
            type="button"
            className="review-dot"
            aria-label="Review page 3"
          ></button>
        </div>

      </div>
    </section>
  );
}

export default CustomerReviews;