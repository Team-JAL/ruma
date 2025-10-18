import hero from "../assets/hero.png";
import "./hero.css";




const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_left">
          <h1>Ruma</h1>
          <p>Powered by Team JAL</p>
          <h5>Compare, calculate, and close smarter.</h5>
          <p>
            Estimate fees (stamp duty, lawyer, etc.), compare properties by
            ROI/yield & KPIs, and stack loan offers to pick the best deal.
            Launching soon in Malaysia.
          </p>

            <div className="hero_action">
                <a href="#summary-section" className="hero_button">Learn More ↓</a>
            </div>

        </div>
        <div className="hero_right">
          <img src={hero} className="hero_image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
