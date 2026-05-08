import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const services = [
  {
    icon: '💆‍♀️',
    title: 'Javanese Traditional Massage',
    items: [
      { label: '60 Menit', price: '135K' },
      { label: '90 Menit', price: '175K' },
      { label: '120 Menit', price: '225K' },
    ],
  },
  {
    icon: '🌸',
    title: 'Massage + Scrub',
    items: [
      { label: '90 Menit', price: '195K' },
      { label: '120 Menit', price: '245K' },
    ],
  },
  {
    icon: '🦶',
    title: 'Foot Reflexology',
    items: [
      { label: '60 Menit', price: '120K' },
      { label: '90 Menit', price: '165K' },
    ],
  },
  {
    icon: '✨',
    title: 'Totok Wajah',
    subtitle: 'Face Acupressure',
    flat: '50K',
  },
  {
    icon: '🔥',
    title: 'Kerokan Therapy',
    flat: '50K',
  },
];

const benefits = [
  { icon: '🌿', title: 'Mengurangi Pegal', desc: 'Teknik pijat tradisional Jawa efektif meredakan ketegangan otot dan rasa pegal setelah aktivitas harian.' },
  { icon: '🧘', title: 'Meredakan Stres', desc: 'Sentuhan terapeutik dan aroma terapi membantu menenangkan pikiran serta menurunkan tingkat stres.' },
  { icon: '😴', title: 'Kualitas Tidur', desc: 'Relaksasi mendalam membantu memperbaiki pola dan kualitas istirahat malam Anda.' },
  { icon: '💪', title: 'Kebugaran Tubuh', desc: 'Perawatan rutin menjaga kebugaran tubuh dan meningkatkan sirkulasi darah secara optimal.' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = 'https://wa.me/6281230181886?text=Halo%20Ayna%20Spa%2C%20saya%20ingin%20booking%20treatment';

  return (
    <>
      <Head>
        <title>Ayna Healthy Reflexology & Spa — Traditional Javanese Wellness</title>
        <meta name="description" content="Nikmati pengalaman relaksasi pijat tradisional Jawa di Ayna Healthy Reflexology & Spa. Tersedia Javanese Massage, Foot Reflexology, Totok Wajah, Kerokan, dan Scrub dengan harga terjangkau." />
        <meta name="keywords" content="reflexology, spa, pijat tradisional jawa, foot reflexology, totok wajah, kerokan, massage" />
        <meta property="og:title" content="Ayna Healthy Reflexology & Spa" />
        <meta property="og:description" content="Traditional Javanese Wellness Experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* WATERMARK DEMO */}
      <div className="watermark" aria-hidden="true">
        <span className="watermark-text">DEMO</span>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo-text">✨ AYNA SPA</div>
        <ul className="nav-links">
          <li><a href="#about">Tentang</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#benefits">Manfaat</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="nav-cta">Booking Sekarang</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-circles">
          <span /><span /><span />
        </div>
        <div className="hero-inner">
          <div className="hero-badge">
            <span />Traditional Javanese Wellness
          </div>
          <Image src="/logo.png" alt="Ayna Spa Logo" width={280} height={350} className="hero-logo" priority />
          <h1 className="hero-title">
            <em>Ayna</em> Healthy<br />Reflexology & Spa
          </h1>
          <p className="hero-subtitle">Calm Ambience · Healing Touch · Aroma Therapy</p>
          <p className="hero-desc">
            Nikmati pengalaman relaksasi dengan sentuhan pijat tradisional Jawa yang menenangkan tubuh dan pikiran. 
            Dengan suasana hangat, aroma terapi, serta pelayanan profesional. 🌿🕯️
          </p>
          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">🌿 Booking Sekarang</a>
            <a href="#services" className="btn-secondary">Lihat Layanan →</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image-box reveal">
              <div className="about-logo-wrap">
                <Image src="/logo.png" alt="Ayna Spa" width={260} height={260} />
              </div>
            </div>
            <div className="about-text reveal">
              <p className="section-label">Tentang Kami</p>
              <h2>Sentuhan <em>Tradisional</em>,<br />Kesegaran Modern</h2>
              <p>
                Ayna Healthy Reflexology & Spa menghadirkan pengalaman wellness yang memadukan kearifan lokal pijat tradisional Jawa dengan suasana spa modern yang nyaman dan menenangkan.
              </p>
              <p>
                Setiap treatment dirancang untuk membantu mengurangi pegal, stres, dan mengembalikan kesegaran tubuh Anda. Cocok untuk melepas lelah setelah aktivitas harian yang padat.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">Jenis Layanan</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Profesional</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">🌿</div>
                  <div className="stat-label">Bahan Alami</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">🕯️</div>
                  <div className="stat-label">Aroma Therapy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">
        <div className="section-inner">
          <p className="section-label reveal">Price List</p>
          <h2 className="section-title reveal">Pilihan <em>Layanan</em> Kami</h2>
          <div className="ornament reveal">
            <span className="ornament-line" />
            <span className="ornament-icon">🌸</span>
            <span className="ornament-line right" />
          </div>
          <div className="price-grid">
            {services.map((svc, i) => (
              <div className="price-card reveal" key={i}>
                <div className="price-card-icon">{svc.icon}</div>
                <div className="price-card-title">
                  {svc.title}
                  {svc.subtitle && <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'Outfit', fontWeight: 300, marginTop: 2 }}>{svc.subtitle}</div>}
                </div>
                {svc.flat ? (
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 4 }}>Tarif</div>
                    <div className="price-flat">Rp {svc.flat}</div>
                  </div>
                ) : (
                  svc.items.map((item, j) => (
                    <div className="price-item" key={j}>
                      <span className="price-duration">{item.label}</span>
                      <span className="price-amount">Rp {item.price}</span>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section benefits" id="benefits">
        <div className="section-inner">
          <p className="section-label reveal">Manfaat</p>
          <h2 className="section-title reveal">Relax Your Body,<br /><em>Calm Your Mind</em></h2>
          <p className="section-desc reveal">
            Perpaduan teknik pijat tradisional dan suasana spa yang nyaman membantu tubuh terasa lebih ringan, rileks, dan kembali segar. 🕯️✨
          </p>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card reveal" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="section-inner">
          <div className="contact-wrap reveal">
            <p className="section-label">Hubungi Kami</p>
            <h2 className="contact-title">Siap untuk <em>Relaksasi</em>?</h2>
            <p className="contact-sub">Booking sekarang melalui WhatsApp dan kami siap melayani Anda 🌿</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="wa-btn">
              <span className="wa-icon">💬</span>
              Chat WhatsApp — 0812-3018-1886
            </a>
            <div className="contact-info">
              <div className="info-item">
                <div className="info-label">Telepon / WA</div>
                <div className="info-value">0812-3018-1886</div>
              </div>
              <div className="info-item">
                <div className="info-label">Layanan</div>
                <div className="info-value">Traditional Massage & Reflexology</div>
              </div>
              <div className="info-item">
                <div className="info-label">Suasana</div>
                <div className="info-value">Calm & Professional ✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">✨ AYNA HEALTHY REFLEXOLOGY AND SPA ✨</div>
        <p className="footer-text">
          Traditional Javanese Wellness Experience · Calm Ambience & Healing Touch<br />
          <a href={waLink} target="_blank" rel="noopener noreferrer">WA: 0812-3018-1886</a>
        </p>
        <p className="footer-text" style={{ marginTop: 16, fontSize: 12, opacity: 0.5 }}>
          © {new Date().getFullYear()} Ayna Healthy Reflexology & Spa. All rights reserved.
        </p>
      </footer>
    </>
  );
}
