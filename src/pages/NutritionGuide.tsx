import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { blogPosts } from '../data/posts';

type Category = 'hepsi' | 'yazı' | 'video' | 'rehber';

export const NutritionGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('hepsi');
  const [query, setQuery] = useState('');

  const filtered = blogPosts.filter(post => {
    const matchCat = activeCategory === 'hepsi' || post.category === activeCategory;
    const matchSearch = query === '' ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchSearch;
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

  return (
    <>
      <Helmet>
        <title>Beslenme Rehberi | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content="Bilimsel temelli beslenme yazıları, rehberler ve videolar. Akdeniz tipi beslenme, yeme davranışı, sürdürülebilir kilo yönetimi ve daha fazlası." />
      </Helmet>

      <header className="page-header">
        <div className="container">
          <p className="page-header__eyebrow animate-fade-up">Beslenme Rehberi</p>
          <h1 className="page-header__title animate-fade-up animate-fade-up-delay-1">
            Bilimsel temelli<br />
            <span style={{ color: 'var(--color-aqua-dark)', fontStyle: 'italic' }}>beslenme içerikleri</span>
          </h1>
          <p className="page-header__subtitle animate-fade-up animate-fade-up-delay-2">
            Genel bilgilendirme amaçlı yazılar, beslenme rehberleri ve içerikler. 
            Tüm içerikler güncel bilimsel kaynaklara dayanmaktadır.
          </p>
        </div>
      </header>

      {/* ── FILTER + SEARCH ── */}
      <section className="section--sm bg-white sticky-filter" aria-label="Filtreleme">
        <div className="container">
          <div className="guide-toolbar reveal">
            <div className="guide-filter-tabs" role="tablist" aria-label="İçerik kategorileri">
              {(['hepsi', 'yazı', 'video', 'rehber'] as Category[]).map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`filter-tab${activeCategory === cat ? ' filter-tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`tab-${cat}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="guide-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                className="form-input guide-search-input"
                placeholder="İçeriklerde ara…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="İçeriklerde arama"
                id="blog-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="section bg-cream-dark" aria-label="İçerik listesi">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>Arama kriterlerine uygun içerik bulunamadı.</p>
            </div>
          ) : (
            <div className="guide-grid">
              {filtered.map((post, i) => (
                <article
                  key={post.id}
                  className="guide-card reveal"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Link to={`/beslenme-rehberi/${post.slug}`} className="guide-card__img-link" aria-label={post.title}>
                    <div className="guide-card__img">
                      <img src={post.image} alt={post.imageAlt} />
                      <span className="guide-card__cat-badge">{post.category}</span>
                    </div>
                  </Link>
                  <div className="guide-card__body">
                    <h2 className="guide-card__title">
                      <Link to={`/beslenme-rehberi/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="guide-card__excerpt">{post.excerpt.substring(0, 140)}…</p>
                    <div className="guide-card__meta">
                      <span className="guide-card__time">
                        <Clock size={13} />
                        {post.readTime} dk okuma
                      </span>
                      <Link
                        to={`/beslenme-rehberi/${post.slug}`}
                        className="guide-card__cta"
                        aria-label={`${post.title} yazısını oku`}
                      >
                        Devamını Oku <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="container" style={{ marginTop: 'var(--space-12)' }}>
          <div className="guide-disclaimer reveal">
            <p>
              <strong>Önemli:</strong> Bu sayfadaki içerikler genel bilgilendirme ve eğitim amaçlıdır; 
              bireysel tıbbi tavsiye veya tanı niteliği taşımaz. Kişiye özel beslenme danışmanlığı 
              için lütfen bir sağlık profesyoneline başvurun.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .guide-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
          padding: var(--space-3) 0;
        }

        .guide-filter-tabs {
          display: flex;
          gap: var(--space-2);
          background: var(--color-cream);
          border-radius: var(--radius-full);
          padding: var(--space-1);
          border: 1px solid var(--color-cream-border);
        }

        .filter-tab {
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 400;
          color: var(--color-text-mid);
          border: none;
          background: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .filter-tab:hover { color: var(--color-aqua-dark); }

        .filter-tab--active {
          background: var(--color-aqua);
          color: white;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(91,191,181,0.3);
        }

        .guide-search {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--color-cream);
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-4);
        }

        .guide-search svg { color: var(--color-text-light); flex-shrink: 0; }

        .guide-search-input {
          border: none;
          background: none;
          padding: 0;
          border-radius: 0;
          min-width: 220px;
          color: var(--color-text-dark);
        }

        .guide-search-input:focus { box-shadow: none; }

        .guide-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .guide-card {
          background: var(--color-white);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-cream-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }

        .guide-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .guide-card__img {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .guide-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .guide-card:hover .guide-card__img img { transform: scale(1.04); }

        .guide-card__cat-badge {
          position: absolute;
          top: var(--space-3);
          left: var(--space-3);
          background: rgba(250,247,242,0.92);
          backdrop-filter: blur(4px);
          color: var(--color-text-dark);
          font-size: var(--text-xs);
          font-weight: 600;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .guide-card__body {
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          flex: 1;
        }

        .guide-card__title {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 500;
          line-height: 1.3;
        }

        .guide-card__title a {
          color: var(--color-text-dark);
          transition: color var(--transition-fast);
        }

        .guide-card__title a:hover { color: var(--color-aqua-dark); }

        .guide-card__excerpt {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
          flex: 1;
        }

        .guide-card__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-cream-border);
        }

        .guide-card__time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .guide-card__cta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--color-aqua-dark);
          transition: gap var(--transition-fast);
        }

        .guide-card__cta:hover { gap: 8px; }

        .no-results {
          text-align: center;
          padding: var(--space-16);
          color: var(--color-text-mid);
          font-size: var(--text-lg);
        }

        .guide-disclaimer {
          background: rgba(91,191,181,0.06);
          border: 1px solid rgba(91,191,181,0.18);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-5);
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .guide-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .guide-grid { grid-template-columns: 1fr; }
          .guide-toolbar { flex-direction: column; align-items: stretch; }
          .guide-search-input { min-width: 0; }
        }
      `}</style>
    </>
  );
};
