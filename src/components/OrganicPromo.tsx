function OrganicPromo() {
  return (
    <section className="organic-promo-section">
      <div className="organic-promo-container">

        {/* Left Side - Vegetables */}
        <div className="organic-promo-image-area">

          <div className="organic-promo-circle"></div>

          <img
            src="/src/assets/images/organic-vegetables.jpg"
            alt="Fresh organic vegetables"
            className="organic-promo-image"
          />

          <div className="organic-promo-discount">
            <span>Up to</span>
            <strong>30% off</strong>
          </div>

        </div>

        {/* Right Side - Content */}
        <div className="organic-promo-content">

          <h2>Organic Vegetables Everyday</h2>

          <h3>
            Your online resource of healthy recipes.
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum et
            volutpat vitae nullam aenean tortor dolor eget ipsum.
            Tincidunt sem sem convallis ut vestibulum sed. Nulla
            ultrices consectetur in sapien pellentesque.
          </p>

          <button
            type="button"
            className="organic-promo-button"
          >
            Shop Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default OrganicPromo;