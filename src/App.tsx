
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Consulting } from './pages/Consulting';
import { OnlineConsulting } from './pages/OnlineConsulting';
import { Academy } from './pages/Academy';
import { NutritionGuide } from './pages/NutritionGuide';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { KVKK } from './pages/KVKK';

function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', gap: '1.5rem', textAlign: 'center', paddingTop: 'var(--navbar-height)'
    }}>
      <div style={{ fontSize: '4rem' }}>🌿</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)' }}>Sayfa Bulunamadı</h1>
      <p style={{ color: 'var(--color-text-mid)' }}>Aradığınız sayfa mevcut değil.</p>
      <a href="/" className="btn btn-primary">Ana Sayfaya Dön</a>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<About />} />
            <Route path="/danismanlik" element={<Consulting />} />
            <Route path="/online-danismanlik" element={<OnlineConsulting />} />
            <Route path="/akademi" element={<Academy />} />
            <Route path="/beslenme-rehberi" element={<NutritionGuide />} />
            <Route path="/beslenme-rehberi/:slug" element={<BlogPost />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kvkk" element={<KVKK />} />
            <Route path="/gizlilik" element={<KVKK />} />
            <Route path="/cerez" element={<KVKK />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
