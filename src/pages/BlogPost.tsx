import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/posts';
import blogMediterranean from '../assets/blog-mediterranean.png';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) return <Navigate to="/beslenme-rehberi" replace />;

  // Simple markdown-like renderer
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n\n')
      .map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} className="post-h2">{block.replace('## ', '')}</h2>;
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(l => l.startsWith('- '));
          return (
            <ul key={i} className="post-list">
              {items.map((item, j) => (
                <li key={j}>{item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
              ))}
            </ul>
          );
        }
        if (block.startsWith('*') && block.endsWith('*')) {
          return <p key={i} className="post-disclaimer">{block.replace(/\*/g, '')}</p>;
        }
        return <p key={i} className="post-p">{block}</p>;
      });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Diyetisyen Ezgi Onaylı Küp</title>
        <meta name="description" content={post.excerpt.substring(0, 155)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt.substring(0, 155)} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt.substring(0, 155),
          "author": { "@type": "Person", "name": "Ezgi Onaylı Küp" },
          "publisher": { "@type": "Organization", "name": "Diyetisyen Ezgi Onaylı Küp" },
          "datePublished": post.publishedAt,
          "image": "https://ezgionaylikup.com/blog-mediterranean.png"
        })}</script>
      </Helmet>

      {/* Back */}
      <div className="post-back-bar">
        <div className="container">
          <Link to="/beslenme-rehberi" className="post-back-link">
            <ArrowLeft size={16} /> Beslenme Rehberi
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="post-hero">
        <img src={blogMediterranean} alt={post.imageAlt} className="post-hero-img" />
        <div className="post-hero-overlay" aria-hidden="true" />
      </div>

      {/* Article */}
      <div className="container post-layout">
        <article className="post-article" itemScope itemType="https://schema.org/Article">
          <header className="post-header">
            <div className="post-meta">
              <span className="badge badge-sage">{post.category}</span>
              <span className="post-read-time">
                <Clock size={13} /> {post.readTime} dk okuma
              </span>
              <time dateTime={post.publishedAt} itemProp="datePublished" className="post-date">
                {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </div>
            <h1 className="post-title" itemProp="headline">{post.title}</h1>
            <p className="post-excerpt" itemProp="description">{post.excerpt}</p>
            <div className="post-author" itemProp="author" itemScope itemType="https://schema.org/Person">
              <div className="post-author__avatar">EÖ</div>
              <div>
                <span itemProp="name" className="post-author__name">Diyetisyen Ezgi Onaylı Küp</span>
                <span className="post-author__role">Diyetisyen</span>
              </div>
            </div>
          </header>

          <div className="post-content" itemProp="articleBody">
            {renderContent(post.content)}
          </div>

          {/* Disclaimer */}
          <div className="post-content-disclaimer">
            <strong>⚠️ Önemli Bilgilendirme:</strong> Bu içerik yalnızca genel bilgilendirme 
            amaçlıdır ve bireysel tıbbi tavsiye, tanı veya tedavi yerine geçmez. 
            Sağlığınızla ilgili kararlar için lütfen bir sağlık profesyoneline danışın.
          </div>
        </article>

        {/* Sidebar */}
        <aside className="post-sidebar" aria-label="Diğer içerikler">
          <div className="sidebar-sticky">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Diğer Yazılar</h3>
              <div className="sidebar-posts">
                {otherPosts.map(p => (
                  <Link key={p.id} to={`/beslenme-rehberi/${p.slug}`} className="sidebar-post">
                    <span className="sidebar-post__title">{p.title}</span>
                    <span className="sidebar-post__time"><Clock size={11} /> {p.readTime} dk</span>
                  </Link>
                ))}
              </div>
              <Link to="/beslenme-rehberi" className="btn btn-ghost btn--sm sidebar-all">
                Tüm Yazılar <ArrowRight size={13} />
              </Link>
            </div>

            <div className="sidebar-card sidebar-cta">
              <h3>Kişisel danışmanlık almak ister misiniz?</h3>
              <p>Bu içerik genel bilgilendirme amaçlıdır. Kişiye özel destek için benimle iletişime geçebilirsiniz.</p>
              <Link to="/iletisim" className="btn btn-primary btn--sm">
                Bilgi Al
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .post-back-bar {
          padding: calc(var(--navbar-height) + var(--space-4)) 0 var(--space-2);
          background: var(--color-cream);
        }

        .post-back-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          transition: color var(--transition-fast);
        }

        .post-back-link:hover { color: var(--color-aqua-dark); }

        .post-hero {
          height: 380px;
          position: relative;
          overflow: hidden;
        }

        .post-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(250,247,242,0.8) 100%);
        }

        .post-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: var(--space-12);
          padding-top: var(--space-10);
          padding-bottom: var(--space-16);
          align-items: flex-start;
        }

        .post-article {
          max-width: 720px;
        }

        .post-meta {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-wrap: wrap;
          margin-bottom: var(--space-5);
        }

        .post-read-time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .post-date {
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .post-title {
          font-family: var(--font-display);
          font-size: var(--text-5xl);
          font-weight: 500;
          line-height: 1.15;
          color: var(--color-text-dark);
          margin-bottom: var(--space-5);
        }

        .post-excerpt {
          font-size: var(--text-xl);
          color: var(--color-text-mid);
          line-height: 1.65;
          border-left: 3px solid var(--color-aqua-light);
          padding-left: var(--space-5);
          margin-bottom: var(--space-6);
          font-style: italic;
        }

        .post-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4) 0;
          border-top: 1px solid var(--color-cream-border);
          border-bottom: 1px solid var(--color-cream-border);
          margin-bottom: var(--space-10);
        }

        .post-author__avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-aqua-light), var(--color-aqua));
          color: white;
          font-size: var(--text-xs);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .post-author__name {
          display: block;
          font-weight: 600;
          font-size: var(--text-sm);
          color: var(--color-text-dark);
        }

        .post-author__role {
          display: block;
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .post-content { line-height: 1.8; }

        .post-h2 {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          font-weight: 500;
          color: var(--color-text-dark);
          margin: var(--space-8) 0 var(--space-4);
        }

        .post-p {
          font-size: var(--text-lg);
          color: var(--color-text-mid);
          margin-bottom: var(--space-5);
          line-height: 1.8;
        }

        .post-list {
          margin: 0 0 var(--space-5) var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .post-list li {
          font-size: var(--text-lg);
          color: var(--color-text-mid);
          line-height: 1.7;
          position: relative;
        }

        .post-list li::before {
          content: '🌿';
          position: absolute;
          left: -28px;
          font-size: 0.9rem;
        }

        .post-disclaimer {
          font-size: var(--text-sm);
          color: var(--color-text-light);
          font-style: italic;
          margin-top: var(--space-4);
        }

        .post-content-disclaimer {
          margin-top: var(--space-10);
          background: rgba(232,216,124,0.1);
          border: 1px solid rgba(232,216,124,0.3);
          border-radius: var(--radius-md);
          padding: var(--space-5);
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.7;
        }

        /* Sidebar */
        .post-sidebar {}

        .sidebar-sticky {
          position: sticky;
          top: calc(var(--navbar-height) + var(--space-4));
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .sidebar-card {
          background: var(--color-white);
          border: 1px solid var(--color-cream-border);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
        }

        .sidebar-title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          font-weight: 500;
          margin-bottom: var(--space-4);
          color: var(--color-text-dark);
        }

        .sidebar-posts {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: var(--space-4);
        }

        .sidebar-post {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--color-cream-border);
          transition: all var(--transition-fast);
          color: var(--color-text-dark);
        }

        .sidebar-post:last-child { border-bottom: none; }
        .sidebar-post:hover { color: var(--color-aqua-dark); }

        .sidebar-post__title {
          font-size: var(--text-sm);
          font-weight: 500;
          line-height: 1.4;
        }

        .sidebar-post__time {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: var(--text-xs);
          color: var(--color-text-light);
        }

        .sidebar-all {
          width: 100%;
          justify-content: center;
        }

        .sidebar-cta {
          background: linear-gradient(135deg, rgba(91,191,181,0.06), rgba(139,175,136,0.06));
        }

        .sidebar-cta h3 {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 500;
          margin-bottom: var(--space-3);
          color: var(--color-text-dark);
        }

        .sidebar-cta p {
          font-size: var(--text-sm);
          color: var(--color-text-mid);
          line-height: 1.65;
          margin-bottom: var(--space-4);
        }

        @media (max-width: 900px) {
          .post-layout {
            grid-template-columns: 1fr;
          }
          .post-sidebar { order: -1; }
          .sidebar-sticky { position: static; }
          .post-title { font-size: var(--text-4xl); }
          .post-hero { height: 260px; }
        }
      `}</style>
    </>
  );
};
