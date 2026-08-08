// Blog posts data
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'yazı' | 'video' | 'rehber';
  readTime: number;
  publishedAt: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'akdeniz-tipi-beslenme-nedir',
    title: 'Akdeniz Tipi Beslenme Nedir? Neden Bu Kadar Önemli?',
    excerpt: 'Akdeniz tipi beslenme, bilimsel araştırmalarla desteklenen ve sürdürülebilirliğiyle öne çıkan bir beslenme yaklaşımıdır. Yüzyıllardır Akdeniz coğrafyasında yaşayan toplulukların yaşam biçiminden ilham alan bu model, sağlıklı yağları, sebze-meyveyi ve tam tahılları ön plana çıkarır.',
    content: `
Akdeniz tipi beslenme, yüzyıllardır Akdeniz ülkelerinde benimsenen geleneksel beslenme kalıplarından yola çıkılarak bilimsel çevreler tarafından tanımlanmış bir beslenme modelidir.

## Temel Özellikleri

Bu beslenme modelinin ayırt edici özellikleri şunlardır:

- **Bol sebze ve meyve:** Her öğünde renkli, mevsimsel sebzeler ve meyveler
- **Zeytinyağı:** Ana yağ kaynağı olarak sızma zeytinyağı
- **Tam tahıllar:** Rafine edilmemiş tahıl ürünleri
- **Baklagiller:** Haftada birkaç kez nohut, mercimek, fasulye
- **Balık ve deniz ürünleri:** Haftada en az 2 kez
- **Az miktarda kırmızı et**
- **Fermente süt ürünleri:** Yoğurt, peynir (ölçülü)

## Bilimsel Temeli

Bu beslenme modelini destekleyen pek çok bilimsel çalışma mevcuttur. Kardiyovasküler sağlık, metabolik sağlık ve genel yaşam kalitesi açısından olumlu bulgular elde edilmiştir.

## Sürdürülebilirlik

Akdeniz tipi beslenmenin en önemli özelliklerinden biri sürdürülebilirliğidir. Kısıtlayıcı bir diyet anlayışı yerine, zengin ve doyurucu bir beslenme kültürünü benimsemektedir.

*Bu yazı genel bilgilendirme amaçlıdır. Kişiye özel beslenme planı için uzman diyetisyen desteği almanız önerilir.*
    `,
    category: 'yazı',
    readTime: 5,
    publishedAt: '2025-03-15',
    imageAlt: 'Akdeniz tipi beslenme yiyecekleri',
  },
  {
    id: '2',
    slug: 'yeme-davranisi-nedir',
    title: 'Yeme Davranışını Anlamak: Zihin ve Beden Bağlantısı',
    excerpt: 'Neden aç olmadan yiyoruz? Duygular beslenme davranışımızı nasıl şekillendiriyor? Yeme davranışını anlamak, sürdürülebilir bir beslenme düzeni kurmanın ilk adımıdır.',
    content: `
Yeme davranışı, yalnızca fiziksel açlık ve tokluk sinyallerinden ibaret değildir. Duygusal durumlar, çevre, alışkanlıklar ve düşünce kalıpları da yeme davranışını derinden etkiler.

## Duygusal Yeme

Stres, kaygı, sıkıntı ya da bazen sevinç anlarında yiyeceğe yönelmek oldukça yaygın bir davranış biçimidir. Bu durumun farkında olmak, değişimin ilk adımıdır.

## Dikkatli Yeme (Mindful Eating)

Dikkatli yeme yaklaşımı; yemeği yavaş yemeyi, açlık ve tokluk sinyallerini fark etmeyi, yiyeceğin tadını ve dokusunu deneyimlemeyi içerir.

## Alışkanlıklar ve Otomatik Davranışlar

Pek çok yeme davranışı zamanla otomatikleşir. Bu otomatik kalıpları fark etmek ve yeniden yapılandırmak mümkündür.

*Bu yazı genel bilgilendirme amaçlıdır.*
    `,
    category: 'yazı',
    readTime: 6,
    publishedAt: '2025-04-02',
    imageAlt: 'Dikkatli yeme ve zihin bağlantısı',
  },
  {
    id: '3',
    slug: 'gunluk-su-ihtiyaci',
    title: 'Günlük Su Tüketiminiz Yeterli mi?',
    excerpt: 'Su, vücudumuzun temel yapı taşıdır. Yeterli su tüketimi metabolizma, enerji düzeyi ve genel sağlık için kritik önemdedir. Peki gerçekten ne kadar su içmeliyiz?',
    content: `
Su, insan vücudunun yaklaşık %60'ını oluşturur ve neredeyse tüm fizyolojik süreçlerde görev alır.

## Su İhtiyacı Nasıl Belirlenir?

Su ihtiyacı; yaş, cinsiyet, fiziksel aktivite düzeyi, iklim koşulları ve sağlık durumu gibi pek çok faktöre bağlıdır.

## Yeterli Su Tüketiminin Önemi

- Metabolik süreçlerin düzenlenmesi
- Vücut ısısının korunması
- Besin maddelerinin taşınması
- Atık maddelerin uzaklaştırılması

## Pratik İpuçları

Günlük su tüketiminizi artırmak için pratik yöntemler ve su tüketim alışkanlıkları oluşturmak için küçük adımlar atılabilir.

*Bu yazı genel bilgilendirme amaçlıdır.*
    `,
    category: 'yazı',
    readTime: 4,
    publishedAt: '2025-04-20',
    imageAlt: 'Su ve hidrasyon',
  },
  {
    id: '4',
    slug: 'protein-kaynaklari',
    title: 'Bitkisel ve Hayvansal Protein Kaynakları',
    excerpt: 'Protein, kasların, enzimlerin ve hormonların yapı taşıdır. Beslenmenizde kaliteli protein kaynaklarını doğru dengede yer vermek, genel sağlığınız için büyük önem taşır.',
    content: `
Proteinler, amino asitlerden oluşan ve vücudun temel yapı taşlarından birini oluşturan makro besin öğeleridir.

## Hayvansal Protein Kaynakları

Et, tavuk, balık, yumurta ve süt ürünleri, tam protein kaynakları olarak değerlendirilir.

## Bitkisel Protein Kaynakları

Baklagiller, tofu, tempeh, quinoa ve kuruyemişler önemli bitkisel protein kaynaklarıdır.

## Dengeli Bir Yaklaşım

Protein ihtiyacını karşılamak için tek bir kaynağa bağlı kalmak yerine, çeşitli kaynaklardan yararlanmak önerilmektedir.

*Bu yazı genel bilgilendirme amaçlıdır.*
    `,
    category: 'yazı',
    readTime: 5,
    publishedAt: '2025-05-08',
    imageAlt: 'Protein kaynakları',
  },
  {
    id: '5',
    slug: 'surdurulebilir-beslenme',
    title: 'Sürdürülebilir Beslenme Alışkanlıkları Nasıl Edinilir?',
    excerpt: 'Kısa süreli diyet listeleri değil, uzun vadeli ve sürdürülebilir beslenme alışkanlıkları kalıcı değişimin anahtarıdır. Küçük ama tutarlı adımlarla büyük farklar yaratılabilir.',
    content: `
Sürdürülebilir bir beslenme düzeni oluşturmak, anlık kararlardan çok, yaşam tarzına entegre edilmiş alışkanlıklar bütününü gerektirir.

## Küçük Adımlarla Başlamak

Büyük değişiklikler yerine, günlük rutininize sığacak küçük ve sürdürülebilir adımlar çok daha etkili sonuçlar verebilir.

## Esneklik ve Denge

Katı kurallar yerine esneklik içeren bir beslenme yaklaşımı, uzun vadede daha başarılıdır.

## Alışkanlık Oluşturmanın Bilimi

Davranış değişikliği sürecini anlamak ve bu süreci kendi yaşamınıza uyarlamak, kalıcı bir beslenme düzeni oluşturmanın temelini atar.

*Bu yazı genel bilgilendirme amaçlıdır.*
    `,
    category: 'yazı',
    readTime: 7,
    publishedAt: '2025-06-01',
    imageAlt: 'Sürdürülebilir beslenme',
  },
];
