import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/',                    label: 'Ana Sayfa' },
  { to: '/hakkimda',            label: 'Hakkımda' },
  { to: '/danismanlik',         label: 'Danışmanlık' },
  { to: '/akademi',             label: 'Akademi' },
  { to: '/beslenme-rehberi',    label: 'Beslenme Rehberi' },
  { to: '/iletisim',            label: 'İletişim' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        aria-label="Ana navigasyon"
      >
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Ana sayfaya git">
            <div className="logo-mark">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                <path d="M16 6 C16 6 22 10 22 16 C22 22 16 26 16 26 C16 26 10 22 10 16 C10 10 16 6 16 6Z" fill="currentColor" opacity="0.15"/>
                <path d="M16 9 C16 9 20 12 20 16 C20 20 16 23 16 23 C16 23 12 20 12 16 C12 12 16 9 16 9Z" fill="currentColor" opacity="0.4"/>
                <circle cx="16" cy="16" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-text__name">Ezgi Onaylı Küp</span>
              <span className="logo-text__title">Diyetisyen</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`navbar__link${pathname === link.to ? ' navbar__link--active' : ''}`}
                  aria-current={pathname === link.to ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/iletisim" className="btn btn-primary navbar__cta">
            Bilgi Al
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            id="mobile-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobil navigasyon">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`mobile-menu__link${pathname === link.to ? ' mobile-menu__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/iletisim" className="btn btn-primary mobile-menu__cta">
                Bilgi Al
              </Link>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--navbar-height);
          transition: background var(--transition-normal), box-shadow var(--transition-normal);
        }

        .navbar--scrolled {
          background: rgba(250, 247, 242, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 20px rgba(44, 62, 53, 0.08);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          height: 100%;
          gap: var(--space-8);
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-aqua-dark);
          flex-shrink: 0;
          transition: opacity var(--transition-fast);
        }

        .navbar__logo:hover { opacity: 0.8; }

        .logo-mark {
          color: var(--color-aqua);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .logo-text__name {
          font-family: var(--font-display);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-text-dark);
          letter-spacing: 0.01em;
        }

        .logo-text__title {
          font-size: var(--text-xs);
          font-weight: 400;
          color: var(--color-text-light);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          flex: 1;
          justify-content: center;
        }

        .navbar__link {
          font-size: var(--text-sm);
          font-weight: 400;
          color: var(--color-text-mid);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast), background var(--transition-fast);
          white-space: nowrap;
        }

        .navbar__link:hover {
          color: var(--color-aqua-dark);
          background: rgba(91, 191, 181, 0.08);
        }

        .navbar__link--active {
          color: var(--color-aqua-dark);
          font-weight: 500;
        }

        .navbar__cta {
          flex-shrink: 0;
        }

        .navbar__burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-dark);
          padding: var(--space-2);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }

        .navbar__burger:hover {
          background: rgba(44, 62, 53, 0.06);
        }

        .mobile-menu {
          position: fixed;
          top: var(--navbar-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(250, 247, 242, 0.98);
          backdrop-filter: blur(16px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--space-8);
          animation: fadeIn 0.2s ease;
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          width: 100%;
          max-width: 320px;
        }

        .mobile-menu__link {
          display: block;
          width: 100%;
          text-align: center;
          font-size: var(--text-xl);
          font-family: var(--font-display);
          font-weight: 400;
          color: var(--color-text-dark);
          padding: var(--space-3);
          border-radius: var(--radius-md);
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .mobile-menu__link:hover,
        .mobile-menu__link--active {
          color: var(--color-aqua-dark);
          background: rgba(91, 191, 181, 0.08);
        }

        .mobile-menu__cta {
          width: 100%;
          margin-top: var(--space-4);
        }

        @media (max-width: 900px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__burger { display: flex; }
        }

        @media (max-width: 640px) {
          .logo-text__name { font-size: var(--text-sm); }
        }
      `}</style>
    </>
  );
};
