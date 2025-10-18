import { type Reason } from "../assets/reason";
import "./card.css"

interface CardProps {
  reason: Reason;
}

const Card: React.FC<CardProps> = ({ reason }) => {
  return (
    <>
      <div className="card">
        <img src={reason.img} />
        <h5>{reason.title}</h5>
        <p>{reason.desc}</p>
      </div>
    </>
  );
};

export default Card;
