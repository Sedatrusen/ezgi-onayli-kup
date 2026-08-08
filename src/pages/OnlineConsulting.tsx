import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, MessageCircle, Mail, Send } from 'lucide-react';
import onlineConsulting from '../assets/online-consulting.png';

const steps = [
  { num: '01', title: 'Başvuru Formu', desc: 'Aşağıdaki formu doldurarak bilgi talebinde bulunun. İhtiyaçlarınızı ve beklentilerinizi kısaca paylaşın.' },
  { num: '02', title: 'İlk İletişim', desc: 'En kısa sürede sizinle iletişime geçilir ve ön görüşme için uygun zaman belirlenir.' },
  { num: '03', title: 'Online Görüşme', desc: 'Video platformu üzerinden gerçekleştirilecek görüşmede ihtiyaçlarınız ayrıntılı ele alınır.' },
  { num: '04', title: 'Kişiye Özel Program', desc: 'Değerlendirme sonrasında yaşam tarzınıza, ihtiyaçlarınıza ve hedeflerinize özel bir beslenme planı hazırlanır.' },
  { num: '05', title: 'Düzenli Takip', desc: 'Belirlenen aralıklarla online takip görüşmeleri yapılır, plan güncellenir.' },
];

const included = [
  'Video platformu üzerinden detaylı görüşme',
  'Kişiye özel beslenme planı',
  'Yeme davranışı değerlendirmesi',
  'Dijital form ile beslenme geçmişi analizi',
  'Belirlenen aralıklarda takip görüşmeleri',
  'Süreç içi mesajlaşma desteği',
  'Plan güncellemeleri',
];

