import { useEffect, useState } from "react";
import { Link } from "react-router";
import { navLinks, type NavLink } from "../data";
import logo from "../assets/logo.png";

const isRoute = (href: string) => href.startsWith("/") && !href.startsWith("/#");

const NavItem = ({ link, onClick }: { link: NavLink; onClick?: () => void }) =>
  isRoute(link.href) ? (
    <Link to={link.href} onClick={onClick}>{link.label}</Link>
  ) : (
    <a href={link.href} onClick={onClick}>{link.label}</a>
  );

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <nav
      className="hero-nav"
      data-scrolled={scrolled || undefined}
      data-menu-open={menuOpen || undefined}
    >
      <div className="hero-nav-inner r-container">
        <Link to="/" className="hero-logo" aria-label="Ruma" onClick={closeMenu}>
          <img src={logo} alt="Ruma" className="hero-logo-img" />
        </Link>
        <div className="hero-nav-links">
          {navLinks.map((l) => (
            <NavItem key={l.label} link={l} />
          ))}
        </div>
        <a href="https://app.ruma.casa" className="hero-nav-cta" onClick={closeMenu}>
          Launch app →
        </a>
        <button
          type="button"
          className="hero-nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="hero-nav-mobile">
          {navLinks.map((l) => (
            <NavItem key={l.label} link={l} onClick={closeMenu} />
          ))}
          <a href="https://app.ruma.casa" className="hero-nav-mobile-cta" onClick={closeMenu}>
            Launch app →
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
