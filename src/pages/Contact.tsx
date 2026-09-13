import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '', type: 'Online Danışmanlık', message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Merhaba Ezgi Hanım, web sitenizden ulaşıyorum.',
      '',
      `*İsim:* ${form.name.trim() || 'Belirtilmedi'}`,
      `*Konu:* ${form.type}`,
      `*Mesaj:* ${form.message.trim() || 'Bilgi almak istiyorum.'}`
    ];
    const text = lines.join('\n');
    const url = `https://api.whatsapp.com/send?phone=905542090903&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>İletişim | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Diyetisyen Ezgi Onaylı Küp ile iletişime geçin. Yüz yüze Yalova kliniği veya online danışmanlık hakkında bilgi talep edin." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Diyetisyen Ezgi Onaylı Küp",
          "description": "Beslenme danışmanlığı — yüz yüze ve online",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bağlarbaşı Mah. Başçılar Sok. No:1 Daire:9 (Life 226)",
            "addressLocality": "Yalova",
            "addressCountry": "TR"
          },
          "telephone": "+905542090903",
          "email": "dytezgionayli@gmail.com",
          "url": "https://ezgionaylikup.com"
        })}</script>
      </Helmet>

      <header className="page-header">
        <div className="container">
          <span className="badge badge-olive mb-3">İletişim & Randevu</span>
          <h1 className="page-header__title">Gelin, Birlikte Başlayalım</h1>
          <p className="page-header__lead">
            Sağlıklı bir beslenme alışkanlığı edinmek için ilk adımı atın. 
            Aşağıdaki kanallardan dilediğinizi seçebilirsiniz.
          </p>
        </div>
      </header>

      <section className="section" aria-label="İletişim formu ve bilgileri">
        <div className="container contact-layout">

          {/* Contact Info */}
          <div className="contact-info reveal">
            <h2 className="contact-info__title">Nasıl ulaşabilirsiniz?</h2>
            
            <div className="contact-methods">
              <a
                href="https://wa.me/905542090903"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method contact-method--whatsapp"
                id="contact-whatsapp"
              >
                <div className="contact-method__icon">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Hızlı yanıt için tercih edilir</span>
                </div>
              </a>

              <a href="tel:+905542090903" className="contact-method" id="contact-phone">
                <div className="contact-method__icon">
                  <Phone size={22} />
                </div>
                <div>
                  <strong>Telefon</strong>
                  <span>+90 (554) 209 09 03</span>
                </div>
              </a>

              <a href="mailto:dytezgionayli@gmail.com" className="contact-method" id="contact-email">
                <div className="contact-method__icon">
                  <Mail size={22} />
                </div>
                <div>
                  <strong>E-posta</strong>
                  <span>dytezgionayli@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/diyetisyenezgionayli/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                id="contact-instagram"
              >
                <div className="contact-method__icon">
                  <ExternalLink size={22} />
                </div>
                <div>
                  <strong>Instagram</strong>
                  <span>@diyetisyenezgionayli</span>
                </div>
              </a>
            </div>

            <div className="clinic-info">
              <h3 className="clinic-info__title">
                <MapPin size={16} />
                Klinik Bilgileri
              </h3>
              <p className="clinic-info__address">
                Bağlarbaşı Mah. Başçılar Sok. No:1 Daire:9 (Life 226)<br />
                Yalova
              </p>
              <div className="clinic-hours">
                <Clock size={14} />
                <div>
                  <strong>Çalışma Saatleri</strong>
                  <span>Bilgi için iletişime geçin</span>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <p>
                <strong>Başvuru Niteliği:</strong> İletişim formu ve mesajlaşma kanalları 
                aracılığıyla yapılan başvurular <em>bilgi talebi</em> niteliğindedir; 
                randevu oluşturmaz. Değerlendirme sonrasında sizinle iletişime geçilir.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper reveal">
            <h2 className="contact-form__title">WhatsApp ile Mesaj Gönderin</h2>
            <p className="contact-form__subtitle">
              Aşağıdaki formu doldurup gönderdiğinizde mesajınız doğrudan WhatsApp üzerinden Ezgi Onaylı Küp'e iletilecektir.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Adınız Soyadınız *</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="Adınız Soyadınız"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-type" className="form-label">Danışmanlık / Konu Türü</label>
                <select
                  id="contact-type"
                  className="form-select"
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                >
                  <option value="Online Danışmanlık">Online Danışmanlık</option>
                  <option value="Yüz Yüze Danışmanlık (Yalova)">Yüz Yüze Danışmanlık (Yalova)</option>
                  <option value="Kilo Yönetimi & Beslenme">Kilo Yönetimi & Beslenme</option>
                  <option value="Akademi İçerikleri">Akademi İçerikleri</option>
                  <option value="Diğer Sorular">Diğer Sorular</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Mesajınız / Notunuz</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Hedeflerinizden, sormak istediklerinizden veya randevu talebinizden bahsedin..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                />
              </div>

              <button type="submit" className="btn btn-primary btn--lg" id="contact-form-submit" style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#fff' }}>
                <MessageCircle size={18} />
                WhatsApp'ta Sohbeti Başlat
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-16);
          align-items: flex-start;
        }

        .contact-info__title,
        .contact-form__title {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          font-weight: 500;
          margin-bottom: var(--space-6);
          color: var(--color-text-dark);
        }

        .contact-form__subtitle {
          font-size: var(--text-base);
          color: var(--color-text-mid);
          margin-bottom: var(--space-8);
          line-height: 1.65;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-bottom: var(--space-8);
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4) var(--space-5);
          background: var(--color-cream);
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
          color: var(--color-text-dark);
        }

        .contact-method:hover {
          border-color: var(--color-aqua);
          background: rgba(91,191,181,0.04);
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }

        .contact-method--whatsapp:hover {
          border-color: #25D366;
          background: rgba(37,211,102,0.04);
        }

        .contact-method__icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(91,191,181,0.12);
          color: var(--color-aqua-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-method--whatsapp .contact-method__icon {
          background: rgba(37,211,102,0.12);
          color: #25D366;
        }

        .contact-method div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-method strong {
          font-weight: 600;
          font-size: var(--text-sm);
        }

        .contact-method span {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
        }

        .clinic-info {
          background: var(--color-cream-dark);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin-bottom: var(--space-6);
        }

        .clinic-info__title {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-3);
          color: var(--color-text-dark);
        }

        .clinic-info__title svg { color: var(--color-aqua); }

        .clinic-info__address {
          font-size: var(--text-base);
          color: var(--color-text-mid);
          line-height: 1.65;
          margin-bottom: var(--space-4);
        }

        .clinic-info__address small {
          color: var(--color-text-light);
          font-size: var(--text-xs);
        }

        .clinic-hours {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .clinic-hours svg { color: var(--color-aqua); margin-top: 2px; flex-shrink: 0; }

        .clinic-hours div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .clinic-hours strong { font-weight: 600; font-size: var(--text-sm); }
        .clinic-hours span { font-size: var(--text-sm); color: var(--color-text-mid); }

        .contact-note {
          background: rgba(91,191,181,0.06);
          border: 1px solid rgba(91,191,181,0.18);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
        }

        .contact-note em { color: var(--color-aqua-dark); font-style: italic; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .form-success {
          text-align: center;
          padding: var(--space-12);
        }

        .form-success__icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(91,191,181,0.15);
          color: var(--color-aqua-dark);
          font-size: var(--text-2xl);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-5);
          border: 2px solid rgba(91,191,181,0.3);
        }

        .form-success h3 {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          margin-bottom: var(--space-3);
        }

        .form-success p { color: var(--color-text-mid); font-size: var(--text-lg); }

        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};
