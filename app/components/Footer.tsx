import { Link } from "react-router";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer r-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>Ruma</h4>
          <p>Compare, calculate, and close smarter. Built by <a href="https://ajile.team" target="_blank" rel="noopener noreferrer">AJILE STUDIO</a>.</p>
        </div>
        <div className="footer-col">
          <h6>Product</h6>
          <ul>
            <li><a href="/#features">Why Ruma</a></li>
            <li><a href="/#walkthrough">Preview</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="mailto:inbox@ajile.team">Contact</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Legal</h6>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-credit">
        <span>© {year} <a href="https://ajile.team" target="_blank" rel="noopener noreferrer">AJILE STUDIO</a> (Reg. No. 202503327530)</span>
      </div>
    </footer>
  );
};

export default Footer;
