import "./wireframe.css";
import { reasons } from "../assets/reason";

const reasonCopy = reasons.reduce<Record<string, string>>((acc, reason) => {
  acc[reason.title] = reason.desc;
  return acc;
}, {});

const navLinks = ["Dashboard", "Deals", "Loans", "Reports"];
const sidebarItems = ["Overview", "Cost stack", "KPIs", "Sensitivity", "Notes"];

const costStack = [
  { label: "Purchase price", value: "RM640k" },
  { label: "Stamp duty", value: "RM14.4k" },
  { label: "Professional fees", value: "RM8.2k" },
];

const highlights = [
  { title: "Property evaluator", desc: reasonCopy["All-in-one"] },
  { title: "Sensitivity analysis", desc: reasonCopy["Sensitivity analysis"] },
  { title: "Comparison tool", desc: reasonCopy["Comparison tool"] },
  { title: "Loan calculator", desc: reasonCopy["Loan calculator"] },
];

const Wireframe = () => {
  return (
    <section className="wireframe" id="wireframe-section">
      <div className="wireframe_header">
        <span className="wireframe_badge">Website preview</span>
        <h2>Welcome to the Ruma web workspace.</h2>
        <p>
          We rebuilt the experience for large screens so you can evaluate costs, model
          sensitivities, compare prospects, and size your loan without leaving the browser.
        </p>
      </div>

      <div className="wireframe-grid">
        <div className="wireframe-browser">
          <div className="wb-toolbar">
            <div className="wb-dots">
              <span />
              <span />
              <span />
            </div>
            <p>workspace.ruma.app</p>
            <div className="wb-user">AJ</div>
          </div>

          <div className="wb-nav">
            {navLinks.map((link) => (
              <button key={link} className={link === "Deals" ? "active" : ""}>
                {link}
              </button>
            ))}
          </div>

          <div className="wb-body">
            <aside className="wb-sidebar">
              {sidebarItems.map((item) => (
                <span key={item} className={item === "Overview" ? "active" : ""}>
                  {item}
                </span>
              ))}
            </aside>

            <div className="wb-main">
              <div className="wb-row">
                <div className="wb-panel">
                  <small>Cost stack</small>
                  <ul>
                    {costStack.map((cost) => (
                      <li key={cost.label}>
                        <span>{cost.label}</span>
                        <strong>{cost.value}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="wb-panel wb-panel--kpi">
                  <small>Scenario KPIs</small>
                  <div className="wb-kpis">
                    <div>
                      <p>ROI</p>
                      <strong>+12.4%</strong>
                    </div>
                    <div>
                      <p>Yield</p>
                      <strong>5.6%</strong>
                    </div>
                    <div>
                      <p>Repayment</p>
                      <strong>RM2,652</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wb-panel wb-panel--chart">
                <small>Sensitivity slider</small>
                <div className="wb-bars">
                  <div>
                    <span>Rent</span>
                    <div className="bar rent" />
                  </div>
                  <div>
                    <span>Vacancy</span>
                    <div className="bar vacancy" />
                  </div>
                  <div>
                    <span>Interest rate</span>
                    <div className="bar rate" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wireframe-panel">
          {highlights.map((tool) => (
            <article key={tool.title} className="wireframe-card">
              <h5>{tool.title}</h5>
              <p>{tool.desc}</p>
            </article>
          ))}
          <a href="#waitlist-section" className="wireframe_cta">
            Explore the waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wireframe;
