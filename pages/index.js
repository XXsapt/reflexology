import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const translations = {
  IDN: {
    navAbout: 'Tentang',
    navServices: 'Layanan',
    navBenefits: 'Manfaat',
    navContact: 'Kontak',
    navCta: 'Booking Sekarang',
    heroBadge: 'Traditional Javanese Wellness',
    heroSubtitle: 'Calm Ambience · Healing Touch · Aroma Therapy',
    heroDesc: 'Nikmati pengalaman relaksasi dengan sentuhan pijat tradisional Jawa yang menenangkan tubuh dan pikiran. Dengan suasana hangat, aroma terapi, serta pelayanan profesional. 🌿🕯️',
    heroPrimary: '🌿 Booking Sekarang',
    heroSecondary: 'Lihat Layanan →',
    aboutLabel: 'Tentang Kami',
    aboutHeading: <>Sentuhan <em>Tradisional</em>,<br />Kesegaran Modern</>,
    aboutP1: 'Ayna Massage Spa & Reflexology menghadirkan pengalaman wellness yang memadukan kearifan lokal pijat tradisional Jawa dengan suasana spa modern siap datang ke tempat anda kapan saja.',
    aboutP2: 'Setiap treatment dirancang untuk membantu mengurangi pegal, stres, dan mengembalikan kesegaran tubuh Anda. Cocok untuk melepas lelah setelah aktivitas harian yang padat.',
    stat1Label: 'Jenis Layanan',
    stat2Label: 'Profesional',
    stat3Label: 'Bahan Alami',
    stat4Label: 'Aroma Therapy',
    servicesLabel: 'Price List',
    servicesTitle: <>Pilihan <em>Layanan</em> Kami</>,
    tarif: 'Tarif',
    benefitsLabel: 'Manfaat',
    benefitsTitle: <>Relax Your Body,<br /><em>Calm Your Mind</em></>,
    benefitsDesc: 'Perpaduan teknik pijat tradisional dan suasana spa yang nyaman membantu tubuh terasa lebih ringan, rileks, dan kembali segar. 🕯️✨',
    contactLabel: 'Hubungi Kami',
    contactTitle: <>Siap untuk <em>Relaksasi</em>?</>,
    contactSub: 'Booking sekarang melalui WhatsApp dan kami siap melayani Anda 🌿',
    contactInfoLabel1: 'Telepon / WA',
    contactInfoLabel2: 'Layanan',
    contactInfoLabel3: 'Suasana',
    footerSub: 'Traditional Javanese Wellness Experience · Calm Ambience & Healing Touch',
    services: [
      { icon: '💆‍♀️', title: 'Javanese Traditional Massage', items: [{ label: '60 Menit', price: '135K' }, { label: '90 Menit', price: '175K' }, { label: '120 Menit', price: '225K' }] },
      { icon: '🌸', title: 'Massage + Scrub', items: [{ label: '90 Menit', price: '195K' }, { label: '120 Menit', price: '245K' }] },
      { icon: '🦶', title: 'Foot Reflexology', items: [{ label: '60 Menit', price: '120K' }, { label: '90 Menit', price: '165K' }] },
      { icon: '✨', title: 'Totok Wajah', subtitle: 'Face Acupressure', flat: '50K' },
      { icon: '🔥', title: 'Kerokan Therapy', flat: '50K' },
    ],
    benefits: [
      { icon: '🌿', title: 'Mengurangi Pegal', desc: 'Teknik pijat tradisional Jawa efektif meredakan ketegangan otot dan rasa pegal setelah aktivitas harian.' },
      { icon: '🧘', title: 'Meredakan Stres', desc: 'Sentuhan terapeutik dan aroma terapi membantu menenangkan pikiran serta menurunkan tingkat stres.' },
      { icon: '😴', title: 'Kualitas Tidur', desc: 'Relaksasi mendalam membantu memperbaiki pola dan kualitas istirahat malam Anda.' },
      { icon: '💪', title: 'Kebugaran Tubuh', desc: 'Perawatan rutin menjaga kebugaran tubuh dan meningkatkan sirkulasi darah secara optimal.' },
    ],
  },
  EN: {
    navAbout: 'About',
    navServices: 'Services',
    navBenefits: 'Benefits',
    navContact: 'Contact',
    navCta: 'Book Now',
    heroBadge: 'Traditional Javanese Wellness',
    heroSubtitle: 'Calm Ambience · Healing Touch · Aroma Therapy',
    heroDesc: 'Enjoy a relaxing experience with traditional Javanese massage techniques that calm your body and mind. With a warm atmosphere, aromatherapy, and professional service. 🌿🕯️',
    heroPrimary: '🌿 Book Now',
    heroSecondary: 'View Services →',
    aboutLabel: 'About Us',
    aboutHeading: <><em>Traditional</em> Touch,<br />Modern Freshness</>,
    aboutP1: 'Ayna Massage Spa & Reflexology brings a wellness experience that combines traditional Javanese massage wisdom with a modern spa atmosphere, ready to come to you anytime.',
    aboutP2: 'Every treatment is designed to help relieve muscle aches, stress, and restore your body\'s vitality. Perfect for unwinding after a long, busy day.',
    stat1Label: 'Service Types',
    stat2Label: 'Professional',
    stat3Label: 'Natural Ingredients',
    stat4Label: 'Aroma Therapy',
    servicesLabel: 'Price List',
    servicesTitle: <>Our <em>Services</em></>,
    tarif: 'Rate',
    benefitsLabel: 'Benefits',
    benefitsTitle: <>Relax Your Body,<br /><em>Calm Your Mind</em></>,
    benefitsDesc: 'The combination of traditional massage techniques and a comfortable spa atmosphere helps your body feel lighter, more relaxed, and refreshed. 🕯️✨',
    contactLabel: 'Contact Us',
    contactTitle: <>Ready to <em>Relax</em>?</>,
    contactSub: 'Book now via WhatsApp and we are ready to serve you 🌿',
    contactInfoLabel1: 'Phone / WA',
    contactInfoLabel2: 'Service',
    contactInfoLabel3: 'Atmosphere',
    footerSub: 'Traditional Javanese Wellness Experience · Calm Ambience & Healing Touch',
    services: [
      { icon: '💆‍♀️', title: 'Javanese Traditional Massage', items: [{ label: '60 Minutes', price: '135K' }, { label: '90 Minutes', price: '175K' }, { label: '120 Minutes', price: '225K' }] },
      { icon: '🌸', title: 'Massage + Scrub', items: [{ label: '90 Minutes', price: '195K' }, { label: '120 Minutes', price: '245K' }] },
      { icon: '🦶', title: 'Foot Reflexology', items: [{ label: '60 Minutes', price: '120K' }, { label: '90 Minutes', price: '165K' }] },
      { icon: '✨', title: 'Totok Wajah', subtitle: 'Face Acupressure', flat: '50K' },
      { icon: '🔥', title: 'Kerokan Therapy', flat: '50K' },
    ],
    benefits: [
      { icon: '🌿', title: 'Relieve Soreness', desc: 'Traditional Javanese massage techniques effectively relieve muscle tension and soreness after daily activities.' },
      { icon: '🧘', title: 'Reduce Stress', desc: 'Therapeutic touch and aromatherapy help calm the mind and lower stress levels.' },
      { icon: '😴', title: 'Sleep Quality', desc: 'Deep relaxation helps improve the pattern and quality of your nightly rest.' },
      { icon: '💪', title: 'Body Fitness', desc: 'Regular treatments maintain body fitness and optimally improve blood circulation.' },
    ],
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('IDN');

  const t = translations[lang];

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
        <title>Ayna Massage Spa &amp; Reflexology — Traditional Javanese Wellness</title>
        <meta name="description" content="Nikmati pengalaman relaksasi pijat tradisional Jawa di Ayna Healthy Reflexology &amp; Spa. Tersedia Javanese Massage, Foot Reflexology, Totok Wajah, Kerokan, dan Scrub dengan harga terjangkau." />
        <meta name="keywords" content="reflexology, spa, pijat tradisional jawa, foot reflexology, totok wajah, kerokan, massage" />
        <meta property="og:title" content="Ayna Healthy Reflexology &amp; Spa" />
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
          <li><a href="#about">{t.navAbout}</a></li>
          <li><a href="#services">{t.navServices}</a></li>
          <li><a href="#benefits">{t.navBenefits}</a></li>
          <li><a href="#contact">{t.navContact}</a></li>
        </ul>
        <div className="nav-right">
          {/* LANGUAGE SWITCHER */}
          <div className="lang-switcher" role="group" aria-label="Language switcher">
            <button
              id="lang-idn"
              className={`lang-btn${lang === 'IDN' ? ' active' : ''}`}
              onClick={() => setLang('IDN')}
              aria-pressed={lang === 'IDN'}
            >
              IDN
            </button>
            <span className="lang-divider" aria-hidden="true">|</span>
            <button
              id="lang-en"
              className={`lang-btn${lang === 'EN' ? ' active' : ''}`}
              onClick={() => setLang('EN')}
              aria-pressed={lang === 'EN'}
            >
              EN
            </button>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="nav-cta">{t.navCta}</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-circles">
          <span /><span /><span />
        </div>
        <div className="hero-inner">
          <div className="hero-badge">
            <span />{t.heroBadge}
          </div>
          <Image src="/logo.png" alt="Ayna Spa Logo" width={280} height={350} className="hero-logo" priority />
          <h1 className="hero-title">
            <em>Ayna</em> Massage<br />Spa &amp; Reflexology
          </h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <p className="hero-desc">{t.heroDesc}</p>
          <div className="hero-actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.heroPrimary}</a>
            <a href="#services" className="btn-secondary">{t.heroSecondary}</a>
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
              <p className="section-label">{t.aboutLabel}</p>
              <h2>{t.aboutHeading}</h2>
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-num">5+</div>
                  <div className="stat-label">{t.stat1Label}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">{t.stat2Label}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">🌿</div>
                  <div className="stat-label">{t.stat3Label}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">🕯️</div>
                  <div className="stat-label">{t.stat4Label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">
        <div className="section-inner">
          <p className="section-label reveal">{t.servicesLabel}</p>
          <h2 className="section-title reveal">{t.servicesTitle}</h2>
          <div className="ornament reveal">
            <span className="ornament-line" />
            <span className="ornament-icon">🌸</span>
            <span className="ornament-line right" />
          </div>
          <div className="price-grid">
            {t.services.map((svc, i) => (
              <div className="price-card reveal" key={i}>
                <div className="price-card-icon">{svc.icon}</div>
                <div className="price-card-title">
                  {svc.title}
                  {svc.subtitle && <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'Outfit', fontWeight: 300, marginTop: 2 }}>{svc.subtitle}</div>}
                </div>
                {svc.flat ? (
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 4 }}>{t.tarif}</div>
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
          <p className="section-label reveal">{t.benefitsLabel}</p>
          <h2 className="section-title reveal">{t.benefitsTitle}</h2>
          <p className="section-desc reveal">{t.benefitsDesc}</p>
          <div className="benefits-grid">
            {t.benefits.map((b, i) => (
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
            <p className="section-label">{t.contactLabel}</p>
            <h2 className="contact-title">{t.contactTitle}</h2>
            <p className="contact-sub">{t.contactSub}</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="wa-btn">
              <span className="wa-icon">💬</span>
              Chat WhatsApp — 0812-3018-1886
            </a>
            <div className="contact-info">
              <div className="info-item">
                <div className="info-label">{t.contactInfoLabel1}</div>
                <div className="info-value">0812-3018-1886</div>
              </div>
              <div className="info-item">
                <div className="info-label">{t.contactInfoLabel2}</div>
                <div className="info-value">Traditional Massage &amp; Reflexology</div>
              </div>
              <div className="info-item">
                <div className="info-label">{t.contactInfoLabel3}</div>
                <div className="info-value">Calm &amp; Professional ✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">✨ AYNA MASSAGE SPA &amp; REFLEXOLOGY ✨</div>
        <p className="footer-text">
          {t.footerSub}<br />
          <a href={waLink} target="_blank" rel="noopener noreferrer">WA: 0812-3018-1886</a>
        </p>
        <p className="footer-text" style={{ marginTop: 16, fontSize: 12, opacity: 0.5 }}>
          © {new Date().getFullYear()} Ayna Healthy Reflexology &amp; Spa. All rights reserved.
        </p>
      </footer>
    </>
  );
}
