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
      <img
        src={image}
        alt={title}
        className="offer-background"
      />

      <div className="offer-overlay"></div>

      <div className="offer-content">
        {badge && (
          <div className="offer-badge">
            <Flame size={17} />
            {badge}
          </div>
        )}

        <h3>{title}</h3>

        <p>{description}</p>

        <button type="button" className="offer-button">
          {buttonText}
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}

export default OfferCard;