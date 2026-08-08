import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Monitor, CheckCircle, Clock, Users } from 'lucide-react';
import ezgiPortrait from '../assets/ezgi-portrait.png';
import onlineConsulting from '../assets/online-consulting.png';

const faceToFaceFeatures = [
  'Kapsamlı kişisel değerlendirme görüşmesi',
  'Antropometrik ölçüm ve analiz',
  'Kişiye özel beslenme planı hazırlanması',
  'Yeme davranışı değerlendirmesi',
  'Düzenli takip görüşmeleri',
  'Süreç içi motivasyon ve destek',
];

const onlineFeatures = [
  'Video platformu üzerinden görüşme',
  'Kişiye özel beslenme planı',
  'Dijital form ile ayrıntılı başvuru',
  'E-posta ve mesajlaşma ile düzenli takip',
  'Esnek randevu imkânı',
  'Türkiye\'nin her yerinden erişim',
];

const process = [
  { step: '01', title: 'İlk Başvuru', desc: 'İletişim formu veya WhatsApp üzerinden bilgi talebi oluşturursunuz.' },
  { step: '02', title: 'Ön Görüşme', desc: 'Kısa bir görüşme ile ihtiyaçlarınız ve sürece uygunluk değerlendirilir.' },
  { step: '03', title: 'Ayrıntılı Değerlendirme', desc: 'Beslenme alışkanlıklarınız, yaşam tarzınız ve hedefleriniz detaylıca ele alınır.' },
  { step: '04', title: 'Kişiye Özel Program', desc: 'Size özel beslenme planı ve yol haritası hazırlanır.' },
  { step: '05', title: 'Takip ve Destek', desc: 'Düzenli takip görüşmeleri ve ihtiyaç halinde güncelleme yapılır.' },
];

