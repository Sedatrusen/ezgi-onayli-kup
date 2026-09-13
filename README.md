# Diyetisyen Ezgi Onaylı Küp — Web Sitesi

Diyetisyen Ezgi Onaylı Küp için geliştirilmiş resmi web sitesi. React, TypeScript ve Vite ile geliştirilmiştir.

---

## 🚀 Projeyi Çalıştırma (Development)

Projeyi yerel ortamınızda ayağa kaldırmak için aşağıdaki adımları izleyin:

### 1. Bağımlılıkları Yükleyin (İlk Kurulum)
Projeyi ilk kez indirdiyseniz veya yeni paketler eklendiyse:
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
Lokal geliştirme sunucusunu çalıştırmak için:
```bash
npm run dev
```

> 💡 Tarayıcınızda açmak için terminalde çıkan adrese (genellikle `http://localhost:5173`) gidebilirsiniz.

---

## 🛠️ Kullanılabilir Komutlar (Scripts)

| Komut | Açıklama |
| :--- | :--- |
| `npm run dev` | Geliştirme sunucusunu başlatır (Vite HMR ile anlık yenileme). |
| `npm run build` | TypeScript tip kontrollerini yapar ve üretim (production) derlemesini `dist/` klasörüne oluşturur. |
| `npm run preview` | Oluşturulan üretim derlemesini (`dist/`) yerel sunucuda test eder. |
| `npm run lint` | Oxlint ile kod kalitesi ve stil kontrollerini çalıştırır. |
| `npm run deploy` | GitHub Pages üzerine derleyip canlıya alır (`gh-pages -d dist`). |

---

## 📦 Kullanılan Teknolojiler

- **Frontend:** React 19 + TypeScript
- **Derleyici / Build Tool:** Vite
- **Yönlendirme (Routing):** React Router DOM v7
- **SEO & Head:** React Helmet Async
- **İkonlar:** Lucide React
- **Linter:** Oxlint
