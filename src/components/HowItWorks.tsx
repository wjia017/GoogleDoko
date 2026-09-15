import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Farmer",
    description: (
      <>
        Local farmers
        <br />
        bring fresh, organic
        <br />
        produce
      </>
    ),
    image: "/src/assets/images/how-it-works/farmer.jpg",
  },
  {
    id: 2,
    title: "Verification",
    description: (
      <>
        Quality checked
        <br />
        for freshness
        <br />
        and safety
      </>
    ),
    image: "/src/assets/images/how-it-works/verification.jpg",
  },
  {
    id: 3,
    title: "Packaging",
    description: (
      <>
        Carefully packed
        <br />
        to keep produce
        <br />
        fresh
      </>
    ),
    image: "/images/how-it-works/packaging.png",
  },
  {
    id: 4,
    title: "Delivery",
    description: (
      <>
        Delivered fresh
        <br />
        to your home
      </>
    ),
    image: "/images/how-it-works/delivery.png",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">

        {/* Heading */}
        <div className="how-it-works-heading">
          <div className="heading-decoration">
            <span className="heading-line"></span>
            <span className="heading-dot"></span>
          </div>

          <h2>How It Works</h2>

          <div className="heading-decoration right">
            <span className="heading-dot"></span>
            <span className="heading-line"></span>
          </div>
        </div>

        <p className="how-it-works-subtitle">
          From fresh farms to your doorstep in 4 simple steps
        </p>

        {/* Steps */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={step.id}>

              <div className="step">

                {/* Image */}
                <div className="step-image-wrapper">
                  <span className="step-number">
                    {step.id}
                  </span>

                  <div className="step-image">
                    <img
                      src={step.image}
                      alt={step.title}
                    />
                  </div>
                </div>

                {/* Text */}
                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={25} strokeWidth={2} />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;