export const Consulting: React.FC = () => {
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

  return (
    <>
      <Helmet>
        <title>Danışmanlık | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Yüz yüze Yalova kliniğinde ve Türkiye genelinde online beslenme danışmanlığı. Kişiye özel program ve düzenli takip." />
      </Helmet>

      <header className="page-header">
        <div className="container">
          <p className="page-header__eyebrow animate-fade-up">Danışmanlık</p>
          <h1 className="page-header__title animate-fade-up animate-fade-up-delay-1">
            Yüz Yüze & <span style={{ color: 'var(--color-aqua-dark)', fontStyle: 'italic' }}>Online</span><br />Danışmanlık
          </h1>
          <p className="page-header__subtitle animate-fade-up animate-fade-up-delay-2">
            Yalova'da klinik ortamında ya da Türkiye'nin herhangi bir şehrinden — 
            seçim sizin.
          </p>
        </div>
      </header>

      {/* ── FACE TO FACE ── */}
      <section className="section bg-white" id="yuz-yuze" aria-label="Yüz yüze danışmanlık">
        <div className="container consulting-split">
          <div className="reveal">
            <img
              src={ezgiPortrait}
              alt="Yüz yüze danışmanlık — Yalova kliniği ortamı"
              className="consulting-img"
            />
          </div>
          <div className="reveal">
            <span className="badge badge-sage">
              <MapPin size={11} /> Yalova Kliniği
            </span>
            <h2 className="section-title" style={{ marginTop: 'var(--space-3)' }}>
              Yüz Yüze<br /><em>Danışmanlık</em>
            </h2>
            <p className="consulting-desc">
              Yalova'daki kliniğimde gerçekleştirilen yüz yüze danışmanlık seanslarında, 
              sizinle doğrudan, kişisel ve derinlemesine bir değerlendirme süreci yürütüyorum.
            </p>
            <ul className="feature-list">
              {faceToFaceFeatures.map(f => (
                <li key={f}>
                  <CheckCircle size={16} color="var(--color-sage)" />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
              <Link to="/iletisim" className="btn btn-sage btn--lg" id="face-consult-apply-btn">
                Bilgi Al / Başvur <ArrowRight size={16} />
              </Link>
            </div>
            <p className="consulting-note">
              * Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır. 
              Kişiye özel değerlendirme için lütfen iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* ── ONLINE ── */}
      <section className="section bg-cream-dark" id="online" aria-label="Online danışmanlık">
        <div className="container consulting-split consulting-split--reverse">
          <div className="reveal">
            <span className="badge badge-aqua">
              <Monitor size={11} /> Türkiye Geneli
            </span>
            <h2 className="section-title" style={{ marginTop: 'var(--space-3)' }}>
              Online<br /><em>Danışmanlık</em>
            </h2>
            <p className="consulting-desc">
              Türkiye'nin herhangi bir şehrinde olsanız da, yoğun iş temponuzda 
              kliniğe gidemesaniz de online görüşmeler aracılığıyla aynı kaliteli 
              danışmanlık sürecini yaşayabilirsiniz.
            </p>
            <ul className="feature-list">
              {onlineFeatures.map(f => (
                <li key={f}>
                  <CheckCircle size={16} color="var(--color-aqua)" />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
              <Link to="/online-danismanlik" className="btn btn-primary btn--lg" id="online-consult-detail-btn">
                Detaylı Bilgi <ArrowRight size={16} />
              </Link>
              <Link to="/iletisim" className="btn btn-secondary btn--lg">
                Bilgi Al
              </Link>
            </div>
          </div>
          <div className="reveal">
            <img
              src={onlineConsulting}
              alt="Online danışmanlık — video görüşme"
              className="consulting-img"
            />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section bg-white" aria-label="Danışmanlık süreci">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Süreç</div>
            <h2 className="section-title">Nasıl <em>ilerliyoruz?</em></h2>
            <p className="section-subtitle">
              İlk temastan düzenli takibe kadar şeffaf ve net bir süreç.
            </p>
          </div>

          <div className="process-steps reveal">
            {process.map((step, i) => (
              <div key={i} className="process-item">
                <div className="process-item__num">{step.step}</div>
                <div className="process-item__content">
                  <h3 className="process-item__title">{step.title}</h3>
                  <p className="process-item__desc">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="process-item__arrow" aria-hidden="true">
                    <ArrowRight size={16} color="var(--color-aqua-light)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="section--sm bg-aqua-light" aria-label="Bilgilendirme notu">
        <div className="container">
          <div className="info-strip reveal">
            <div className="info-strip__item">
              <Clock size={20} color="var(--color-aqua-dark)" />
              <div>
                <strong>Randevu Süreci</strong>
                <span>İletişim formu veya WhatsApp üzerinden başvuru yapılır.</span>
              </div>
            </div>
            <div className="info-strip__item">
              <Users size={20} color="var(--color-aqua-dark)" />
              <div>
                <strong>Başvuru Niteliği</strong>
                <span>Başvurular randevu değil, bilgi talebi niteliğindedir.</span>
              </div>
            </div>
            <div className="info-strip__item">
              <MapPin size={20} color="var(--color-aqua-dark)" />
              <div>
                <strong>Yüz Yüze</strong>
                <span>Yalova kliniğinde gerçekleştirilir.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .consulting-split {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .consulting-split--reverse > *:first-child {
          order: 2;
        }

        .consulting-split--reverse > *:last-child {
          order: 1;
        }

        .consulting-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          object-fit: cover;
          aspect-ratio: 4/3;
        }

        .consulting-desc {
          font-size: var(--text-lg);
          color: var(--color-text-mid);
          line-height: 1.7;
          margin: var(--space-5) 0;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-6);
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-base);
          color: var(--color-text-mid);
        }

        .consulting-note {
          font-size: var(--text-xs);
          color: var(--color-text-light);
          margin-top: var(--space-4);
          font-style: italic;
        }

        .process-steps {
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
          position: relative;
        }

        .process-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .process-item__num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-aqua-light), var(--color-aqua));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-4);
          box-shadow: 0 4px 12px rgba(91,191,181,0.3);
          flex-shrink: 0;
        }

        .process-item__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-2);
        }

        .process-item__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
        }

        .process-item__arrow {
          position: absolute;
          top: 24px;
          right: -12px;
          z-index: 1;
        }

        .info-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .info-strip__item {
          display: flex;
          gap: var(--space-3);
          align-items: flex-start;
        }

        .info-strip__item div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .info-strip__item strong {
          font-weight: 600;
          font-size: var(--text-sm);
          color: var(--color-text-dark);
        }

        .info-strip__item span {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
        }

        @media (max-width: 900px) {
          .consulting-split { grid-template-columns: 1fr; gap: var(--space-10); }
          .consulting-split--reverse > * { order: unset !important; }
          .process-steps { flex-direction: column; }
          .process-item { flex-direction: row; text-align: left; align-items: flex-start; }
          .process-item__arrow { display: none; }
          .info-strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};
