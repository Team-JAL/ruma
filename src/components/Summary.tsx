import "./summary.css";
import Card from "./Card";

import { reasons } from "../assets/reason";
import { type Reason } from "../assets/reason";

const Summary = () => {
  return (
    <section className="summary" id="summary-section">
      <div className="summary_intro">
        <span className="summary_badge">Why Ruma</span>
        <h2>Modern deal intelligence without the spreadsheet sprawl.</h2>
        <p>
          Ruma pulls every lever--fees, yields, loan costs, sensitivities--into a single workflow so you can vet a property, compare scenarios, and move toward closing with confidence.
        </p>

        <div className="summary_points">
          <div>
            <strong>5 min.</strong>
            <p>to model costs, ROI, & KPIs per property.</p>
          </div>
          <div>
            <strong>Share-ready</strong>
            <p>polished outputs you can send to clients or co-founders.</p>
          </div>
          <div>
            <strong>Always synced</strong>
            <p>changes ripple through repayment, cashflow, and risk views.</p>
          </div>
        </div>
        <a href="#wireframe-section" className="summary_cta">
          Preview the experience
        </a>
      </div>

      <div className="summary_card-grid">
        {reasons.map((reason: Reason) => (
          <Card key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
};

export default Summary;
