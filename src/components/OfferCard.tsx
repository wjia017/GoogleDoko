import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface OfferCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  theme: "green" | "yellow" | "blue";
  to: string;
}

function OfferCard({ title, description, buttonText, image, theme, to }: OfferCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className={`offer-card ${theme}`}
      onClick={() => navigate(to)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(to);
        }
      }}
      aria-label={`${title}: ${description}`}
    >
      <img
        src={image}
        alt={`${title} - ${description}`}
        className="offer-background"
        loading="lazy"
      />
      <Link
        to={to}
        className="offer-action-btn"
        aria-label={`${buttonText} - ${title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <span>{buttonText}</span>
        <ArrowRight size={14} className="offer-action-arrow" />
      </Link>
    </article>
  );
}

export default OfferCard;
