import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'tr' | 'en';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  tr: {
    'nav.assurance': 'SabancıDx Güvencesiyle',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.global': 'Global Ağımız',
    'nav.sabancidx': 'SabancıDx',
    'nav.contact': 'İletişim',

    'hero.badge': 'Global Yedek Parça Tedarikçiniz',
    'hero.title1': 'Otomotiv Dünyasında',
    'hero.title2': 'Global Güç',
    'hero.desc': 'Uluslararası standartlarda OEM garantili otomotiv yedek parça tedariği ve akıllı lojistik çözümleri. En kaliteli parçaları, dünyanın her noktasına kusursuz ulaştırıyoruz.',
    'hero.btn.products': 'Ürünleri İncele',
    'hero.btn.contact': 'Bizimle İletişime Geçin',
    'hero.trust.countries': '40+ Ülke',
    'hero.trust.original': '%100 Orijinal',
    'hero.trust.fast': 'Hızlı Teslimat',

    'feat.badge': 'Kurumsal Değerlerimiz',
    'feat.title': 'Neden Globalvelo?',
    'feat.desc': 'Sektördeki köklü tecrübemiz, yenilikçi lojistik altyapımız ve tavizsiz kalite odaklı yaklaşımımızla global iş ortaklarımıza sürdürülebilir değer katıyoruz.',
    'feat.1.title': 'Global Tedarik Ağı',
    'feat.1.desc': '40\'tan fazla ülkeye ihracat kapasitesi ve dünyanın önde gelen otomotiv markalarıyla güçlü tedarik zinciri ortaklıkları.',
    'feat.2.title': 'Orijinal ve OEM Kalitesi',
    'feat.2.desc': 'Tüm yedek parçalarımız uluslararası kalite standartlarına (ISO/TS) uygun, sertifikalı ve üretici garantisi altındadır.',
    'feat.3.title': 'Hızlı Lojistik Çözümleri',
    'feat.3.desc': 'Modern depolama altyapımız sayesinde dünyanın her noktasına güvenli, sigortalı ve zamanında teslimat garantisi sunuyoruz.',
    'feat.4.title': 'Uzman Destek Ekibi',
    'feat.4.desc': 'Sektörde yılların deneyimine sahip uzman kadromuzla iş ortaklarımıza 7/24 teknik ve operasyonel destek sağlıyoruz.',
    'feat.stat.1.label': 'İhracat Ülkesi',
    'feat.stat.2.label': 'Global Marka',
    'feat.stat.3.label': 'Ürün Çeşidi',
    'feat.stat.4.label': 'OEM Kalitesi',

    'prod.badge': 'Ürün Evreni',
    'prod.title': 'Ürün Kategorileri & Markalar',
    'prod.desc': 'Globalvelo olarak, dünyanın önde gelen otomotiv yedek parça üreticileriyle çalışıyoruz. Aşağıdaki kategorilerden ürün gruplarını ve distribütörlüğünü yaptığımız markaları inceleyebilirsiniz.',
    'prod.viewAll': 'Tüm Kategorileri Gör',
    'prod.btn.details': 'Detaylar',
    'prod.subcats': 'Alt Kategoriler',
    'prod.brands': 'Tedarikçi Markalar',
    'prod.brandCount': 'marka',

    'contact.badge': 'İletişim',
    'contact.title1': 'İş Ortaklığı İçin',
    'contact.title2': 'Adım Atın',
    'contact.desc': 'Global yedek parça tedarik zincirimizin bir parçası olmak, ürünlerimiz hakkında detaylı bilgi almak veya teklif istemek için uzman ekibimize ulaşın.',
    'contact.email.title': 'E-posta',
    'contact.email.desc': '7/24 operasyonel destek için:',
    'contact.phone.title': 'Telefon',
    'contact.phone.desc': 'Hafta içi 09:00 - 18:00 arası:',
    'contact.address.title': 'Merkez Ofis',
    'contact.address.desc1': 'İçerenköy Mah. Kayışdağı Yolu Cad.',
    'contact.address.desc2': 'Ataşehir, İstanbul / Türkiye',
    'contact.form.title': 'Bize Ulaşın',
    'contact.form.helper': 'Talebiniz için tüm alanları doldurun. Gönderdiğinizde bilgileriniz hazır bir e-posta taslağı olarak açılır.',
    'contact.form.note': 'Bu prototipte form, varsayılan e-posta uygulamanızda info@globalvelo.com.tr adresine önceden doldurulmuş bir mesaj oluşturur.',
    'contact.form.name': 'Firma / Ad Soyad',
    'contact.form.name.ph': 'Örn: ABC Otomotiv Ltd.',
    'contact.form.email': 'Kurumsal E-posta',
    'contact.form.phone': 'Telefon Numarası',
    'contact.form.subject': 'İlgilendiğiniz Konu',
    'contact.form.subject.ph': 'Örn: Filtre Grubu Teklifi',
    'contact.form.message': 'Mesajınız ve Talepleriniz',
    'contact.form.message.ph': 'İhtiyaç duyduğunuz OEM numaralarını veya markaları belirtebilirsiniz...',
    'contact.form.submit': 'Talebi Gönder',
    'contact.form.sending': 'Hazırlanıyor...',
    'contact.form.error.name': 'Lütfen ad veya firma bilgisini girin.',
    'contact.form.error.email': 'Lütfen geçerli bir e-posta adresi girin.',
    'contact.form.error.phone': 'Lütfen geçerli bir telefon numarası girin.',
    'contact.form.error.subject': 'Lütfen konu bilgisini girin.',
    'contact.form.error.message': 'Lütfen en az 10 karakterlik bir mesaj yazın.',
    'contact.form.success.title': 'Talep hazırlandı',
    'contact.form.success.desc': 'E-posta taslağınız info@globalvelo.com.tr için açılıyor.',
    'contact.form.fail.title': 'Bir sorun oluştu',
    'contact.form.fail.desc': 'Lütfen tekrar deneyin veya doğrudan info@globalvelo.com.tr adresine yazın.',

    'about.title': 'Hakkımızda',
    'about.desc': 'Globalvelo, otomotiv yedek parça sektöründe 20 yılı aşkın tecrübesiyle uluslararası arenada faaliyet gösteren öncü bir kuruluştur. Misyonumuz, dünyanın dört bir yanındaki müşterilerimize en kaliteli yedek parçaları, en rekabetçi fiyatlarla ve en hızlı lojistik çözümleriyle ulaştırmaktır.',
    'about.vision.title': 'Vizyonumuz',
    'about.vision.desc': 'Otomotiv yedek parça tedariğinde global ölçekte en güvenilir ve yenilikçi çözüm ortağı olmak.',
    'about.values.title': 'Değerlerimiz',
    'about.values.1': 'Kalite Odaklılık',
    'about.values.2': 'Müşteri Memnuniyeti',
    'about.values.3': 'Etik Ticaret',
    'about.values.4': 'Global İşbirliği',

    'sdx.title': 'Dijital Dönüşümde Güçlü İş Ortaklığı',
    'sdx.desc': 'Globalvelo olarak, global çaptaki tüm operasyonlarımızın teknolojik altyapısını Türkiye\'nin lider dijital dönüşüm şirketi SabancıDx güvencesiyle sağlıyoruz.',
    'sdx.1.title': 'Üst Düzey Veri Güvenliği',
    'sdx.1.desc': 'Müşterilerimizin, bayilerimizin ve iş ortaklarımızın tüm verileri, SabancıDx\'in siber güvenlik çözümleriyle korunmaktadır. Küresel veri standartlarına uygun, uçtan uca şifrelenmiş altyapı ile çalışıyoruz.',
    'sdx.2.title': 'Kesintisiz B2B Altyapısı',
    'sdx.2.desc': 'Yedek parça tedarik ve sipariş yönetim sistemlerimiz, SabancıDx\'in bulut bilişim mimarisi üzerinde koşmaktadır. Bu sayede 7/24 kesintisiz, hızlı ve hatasız sipariş yönetimi sağlıyoruz.',
    'sdx.3.title': 'Küresel Entegrasyon',
    'sdx.3.desc': '80\'den fazla küresel marka ile olan entegrasyonlarımız, ileri veri analitiği ve yapay zeka destekli stok tahminleme sistemleri sayesinde kusursuz bir şekilde yönetilmektedir.',
    'sdx.4.title': 'Operasyonel Çeviklik',
    'sdx.4.desc': 'Dijitalleşme süreçlerimiz sayesinde, siparişten teslimata kadar geçen süre optimize edilmiş, lojistik operasyonlarımızda SabancıDx\'in teknolojik vizyonu ile maksimum verimliliğe ulaşılmıştır.',
    'sdx.cta.title': 'Geleceğe Birlikte Yürüyoruz',
    'sdx.cta.desc': 'SabancıDx\'in güçlü referansları arasında yer almaktan gurur duyuyor, otomotiv yedek parça sektöründe dijital standartları birlikte belirliyoruz.',
    'sdx.cta.btn': 'SabancıDx\'i Keşfedin',

    'global.title': 'Global Ağımız',
    'global.desc': 'Globalvelo, Türkiye merkezli olmak üzere Avrupa, Orta Doğu, Asya ve Afrika pazarlarında aktif bir rol oynamaktadır. 40\'tan fazla ülkeye yayılan geniş distribütör ağımız ve stratejik lojistik merkezlerimizle, yedek parça ihtiyacını sınır tanımadan karşılıyoruz.',
    'global.eu': 'Avrupa Lojistik Merkezi: Almanya',
    'global.me': 'Orta Doğu Dağıtım: Dubai',
    'global.asia': 'Asya Pasifik Ofisi: Şangay',

    'footer.desc': 'Globalvelo, premium otomotiv yedek parça tedarikinde güçlü marka portföyü, hızlı lojistik kabiliyeti ve global ticaret disiplini ile iş ortaklarına sürdürülebilir değer sunar.',
    'footer.quick': 'Hızlı Erişim',
    'footer.contact': 'İletişim Bilgileri',
    'footer.connect': 'Bağlantılar',
    'footer.connectEmail': 'E-posta gönder',
    'footer.connectForm': 'İletişim formuna git',
    'footer.connectPartner': 'SabancıDx partnerliği',
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    'nav.assurance': 'Powered by SabancıDx',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.global': 'Global Network',
    'nav.sabancidx': 'SabancıDx',
    'nav.contact': 'Contact',

    'hero.badge': 'Your Global Spare Parts Supplier',
    'hero.title1': 'Global Power in the',
    'hero.title2': 'Automotive World',
    'hero.desc': 'International standard OEM guaranteed automotive spare parts supply and smart logistics solutions. We deliver the highest quality parts flawlessly to everywhere in the world.',
    'hero.btn.products': 'View Products',
    'hero.btn.contact': 'Contact Us',
    'hero.trust.countries': '40+ Countries',
    'hero.trust.original': '100% Original',
    'hero.trust.fast': 'Fast Delivery',

    'feat.badge': 'Our Corporate Values',
    'feat.title': 'Why Globalvelo?',
    'feat.desc': 'With our deep-rooted experience in the sector, innovative logistics infrastructure, and uncompromising quality-oriented approach, we add sustainable value to our global business partners.',
    'feat.1.title': 'Global Supply Network',
    'feat.1.desc': 'Export capacity to over 40 countries and strong supply chain partnerships with the world\'s leading automotive brands.',
    'feat.2.title': 'Original and OEM Quality',
    'feat.2.desc': 'All our spare parts comply with international quality standards, are certified and under manufacturer warranty.',
    'feat.3.title': 'Fast Logistics Solutions',
    'feat.3.desc': 'Thanks to our modern storage infrastructure, we offer safe, insured, and timely delivery guarantees to everywhere in the world.',
    'feat.4.title': 'Expert Support Team',
    'feat.4.desc': 'With our experienced specialist team, we provide 24/7 technical and operational support to our business partners.',
    'feat.stat.1.label': 'Export Countries',
    'feat.stat.2.label': 'Global Brands',
    'feat.stat.3.label': 'Product Types',
    'feat.stat.4.label': 'OEM Quality',

    'prod.badge': 'Product Universe',
    'prod.title': 'Product Categories & Brands',
    'prod.desc': 'At Globalvelo, we work with the world\'s leading automotive spare parts manufacturers. Explore the product groups below together with the brands we distribute.',
    'prod.viewAll': 'View All Categories',
    'prod.btn.details': 'Details',
    'prod.subcats': 'Sub Categories',
    'prod.brands': 'Supplier Brands',
    'prod.brandCount': 'brands',

    'contact.badge': 'Contact',
    'contact.title1': 'Take a Step for',
    'contact.title2': 'Business Partnership',
    'contact.desc': 'Reach our expert team to join our global spare parts supply chain, request a quote, or get detailed information about our product range.',
    'contact.email.title': 'Email',
    'contact.email.desc': 'For 24/7 operational support:',
    'contact.phone.title': 'Phone',
    'contact.phone.desc': 'Weekdays between 09:00 - 18:00:',
    'contact.address.title': 'Head Office',
    'contact.address.desc1': 'İçerenköy Mah. Kayışdağı Yolu Cad.',
    'contact.address.desc2': 'Ataşehir, Istanbul / Türkiye',
    'contact.form.title': 'Contact Us',
    'contact.form.helper': 'Fill in all fields. On submit, your details open as a ready-to-send email draft.',
    'contact.form.note': 'In this prototype, the form creates a prefilled message to info@globalvelo.com.tr in your default email application.',
    'contact.form.name': 'Company / Full Name',
    'contact.form.name.ph': 'e.g. ABC Automotive Ltd.',
    'contact.form.email': 'Corporate Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject of Interest',
    'contact.form.subject.ph': 'e.g. Filter Group Offer',
    'contact.form.message': 'Your Message and Requests',
    'contact.form.message.ph': 'You can specify the OEM numbers or brands you need...',
    'contact.form.submit': 'Send Request',
    'contact.form.sending': 'Preparing...',
    'contact.form.error.name': 'Please enter your name or company name.',
    'contact.form.error.email': 'Please enter a valid email address.',
    'contact.form.error.phone': 'Please enter a valid phone number.',
    'contact.form.error.subject': 'Please enter a subject.',
    'contact.form.error.message': 'Please write a message with at least 10 characters.',
    'contact.form.success.title': 'Request prepared',
    'contact.form.success.desc': 'Your email draft for info@globalvelo.com.tr is opening.',
    'contact.form.fail.title': 'Something went wrong',
    'contact.form.fail.desc': 'Please try again or email info@globalvelo.com.tr directly.',

    'about.title': 'About Us',
    'about.desc': 'Globalvelo is a pioneering organization operating in the international arena with over 20 years of experience in the automotive spare parts sector. Our mission is to deliver the highest quality spare parts to our customers all over the world with competitive pricing and fast logistics solutions.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the most reliable and innovative solution partner on a global scale in automotive spare parts supply.',
    'about.values.title': 'Our Values',
    'about.values.1': 'Quality Orientation',
    'about.values.2': 'Customer Satisfaction',
    'about.values.3': 'Ethical Trade',
    'about.values.4': 'Global Cooperation',

    'sdx.title': 'Strong Partnership in Digital Transformation',
    'sdx.desc': 'At Globalvelo, we power our global operations with the assurance of SabancıDx, one of Turkey\'s leading digital transformation companies.',
    'sdx.1.title': 'Advanced Data Security',
    'sdx.1.desc': 'All customer, dealer and business partner data is protected through SabancıDx cybersecurity solutions with end-to-end encrypted infrastructure.',
    'sdx.2.title': 'Uninterrupted B2B Infrastructure',
    'sdx.2.desc': 'Our spare parts supply and order management systems run on SabancıDx cloud architecture, enabling uninterrupted, fast and accurate operations.',
    'sdx.3.title': 'Global Integration',
    'sdx.3.desc': 'Our integrations with more than 80 global brands are managed with advanced analytics and AI-supported inventory forecasting systems.',
    'sdx.4.title': 'Operational Agility',
    'sdx.4.desc': 'Thanks to digitalization, the time from order to delivery is optimized and logistics performance is maximized across the business.',
    'sdx.cta.title': 'Building the Future Together',
    'sdx.cta.desc': 'We are proud to be among SabancıDx\'s strong references and to set digital standards together in the automotive spare parts sector.',
    'sdx.cta.btn': 'Discover SabancıDx',

    'global.title': 'Our Global Network',
    'global.desc': 'Globalvelo plays an active role in the European, Middle Eastern, Asian and African markets, headquartered in Turkey. With our distributor network across 40+ countries and strategic logistics centers, we answer spare parts demand without borders.',
    'global.eu': 'European Logistics Center: Germany',
    'global.me': 'Middle East Distribution: Dubai',
    'global.asia': 'Asia Pacific Office: Shanghai',

    'footer.desc': 'Globalvelo delivers sustainable value through a premium brand portfolio, fast logistics capability, and disciplined international automotive spare parts trade.',
    'footer.quick': 'Quick Access',
    'footer.contact': 'Contact Details',
    'footer.connect': 'Connections',
    'footer.connectEmail': 'Send an email',
    'footer.connectForm': 'Open contact form',
    'footer.connectPartner': 'SabancıDx partnership',
    'footer.rights': 'All rights reserved.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.tr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