export const OnlineConsulting: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Online Danışmanlık | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Türkiye'nin her yerinden online beslenme danışmanlığı. Video görüşme, kişiye özel program ve düzenli takip. Bilgi al ve başvur." />
      </Helmet>

      <header className="page-header">
        <div className="container">
          <p className="page-header__eyebrow animate-fade-up">Online Danışmanlık</p>
          <h1 className="page-header__title animate-fade-up animate-fade-up-delay-1">
            Türkiye'nin Her Yerinden<br />
            <span style={{ color: 'var(--color-aqua-dark)', fontStyle: 'italic' }}>Online Danışmanlık</span>
          </h1>
          <p className="page-header__subtitle animate-fade-up animate-fade-up-delay-2">
            Bulunduğunuz şehirden bağımsız olarak, aynı kaliteli ve kişiselleştirilmiş 
            beslenme danışmanlığı hizmetine erişebilirsiniz.
          </p>
        </div>
      </header>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-white" aria-label="Online danışmanlık nasıl çalışır">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <div className="section-eyebrow">Süreç</div>
            <h2 className="section-title">Nasıl <em>çalışır?</em></h2>
          </div>
          <div className="online-steps reveal">
            {steps.map((s) => (
              <div key={s.num} className="online-step">
                <div className="online-step__num">{s.num}</div>
                <div>
                  <h3 className="online-step__title">{s.title}</h3>
                  <p className="online-step__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-cream-dark" aria-label="Neler dahil">
        <div className="container online-included-grid">
          <div className="reveal">
            <img
              src={onlineConsulting}
              alt="Online beslenme danışmanlığı — video görüşme"
              style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', objectFit: 'cover', aspectRatio: '4/3' }}
            />
          </div>
          <div className="reveal">
            <div className="section-eyebrow">Kapsam</div>
            <h2 className="section-title">Neler <em>dahil?</em></h2>
            <ul className="online-included-list">
              {included.map(item => (
                <li key={item}>
                  <CheckCircle size={18} color="var(--color-aqua)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="online-note">
              <Clock size={16} />
              <p>
                <strong>Önemli Not:</strong> Online danışmanlık sürecinin içeriği, seans sıklığı 
                ve kapsamı bireysel ihtiyaçlara göre şekillendirilir. Detaylı bilgi için 
                lütfen başvuru formu aracılığıyla iletişime geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="section bg-white" aria-label="Başvuru formu" id="basvuru">
        <div className="container">
          <div className="online-form-wrapper">
            <div className="section-header reveal">
              <div className="section-eyebrow">Bilgi Talebi</div>
              <h2 className="section-title">Başvuru <em>Formu</em></h2>
              <p className="section-subtitle">
                Bu form bilgi talebi niteliğindedir; randevu oluşturmaz. 
                En kısa sürede sizinle iletişime geçilir.
              </p>
            </div>

            {submitted ? (
              <div className="form-success reveal">
                <div className="form-success__icon">✓</div>
                <h3>Başvurunuz Alındı!</h3>
                <p>En kısa sürede sizinle iletişime geçeceğim. Teşekkürler!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="online-form reveal" noValidate>
                <div className="grid-2">
                  <div className="form-group">
                    <label htmlFor="online-name" className="form-label">Ad Soyad *</label>
                    <input
                      id="online-name"
                      type="text"
                      className="form-input"
                      placeholder="Adınız Soyadınız"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="online-email" className="form-label">E-posta *</label>
                    <input
                      id="online-email"
                      type="email"
                      className="form-input"
                      placeholder="ornek@eposta.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="online-phone" className="form-label">Telefon</label>
                    <input
                      id="online-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+90 5XX XXX XX XX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="online-city" className="form-label">Şehir</label>
                    <input
                      id="online-city"
                      type="text"
                      className="form-input"
                      placeholder="İstanbul, Ankara…"
                      value={form.city}
                      onChange={e => setForm({ ...form, city: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: 'var(--space-4)' }}>
                  <label htmlFor="online-message" className="form-label">Mesajınız / Beklentileriniz</label>
                  <textarea
                    id="online-message"
                    className="form-textarea"
                    placeholder="Kendinizi kısaca tanıtın ve online danışmanlık hakkında sorularınızı veya beklentilerinizi paylaşın..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                  />
                </div>
                <div className="form-disclaimer">
                  <p>
                    Kişisel verileriniz yalnızca iletişim amacıyla işlenecek ve üçüncü taraflarla 
                    paylaşılmayacaktır. Detaylı bilgi için{' '}
                    <a href="/kvkk">KVKK Aydınlatma Metni</a>'ni inceleyebilirsiniz.
                  </p>
                </div>
                <button type="submit" className="btn btn-primary btn--lg form-submit" id="online-form-submit">
                  <Send size={16} />
                  Bilgi Talebi Gönder
                </button>
              </form>
            )}

            <div className="or-divider reveal">
              <span>veya doğrudan iletişime geçin</span>
            </div>

            <div className="contact-alternatives reveal">
              <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="alt-contact" id="online-whatsapp-btn">
                <MessageCircle size={20} />
                <div>
                  <strong>WhatsApp</strong>
                  <span>Hızlı yanıt için</span>
                </div>
                <ArrowRight size={14} />
              </a>
              <a href="mailto:info@ezgionaylikup.com" className="alt-contact" id="online-email-btn">
                <Mail size={20} />
                <div>
                  <strong>E-posta</strong>
                  <span>info@ezgionaylikup.com</span>
                </div>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .online-steps {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .online-step {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          padding: var(--space-5);
          background: var(--color-cream);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          transition: all var(--transition-normal);
        }

        .online-step:hover {
          border-color: var(--color-aqua-light);
          box-shadow: var(--shadow-md);
        }

        .online-step__num {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-aqua-light), var(--color-aqua));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(91,191,181,0.25);
        }

        .online-step__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-1);
        }

        .online-step__desc {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
        }

        .online-included-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .online-included-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin: var(--space-6) 0;
        }

        .online-included-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          font-size: var(--text-base);
          color: var(--color-text-mid);
        }

        .online-included-list li svg { flex-shrink: 0; margin-top: 2px; }

        .online-note {
          display: flex;
          gap: var(--space-3);
          background: rgba(91,191,181,0.08);
          border: 1px solid rgba(91,191,181,0.2);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          align-items: flex-start;
        }

        .online-note svg { flex-shrink: 0; color: var(--color-aqua-dark); margin-top: 2px; }
        .online-note p { font-size: var(--text-sm); color: var(--color-text-mid); line-height: 1.65; }

        .online-form-wrapper {
          max-width: 720px;
          margin: 0 auto;
        }

        .online-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .form-disclaimer {
          background: var(--color-cream);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-xs);
          color: var(--color-text-light);
          line-height: 1.65;
        }

        .form-disclaimer a {
          color: var(--color-aqua-dark);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .form-submit {
          align-self: flex-start;
        }

        .form-success {
          text-align: center;
          padding: var(--space-16);
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

        .or-divider {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin: var(--space-8) 0 var(--space-5);
          color: var(--color-text-light);
          font-size: var(--text-sm);
        }

        .or-divider::before,
        .or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-cream-border);
        }

        .contact-alternatives {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .alt-contact {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4) var(--space-5);
          background: var(--color-cream);
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-lg);
          transition: all var(--transition-normal);
          color: var(--color-text-dark);
        }

        .alt-contact:hover {
          border-color: var(--color-aqua);
          background: rgba(91,191,181,0.04);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .alt-contact svg:first-child { color: var(--color-aqua); flex-shrink: 0; }
        .alt-contact svg:last-child { margin-left: auto; color: var(--color-text-light); }
        .alt-contact div { display: flex; flex-direction: column; gap: 2px; }
        .alt-contact strong { font-weight: 600; font-size: var(--text-sm); }
        .alt-contact span { font-size: var(--text-xs); color: var(--color-text-mid); }

        @media (max-width: 900px) {
          .online-included-grid { grid-template-columns: 1fr; }
          .contact-alternatives { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};
