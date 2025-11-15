import { type Reason } from "../assets/reason";
import "./card.css";

interface CardProps {
  reason: Reason;
}

const Card: React.FC<CardProps> = ({ reason }) => {
  return (
    <div className="card">
      <div className="card_icon">
        <img src={reason.img} alt={reason.title} loading="lazy" />
      </div>
      <div className="card_body">
        <h5>{reason.title}</h5>
        <p>{reason.desc}</p>
      </div>
    </div>
  );
};

export default Card;
