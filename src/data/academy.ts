// Academy / Digital Products data
export interface AcademyProduct {
  id: string;
  title: string;
  description: string;
  category: 'rehber' | 'e-kitap' | 'video' | 'seminer' | 'atölye';
  status: 'available' | 'coming-soon';
  tag?: string;
}

export const academyProducts: AcademyProduct[] = [
  {
    id: '1',
    title: 'Akdeniz Tipi Beslenme Rehberi',
    description: 'Akdeniz mutfağından ilham alan, günlük hayata kolayca uyarlanabilir kapsamlı bir beslenme rehberi. Haftalık örnek menüler ve pratik öneriler içerir.',
    category: 'rehber',
    status: 'coming-soon',
    tag: 'Yakında',
  },
  {
    id: '2',
    title: 'Yeme Davranışını Anlamak',
    description: 'Duygusal yeme, otomatik yeme davranışları ve zihin-beden bağlantısı üzerine kapsamlı bir e-kitap. Öz farkındalık egzersizleri ve pratik araçlar içerir.',
    category: 'e-kitap',
    status: 'coming-soon',
    tag: 'Yakında',
  },
  {
    id: '3',
    title: 'Sağlıklı Tarifler Koleksiyonu',
    description: 'Beslenme değeri hesaplanmış, hazırlanması kolay ve lezzetli 50 tarif. Mevsimsel malzemeler ve pratik mutfak önerileri.',
    category: 'e-kitap',
    status: 'coming-soon',
    tag: 'Yakında',
  },
  {
    id: '4',
    title: 'Beslenme Temelleri Video Serisi',
    description: 'Makro ve mikro besin öğelerinden, etiket okumaya kadar beslenme biliminin temellerini ele alan video eğitim serisi.',
    category: 'video',
    status: 'coming-soon',
    tag: 'Yakında',
  },
  {
    id: '5',
    title: 'Online Beslenme Semineri',
    description: 'Sürdürülebilir kilo yönetimi üzerine interaktif online seminer. Soru-cevap bölümü dahil.',
    category: 'seminer',
    status: 'coming-soon',
    tag: 'Yakında',
  },
  {
    id: '6',
    title: 'Kilo Yönetimi Çalışma Kitabı',
    description: 'Kilo yönetimi sürecinizi kendi hızınızda takip etmenizi sağlayan, bilimsel temelli bir çalışma kitabı.',
    category: 'rehber',
    status: 'coming-soon',
    tag: 'Yakında',
  },
];

export const categoryLabels: Record<string, string> = {
  'rehber':  'Rehber',
  'e-kitap': 'E-Kitap',
  'video':   'Video Eğitim',
  'seminer': 'Online Seminer',
  'atölye':  'Atölye',
};
