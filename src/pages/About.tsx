import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import ezgiPortrait from '../assets/ezgi-portrait-new.jpg';

const education = [
  { year: '20XX', title: 'Beslenme ve Diyetetik Lisans', institution: 'Üniversite Adı', desc: 'Beslenme bilimleri alanında lisans eğitimi tamamlandı.' },
  { year: '20XX', title: 'Yüksek Lisans / Uzmanlık Eğitimi', institution: 'Kurum Adı', desc: 'Yeme davranışı ve kilo yönetimi üzerine ileri çalışmalar.' },
];

const career = [
  { year: '20XX–20XX', title: 'Klinik Diyetisyen', institution: 'Kurum Adı', desc: 'Klinik beslenme alanında çalışmalar.' },
  { year: '20XX–Halen', title: 'Serbest Diyetisyen', institution: 'Ezgi Onaylı Küp Kliniği — Yalova', desc: 'Yüz yüze ve online beslenme danışmanlığı hizmetleri.' },
];

const values = [
  { icon: <Sparkles size={22} />, title: 'Bütüncül Yaklaşım', desc: 'Beslenmeyi sadece yiyecek seçimleri olarak değil; duygular, alışkanlıklar, yaşam tarzı ve beden-zihin bütünlüğü çerçevesinde ele alıyorum.' },
  { icon: <GraduationCap size={22} />, title: 'Bilimsel Temel', desc: 'Her önerim güncel bilimsel literatüre dayanır. Kanıt temelli beslenme yaklaşımı, çalışmamın temelini oluşturur.' },
  { icon: <Briefcase size={22} />, title: 'Kişiye Özellik', desc: 'Genel kalıplar yerine, her danışanın kendine özgü ihtiyaçlarını, hedeflerini ve yaşam koşullarını dikkate alarak plan oluştururum.' },
];

