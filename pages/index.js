import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const translations = {
  IDN: {
    navAbout: 'Tentang',
    navServices: 'Layanan',
    navBenefits: 'Manfaat',
    navFaq: 'FAQ',
    navContact: 'Kontak',
    navCta: 'Booking Sekarang',
    heroTitle: <><em>Ayna</em> Pijat Panggilan Surabaya</>,
    heroBadge: 'Traditional Javanese Wellness & Spa',
    heroSubtitle: 'Calm Ambience · Healing Touch · Aroma Therapy',
    heroDesc: 'Mencari jasa pijat Surabaya yang profesional dan bisa datang langsung ke tempat Anda? Ayna Pijat Panggilan Surabaya adalah solusi terbaik untuk merelaksasi tubuh Anda dengan teknik pijat tradisional Jawa yang menenangkan. Kami menghadirkan pengalaman spa premium langsung ke rumah, apartemen, atau kamar hotel Anda tanpa perlu repot keluar rumah. Nikmati layanan pijat 24 jam dengan terapis berpengalaman. 🌿🕯️',
    heroPrimary: '🌿 Booking Sekarang',
    heroSecondary: 'Lihat Layanan →',
    aboutLabel: 'Tentang Kami',
    aboutHeading: <>Sentuhan <em>Tradisional</em>, Kesegaran Modern</>,
    aboutP1: 'Ayna Massage Spa & Reflexology menghadirkan layanan pijat panggilan Surabaya profesional yang memadukan kearifan lokal pijat tradisional Jawa dengan suasana spa modern yang mewah. Kami memahami bahwa kesibukan sehari-hari di kota besar seperti Surabaya dapat membuat tubuh dan pikiran menjadi tegang. Oleh karena itu, kami siap datang ke lokasi Anda kapan saja untuk memberikan perawatan terbaik.',
    aboutP2: 'Setiap treatment yang kami tawarkan dirancang secara khusus untuk membantu mengurangi pegal, meredakan stres, melancarkan peredaran darah, dan mengembalikan kesegaran tubuh Anda secara menyeluruh. Sangat cocok untuk melepas lelah setelah aktivitas harian yang padat, setelah perjalanan panjang, atau sekadar memberikan waktu untuk memanjakan diri Anda (me-time).',
    aboutP3: 'Didukung oleh tim terapis wanita dan pria yang tersertifikasi, ramah, dan berpengalaman, kami menjamin kualitas pijat yang aman, nyaman, dan berstandar tinggi. Kami juga selalu menjaga kebersihan peralatan serta menggunakan minyak esensial dan aromaterapi berkualitas yang aman bagi kulit Anda.',
    stat1Label: 'Jenis Layanan',
    stat2Label: 'Profesional',
    stat3Label: 'Bahan Alami',
    stat4Label: 'Aroma Therapy',
    servicesLabel: 'Price List',
    servicesTitle: <>Pilihan <em>Layanan</em> Pijat Kami</>,
    tarif: 'Tarif',
    benefitsLabel: 'Manfaat',
    benefitsTitle: <>Relax Your Body, <em>Calm Your Mind</em></>,
    benefitsDesc: 'Perpaduan teknik pijat tradisional dan suasana spa yang nyaman membantu tubuh terasa lebih ringan, rileks, dan kembali segar. Rasakan berbagai manfaat kesehatan dan relaksasi dari layanan pijat kami. 🕯️✨',
    faqLabel: 'Pertanyaan Umum',
    faqTitle: <>Yang Sering <em>Ditanyakan</em></>,
    contactLabel: 'Hubungi Kami',
    contactTitle: <>Siap untuk <em>Relaksasi</em> di Surabaya?</>,
    contactSub: 'Booking layanan pijat panggilan kami sekarang melalui WhatsApp. Admin kami responsif dan siap membantu menyesuaikan jadwal terapi Anda 🌿',
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
      { icon: '🌿', title: 'Mengurangi Pegal & Nyeri', desc: 'Teknik pijat tradisional Jawa yang kami gunakan sangat efektif meredakan ketegangan otot, rasa pegal, dan nyeri sendi setelah seharian bekerja atau beraktivitas berat.' },
      { icon: '🧘', title: 'Meredakan Stres & Penat', desc: 'Sentuhan terapeutik dikombinasikan dengan aroma terapi pilihan dapat membantu menenangkan pikiran, meredakan kecemasan, serta menurunkan tingkat stres Anda.' },
      { icon: '😴', title: 'Meningkatkan Kualitas Tidur', desc: 'Relaksasi mendalam dari pijatan kami membantu mengatasi masalah insomnia, serta memperbaiki pola dan kualitas istirahat malam Anda agar bangun lebih segar.' },
      { icon: '💪', title: 'Menjaga Kebugaran Tubuh', desc: 'Perawatan rutin di Ayna Spa dapat menjaga kebugaran tubuh, meningkatkan sistem imun, dan melancarkan sirkulasi peredaran darah secara optimal ke seluruh tubuh.' },
    ],
    faqs: [
      { q: 'Apakah Ayna Pijat melayani panggilan ke hotel dan apartemen?', a: 'Tentu saja! Kami melayani panggilan ke rumah, kos, apartemen, maupun hotel di seluruh area Surabaya dan sekitarnya.' },
      { q: 'Bagaimana cara melakukan pemesanan (booking)?', a: 'Anda dapat dengan mudah memesan layanan kami melalui tombol WhatsApp yang tersedia di website ini. Admin kami akan segera merespons untuk mengatur jadwal terapis.' },
      { q: 'Apakah terapis di Ayna Massage profesional?', a: 'Ya, semua terapis kami telah melalui proses seleksi dan pelatihan ketat. Mereka sangat berpengalaman, ramah, dan profesional dalam memberikan berbagai jenis terapi pijat.' },
    ]
  },
  EN: {
    navAbout: 'About',
    navServices: 'Services',
    navBenefits: 'Benefits',
    navFaq: 'FAQ',
    navContact: 'Contact',
    navCta: 'Book Now',
    heroTitle: <><em>Ayna</em> Massage &amp; Spa Surabaya</>,
    heroBadge: 'Traditional Javanese Wellness',
    heroSubtitle: 'Calm Ambience · Healing Touch · Aroma Therapy',
    heroDesc: 'Looking for a professional massage service in Surabaya that comes directly to you? Enjoy a deeply relaxing experience with traditional Javanese massage techniques that calm your body and mind. We bring a premium spa experience directly to your home, apartment, or hotel room without the hassle of traveling. Experience our warm atmosphere, soothing aromatherapy, and exceptional professional service. 🌿🕯️',
    heroPrimary: '🌿 Book Now',
    heroSecondary: 'View Services →',
    aboutLabel: 'About Us',
    aboutHeading: <><em>Traditional</em> Touch, Modern Freshness</>,
    aboutP1: 'Ayna Massage Spa & Reflexology brings a holistic wellness experience that beautifully combines traditional Javanese massage wisdom with a modern, luxurious spa atmosphere. We understand that living or traveling in a bustling city like Surabaya can leave you feeling tense and exhausted. That is why we are ready to come to your location anytime to deliver the ultimate relaxation experience directly to you.',
    aboutP2: 'Every treatment we offer is carefully designed by our experts to help relieve stubborn muscle aches, reduce daily stress, improve blood circulation, and restore your body\'s vitality. Our services are absolutely perfect for unwinding after a long, busy day at work, recovering from extensive travel, or simply taking some well-deserved time off to pamper yourself.',
    aboutP3: 'Supported by a dedicated team of certified, friendly, and highly experienced therapists, we guarantee a safe, comfortable, and top-tier massage experience. We strictly maintain the cleanliness of all our equipment and only use high-quality, skin-safe essential oils and aromatherapy blends.',
    stat1Label: 'Service Types',
    stat2Label: 'Professional',
    stat3Label: 'Natural Ingredients',
    stat4Label: 'Aroma Therapy',
    servicesLabel: 'Price List',
    servicesTitle: <>Our Massage <em>Services</em></>,
    tarif: 'Rate',
    benefitsLabel: 'Benefits',
    benefitsTitle: <>Relax Your Body, <em>Calm Your Mind</em></>,
    benefitsDesc: 'The perfect combination of authentic traditional massage techniques and a comfortable spa atmosphere helps your body feel incredibly lighter, deeply relaxed, and fully refreshed. Discover the amazing health and wellness benefits of our professional therapies. 🕯️✨',
    faqLabel: 'Frequently Asked Questions',
    faqTitle: <>Common <em>Questions</em></>,
    contactLabel: 'Contact Us',
    contactTitle: <>Ready to <em>Relax</em> in Surabaya?</>,
    contactSub: 'Book your home-service massage now via WhatsApp. Our friendly admin is ready to assist you in scheduling your perfect therapy session 🌿',
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
      { icon: '🌿', title: 'Relieve Muscle Soreness', desc: 'Our authentic traditional Javanese massage techniques are highly effective in relieving muscle tension, stiff joints, and soreness after your busy daily activities or intense workouts.' },
      { icon: '🧘', title: 'Reduce Stress & Anxiety', desc: 'The soothing therapeutic touch combined with our premium selected aromatherapy helps calm an overactive mind, alleviate anxiety, and significantly lower your overall stress levels.' },
      { icon: '😴', title: 'Improve Sleep Quality', desc: 'The deep relaxation achieved from our massage sessions helps combat insomnia, significantly improving the pattern and quality of your nightly rest so you wake up feeling energized.' },
      { icon: '💪', title: 'Maintain Body Fitness', desc: 'Regular wellness treatments at Ayna Spa help maintain overall body fitness, boost your immune system, and optimally improve blood circulation throughout your entire body.' },
    ],
    faqs: [
      { q: 'Does Ayna Massage offer outcall services to hotels and apartments?', a: 'Absolutely! We provide convenient outcall massage services directly to your home, apartment, or hotel room anywhere within the Surabaya area and its surroundings.' },
      { q: 'How do I make a reservation or booking?', a: 'You can easily book our services by clicking the WhatsApp button available on this website. Our responsive admin will quickly assist you in arranging a schedule with our therapists.' },
      { q: 'Are the therapists at Ayna Massage professional?', a: 'Yes, all our therapists have gone through a rigorous selection and training process. They are highly experienced, exceptionally friendly, and professional in providing all of our massage therapies.' },
    ]
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const locale = router.locale || 'id';
  const t = translations[locale === 'en' ? 'EN' : 'IDN'];

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
  const DOMAIN = 'https://www.aynamassage.com';
  const canonicalUrl = locale === 'en' ? `${DOMAIN}/en` : `${DOMAIN}/`;

  return (
    <>
      <Head>
        {/* === PRIMARY META === */}
        <title>{locale === 'en'
          ? 'Ayna Massage & Spa Surabaya | Javanese Reflexology'
          : 'Ayna Pijat Panggilan Surabaya | Spa & Reflexology'
        }</title>
        <meta name="description" content={locale === 'en'
          ? 'Professional Javanese massage, foot reflexology & spa in Surabaya. Outcall home service with aromatherapy. Book via WhatsApp today!'
          : 'Layanan pijat panggilan Surabaya profesional. Ayna menawarkan reflexology, spa, dan pijat kesehatan langsung ke rumah atau hotel Anda. Pesan sekarang!'
        } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="id" href={`${DOMAIN}/`} />
        <link rel="alternate" hrefLang="en" href={`${DOMAIN}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/`} />

        {/* === OPEN GRAPH === */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ayna Massage Spa & Reflexology" />
        <meta property="og:title" content={locale === 'en'
          ? 'Ayna Massage & Spa Surabaya | Javanese Reflexology'
          : 'Ayna Pijat Panggilan Surabaya | Spa & Reflexology'
        } />
        <meta property="og:description" content={locale === 'en'
          ? 'Professional Javanese massage, foot reflexology & spa in Surabaya. Outcall home service with aromatherapy. Book via WhatsApp today!'
          : 'Layanan pijat panggilan Surabaya profesional. Ayna menawarkan reflexology, spa, dan pijat kesehatan langsung ke rumah atau hotel Anda. Pesan sekarang!'
        } />
        <meta property="og:image" content={`${DOMAIN}/logo-ayna.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'id_ID'} />

        {/* === TWITTER CARD === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={locale === 'en' ? 'Ayna Massage & Spa Surabaya' : 'Ayna Pijat Panggilan Surabaya'} />
        <meta name="twitter:description" content={locale === 'en'
          ? 'Javanese Traditional Massage · Foot Reflexology · Totok Wajah · Kerokan. From 50K.'
          : 'Layanan pijat panggilan Surabaya profesional. Ayna menawarkan reflexology, spa, dan pijat kesehatan langsung ke tempat Anda.'
        } />
        <meta name="twitter:image" content={`${DOMAIN}/logo-ayna.jpg`} />

        {/* === STRUCTURED DATA (JSON-LD) === */}
        {/* TODO: Lengkapi addressLocality & addressRegion dengan kota/provinsi asli */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Ayna Massage Spa & Reflexology",
              "description": "Layanan Ayna pijat panggilan Surabaya untuk pijat tradisional Jawa, Foot Reflexology, Totok Wajah, dan Spa dengan harga terjangkau.",
              "url": "https://www.aynamassage.com",
              "telephone": "+6281230181886",
              "priceRange": "Rp 50.000 - Rp 225.000",
              "image": "https://www.aynamassage.com/logo-ayna.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surabaya",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Layanan Ayna Spa",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Javanese Traditional Massage" }, "price": "135000", "priceCurrency": "IDR" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foot Reflexology" }, "price": "120000", "priceCurrency": "IDR" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Totok Wajah (Face Acupressure)" }, "price": "50000", "priceCurrency": "IDR" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kerokan Therapy" }, "price": "50000", "priceCurrency": "IDR" },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massage + Scrub" }, "price": "195000", "priceCurrency": "IDR" }
                ]
              },
              "sameAs": [
                "https://wa.me/6281230181886"
              ]
            })
          }}
        />
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
          <li><a href="#faq">{t.navFaq}</a></li>
          <li><a href="#contact">{t.navContact}</a></li>
        </ul>
        <div className="nav-right">
          {/* LANGUAGE SWITCHER */}
          <div className="lang-switcher" role="group" aria-label="Language switcher">
            <button
              id="lang-idn"
              className={`lang-btn${locale !== 'en' ? ' active' : ''}`}
              onClick={() => router.push('/', '/', { locale: 'id' })}
              aria-pressed={locale !== 'en'}
            >
              <img src="https://flagcdn.com/w20/id.png" srcSet="https://flagcdn.com/w40/id.png 2x" width="20" height="14" alt="Bendera Indonesia" className="lang-flag" />
              IDN
            </button>
            <span className="lang-divider" aria-hidden="true">|</span>
            <button
              id="lang-en"
              className={`lang-btn${locale === 'en' ? ' active' : ''}`}
              onClick={() => router.push('/', '/', { locale: 'en' })}
              aria-pressed={locale === 'en'}
            >
              <img src="https://flagcdn.com/w20/gb.png" srcSet="https://flagcdn.com/w40/gb.png 2x" width="20" height="14" alt="UK Flag" className="lang-flag" />
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
          <Image src="/logo-ayna.jpg" alt={locale === 'en' ? "Ayna Massage Spa & Reflexology Surabaya" : "Ayna Pijat Panggilan Surabaya — Terapis Profesional"} width={280} height={350} className="hero-logo" priority />
          <h1 className="hero-title">
            {t.heroTitle}
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
                <Image src="/logo-ayna.jpg" alt={locale === 'en' ? "Ayna Massage Spa — Traditional Javanese Wellness" : "Ayna Pijat Panggilan Surabaya — Reflexology & Spa"} width={260} height={260} />
              </div>
            </div>
            <div className="about-text reveal">
              <p className="section-label">{t.aboutLabel}</p>
              <h2>{t.aboutHeading}</h2>
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
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

      {/* FAQ */}
      <section className="section faq" id="faq">
        <div className="section-inner">
          <p className="section-label reveal">{t.faqLabel}</p>
          <h2 className="section-title reveal">{t.faqTitle}</h2>
          <div className="faq-list">
            {t.faqs.map((f, i) => (
              <div className="faq-item reveal" key={i}>
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
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
          © {new Date().getFullYear()} Ayna Massage Spa &amp; Reflexology. All rights reserved.
        </p>
      </footer>
    </>
  );
}
