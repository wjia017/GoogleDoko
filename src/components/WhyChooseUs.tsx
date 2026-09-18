const reasons = [
  {
    id: 1,
    title: "100 % Organic",
    description: "No Harmful Chemicals",
    image: "/src/assets/images/why-choose-us/organic.jpg",
  },
  {
    id: 2,
    title: "Local Farmers",
    description: "Support local livelihood",
    image: "/src/assets/images/why-choose-us/farmers.jpg",
  },
  {
    id: 3,
    title: "Fresh & Natural",
    description: "Fresh to table",
    image: "/src/assets/images/why-choose-us/fresh.jpg",
  },
  {
    id: 4,
    title: "Quality Assured",
    description: "Strict quality check",
    image: "/src/assets/images/why-choose-us/quality.jpg",
  },
  {
    id: 5,
    title: "Safe Delivery",
    description: "Hygienic & timely",
    image: "/src/assets/images/why-choose-us/delivery.jpg",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">

        {/* Section Heading */}
        <div className="why-choose-us-heading">

          <div className="why-heading-decoration">
            <span className="why-heading-line"></span>
            <span className="why-heading-dot"></span>
          </div>

          <h2>Why Choose Us</h2>

          <div className="why-heading-decoration right">
            <span className="why-heading-dot"></span>
            <span className="why-heading-line"></span>
          </div>

        </div>

        {/* Reasons */}
        <div className="why-choose-us-grid">
          {reasons.map((reason) => (
            <article
              className="why-choose-us-item"
              key={reason.id}
            >
              <div className="why-choose-us-image">
                <img
                  src={reason.image}
                  alt={reason.title}
                />
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;