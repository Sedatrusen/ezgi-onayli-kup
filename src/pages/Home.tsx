import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, Leaf, Monitor, MapPin, Heart, BookOpen,
  Video, Users, Star, CheckCircle
} from 'lucide-react';
import ezgiPortrait from '../assets/ezgi-portrait.png';
import faceToFace from '../assets/face-to-face.png';
import onlineConsulting from '../assets/online-consulting.png';
import instaProfile from '../assets/insta-profile.png';
import heroPlantTopleft from '../assets/hero-plant-topleft.jpg';
import heroSeaBottomright from '../assets/hero-sea-bottomright.jpg';
import { blogPosts } from '../data/posts';

const services = [
  {
    icon: <Heart size={24} />,
    title: 'Sürdürülebilir Kilo Yönetimi',
    desc: 'Kısa vadeli değil, uzun vadeli ve sürdürülebilir çözümler.'
  },
  {
    icon: <Leaf size={24} />,
    title: 'Sağlıklı Beslenme',
    desc: 'Yaşam tarzınıza uygun, dengeli ve sağlıklı beslenme planları.'
  },
  {
    icon: <Monitor size={24} />,
    title: 'Online Danışmanlık',
    desc: "Türkiye'nin her yerinden online görüşme ve takip imkânı."
  },
  {
    icon: <Star size={24} />,
    title: 'Beslenme Alışkanlıklarını Düzenleme',
    desc: 'Yeme davranışını anlamaya ve dönüştürmeye yönelik bütüncül yaklaşım.'
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Kişiye Özel Programlar',
    desc: 'Hedeflerinize, yaşamınıza ve ihtiyaçlarınıza özel beslenme planları.'
  },
  {
    icon: <Heart size={24} />,
    title: 'Yeme Davranışı Danışmanlığı',
    desc: 'Duygusal yeme, sağlıklı alışkanlıklar ve farkındalık üzerine çalışmalar.'
  },
];

const recentPosts = blogPosts.slice(0, 4);

