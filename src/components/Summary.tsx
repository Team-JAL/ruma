import "./summary.css";
import Card from "./Card";

import { reasons } from "../assets/reason";
import { type Reason } from "../assets/reason";

const Summary = () => {
  return (
    <>
      <section className="summary" id="summary-section">
        <div className="summary_content">
          <h2>What can you do with Ruma?</h2>

          <div className="summary_card">
            {reasons.map((r: Reason) => {
              return <Card key={r.title} reason={r} />;
            })}
          </div>
        </div>

      
          <a href="#wireframe-section" className="hero_button">
            Preview
          </a>

      </section>
    </>
  );
};

export default Summary;
