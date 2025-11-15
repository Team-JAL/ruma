import hero from "../assets/hero.png";
import "./hero.css";

const navLinks = [
  { label: "Product", href: "#summary-section" },
  { label: "Preview", href: "#wireframe-section" },
  { label: "Waitlist", href: "#waitlist-section" },
];

const highlights = [
  "All-in-one cost breakdown",
  "Sensitivity modelling",
  "Loan stack optimizer",
];

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero_nav">
        <div className="hero_logo">Ruma</div>
        <nav className="hero_nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#waitlist-section" className="hero_nav-cta">
            Get early access
          </a>
        </nav>
      </div>

      <div className="hero_content">
        <div className="hero_left">
          <span className="hero_badge">Launching soon in Malaysia</span>
          <h1>Compare, calculate, and close smarter.</h1>
          <p>
            Estimate fees, stack loan offers, forecast returns, and choose the
            property that wins on yield & KPIs--without spreadsheets.
          </p>

          <div className="hero_action">
            <a href="#waitlist-section" className="hero_button hero_button-primary">
              Join the waitlist
            </a>
            <a href="#wireframe-section" className="hero_button hero_button-secondary">
              See preview
            </a>
          </div>

          <div className="hero_highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero_right">
          <div className="hero_mock">
            <img src={hero} className="hero_image" alt="Ruma preview" />
            <div className="hero_floating-card">
              <p>Scenario ROI</p>
              <strong>+12.4%</strong>
              <small>vs. current market average</small>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Hero;
