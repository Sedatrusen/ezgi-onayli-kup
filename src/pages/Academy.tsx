import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Video, Users, Layers, Bell, ArrowRight } from 'lucide-react';
import { academyProducts, categoryLabels } from '../data/academy';

const categoryIcons: Record<string, React.ReactNode> = {
  'rehber':  <BookOpen size={18} />,
  'e-kitap': <Layers size={18} />,
  'video':   <Video size={18} />,
  'seminer': <Users size={18} />,
  'atölye':  <Users size={18} />,
};

const categoryColors: Record<string, string> = {
  'rehber':  'badge-sage',
  'e-kitap': 'badge-aqua',
  'video':   'badge-lemon',
  'seminer': 'badge-coming-soon',
  'atölye':  'badge-sage',
};

export const Academy: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      <Helmet>
        <title>Ezgi Onaylı Akademi | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Ezgi Onaylı Akademi — Beslenme eğitimleri, e-kitaplar, video rehberler ve grup çalışmaları. Genel bilgilendirme amaçlı dijital içerikler." />
      </Helmet>

      {/* ── PAGE HEADER ── */}
      <header className="academy-header">
        <div className="container">
          <div className="academy-header__content animate-fade-up">
            <span className="badge badge-lemon">Dijital İçerikler</span>
            <h1 className="academy-header__title">
              Ezgi Onaylı <em>Akademi</em>
            </h1>
            <p className="academy-header__subtitle">
              Kişiye özel danışmanlık hizmetinden bağımsız olarak, 
              genel beslenme eğitimi ve bilgilendirme amaçlı dijital içerikler.
            </p>
          </div>
        </div>
        <div className="academy-header-deco" aria-hidden="true">📚</div>
        <div className="academy-header-deco academy-header-deco--2" aria-hidden="true">🌿</div>
      </header>

      {/* ── IMPORTANT NOTE ── */}
      <section className="section--sm bg-white" aria-label="Akademi hakkında bilgilendirme">
        <div className="container">
          <div className="academy-note reveal">
            <div className="academy-note__icon">ℹ️</div>
            <div>
              <p>
                <strong>Akademi İçerikleri Hakkında:</strong> Bu bölümdeki dijital içerikler 
                (e-kitaplar, rehberler, video eğitimler) <em>genel eğitim ve bilgilendirme amacıyla</em> 
                hazırlanmaktadır. Kişiye özel sağlık danışmanlığı niteliği taşımaz ve bireysel 
                tıbbi tavsiye yerine geçmez. Kişiselleştirilmiş beslenme danışmanlığı için 
                lütfen "Danışmanlık" bölümüne göz atın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="section bg-cream-dark" aria-label="Dijital içerikler kataloğu">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">İçerik Kataloğu</div>
            <h2 className="section-title">Yakında burada <em>olacaklar</em></h2>
            <p className="section-subtitle">
              Şu anda hazırlık aşamasındaki içerikler. E-posta listesine katılarak 
              yayınlandıklarında haberdar olun.
            </p>
          </div>

          <div className="academy-grid reveal">
            {academyProducts.map((product) => (
              <article key={product.id} className="academy-card">
                <div className="academy-card__header">
                  <div className="academy-card__icon" aria-hidden="true">
                    {categoryIcons[product.category]}
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    <span className={`badge ${categoryColors[product.category]}`}>
                      {categoryLabels[product.category]}
                    </span>
                    {product.status === 'coming-soon' && (
                      <span className="badge badge-coming-soon">Yakında</span>
                    )}
                  </div>
                </div>
                <h3 className="academy-card__title">{product.title}</h3>
                <p className="academy-card__desc">{product.description}</p>
                <div className="academy-card__footer">
                  <button className="btn btn-secondary btn--sm academy-card__notify" disabled>
                    <Bell size={13} />
                    Haberdar Ol
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S COMING ── */}
      <section className="section bg-white" aria-label="Neler geliyor">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Kategoriler</div>
            <h2 className="section-title">Neler <em>planlıyorum?</em></h2>
          </div>
          <div className="coming-categories reveal">
            {[
              { icon: <BookOpen size={24} />, label: 'E-Kitaplar', desc: 'Beslenme, yeme davranışı ve sağlıklı yaşam üzerine dijital kitaplar.' },
              { icon: <Layers size={24} />, label: 'Beslenme Rehberleri', desc: 'Belirli konulara odaklanan, uygulamalı rehber kitapçıklar.' },
              { icon: <Video size={24} />, label: 'Video Eğitimler', desc: 'Beslenme biliminin temellerini anlatan video ders serileri.' },
              { icon: <Users size={24} />, label: 'Grup Çalışmaları', desc: 'Online seminerler, atölyeler ve grup destek programları.' },
            ].map((cat, i) => (
              <div key={i} className="coming-cat">
                <div className="coming-cat__icon" aria-hidden="true">{cat.icon}</div>
                <h3 className="coming-cat__label">{cat.label}</h3>
                <p className="coming-cat__desc">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL SUBSCRIBE ── */}
      <section className="section academy-subscribe" aria-label="E-posta listesi">
        <div className="container">
          <div className="academy-subscribe__inner reveal">
            <Bell size={32} color="var(--color-lemon)" />
            <h2 className="academy-subscribe__title">
              İçerikler yayınlandığında<br />
              <em>ilk sen haberdar ol.</em>
            </h2>
            <p className="academy-subscribe__desc">
              E-posta listesine katıl, yeni içerikler ve eğitimler hakkında bildirim al.
            </p>
            {subscribed ? (
              <div className="subscribe-success">
                <span>✓</span> Teşekkürler! Liste kaydınız alındı.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <input
                  type="email"
                  className="form-input subscribe-input"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  id="academy-email-input"
                  aria-label="E-posta adresi"
                />
                <button type="submit" className="btn btn-primary" id="academy-subscribe-btn">
                  Abone Ol <ArrowRight size={16} />
                </button>
              </form>
            )}
            <p className="subscribe-note">
              Spam göndermiyoruz. İstediğiniz zaman aboneliği iptal edebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .academy-header {
          padding: calc(var(--navbar-height) + var(--space-20)) 0 var(--space-20);
          background: linear-gradient(135deg, var(--color-text-dark) 0%, #1A2B24 100%);
          position: relative;
          overflow: hidden;
        }

        .academy-header__content {
          position: relative;
          z-index: 1;
          max-width: 640px;
        }

        .academy-header__content .badge-lemon {
          margin-bottom: var(--space-5);
        }

        .academy-header__title {
          font-family: var(--font-display);
          font-size: var(--text-6xl);
          font-weight: 500;
          color: var(--color-cream);
          line-height: 1.1;
          margin-bottom: var(--space-5);
        }

        .academy-header__title em {
          font-style: italic;
          color: var(--color-lemon);
        }

        .academy-header__subtitle {
          font-size: var(--text-xl);
          color: rgba(250,247,242,0.65);
          line-height: 1.65;
        }

        .academy-header-deco {
          position: absolute;
          font-size: 5rem;
          opacity: 0.07;
          right: 10%;
          top: 15%;
          animation: float 5s ease-in-out infinite;
          pointer-events: none;
        }

        .academy-header-deco--2 {
          font-size: 3rem;
          right: 25%;
          top: auto;
          bottom: 10%;
          animation-delay: 2.5s;
        }

        .academy-note {
          display: flex;
          gap: var(--space-4);
          background: rgba(91,191,181,0.06);
          border: 1px solid rgba(91,191,181,0.2);
          border-radius: var(--radius-lg);
          padding: var(--space-5) var(--space-6);
          align-items: flex-start;
          max-width: 860px;
          margin: 0 auto;
        }

        .academy-note__icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .academy-note p {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
        }

        .academy-note strong { color: var(--color-text-dark); }
        .academy-note em { font-style: italic; color: var(--color-aqua-dark); }

        .academy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .academy-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          transition: all var(--transition-normal);
        }

        .academy-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
          border-color: var(--color-aqua-light);
        }

        .academy-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .academy-card__icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(91,191,181,0.1);
          color: var(--color-aqua-dark);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .academy-card__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          color: var(--color-text-dark);
        }

        .academy-card__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
          flex: 1;
        }

        .academy-card__footer {
          border-top: 1px solid var(--color-cream-border);
          padding-top: var(--space-4);
        }

        .academy-card__notify {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .coming-categories {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
        }

        .coming-cat {
          text-align: center;
          padding: var(--space-8) var(--space-4);
          background: var(--color-cream);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          transition: all var(--transition-normal);
        }

        .coming-cat:hover {
          border-color: var(--color-aqua-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .coming-cat__icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(91,191,181,0.1);
          color: var(--color-aqua-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
        }

        .coming-cat__label {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-2);
        }

        .coming-cat__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
        }

        .academy-subscribe {
          background: linear-gradient(135deg, var(--color-text-dark), #1A2B24);
          margin-top: 0;
        }

        .academy-subscribe__inner {
          text-align: center;
          max-width: 540px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .academy-subscribe__title {
          font-family: var(--font-display);
          font-size: var(--text-4xl);
          font-weight: 400;
          color: var(--color-cream);
        }

        .academy-subscribe__title em {
          font-style: italic;
          color: var(--color-lemon);
        }

        .academy-subscribe__desc {
          color: rgba(250,247,242,0.6);
          font-size: var(--text-lg);
        }

        .subscribe-form {
          display: flex;
          gap: var(--space-3);
          width: 100%;
          max-width: 440px;
          flex-wrap: wrap;
        }

        .subscribe-input {
          flex: 1;
          min-width: 200px;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          color: var(--color-cream);
        }

        .subscribe-input::placeholder { color: rgba(250,247,242,0.35); }
        .subscribe-input:focus { border-color: var(--color-aqua); }

        .subscribe-success {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-aqua-light);
          font-size: var(--text-lg);
          font-weight: 500;
        }

        .subscribe-note {
          font-size: var(--text-xs);
          color: rgba(250,247,242,0.3);
        }

        @media (max-width: 1024px) {
          .academy-grid { grid-template-columns: repeat(2, 1fr); }
          .coming-categories { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .academy-header__title { font-size: var(--text-4xl); }
          .academy-grid { grid-template-columns: 1fr; }
          .coming-categories { grid-template-columns: 1fr; }
          .academy-subscribe__title { font-size: var(--text-3xl); }
        }
      `}</style>
    </>
  );
};
