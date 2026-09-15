import { ArrowRight, Flame } from "lucide-react";

interface OfferCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  theme: "green" | "yellow" | "blue";
  badge?: string;
}

function OfferCard({
  title,
  description,
  buttonText,
  image,
  theme,
  badge,
}: OfferCardProps) {
  return (
    <article className={`offer-card ${theme}`}>

      {/* Background image */}
      <img
        src={image}
        alt=""
        className="offer-background"
      />


      {/* Content */}
      <div className="offer-content">

        {badge && (
          <div className="offer-badge">
            <Flame size={18} />
            <span>{badge}</span>
          </div>
        )}


        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


        <button
          type="button"
          className="offer-button"
        >
          <span>{buttonText}</span>

          <ArrowRight size={20} />
        </button>

      </div>

    </article>
  );
}

export default OfferCard;