function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">

        <h2>Get the latest deals</h2>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            aria-label="Email address"
          />

          <button type="submit">
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;