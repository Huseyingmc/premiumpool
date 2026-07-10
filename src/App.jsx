import { useState, useEffect } from 'react';
import {
  Menu, X, Droplets, ShieldCheck, Settings,
  Wrench, Phone, Mail, MapPin, Play,
  ChevronRight, ChevronLeft
} from 'lucide-react';

const galleryItems = [
  { type: 'video', src: '/video/video1.webm', title: 'Alanya Premium Villa - Taşmalı Havuz Projesi' },
  { type: 'image', src: '/image/e8fcb459-6d85-4cef-9e77-9fe65a2de8ef.jpg', title: 'Havuz Projesi 1' },
  { type: 'video', src: '/video/video2.webm', title: 'Konaklı Otel Projesi - Olimpik Havuz' },
  { type: 'image', src: '/image/aqua1.jpg', title: 'Havuz Projesi 2' },
  { type: 'video', src: '/video/video3.webm', title: 'Alanya Aquapark - Eğlence Tesisi' },
  { type: 'image', src: '/image/sea.jpg', title: 'Havuz Projesi 3' },
  { type: 'video', src: '/video/video4.webm', title: 'Premium Infinity Havuz - Modern Tasarım' },
  { type: 'image', src: '/image/Rsrt-InfinityPoolNew1-1920w.webp', title: 'Havuz Projesi 4' },
  { type: 'video', src: '/video/video5.webm', title: 'Aquapark - Gelişmiş Kaydırak Sistemleri' },
  { type: 'image', src: '/image/ref-1.jpg', title: 'Referans Proje 1' },
  { type: 'video', src: '/video/video6.webm', title: '5 Yıldızlı Otel - Kapalı Spa Konsepti' },
  { type: 'image', src: '/image/ref-2.jpg', title: 'Referans Proje 2' },
  { type: 'image', src: '/image/ref-3.jpg', title: 'Referans Proje 3' },
  { type: 'image', src: '/image/ref-4.jpg', title: 'Referans Proje 4' },
  { type: 'image', src: '/image/ref-5.jpg', title: 'Referans Proje 5' },
  { type: 'image', src: '/image/ref-6.jpg', title: 'Referans Proje 6' }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };
  
  const goToNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-logo-mask">
            <div className="splash-shine"></div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src="/PremiumPoolLogo.svg" alt="Premium Pool Logo" className="brand-logo" />
          </a>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Kurumsal</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Hizmetlerimiz</a>
            <a href="#equipment" onClick={(e) => { e.preventDefault(); scrollToSection('equipment'); }}>Ekipmanlar</a>
            <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }}>Teknik Servis</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Referanslar</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>İletişim</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        {/* Fallback image if video is not available */}
        <img src="/image/hero image.jpg" alt="Premium Pool Hero" className="hero-video" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Akdeniz’in Mimari Havuzları ve Kusursuz Mühendislik</h1>
          <p>Premium Pool ile Alanya genelinde otel, villa ve eğlence parkları için estetik, dayanıklı ve anahtar teslim havuz projeleri tasarlıyoruz.</p>
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Premium Keşif İste / Projenizi Başlatın
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/image/Rsrt-InfinityPoolNew1-1920w.webp" alt="Premium Pool Kurumsal" />
            </div>
            <div className="about-text">
              <h2>Suya Değer Katan Kurumsal Çözümler: Premium Pool</h2>
              <p>Premium Pool, Alanya ve çevresinde yüzme havuzu tasarımı, ileri mühendislik çözümleri ve profesyonel teknik servis alanında faaliyet gösteren yenilikçi bir kuruluştur.</p>
              <p>Hayalinizdeki kişiye özel villa havuzlarından, uluslararası standartlardaki otel ve aquapark projelerine kadar her ölçekteki yapıyı estetik ve dayanıklılıkla şekillendiriyoruz.</p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4>Birinci Sınıf Kalite</h4>
                    <p>En kaliteli malzemelerle uzun ömürlü kullanım garantisi.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h4>Anahtar Teslim</h4>
                    <p>Tasarım, uygulama ve bakım süreçlerini tek elden yönetiyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <h2>Faaliyet Alanlarımız</h2>
            <p>Farklı ihtiyaçlara yönelik profesyonel, dayanıklı ve göz alıcı havuz projeleri üretiyoruz.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/image/aa95f3f4ad962e7d4b10944fbe218b4e.jpg" alt="Premium Villa Havuzları" />
              </div>
              <div className="service-content">
                <h3>Premium Villa & Konsept Havuzlar</h3>
                <p>Yaşam alanınıza değer katan, modern mimariyle entegre, estetik ve fonksiyonel villa havuzları. Bölgenin coğrafi yapısına uygun, size özel çözümler.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                {/* Fallback to hero image if we don't have enough distinct images */}
                <img src="/image/e8fcb459-6d85-4cef-9e77-9fe65a2de8ef.jpg" alt="Kurumsal & Otel Havuzları" />
              </div>
              <div className="service-content">
                <h3>Kurumsal & Otel Havuzları</h3>
                <p>Turizm profesyonelleri için yüksek kullanıcı kapasitesine uyumlu, filtrasyon ve hijyen standartları maksimum düzeyde olan, maliyet optimize eden büyük ölçekli projeler.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/image/aqua1.jpg" alt="Aquapark Havuzları" />
              </div>
              <div className="service-content">
                <h3>Aquapark ve Eğlence Havuzları</h3>
                <p>Güvenliğin ve mühendisliğin en üst seviyede tutulduğu, kaydırak sistemleri, dinamik su oyunları ve çocuk aktivite alanlarıyla donatılmış özgün projeler.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="section equipment">
        <div className="container">
          <div className="equipment-content">
            <div className="equipment-info">
              <h2>Dünyaca Ünlü Markalar, Premium Ekipmanlar</h2>
              <p className="mb-8">Bir havuzun kalitesi, yüzeyin altında çalışan sistemlerin gücüyle ölçülür. Premium Pool; havuz pompalarından filtrasyon sistemlerine, LED aydınlatmalardan dezenfeksiyon ünitelerine ve güvenilir havuz kimyasallarına kadar ihtiyacınız olan tüm malzemeleri en seçkin markaların güvencesiyle sunar.</p>
              <p className="mb-8 text-primary font-medium">Uzun ömürlü ve enerji tasarruflu sistemlerle havuzunuzun verimliliğini üst seviyeye taşıyın.</p>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Tedarik Talebi Oluştur</button>
            </div>

            <div className="equipment-visual">
              <div className="equipment-item">
                <Settings />
                <h4>Filtrasyon Sistemleri</h4>
              </div>
              <div className="equipment-item">
                <Droplets />
                <h4>Havuz Kimyasalları</h4>
              </div>
              <div className="equipment-item" style={{ transform: 'translateY(20px)' }}>
                <ShieldCheck />
                <h4>Pompalar & Motorlar</h4>
              </div>
              <div className="equipment-item" style={{ transform: 'translateY(20px)' }}>
                <Settings />
                <h4>Aydınlatma Sistemleri</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Service Section */}
      <section id="service" className="section technical-service">
        <div className="tech-pattern"></div>
        <div className="container">
          <div className="tech-content">
            <div className="tech-image">
              <img src="/image/sea.jpg" alt="Teknik Servis" />
            </div>
            <div className="tech-text">
              <h2>Kesintisiz Havuz Konforu İçin Profesyonel Teknik Servis</h2>
              <p>Havuzunuzun her zaman temiz, sağlıklı ve güvenli kalması Premium Pool uzmanlığıyla çok kolay. Alanya genelinde havuz keyfinizin kesintiye uğramasına asla izin vermiyoruz.</p>

              <div className="tech-list">
                <div className="tech-list-item">
                  <Wrench size={24} />
                  <span>Periyodik Bakım ve Temizlik</span>
                </div>
                <div className="tech-list-item">
                  <ShieldCheck size={24} />
                  <span>Sezon Açılış / Kapanış Hazırlıkları</span>
                </div>
                <div className="tech-list-item">
                  <Droplets size={24} />
                  <span>Profesyonel Su Analizi</span>
                </div>
                <div className="tech-list-item">
                  <Settings size={24} />
                  <span>Acil Teknik Servis Hizmetleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <div className="container">
          <div className="section-header">
            <h2>Video Galeri / Referanslar</h2>
            <p>Tamamladığımız özel projelerden ve üstün mühendislik çözümlerimizden kesitler.</p>
          </div>

          <div className="masonry-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="masonry-item" onClick={() => openLightbox(index)}>
                {item.type === 'video' ? (
                  <>
                    <video src={item.src} className="masonry-media" muted loop playsInline onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => {e.target.pause(); e.target.currentTime = 0;}} />
                    <div className="play-icon"><Play size={24} fill="currentColor" /></div>
                  </>
                ) : (
                  <img src={item.src} alt={item.title} className="masonry-media" />
                )}
                <div className="masonry-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-panel">
              <h3>Projenizi Premium Pool Güvencesiyle Hayata Geçirin</h3>
              <p>Alanya'daki projeniz için ücretsiz keşif ve fiyat teklifi almak, ekipman ihtiyaçlarınızı belirlemek veya teknik servis talebinde bulunmak için formu doldurun; uzman ekibimiz sizinle iletişime geçsin.</p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><MapPin size={24} /></div>
                  <div>
                    <h5>Adres</h5>
                    <p>Konaklı, Necip Fazıl Kısakürek Cd 5-F, 07491 Alanya/Antalya</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><Mail size={24} /></div>
                  <div>
                    <h5>E-posta</h5>
                    <p>muhasebe@premiumpool.com.tr</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><Phone size={24} /></div>
                  <div>
                    <h5>Telefon</h5>
                    <p>+90 (___) ___ __ __</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız</label>
                  <input type="text" id="name" className="form-control" placeholder="Adınız Soyadınız" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta Adresiniz</label>
                  <input type="email" id="email" className="form-control" placeholder="ornek@mail.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon Numaranız</label>
                  <input type="tel" id="phone" className="form-control" placeholder="05XX XXX XX XX" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service-type">İlgilendiğiniz Hizmet</label>
                  <select id="service-type" className="form-control">
                    <option value="">Seçiniz...</option>
                    <option value="yeni-proje">Yeni Havuz Projesi / Yapımı</option>
                    <option value="bakim">Periyodik Bakım ve Teknik Servis</option>
                    <option value="ekipman">Ekipman ve Kimyasal Tedariği</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız (Opsiyonel)</label>
                  <textarea id="message" className="form-control" placeholder="Projeniz veya talebiniz hakkında detaylar..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Talebi Gönder <ChevronRight size={20} style={{ marginLeft: '8px' }} /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <img src="/PremiumPoolLogo.svg" alt="Premium Pool Logo" className="footer-logo-img" />
              </a>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '300px', fontSize: '0.875rem' }}>
                PREMIUM POOL HAVUZ KİMYASALLARI VE EKİPMANLARI TURİZM TİCARET LİMİTED ŞİRKETİ
              </p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" style={{ fontSize: '14px', fontWeight: 'bold' }}>FB</a>
              <a href="#" className="social-link" style={{ fontSize: '14px', fontWeight: 'bold' }}>IG</a>
              <a href="#" className="social-link" style={{ fontSize: '14px', fontWeight: 'bold' }}>X</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Premium Pool Systems. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button className="lightbox-nav-btn prev" onClick={goToPrev}>
            <ChevronLeft size={36} />
          </button>

          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            {galleryItems[lightboxIndex].type === 'video' ? (
              <video src={galleryItems[lightboxIndex].src} controls autoPlay className="lightbox-media" />
            ) : (
              <img src={galleryItems[lightboxIndex].src} alt={galleryItems[lightboxIndex].title} className="lightbox-media" />
            )}
            <div className="lightbox-title-bar">
              <h4>{galleryItems[lightboxIndex].title}</h4>
            </div>
          </div>

          <button className="lightbox-nav-btn next" onClick={goToNext}>
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