export const Home: React.FC = () => {
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
        <title>Diyetisyen Ezgi Onaylı Küp | Beslenme & Sağlıklı Yaşam</title>
        <meta name="description" content="Diyetisyen Ezgi Onaylı Küp — Yeme davranışında beden ve zihin bütünlüğü. Yalova'da yüz yüze, Türkiye'nin her yerinden online beslenme danışmanlığı." />
        <meta property="og:title" content="Diyetisyen Ezgi Onaylı Küp" />
        <meta property="og:description" content="Yeme davranışında beden ve zihin bütünlüğü. Sürdürülebilir kilo yönetimi." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ezgi Onaylı Küp",
          "jobTitle": "Diyetisyen",
          "url": "https://ezgionaylikup.com",
          "description": "Yeme davranışında beden ve zihin bütünlüğü.",
          "address": { "@type": "PostalAddress", "addressLocality": "Yalova", "addressCountry": "TR" }
        })}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Ana başlık bölümü">
        {/* Top-Left Soft Olive Plant Branch Image Overlay */}
        <div className="hero-top-left-plant" aria-hidden="true">
          <img src={heroPlantTopleft} alt="" className="hero-plant-img" />
        </div>

        {/* Bottom-Right Soft Sea Waves & Sandy Beach Image Layer */}
        <div className="hero-bottom-right-sea" aria-hidden="true">
          <img src={heroSeaBottomright} alt="" className="hero-sea-img" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content animate-fade-up">
            {/* Centered Brand Header (Mobile & Desktop) */}
            <div className="hero-centered-brand text-center mb-6">
              <div className="hero-lemon-icon-mark mb-2">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <path d="M22 6 C12 6 8 16 8 24 C8 32 15 38 22 38 C29 38 36 32 36 24 C36 16 32 6 22 6Z" fill="#E5C564" opacity="0.9" />
                  <path d="M22 6 C28 6 32 14 30 22 C28 30 22 36 16 34 C20 30 24 22 22 6Z" fill="#F7E9B0" opacity="0.8" />
                  <path d="M22 6 C20 2 16 2 14 4 C16 8 18 10 22 6Z" fill="#67826B" />
                  <path d="M22 6 C24 3 28 2 30 4 C28 8 26 10 22 6Z" fill="#4D6651" />
                </svg>
              </div>
              <p className="hero-brand-subtitle">D İ Y E T İ S Y E N</p>
              <h1 className="hero-brand-title">Ezgi Onaylı Küp</h1>
              <div className="hero-brand-divider">
                <span className="dot"></span>
              </div>
            </div>

            {/* Pill Badge */}
            <div className="text-center mb-6">
              <span className="badge badge-aqua hero__badge mx-auto">
                <Leaf size={12} /> YALOVA & TÜRKİYE GENELİ
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="hero__title text-center">
              Yeme davranışında<br />
              <span className="hero-title-script">beden ve zihin</span><br />
              bütünlüğü.
            </h2>

            <p className="hero__subtitle text-center">
              Yalova'daki kliniğimde yüz yüze,<br />
              Türkiye'nin her yerinden online beslenme danışmanlığı.
            </p>

            <div className="hero__ctas justify-center">
              <Link to="/online-danismanlik" className="btn btn-primary btn--lg hero-btn-pill" id="hero-online-btn">
                Online Danışmanlık
                <ArrowRight size={18} />
              </Link>
              <Link to="/iletisim" className="btn btn-secondary btn--lg hero-btn-pill" id="hero-contact-btn">
                Benimle İletişime Geç
              </Link>
            </div>

            {/* Bottom 3 Icons Bar */}
            <div className="hero-trust-bar">
              <div className="hero-trust-column">
                <MapPin size={22} className="hero-trust-icon" />
                <span>Yalova Kliniği</span>
              </div>
              <div className="hero-trust-divider"></div>
              <div className="hero-trust-column">
                <Monitor size={22} className="hero-trust-icon" />
                <span>Online Görüşme</span>
              </div>
              <div className="hero-trust-divider"></div>
              <div className="hero-trust-column">
                <Leaf size={22} className="hero-trust-icon" />
                <span>Kişiye Özel Program</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section bg-white" aria-label="Hizmetler">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Sana Nasıl Yardımcı Olabilirim?</div>
            <h2 className="section-title">Birlikte <em>neler çalışabiliriz</em></h2>
            <p className="section-subtitle">
              Beslenme danışmanlığını sadece diyet listesi vermek olarak görmüyorum.
              Beden, zihin ve yaşam tarzını bir bütün olarak değerlendiriyorum.
            </p>
          </div>

          <div className="services-grid reveal">
            {services.map((svc, i) => (
              <div key={i} className="service-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="service-card__icon" aria-hidden="true">{svc.icon}</div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section" aria-label="Hakkımda kısa tanıtım">
        <div className="container about-preview">
          <div className="about-preview__img-col reveal">
            <div className="about-preview__img-wrapper">
              <img
                src={ezgiPortrait}
                alt="Diyetisyen Ezgi Onaylı Küp — Profesyonel portre"
                className="about-preview__img"
              />
            </div>
          </div>

          <div className="about-preview__content reveal">
            <div className="section-eyebrow script-eyebrow">Merhaba! ♡</div>
            <h2 className="section-title">Ben Diyetisyen<br /><span className="ezgi-script-title">Ezgi Onaylı.</span></h2>
            <p className="about-preview__text">
              Beslenmenin sadece kilo vermek değil, bedeni ve zihni dengeye kavuşturmak
              olduğuna inanıyorum.
            </p>
            <p className="about-preview__text">
              Her danışanın yaşamına, ihtiyaçlarına ve hedeflerine uygun sürdürülebilir
              bir yol oluşturmak ve bu yolda en büyük desteğin yanında olmak en büyük amacım.
            </p>
            <Link to="/hakkimda" className="btn btn-sage mt-6" id="about-preview-btn">
              Hakkımda Daha Fazla
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONSULTING CARDS ── */}
      <section className="section bg-cream-dark" aria-label="Danışmanlık seçenekleri">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Nasıl Çalışabiliriz?</div>
            <h2 className="section-title">İki farklı <em>danışmanlık seçeneği</em></h2>
          </div>

          <div className="consulting-grid reveal">
            {/* Yüz yüze */}
            <div className="consulting-card">
              <div className="consulting-card__icon">
                <MapPin size={28} />
              </div>
              <div className="consulting-card__img">
                <img
                  src={faceToFace}
                  alt="Yüz yüze danışmanlık — Yalova kliniği"
                />
              </div>
              <div className="consulting-card__body">
                <span className="badge badge-sage">Yalova Kliniği</span>
                <h3>Yüz Yüze Danışmanlık</h3>
                <ul className="checklist">
                  {['Kapsamlı kişisel değerlendirme', 'Ölçüm ve analiz', 'Kişiye özel beslenme programı', 'Düzenli takip ve motivasyon'].map(item => (
                    <li key={item} className="checklist-item">
                      <div className="checklist-icon"><CheckCircle size={12} color="var(--color-sage)" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/danismanlik" className="btn btn-sage" id="face-to-face-btn">
                  Detaylı Bilgi <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Online */}
            <div className="consulting-card consulting-card--aqua">
              <div className="consulting-card__icon">
                <Monitor size={28} />
              </div>
              <div className="consulting-card__img">
                <img
                  src={onlineConsulting}
                  alt="Online danışmanlık — video görüşme"
                />
              </div>
              <div className="consulting-card__body">
                <span className="badge badge-aqua">Türkiye'nin Her Yerinden</span>
                <h3>Online Danışmanlık</h3>
                <ul className="checklist">
                  {['Online görüşme', 'Kişiye özel beslenme programı', 'Düzenli takip ve değerlendirme', 'Sürekli iletişim desteği'].map(item => (
                    <li key={item} className="checklist-item">
                      <div className="checklist-icon"><CheckCircle size={12} color="var(--color-aqua)" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/online-danismanlik" className="btn btn-primary" id="online-consulting-btn">
                  Detaylı Bilgi <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="section bg-white" aria-label="Beslenme Rehberi son yazılar">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Beslenme Rehberi</div>
            <h2 className="section-title">Güncel <em>içerikler</em></h2>
            <p className="section-subtitle">
              Bilimsel temelli yazılar, beslenme rehberleri ve pratik öneriler.
            </p>
          </div>

          <div className="blog-preview-grid reveal">
            {recentPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link to={`/beslenme-rehberi/${post.slug}`} className="blog-card__img-link" aria-label={post.title}>
                  <div className="blog-card__img">
                    <img src={post.image} alt={post.imageAlt} />
                  </div>
                </Link>
                <div className="blog-card__body">
                  <span className="badge badge-sage">{post.category}</span>
                  <h3 className="blog-card__title">
                    <Link to={`/beslenme-rehberi/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card__excerpt">{post.excerpt.substring(0, 100)}…</p>
                  <div className="blog-card__footer">
                    <span className="blog-card__read-time">{post.readTime} dk okuma</span>
                    <Link to={`/beslenme-rehberi/${post.slug}`} className="blog-card__cta">
                      Devamını Oku <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/beslenme-rehberi" className="btn btn-ghost btn--lg" id="all-posts-btn">
              Tüm Yazıları Gör <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM SECTION ── */}
      <section className="section bg-cream-dark" aria-label="Instagram Topluluğumuz">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Sosyal Medya</div>
            <h2 className="section-title">Instagram'da <em>Buluşalım</em></h2>
            <p className="section-subtitle">
              Günlük beslenme ipuçları, yeme davranışı farkındalıkları ve sağlıklı yaşam içeriklerim için beni Instagram'da takip edebilirsiniz.
            </p>
          </div>

          {/* Authentic Instagram Mobile/Desktop App Mockup Card */}
          <div className="insta-native-app-card reveal">
            {/* Top Header Bar */}
            <div className="insta-header-row">
              <div className="insta-avatar-col">
                <div className="insta-story-ring">
                  <img src={instaProfile} alt="Diyetisyen Ezgi Onaylı Küp" className="insta-profile-photo" />
                </div>
              </div>
              <div className="insta-counts-col">
                <div className="insta-stat flex-col">
                  <span className="stat-num">1.240</span>
                  <span className="stat-label">gönderi</span>
                </div>
                <div className="insta-stat flex-col">
                  <span className="stat-num">15.8k</span>
                  <span className="stat-label">takipçi</span>
                </div>
                <div className="insta-stat flex-col">
                  <span className="stat-num">480</span>
                  <span className="stat-label">takip</span>
                </div>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="insta-bio-block">
              <div className="insta-name-line">
                <h3 className="insta-real-name">Diyetisyen Ezgi Onaylı Küp</h3>
                <span className="insta-badge-check">✓</span>
              </div>
              <span className="insta-handle-sub">@diyetisyenezgionayli · Sağlık & Beslenme</span>
              <p className="insta-bio-text">
                🌿 Yeme davranışında beden ve zihin bütünlüğü.<br />
                📍 Yalova Kliniği & Online Danışmanlık<br />
                🌱 Sürdürülebilir kilo yönetimi ve beslenme farkındalığı.
              </p>
              <a href="https://www.instagram.com/diyetisyenezgionayli/" target="_blank" rel="noopener noreferrer" className="insta-bio-url">
                instagram.com/diyetisyenezgionayli/
              </a>
            </div>

            {/* Native Action Buttons Bar */}
            <div className="insta-actions-bar">
              <a
                href="https://www.instagram.com/diyetisyenezgionayli/"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn insta-btn-primary"
              >
                Takip Et
              </a>
              <a
                href="https://www.instagram.com/diyetisyenezgionayli/"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn insta-btn-secondary"
              >
                Mesaj Gönder
              </a>
            </div>

            {/* Tab Strip Icons (Posts Grid Tab) */}
            <div className="insta-tab-strip">
              <div className="insta-tab active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                <span>GÖNDERİLER</span>
              </div>
            </div>

            {/* Live Official Behold Instagram Widget Feed */}
            <div className="behold-widget-wrapper">
              <figure className="behold-container">
                {/* @ts-ignore */}
                <behold-widget feed-id="ohkBhtDHSnUneRor9dTg"></behold-widget>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMY TEASER ── */}
      <section className="section academy-teaser" aria-label="Ezgi Onaylı Akademi">
        <div className="container">
          <div className="academy-teaser__inner reveal">
            <div className="academy-teaser__content">
              <span className="badge badge-lemon">Yakında</span>
              <h2 className="section-title" style={{ color: 'white' }}>
                Ezgi Onaylı <em style={{ color: 'var(--color-lemon)' }}>Akademi</em>
              </h2>
              <p style={{ color: 'rgba(250,247,242,0.75)', fontSize: 'var(--text-lg)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                E-kitaplar, beslenme rehberleri, video eğitimler ve çok daha fazlası
                yakında burada olacak.
              </p>
              <div className="academy-teaser__features">
                {[
                  { icon: <BookOpen size={18} />, text: 'E-Kitaplar & Rehberler' },
                  { icon: <Video size={18} />, text: 'Video Eğitimler' },
                  { icon: <Users size={18} />, text: 'Grup Çalışmaları' },
                ].map((f) => (
                  <div key={f.text} className="academy-feature">
                    {f.icon}
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/akademi" className="btn btn--lg academy-teaser__btn" id="academy-teaser-btn">
                Akademiye Göz At <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="section--sm" aria-label="İletişim çağrısı">
        <div className="container">
          <div className="contact-cta reveal">
            <div>
              <h2 className="contact-cta__title">
                Benimle iletişime geç,<br />
                <em>sağlıklı ve mutlu bir sen'e ilk adımı at.</em> ♡
              </h2>
            </div>
            <div className="contact-cta__actions">
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn--lg"
                id="whatsapp-cta-btn"
              >
                WhatsApp ile Yaz
              </a>
              <Link to="/iletisim" className="btn btn-secondary btn--lg" id="contact-cta-btn">
                Randevu Talebi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          padding-top: calc(var(--navbar-height) + var(--space-4));
          padding-bottom: var(--space-12);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: #F9F5EF;
        }

        /* Top-Left Olive Branch Overlay */
        .hero-top-left-plant {
          position: absolute;
          top: 0;
          left: 0;
          width: 50vw;
          height: 60vh;
          max-width: 480px;
          max-height: 480px;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .hero-plant-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left top;
          mix-blend-mode: multiply;
          opacity: 0.85;
          filter: contrast(1.05) brightness(1.02);
          mask-image: radial-gradient(ellipse 85% 85% at 0% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 90%);
          -webkit-mask-image: radial-gradient(ellipse 85% 85% at 0% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 90%);
        }

       .hero-bottom-right-sea {
          position: absolute;
          right: 0;
          top: 0;
          width: 60vw;
          max-width: 800px;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .hero-sea-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          opacity: 0.82;
          filter: saturate(1.2) contrast(1.05) brightness(1.0);
          /* Fade from left edge: image fades into background. Also fade from bottom to hide sand */
          mask-image: linear-gradient(
            to left,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.55) 45%,
            rgba(0,0,0,0) 70%
          );
          -webkit-mask-image: linear-gradient(
            to left,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.55) 45%,
            rgba(0,0,0,0) 70%
          );
        }

        .hero__inner {
          position: relative;
          z-index: 3;
        }

        .hero__inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero__content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-brand-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .hero-brand-subtitle {
          font-size: var(--text-xs);
          letter-spacing: 0.25em;
          color: var(--color-text-mid);
          font-weight: 500;
          margin-bottom: 2px;
        }

        .hero-brand-title {
          font-family: var(--font-script);
          font-size: 3.2rem;
          color: var(--color-text-dark);
          line-height: 1.1;
          font-weight: 400;
        }

        .hero-brand-divider {
          width: 60px;
          height: 1px;
          background: var(--color-cream-border);
          margin: var(--space-3) auto 0;
          position: relative;
        }

        .hero-brand-divider .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--color-text-light);
          border-radius: 50%;
          top: -1.5px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: var(--text-xs);
          letter-spacing: 0.08em;
          background: rgba(139, 175, 136, 0.15);
          color: #4A6E47;
          font-weight: 600;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: var(--text-5xl);
          font-weight: 400;
          line-height: 1.25;
          color: #2D3E35;
          margin-bottom: var(--space-4);
        }

        .hero-title-script {
          font-family: var(--font-script);
          font-size: 1.15em;
          color: #5C7A58;
          font-style: italic;
          font-weight: 400;
        }

        .hero__subtitle {
          font-size: var(--text-lg);
          color: #6B7B71;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          max-width: 520px;
        }

        .hero__ctas {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          width: 100%;
          max-width: 340px;
          margin-bottom: var(--space-10);
        }

        .hero-btn-pill {
          border-radius: 30px !important;
          padding: 14px 28px !important;
          justify-content: center;
          font-weight: 500 !important;
          font-size: var(--text-base) !important;
        }

        .btn-primary.hero-btn-pill {
          background: #5E7A5A !important;
          border-color: #5E7A5A !important;
          color: white !important;
        }

        .btn-secondary.hero-btn-pill {
          background: transparent !important;
          border: 1px solid #7E987A !important;
          color: #2D3E35 !important;
        }

        /* Bottom 3 Trust Columns */
        .hero-trust-bar {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          width: 100%;
          max-width: 560px;
          padding-top: var(--space-6);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .hero-trust-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: var(--text-xs);
          color: #5A6D61;
          font-weight: 500;
        }

        .hero-trust-icon {
          color: #6B8B67;
        }

        .hero-trust-divider {
          width: 1px;
          height: 36px;
          background: rgba(0, 0, 0, 0.08);
        }

        /* Bottom Keywords Bar */
        .hero-bottom-keywords {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-4);
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #8A9B90;
          font-weight: 600;
          margin-top: var(--space-8);
        }

        .hero-bottom-keywords .bullet {
          font-size: 8px;
          opacity: 0.5;
        }

        .hero__title em {
          font-style: italic;
          color: var(--color-aqua-dark);
        }

        .hero__subtitle {
          font-size: var(--text-xl);
          color: var(--color-text-mid);
          line-height: 1.65;
          margin-bottom: var(--space-8);
        }

        .hero__ctas {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
          margin-bottom: var(--space-8);
        }

        .hero__trust {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-sm);
          color: var(--color-text-light);
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .trust-divider { opacity: 0.4; }

        .hero__visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero__img-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
        }

        .hero__img {
          width: 100%;
          max-width: 520px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          object-fit: cover;
          aspect-ratio: 4/3;
        }

        .hero__img-card {
          position: absolute;
          background: white;
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-sm);
          border: 1px solid var(--color-cream-border);
          animation: float 4s ease-in-out infinite;
        }

        .hero__img-card--1 {
          bottom: -16px;
          left: -24px;
          animation-delay: 0s;
        }

        .hero__img-card--2 {
          top: -16px;
          right: -24px;
          animation-delay: 2s;
        }

        .hero__img-card .card-icon {
          color: var(--color-aqua);
        }

        .hero__img-card div {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .hero__img-card strong {
          font-weight: 600;
          color: var(--color-text-dark);
          font-size: var(--text-sm);
        }

        .hero__img-card span {
          color: var(--color-text-light);
          font-size: var(--text-xs);
        }

        .hero__lemon {
          position: absolute;
          font-size: 2.5rem;
          opacity: 0.25;
          bottom: 80px;
          left: 40px;
          animation: float 5s ease-in-out infinite;
          pointer-events: none;
        }

        .hero__lemon--2 {
          font-size: 2rem;
          bottom: auto;
          left: auto;
          top: 120px;
          right: 20%;
          animation-delay: 2.5s;
        }

        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .service-card {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          background: var(--color-cream);
          transition: all var(--transition-normal);
          cursor: default;
        }

        .service-card:hover {
          border-color: var(--color-aqua-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .service-card__icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(91,191,181,0.12);
          color: var(--color-aqua-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .service-card__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          color: var(--color-text-dark);
          margin-bottom: var(--space-2);
        }

        .service-card__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
        }

        /* ── ABOUT PREVIEW ── */
        .about-preview {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .about-preview__img-wrapper {
          position: relative;
        }

        .about-preview__img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          object-fit: cover;
          aspect-ratio: 3/4;
          max-height: 560px;
        }

        .about-preview__badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--color-white);
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-aqua-dark);
          box-shadow: var(--shadow-md);
        }

        .about-preview__text {
          font-size: var(--text-lg);
          color: var(--color-text-mid);
          line-height: 1.7;
          margin-bottom: var(--space-4);
        }

        /* ── CONSULTING ── */
        .consulting-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .consulting-card {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-cream-border);
          overflow: hidden;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .consulting-card:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-4px);
        }

        .consulting-card__icon {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-sage);
        }

        .consulting-card--aqua .consulting-card__icon {
          color: var(--color-aqua);
        }

        .consulting-card__img {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .consulting-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .consulting-card:hover .consulting-card__img img {
          transform: scale(1.04);
        }

        .consulting-card__body {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          flex: 1;
        }

        .consulting-card__body h3 {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 500;
        }

        /* ── BLOG ── */
        .blog-preview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
        }

        .blog-card {
          background: var(--color-cream);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          overflow: hidden;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }

        .blog-card__img {
          height: 160px;
          overflow: hidden;
        }

        .blog-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .blog-card:hover .blog-card__img img {
          transform: scale(1.05);
        }

        .blog-card__body {
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          flex: 1;
        }

        .blog-card__title {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 500;
          line-height: 1.35;
        }

        .blog-card__title a {
          color: var(--color-text-dark);
          transition: color var(--transition-fast);
        }

        .blog-card__title a:hover { color: var(--color-aqua-dark); }

        .blog-card__excerpt {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.6;
          flex: 1;
        }

        .blog-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: var(--space-3);
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-cream-border);
        }

        .blog-card__read-time {
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .blog-card__cta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--color-aqua-dark);
          transition: gap var(--transition-fast);
        }

        .blog-card__cta:hover { gap: 8px; }

        /* ── ACADEMY TEASER ── */
        .academy-teaser {
          background: linear-gradient(135deg, var(--color-text-dark) 0%, #1A2B24 100%);
          margin-top: 0;
        }

        .academy-teaser__inner {
          padding: var(--space-16) 0;
          display: flex;
          align-items: center;
        }

        .academy-teaser__content {
          max-width: 640px;
        }

        .academy-teaser__content .badge-lemon {
          margin-bottom: var(--space-5);
        }

        .academy-teaser__features {
          display: flex;
          gap: var(--space-6);
          flex-wrap: wrap;
          margin-bottom: var(--space-8);
        }

        .academy-feature {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: rgba(250,247,242,0.65);
          font-size: var(--text-sm);
        }

        .academy-feature svg { color: var(--color-aqua); }

        .academy-teaser__btn {
          background: rgba(91,191,181,0.15);
          color: var(--color-aqua-light);
          border: 1.5px solid rgba(91,191,181,0.3);
        }

        .academy-teaser__btn:hover {
          background: var(--color-aqua);
          color: white;
          border-color: var(--color-aqua);
          transform: translateY(-2px);
        }

        /* ── CONTACT CTA ── */
        .contact-cta {
          background: linear-gradient(135deg, rgba(91,191,181,0.08), rgba(139,175,136,0.08));
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-xl);
          padding: var(--space-12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .contact-cta__title {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          font-weight: 400;
          color: var(--color-text-dark);
          line-height: 1.3;
        }

        .contact-cta__title em {
          font-style: italic;
          color: var(--color-aqua-dark);
        }

        .contact-cta__actions {
          display: flex;
          gap: var(--space-3);
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        /* ── AUTHENTIC INSTAGRAM NATIVE APP UI ── */
        .insta-native-app-card {
          max-width: 620px;
          margin: 0 auto;
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 24px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .insta-header-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .insta-avatar-col {
          flex-shrink: 0;
        }

        .insta-story-ring {
          padding: 3px;
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          border-radius: 50%;
        }

        .insta-profile-photo {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 3px solid #FFFFFF;
        }

        .insta-counts-col {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex: 1;
        }

        .insta-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.25;
        }

        .stat-num {
          font-family: var(--font-body);
          font-size: var(--text-lg);
          font-weight: 700;
          color: #262626;
        }

        .stat-label {
          font-size: 13px;
          color: #737373;
          font-weight: 400;
        }

        .insta-bio-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 14px;
          color: #262626;
          line-height: 1.5;
        }

        .insta-name-line {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .insta-real-name {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: #000000;
        }

        .insta-badge-check {
          background: #0095F6;
          color: #FFFFFF;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          font-size: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .insta-handle-sub {
          font-size: 13px;
          color: #737373;
          font-weight: 400;
          margin-bottom: 4px;
        }

        .insta-bio-text {
          font-size: 14px;
          color: #262626;
        }

        .insta-bio-url {
          color: #00376B;
          font-weight: 600;
          font-size: 13px;
        }

        .insta-actions-bar {
          display: flex;
          gap: 10px;
          margin-top: 4px;
        }

        .insta-btn {
          flex: 1;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.15s ease;
        }

        .insta-btn-primary {
          background: #0095F6;
          color: #FFFFFF;
        }

        .insta-btn-primary:hover {
          background: #1877F2;
        }

        .insta-btn-secondary {
          background: #EFEFEF;
          color: #000000;
        }

        .insta-btn-secondary:hover {
          background: #DBDBDB;
        }

        .insta-tab-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid #DBDBDB;
          margin-top: 8px;
          padding-top: 10px;
        }

        .insta-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #000000;
          border-top: 1px solid #000000;
          margin-top: -11px;
          padding-top: 10px;
        }

        .behold-widget-wrapper {
          width: 100%;
          overflow: hidden;
          margin-top: 4px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .insta-feed-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-preview-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .hero__inner { grid-template-columns: 1fr; text-align: center; }
          .hero__ctas { justify-content: center; }
          .hero__trust { justify-content: center; }
          .hero__visual { display: none; }
          .hero__title { font-size: var(--text-5xl); }
          .about-preview { grid-template-columns: 1fr; }
          .about-preview__img-col { max-width: 400px; margin: 0 auto; }
          .consulting-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .hero__title { font-size: var(--text-4xl); }
          .blog-preview-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          
          /* Contact CTA mobile responsiveness */
          .contact-cta { 
            padding: var(--space-6); 
            text-align: center; 
            flex-direction: column;
            align-items: center;
          }
          .contact-cta__actions { 
            justify-content: center; 
            width: 100%;
            flex-direction: column;
          }
          .contact-cta__actions .btn { width: 100%; }
          .contact-cta__title { font-size: var(--text-xl); }
          
          /* Native Insta App Card Mobile Fixes */
          .insta-native-app-card {
            padding: 16px;
            border-radius: 16px;
          }
          .insta-header-row {
            gap: 16px;
          }
          .insta-profile-photo {
            width: 72px;
            height: 72px;
          }
          .stat-num { font-size: 15px; }
          .stat-label { font-size: 11px; }
          .insta-actions-bar {
            gap: 8px;
          }
          .insta-btn {
            font-size: 13px;
            height: 34px;
          }
          .academy-teaser__features { justify-content: center; }
        }
      `}</style>
    </>
  );
};
