import { Link } from "react-router-dom";

interface OfferCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  theme: "green" | "yellow" | "blue";
  to: string;
}

function OfferCard({ title, description, buttonText, image, theme, to }: OfferCardProps) {
  return (
    <article className={`offer-card ${theme}`}>
      <Link to={to} className="offer-card-link">
        <img src={image} alt="" className="offer-background" />
        <span className="offer-sr-only">
          {title}. {description}. {buttonText}.
        </span>
      </Link>
    </article>
  );
}

export default OfferCard;
