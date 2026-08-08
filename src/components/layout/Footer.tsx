import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MessageCircle, Mail, MapPin, Phone, Heart } from 'lucide-react';

import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Top Section */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoImg} alt="Diyetisyen Ezgi Onaylı Küp" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              Yeme davranışında beden ve zihin bütünlüğü.<br />
              Sürdürülebilir kilo yönetimi.
            </p>
            <div className="footer__socials">
              <a
                href="https://instagram.com/diyetisyenezgionaylikup"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram'da takip edin"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp ile iletişim"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:info@ezgionaylikup.com"
                className="footer__social-link"
                aria-label="E-posta gönder"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="footer__col">
            <h3 className="footer__col-title">Sayfalar</h3>
            <ul className="footer__links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/hakkimda">Hakkımda</Link></li>
              <li><Link to="/danismanlik">Danışmanlık</Link></li>
              <li><Link to="/online-danismanlik">Online Danışmanlık</Link></li>
              <li><Link to="/akademi">Akademi</Link></li>
              <li><Link to="/beslenme-rehberi">Beslenme Rehberi</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">İletişim</h3>
            <ul className="footer__contact">
              <li>
                <MapPin size={15} aria-hidden="true" />
                <span>Yalova Klinik Adresi<br /><small>Yakında eklenecek</small></span>
              </li>
              <li>
                <Phone size={15} aria-hidden="true" />
                <a href="tel:+905XXXXXXXXX">+90 (5XX) XXX XX XX</a>
              </li>
              <li>
                <Mail size={15} aria-hidden="true" />
                <a href="mailto:info@ezgionaylikup.com">info@ezgionaylikup.com</a>
              </li>
              <li>
                <MessageCircle size={15} aria-hidden="true" />
                <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile ulaşın
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            © {year} Diyetisyen Ezgi Onaylı Küp · Tüm hakları saklıdır.
          </p>
          <div className="footer__legal">
            <Link to="/kvkk">KVKK</Link>
            <span>·</span>
            <Link to="/gizlilik">Gizlilik Politikası</Link>
            <span>·</span>
            <Link to="/cerez">Çerez Politikası</Link>
          </div>
          <p className="footer__made">
            <Heart size={12} aria-hidden="true" /> Sağlıklı yaşam için
          </p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-text-dark);
          color: rgba(250, 247, 242, 0.7);
          padding: var(--space-16) 0 var(--space-8);
          margin-top: var(--space-24);
        }

        .footer__top {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.2fr;
          gap: var(--space-12);
          margin-bottom: var(--space-12);
        }

        .footer__logo {
          display: flex;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .footer__logo-img {
          height: 48px;
          width: auto;
          filter: brightness(0) invert(1) opacity(0.9);
        }

        .footer__tagline {
          font-size: var(--text-sm);
          line-height: 1.7;
          color: rgba(250, 247, 242, 0.55);
          margin-bottom: var(--space-6);
        }

        .footer__socials {
          display: flex;
          gap: var(--space-3);
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(91, 191, 181, 0.3);
          color: var(--color-aqua-light);
          transition: all var(--transition-normal);
        }

        .footer__social-link:hover {
          background: rgba(91, 191, 181, 0.15);
          border-color: var(--color-aqua);
          color: var(--color-aqua);
          transform: translateY(-2px);
        }

        .footer__col-title {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-aqua-light);
          margin-bottom: var(--space-5);
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer__links a {
          font-size: var(--text-sm);
          color: rgba(250, 247, 242, 0.6);
          transition: color var(--transition-fast);
        }

        .footer__links a:hover {
          color: var(--color-aqua-light);
        }

        .footer__contact {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer__contact li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          font-size: var(--text-sm);
          color: rgba(250, 247, 242, 0.6);
        }

        .footer__contact li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--color-aqua-light);
          opacity: 0.7;
        }

        .footer__contact a {
          color: rgba(250, 247, 242, 0.6);
          transition: color var(--transition-fast);
        }

        .footer__contact a:hover {
          color: var(--color-aqua-light);
        }

        .footer__contact small {
          display: block;
          font-size: 0.7rem;
          opacity: 0.5;
          margin-top: 2px;
        }

        .footer__divider {
          height: 1px;
          background: rgba(91, 191, 181, 0.12);
          margin-bottom: var(--space-6);
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-4);
          font-size: var(--text-xs);
          color: rgba(250, 247, 242, 0.35);
        }

        .footer__legal {
          display: flex;
          gap: var(--space-2);
          align-items: center;
        }

        .footer__legal a {
          color: rgba(250, 247, 242, 0.4);
          transition: color var(--transition-fast);
        }

        .footer__legal a:hover {
          color: var(--color-aqua-light);
        }

        .footer__made {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          color: rgba(250, 247, 242, 0.25);
        }

        @media (max-width: 900px) {
          .footer__top {
            grid-template-columns: 1fr 1fr;
          }

          .footer__brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer__top {
            grid-template-columns: 1fr;
          }

          .footer__bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
