import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer-section">
      <p>
        Made with ❤️ by <strong>Team JAL</strong> &nbsp;|&nbsp; Ruma © {new Date().getFullYear()}
      </p>
      <p className="footer-credit">
        <a
          href="https://storyset.com/people"
          target="_blank"
          rel="noopener noreferrer"
        >
          People illustrations by Storyset
        </a>
      </p>
    </footer>
  );
};

export default Footer;
