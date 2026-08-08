import React from 'react';
import { Helmet } from 'react-helmet-async';

export const KVKK: React.FC = () => (
  <>
    <Helmet>
      <title>KVKK Aydınlatma Metni | Diyetisyen Ezgi Onaylı Küp</title>
    </Helmet>
    <div style={{ paddingTop: 'calc(var(--navbar-height) + 3rem)', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', marginBottom: '2rem' }}>
          KVKK Aydınlatma Metni
        </h1>
        <div style={{ color: 'var(--color-text-mid)', lineHeight: 1.8, fontSize: 'var(--text-base)' }}>
          <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında <strong>Diyetisyen Ezgi Onaylı Küp</strong> tarafından hazırlanmıştır.</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', margin: '2rem 0 1rem' }}>Veri Sorumlusu</h2>
          <p>Ezgi Onaylı Küp — Yalova</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', margin: '2rem 0 1rem' }}>Hangi Veriler İşlenmektedir?</h2>
          <p>İletişim formları aracılığıyla iletilen ad-soyad, e-posta adresi, telefon numarası ve mesaj içeriği.</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', margin: '2rem 0 1rem' }}>İşleme Amaçları</h2>
          <p>Bilgi taleplerinin yanıtlanması ve iletişim sağlanması.</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', margin: '2rem 0 1rem' }}>Haklarınız</h2>
          <p>KVKK'nın 11. maddesi kapsamında verilerinize erişim, düzeltme, silme ve itiraz haklarınız bulunmaktadır. Talepleriniz için dytezgionayli@gmail.com adresine yazabilirsiniz.</p>
          <p style={{ marginTop: '2rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)' }}>Bu metin taslak niteliğindedir; yayına almadan önce hukuki uzman desteği alınması önerilir.</p>
        </div>
      </div>
    </div>
  </>
);