export const About: React.FC = () => {
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
        <title>Hakkımda | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Diyetisyen Ezgi Onaylı Küp hakkında: eğitim geçmişi, mesleki deneyim ve beslenme danışmanlığı yaklaşımı." />
      </Helmet>

      {/* ── PAGE HEADER ── */}
      <header className="page-header">
        <div className="container">
          <p className="page-header__eyebrow animate-fade-up">Hakkımda</p>
          <h1 className="page-header__title animate-fade-up animate-fade-up-delay-1">
            Diyetisyen<br /><span className="ezgi-script-title">Ezgi Onaylı Küp</span>
          </h1>
          <p className="page-header__subtitle animate-fade-up animate-fade-up-delay-2">
            Yasaklarla değil, farkındalıkla değişim. Sürdürülebilir, dengeli ve besleyici bir yaşam tarzı.
          </p>
        </div>
        <div className="page-header-leaf page-header-leaf--1" aria-hidden="true">🌿</div>
        <div className="page-header-leaf page-header-leaf--2" aria-hidden="true">🍋</div>
      </header>

      {/* ── INTRO ── */}
      <section className="section bg-white">
        <div className="container about-intro">
          <div className="about-intro__img reveal">
            <img
              src={ezgiPortrait}
              alt="Diyetisyen Ezgi Onaylı Küp — Klinik ortamında"
              className="about-intro__img-el"
            />
            <div className="about-intro__img-deco" aria-hidden="true" />
          </div>
          <div className="about-intro__text reveal">
            <div className="section-eyebrow script-eyebrow">Merhaba!</div>
            <h2 className="section-title">Ben <span className="ezgi-script-title">Ezgi Onaylı Küp.</span></h2>
            <p>
              Sağlıklı bir yaşamın, yasaklarla değil farkındalıkla mümkün olduğuna inanıyorum.
            </p>
            <p style={{ marginTop: 'var(--space-3)' }}>
              Sürdürülebilir, dengeli ve besleyici bir yaşam tarzı için buradayım.
            </p>
            <p style={{ marginTop: 'var(--space-3)' }}>
              Bilimsel yaklaşım, gerçekçi planlar ve sana özel destekle; sadece kilo vermeyi değil, kendinle barışık bir yaşamı hedefliyoruz.
            </p>
            <p style={{ marginTop: 'var(--space-3)' }}>
              Birlikte, sana iyi gelen seçimlerle güçlü bir dönüşüm yaratabiliriz.
            </p>
            <p style={{ marginTop: 'var(--space-4)' }}>
              Yalova'daki kliniğimde yüz yüze çalışıyorum; aynı zamanda Türkiye'nin 
              her yerinden danışanlara online görüşme imkânı sunuyorum.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
              <Link to="/danismanlik" className="btn btn-primary">
                Danışmanlık Hizmetleri <ArrowRight size={16} />
              </Link>
              <Link to="/iletisim" className="btn btn-secondary">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section bg-cream-dark">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Çalışma Yaklaşımım</div>
            <h2 className="section-title">Temel <em>değerlerim</em></h2>
          </div>
          <div className="values-grid reveal">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-timeline-grid">
            <div className="reveal">
              <div className="section-eyebrow">Eğitim</div>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>Akademik <em>geçmiş</em></h2>
              <div className="timeline" style={{ marginTop: 'var(--space-8)' }}>
                {education.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot"><GraduationCap size={14} /></div>
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-institution">{item.institution}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="section-eyebrow">Deneyim</div>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>Mesleki <em>geçmiş</em></h2>
              <div className="timeline" style={{ marginTop: 'var(--space-8)' }}>
                {career.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot"><Briefcase size={14} /></div>
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-institution">{item.institution}</p>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEVZUAT NOTE ── */}
      <section className="section--sm bg-aqua-light">
        <div className="container">
          <div className="mevzuat-note reveal">
            <p>
              <strong>Önemli Bilgi:</strong> Bu web sitesi, Sağlık Hizmetlerinde Tanıtım ve 
              Bilgilendirme Faaliyetleri Hakkında Yönetmelik kapsamında hazırlanmıştır. 
              Sitedeki tüm içerikler genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye 
              niteliği taşımaz. Kişiye özel değerlendirme için lütfen uzman diyetisyen desteği alın.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          position: relative;
          overflow: hidden;
        }

        .page-header-leaf {
          position: absolute;
          font-size: 4rem;
          opacity: 0.1;
          pointer-events: none;
          animation: float 5s ease-in-out infinite;
        }

        .page-header-leaf--1 { top: 20px; right: 10%; animation-delay: 0s; }
        .page-header-leaf--2 { bottom: 20px; right: 20%; animation-delay: 2.5s; }

        .about-intro {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: var(--space-16);
          align-items: center;
        }

        .about-intro__img {
          position: relative;
        }

        .about-intro__img-el {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          object-fit: cover;
          aspect-ratio: 3/4;
          max-height: 540px;
        }

        .about-intro__img-deco {
          position: absolute;
          inset: -12px;
          border: 2px solid rgba(91,191,181,0.2);
          border-radius: calc(var(--radius-xl) + 8px);
          pointer-events: none;
        }

        .about-intro__text p {
          font-size: var(--text-lg);
          color: var(--color-text-mid);
          line-height: 1.75;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .value-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          padding: var(--space-8);
          transition: all var(--transition-normal);
        }

        .value-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
          border-color: var(--color-aqua-light);
        }

        .value-card__icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(91,191,181,0.1);
          color: var(--color-aqua-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
        }

        .value-card__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-3);
        }

        .value-card__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
        }

        .about-timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .timeline-item {
          display: flex;
          gap: var(--space-5);
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 40px;
          bottom: -24px;
          width: 1px;
          background: linear-gradient(to bottom, var(--color-aqua-light), transparent);
        }

        .timeline-item:last-child::before { display: none; }

        .timeline-dot {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(91,191,181,0.12);
          border: 2px solid var(--color-aqua-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-aqua-dark);
          margin-top: 2px;
        }

        .timeline-content { flex: 1; }

        .timeline-year {
          font-size: var(--text-xs);
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--color-aqua-dark);
          text-transform: uppercase;
          display: block;
          margin-bottom: var(--space-1);
        }

        .timeline-title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-1);
        }

        .timeline-institution {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-sage-dark);
          margin-bottom: var(--space-2);
        }

        .timeline-desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
        }

        .mevzuat-note {
          background: rgba(91,191,181,0.1);
          border: 1px solid rgba(91,191,181,0.25);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-6);
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .about-intro { grid-template-columns: 1fr; }
          .about-intro__img { max-width: 380px; margin: 0 auto; }
          .values-grid { grid-template-columns: 1fr; }
          .about-timeline-grid { grid-template-columns: 1fr; gap: var(--space-12); }
        }
      `}</style>
    </>
  );
};
