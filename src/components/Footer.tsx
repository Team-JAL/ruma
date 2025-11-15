import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer-section">
      <div className="footer_brand">
        <h4>Ruma</h4>
        <p>Compare, calculate, and close smarter.</p>
      </div>

      <div className="footer_links">
        <a href="#summary-section">Product</a>
        <a href="#wireframe-section">Preview</a>
        <a href="mailto:inbox@ajile.team">Contact</a>
      </div>

      <p className="footer-credit">
        &copy; {year} Team AJILE | People illustrations by{" "}
        <a href="https://storyset.com/people" target="_blank" rel="noopener noreferrer">
          Storyset
        </a>
      </p>
    </footer>
  );
};

export default Footer;
