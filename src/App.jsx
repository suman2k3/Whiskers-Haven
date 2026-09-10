import { useState, useEffect } from 'react';
import { breedsData } from './data/breedsData';
import { BreedDetailPage } from './components/BreedDetailPage';
import { ImageLightbox } from './components/ImageLightbox';
import whiskerLogo from './assets/whisker-logo.png';
import ragdoll1Img from './assets/ragdoll1.jpg';
import ragdoll2Img from './assets/ragdoll2.jpg';
import bshNew1Img from './assets/bsh_new1.jpg';
import bshNew2Img from './assets/bsh_new2.jpg';
import bengalNew1Img from './assets/bengal_new1.jpg';
import bengalNew2Img from './assets/bengal_new2.jpg';
import bsh1Img from './assets/bsh1.png';
import bsh2Img from './assets/bsh2.png';
import bengalImg from './assets/bengal.png';
import bengal2Img from './assets/bengal2.png';
import mainecoonNew1Img from './assets/mainecoon_new1.jpg';
import mainecoonNew2Img from './assets/mainecoon_new2.jpg';
import mainecoon1Img from './assets/mainecoon1.png';
import mainecoon2Img from './assets/mainecoon2.png';

const primaryPhone = '+91 8826234384';
const primaryPhoneLink = '918826234384';
const secondaryPhone = '+91 8630252570';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Kittens', href: '#kittens' },
  { label: 'Breeds', href: '#breeds' },
  { label: 'Why Us', href: '#why' },
  { label: 'Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Families', href: '#families' },
  { label: 'Contact', href: '#contact' }
];

const statsConfig = [
  {
    label: 'Trusted by families',
    target: 5000,
    format: (value) => `${Math.floor(value / 1000)}k+`
  },
  {
    label: 'Health-checked kittens',
    target: 100,
    format: (value) => `${value}%`
  },
  {
    label: 'Pan-India delivery',
    target: 24,
    format: (value) => `${value}/7`
  }
];

const trustStatsConfig = [
  { label: 'Years of experience', target: 10, suffix: '+' },
  { label: 'Happy families', target: 5000, suffix: '+' },
  { label: 'Cat breeds', target: 9, suffix: '' },
  { label: 'Delivery network', value: 'Pan-India' },
  { label: 'Pet-parent support', value: 'Dedicated' }
];

const highlights = [
  {
    title: 'Gentle, loving companions',
    text: 'Every kitten is chosen for temperament, health, and the kind of home they will thrive in.'
  },
  {
    title: 'Responsible breeding',
    text: 'We blend ethics, transparency, and care at every stage from early months to adoption.'
  },
  {
    title: 'Support that lasts',
    text: 'You get advice, guidance, and a smooth transition into life with your new best friend.'
  }
];

const kittens = [
  { name: 'Ragdoll', breed: 'Ragdoll', location: 'Home raised', images: [ragdoll1Img, ragdoll2Img] },
  { name: 'British Shorthair', breed: 'British Shorthair', location: 'Home raised', images: [bshNew1Img, bshNew2Img] },
  { name: 'Bengal', breed: 'Bengal', location: 'Health checked', images: [bengalNew1Img, bengalNew2Img] },
  { name: 'Maine Coon', breed: 'Maine Coon', location: 'Health checked', images: [mainecoonNew1Img, mainecoonNew2Img] }
];

const breeds = [
  { name: 'Ragdoll', personality: 'Affectionate and gentle', detail: 'A soft-hearted companion for families and apartments.' },
  { name: 'British Shorthair', personality: 'Calm and round-faced', detail: 'Plush, patient, and wonderfully easy-going.' },
  { name: 'Bengal', personality: 'Bright and energetic', detail: 'A playful, curious cat with a beautifully patterned coat.' },
  { name: 'Maine Coon', personality: 'Friendly and playful', detail: 'A gentle giant with a big personality and loving nature.' }
];

const whyFeatures = [
  { title: 'Health checked', text: 'Every kitten is screened and prepared before adoption.' },
  { title: 'Vaccination support', text: 'Age-appropriate health support is part of every transition.' },
  { title: 'Microchipped', text: 'Safe identification and peace of mind from day one.' },
  { title: 'Responsible breeding', text: 'We focus on temperament, wellbeing, and ethical practices at every step.' },
  { title: 'Safe transportation', text: 'Carefully planned travel makes the journey home smooth and comfortable.' },
  { title: 'Lifetime guidance', text: 'We stay with you long after adoption with ongoing support and care advice.' }
];

const timeline = [
  { step: '01', title: 'Choose your companion', text: 'Explore personalities and match a kitten to your home.' },
  { step: '02', title: 'Meet the kitten', text: 'We share photos, videos, and temperament guidance.' },
  { step: '03', title: 'Health verification', text: 'Review health records, vaccines, and care notes together.' },
  { step: '04', title: 'Expert guidance', text: 'Get support for food, grooming, setup, and first-week routines.' },
  { step: '05', title: 'Safe transportation', text: 'We arrange a comfortable, carefully planned journey to your home.' },
  { step: '06', title: 'Welcome home', text: 'Your kitten settles in with guidance and care that lasts.' }
];

const services = [
  { number: '01', title: 'Cat boarding', eyebrow: 'A stay they will love', text: 'A calm, cared-for home away from home for your favourite feline.', image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1100&q=85', features: ['Day care', 'Long stays', '24 × 7 vet care', 'CCTV access'] },
  { number: '02', title: 'Cat grooming', eyebrow: 'Gentle care, polished finish', text: 'Comfort-led grooming to keep coats soft, paws neat, and cats feeling their best.', image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=1100&q=85', features: ['Nails trimming', 'Coat care'] },
  { number: '03', title: 'Cat accessories', eyebrow: 'Everyday essentials, beautifully chosen', text: 'Thoughtfully selected comforts and playtime favourites for a happy, healthy cat.', image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=1100&q=85', features: ['Custom feeding bowls', 'Imported litter boxes & trays', 'Collars & harnesses', 'Toys & accessories', 'Pet wellness products'] }
];

const groomingPlans = [
  {
    name: 'Essential Groom',
    price: '₹899',
    description: 'A fresh, gentle reset for everyday coat care.',
    features: ['Dry Bath', 'Brushing & De-shedding', 'Nail Trimming', 'Ear Cleaning', 'Eye Cleaning', 'Paw Cleaning', 'Sanitary Trim']
  },
  {
    name: 'Complete Bath & Groom',
    price: '₹1,499',
    description: 'A complete clean, condition, and coat-care session.',
    featured: true,
    features: ['Cat-Safe Shampoo Bath', 'Conditioning', 'Blow Dry', 'Brushing & De-shedding', 'Nail Trimming', 'Ear & Eye Cleaning', 'Paw Pad Trim', 'Sanitary Trim']
  },
  {
    name: 'Full Groom + Haircut',
    price: '₹1,999',
    description: 'The full salon finish for a beautifully shaped coat.',
    features: ['Cat-Safe Shampoo Bath', 'Conditioning', 'Blow Dry', 'Brushing & De-shedding', 'Nail Trimming', 'Ear & Eye Cleaning', 'Paw Pad Trim', 'Sanitary Trim', 'Full-Body Haircut / Coat Trim', 'Face & Paw Shaping', 'Coat Styling & Finishing']
  }
];

const groomingAddOns = [
  ['De-matting', '₹300+'],
  ['Haircut Add-On', '₹500–₹800'],
  ['Teeth Cleaning', '₹250'],
  ['Severe Matting / Shave-Down', 'Price after coat assessment']
];

const blogPosts = [
  { title: 'How to prepare your home for a kitten', tag: 'First-time owners' },
  { title: 'Choosing the right breed for your lifestyle', tag: 'Breed guide' },
  { title: 'Easy grooming habits for a happy cat', tag: 'Grooming' }
];

const testimonials = [
  { name: 'Ananya', quote: 'The process felt thoughtful, transparent, and genuinely caring from start to finish.' },
  { name: 'Rohan', quote: 'Our kitten arrived healthy, happy, and fully supported by the team.' },
  { name: 'Priya', quote: 'It was the smoothest adoption experience we have ever had.' }
];

const gallery = [
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80'
];

const faqs = [
  { question: 'How do I choose the right kitten?', answer: 'We help you match temperament, energy levels, and home setup to the right breed and personality.' },
  { question: 'Do you provide transport?', answer: 'Yes, we arrange safe and comfortable transport across India for every adoption.' },
  { question: 'Are the kittens vaccinated?', answer: 'Yes, they receive age-appropriate vaccination support and full health guidance.' }
];

const quizQuestions = [
  {
    id: 'q1',
    prompt: 'Would you prefer a low-maintenance cat?',
    options: [
      {
        label: 'Yes',
        scores: { 'Ragdoll': 1, 'British Shorthair': 3, 'Bengal': 2, 'Maine Coon': 1 }
      },
      {
        label: 'No',
        scores: { 'Ragdoll': 3, 'British Shorthair': 1, 'Bengal': 2, 'Maine Coon': 3 }
      },
      {
        label: 'Either',
        scores: { 'Ragdoll': 2, 'British Shorthair': 2, 'Bengal': 2, 'Maine Coon': 2 }
      }
    ]
  },
  {
    id: 'q2',
    prompt: 'Do you want a playful or relaxed companion?',
    options: [
      {
        label: 'Playful',
        scores: { 'Ragdoll': 1, 'British Shorthair': 1, 'Bengal': 3, 'Maine Coon': 3 }
      },
      {
        label: 'Relaxed',
        scores: { 'Ragdoll': 3, 'British Shorthair': 3, 'Bengal': 1, 'Maine Coon': 2 }
      },
      {
        label: 'Balanced',
        scores: { 'Ragdoll': 3, 'British Shorthair': 2, 'Bengal': 2, 'Maine Coon': 3 }
      }
    ]
  },
  {
    id: 'q3',
    prompt: 'How much time can you spend with your cat?',
    options: [
      {
        label: 'A little',
        scores: { 'Ragdoll': 1, 'British Shorthair': 3, 'Bengal': 1, 'Maine Coon': 1 }
      },
      {
        label: 'A fair amount',
        scores: { 'Ragdoll': 3, 'British Shorthair': 3, 'Bengal': 2, 'Maine Coon': 3 }
      },
      {
        label: 'A lot',
        scores: { 'Ragdoll': 3, 'British Shorthair': 2, 'Bengal': 3, 'Maine Coon': 3 }
      }
    ]
  }
];

const breedInfoMap = {
  'Ragdoll': {
    name: 'Ragdoll',
    tagline: 'Affectionate & Gentle Companion',
    description: 'Sweet-tempered, quiet, and docile. Ragdolls love relaxing by your side and cuddling.',
    image: ragdoll1Img
  },
  'British Shorthair': {
    name: 'British Shorthair',
    tagline: 'Calm, Easy-going & Plush Companion',
    description: 'Peaceful, independent, and easy to care for. Perfect for busy households.',
    image: bshNew1Img
  },
  'Bengal': {
    name: 'Bengal',
    tagline: 'Bright, Active & Playful Adventurer',
    description: 'High-energy, curious, and intelligent with a beautiful wild-spotted coat.',
    image: bengalNew1Img
  },
  'Maine Coon': {
    name: 'Maine Coon',
    tagline: 'Friendly Giant with a Big Heart',
    description: 'Gentle giant with a playful personality and soft coat. Wonderful family companion.',
    image: mainecoonNew1Img
  }
};

function KittenCard({ kitten, onSelectBreed }) {
  const images = kitten.images || (kitten.img ? [kitten.img] : []);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const breedSlug = kitten.breed.toLowerCase().replace(/ /g, '-');
  const waMessage = encodeURIComponent(`Hello Whiskers Haven, I am interested in ${kitten.name} (${kitten.breed}).`);
  const waUrl = `https://wa.me/${primaryPhoneLink}?text=${waMessage}`;

  return (
    <article className="kitten-card">
      <div
        className="kitten-img-wrap"
        onClick={() => onSelectBreed && onSelectBreed(breedSlug)}
      >
        <img src={images[currentImgIndex]} alt={kitten.name} />
        <button
          type="button"
          className="card-resize-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLightboxOpen(true);
          }}
          aria-label="View full screen photo"
          title="Open full screen photo"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
        {images.length > 1 && (
          <>
            <button type="button" className="card-slider-btn prev" onClick={prevImage} aria-label="Previous image">
              ‹
            </button>
            <button type="button" className="card-slider-btn next" onClick={nextImage} aria-label="Next image">
              ›
            </button>
            <div className="card-slider-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`card-dot ${idx === currentImgIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={currentImgIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          onNext={() => setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        />
      )}
      <div className="kitten-body">
        <h3>{kitten.name}</h3>
        <p className="kitten-details">{kitten.breed} · {kitten.location}</p>
        <div className="card-actions-row">
          <a href={waUrl} target="_blank" rel="noreferrer" className="card-cta">Get {kitten.name}</a>
          <a
            href={`#cats/${breedSlug}`}
            className="breed-explore-link"
            onClick={(e) => {
              e.preventDefault();
              if (onSelectBreed) onSelectBreed(breedSlug);
            }}
          >
            Explore Breed →
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeFaq, setActiveFaq] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [statValues, setStatValues] = useState(statsConfig.map(() => 0));
  const [trustValues, setTrustValues] = useState(trustStatsConfig.map((item) => item.target ? 0 : item.value));
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [highlightedPlan, setHighlightedPlan] = useState(null);

  const [activeBreedSlug, setActiveBreedSlug] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#cats/')) {
      return hash.replace('#cats/', '');
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#cats/')) {
        const slug = hash.replace('#cats/', '');
        setActiveBreedSlug(slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveBreedSlug(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToBreed = (slug) => {
    window.location.hash = `#cats/${slug}`;
    setActiveBreedSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    window.location.hash = '#home';
    setActiveBreedSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBreedObject = breedsData.find((b) => b.slug === activeBreedSlug);

  const handleGroomingClick = (e, planName) => {
    e.preventDefault();
    const elem = document.getElementById('grooming');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setHighlightedPlan(planName);
    setTimeout(() => {
      setHighlightedPlan(null);
    }, 2500);
  };

  const visibleKittens = activeFilter === 'All'
    ? kittens
    : kittens.filter((kitten) => kitten.breed === activeFilter);

  const filterOptions = ['All', ...new Set(kittens.map((kitten) => kitten.breed))];

  const handleQuizSelectOption = (option) => {
    const nextAnswers = [...answers];
    nextAnswers[quizStep] = option;
    setAnswers(nextAnswers);

    setQuizStep((prev) => prev + 1);
  };

  const handleQuizBack = () => {
    if (quizStep > 0) {
      setQuizStep((prev) => prev - 1);
    }
  };

  const handleQuizReset = () => {
    setQuizStep(0);
    setAnswers([]);
  };

  const calculateQuizResults = () => {
    const breedScores = {
      'Ragdoll': 0,
      'British Shorthair': 0,
      'Bengal': 0,
      'Maine Coon': 0
    };

    answers.forEach((option) => {
      if (option && option.scores) {
        Object.entries(option.scores).forEach(([breed, score]) => {
          breedScores[breed] = (breedScores[breed] || 0) + score;
        });
      }
    });

    const maxScore = Math.max(...Object.values(breedScores));
    const topBreeds = Object.entries(breedScores)
      .filter(([_, score]) => score === maxScore)
      .map(([breed]) => breed);

    return { breedScores, maxScore, topBreeds };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      'Hello Whiskers Haven, I would like to make an enquiry.',
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone')}`,
      `Message: ${formData.get('message') || 'Not provided'}`
    ].join('\n');

    window.location.assign(`https://wa.me/${primaryPhoneLink}?text=${encodeURIComponent(message)}`);
  };

  useEffect(() => {
    const frames = 45;
    let currentFrame = 0;
    const statStep = statsConfig.map((item) => item.target / frames);
    const trustStep = trustStatsConfig.map((item) => item.target ? item.target / frames : 0);

    const interval = setInterval(() => {
      currentFrame += 1;
      setStatValues(statsConfig.map((item, index) => Math.min(item.target, Math.round(statStep[index] * currentFrame))));
      setTrustValues(trustStatsConfig.map((item, index) => (
        item.target ? Math.min(item.target, Math.round(trustStep[index] * currentFrame)) : item.value
      )));

      if (currentFrame >= frames) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); navigateHome(); }}>
            <img className="brand-logo" src={whiskerLogo} alt="Whiskers Haven" />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (activeBreedSlug) {
                    e.preventDefault();
                    navigateHome();
                    setTimeout(() => {
                      const elem = document.querySelector(link.href);
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#kittens" className="btn btn-dark">Find a kitten</a>
            <button type="button" className="btn btn-gold enquiry-trigger" onClick={() => setEnquiryOpen(true)}>Enquire now</button>
            <button
              className="menu-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        {activeBreedObject ? (
          <BreedDetailPage
            breed={activeBreedObject}
            onBack={navigateHome}
            primaryPhoneLink={primaryPhoneLink}
          />
        ) : (
          <>
            <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Pure-bloodline kittens · responsibly raised</p>
              <h1>Find the cat <span>that feels like home.</span></h1>
              <p className="hero-text">
                Healthy, affectionate kittens with thoughtful care, transparent health records,
                and lifelong guidance for every family.
              </p>
              <p className="hero-text subtle-text">
                Discover Ragdoll, British Shorthair, Bengal, and Maine Coon companions—each home raised with careful attention from day one.
              </p>

              <div className="hero-actions">
                <a href="#kittens" className="btn btn-gold">Explore kittens</a>
                <a href="#story" className="btn btn-light">Our story</a>
              </div>

              <div className="hero-stats">
                {statsConfig.map((item, index) => (
                  <div key={item.label} className="stat-card">
                    <strong>{item.format(statValues[index])}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-grooming-panel">
                <p className="eyebrow">GROOMING MENU</p>
                <div className="hero-grooming-list">
                  <a
                    href="#grooming"
                    className="grooming-service-card"
                    onClick={(e) => handleGroomingClick(e, 'Essential Groom')}
                  >
                    <span className="service-name">Essential Groom</span>
                    <span className="service-price">
                      ₹899 <span className="service-arrow">→</span>
                    </span>
                  </a>

                  <a
                    href="#grooming"
                    className="grooming-service-card"
                    onClick={(e) => handleGroomingClick(e, 'Complete Bath & Groom')}
                  >
                    <span className="service-name">Complete Bath & Groom</span>
                    <span className="service-price">
                      ₹1,499 <span className="service-arrow">→</span>
                    </span>
                  </a>

                  <a
                    href="#grooming"
                    className="grooming-service-card"
                    onClick={(e) => handleGroomingClick(e, 'Full Groom + Haircut')}
                  >
                    <span className="service-name">Full Groom + Haircut</span>
                    <span className="service-price">
                      ₹1,999 <span className="service-arrow">→</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-top">
                  <p>Featured today</p>
                  <span>Available now</span>
                </div>
                <h3>Meet British Shorthair, a calm companion</h3>
                <p>Social, affectionate, and beautifully raised with careful attention from the very first week.</p>
                <ul>
                  <li>Vet checked</li>
                  <li>Vaccinated</li>
                  <li>Microchipped</li>
                </ul>
                <a href="#kittens" className="card-link">See available kittens →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            {trustStatsConfig.map((item, index) => (
              <div key={item.label} className="trust-card">
                <strong>{item.target ? `${trustValues[index]}${item.suffix || ''}` : item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="kittens">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Home raised · healthy</p>
              <h2>Meet our beautiful cats, breed by breed.</h2>
            </div>

            <div className="filter-row">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className={`filter-chip ${activeFilter === option ? 'active' : ''}`}
                  onClick={() => setActiveFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="card-grid">
              {visibleKittens.map((kitten) => (
                <KittenCard key={kitten.name} kitten={kitten} onSelectBreed={navigateToBreed} />
              ))}
            </div>
          </div>
        </section>

        <section className="section grooming-section" id="grooming">
          {/* Enhanced Cartoon Cat Characters & Grooming Accents */}
          <div className="grooming-decorations-vivid" aria-hidden="true">
            {/* Top-Left Peeking Cartoon Cat */}
            <div className="cartoon-cat-wrap cartoon-cat-top-left">
              <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 85 L25 30 L60 58 L95 58 L130 30 L120 85 Z" fill="#2a2522" />
                <path d="M33 38 L43 56 L54 56 Z" fill="#c9a96e" opacity="0.75"/>
                <path d="M122 38 L112 56 L101 56 Z" fill="#c9a96e" opacity="0.75"/>
                <path d="M25 85 Q77 62 130 85 Q140 125 77 135 Q15 125 25 85 Z" fill="#2a2522"/>
                <ellipse cx="55" cy="95" rx="8" ry="11" fill="#f6d99a"/>
                <ellipse cx="99" cy="95" rx="8" ry="11" fill="#f6d99a"/>
                <ellipse cx="55" cy="95" rx="3.5" ry="7" fill="#111111"/>
                <ellipse cx="99" cy="95" rx="3.5" ry="7" fill="#111111"/>
                <circle cx="53" cy="91" r="2" fill="#ffffff"/>
                <circle cx="97" cy="91" r="2" fill="#ffffff"/>
                <polygon points="74,104 80,104 77,108" fill="#c9a96e"/>
                <path d="M72 111 Q77 115 77 109 Q77 115 82 111" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M20 100 L44 102 M16 107 L44 105 M22 114 L46 109" stroke="#f6d99a" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M134 100 L110 102 M138 107 L110 105 M132 114 L108 109" stroke="#f6d99a" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="38" y="124" width="26" height="16" rx="8" fill="#2a2522" stroke="#c9a96e" strokeWidth="1.5"/>
                <rect x="88" y="124" width="26" height="16" rx="8" fill="#2a2522" stroke="#c9a96e" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* Top-Right Peeking Cartoon Cat */}
            <div className="cartoon-cat-wrap cartoon-cat-top-right">
              <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 85 L25 30 L60 58 L95 58 L130 30 L120 85 Z" fill="#3d322a" />
                <path d="M33 38 L43 56 L54 56 Z" fill="#e0b878" opacity="0.8"/>
                <path d="M122 38 L112 56 L101 56 Z" fill="#e0b878" opacity="0.8"/>
                <path d="M25 85 Q77 62 130 85 Q140 125 77 135 Q15 125 25 85 Z" fill="#3d322a"/>
                <ellipse cx="55" cy="95" rx="8" ry="11" fill="#ffe3ad"/>
                <ellipse cx="99" cy="95" rx="8" ry="11" fill="#ffe3ad"/>
                <ellipse cx="55" cy="95" rx="3.5" ry="7" fill="#111111"/>
                <ellipse cx="99" cy="95" rx="3.5" ry="7" fill="#111111"/>
                <circle cx="53" cy="91" r="2" fill="#ffffff"/>
                <circle cx="97" cy="91" r="2" fill="#ffffff"/>
                <polygon points="74,104 80,104 77,108" fill="#e0b878"/>
                <path d="M72 111 Q77 115 77 109 Q77 115 82 111" stroke="#e0b878" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M20 100 L44 102 M16 107 L44 105 M22 114 L46 109" stroke="#ffe3ad" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M134 100 L110 102 M138 107 L110 105 M132 114 L108 109" stroke="#ffe3ad" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="38" y="124" width="26" height="16" rx="8" fill="#3d322a" stroke="#e0b878" strokeWidth="1.5"/>
                <rect x="88" y="124" width="26" height="16" rx="8" fill="#3d322a" stroke="#e0b878" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* Bottom-Right Sitting Groomed Cartoon Cat */}
            <div className="cartoon-cat-wrap cartoon-cat-bottom-right">
              <svg viewBox="0 0 130 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98 145 Q128 140 122 102 Q118 72 108 82" stroke="#c9a96e" strokeWidth="10" strokeLinecap="round" fill="none"/>
                <path d="M40 92 Q25 150 65 155 Q105 150 90 92 Z" fill="#1c1917"/>
                <path d="M50 92 Q65 125 80 92 Q65 106 50 92 Z" fill="#f8f1e5" opacity="0.95"/>
                <circle cx="65" cy="62" r="30" fill="#1c1917"/>
                <polygon points="40,46 34,16 58,38" fill="#1c1917"/>
                <polygon points="42,42 38,22 54,38" fill="#c9a96e" opacity="0.6"/>
                <polygon points="90,46 96,16 72,38" fill="#1c1917"/>
                <polygon points="88,42 92,22 76,38" fill="#c9a96e" opacity="0.6"/>
                <ellipse cx="54" cy="60" rx="5.5" ry="7.5" fill="#f6d99a"/>
                <ellipse cx="76" cy="60" rx="5.5" ry="7.5" fill="#f6d99a"/>
                <ellipse cx="54" cy="60" rx="2.2" ry="5" fill="#111"/>
                <ellipse cx="76" cy="60" rx="2.2" ry="5" fill="#111"/>
                <circle cx="52" cy="57" r="1.5" fill="#fff"/>
                <circle cx="74" cy="57" r="1.5" fill="#fff"/>
                <polygon points="62,68 68,68 65,71" fill="#c9a96e"/>
                <path d="M61 74 Q65 77 65 72 Q65 77 69 74" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M53 84 L77 90 L67 87 L57 90 L77 84 Z" fill="#c9a96e"/>
                <circle cx="65" cy="86" r="2.8" fill="#ffffff"/>
                <path d="M34 66 L48 67 M32 72 L48 70" stroke="#f6d99a" strokeWidth="1.2"/>
                <path d="M96 66 L82 67 M98 72 L82 70" stroke="#f6d99a" strokeWidth="1.2"/>
              </svg>
            </div>

            {/* Grooming Tool Badges - High Contrast Floating Cards */}
            <div className="vivid-badge tool-scissors" style={{ top: '7%', left: '12%' }}>
              <span className="badge-icon">✂️</span>
              <span className="badge-label">Precision Trim</span>
            </div>

            <div className="vivid-badge tool-comb" style={{ bottom: '10%', left: '10%' }}>
              <span className="badge-icon">🪮</span>
              <span className="badge-label">Coat Styling</span>
            </div>

            <div className="vivid-badge tool-bath" style={{ top: '7%', right: '12%' }}>
              <span className="badge-icon">🫧</span>
              <span className="badge-label">Cat-Safe Bath</span>
            </div>

            <div className="vivid-badge tool-paw" style={{ bottom: '10%', right: '12%' }}>
              <span className="badge-icon">🐾</span>
              <span className="badge-label">Paw Care</span>
            </div>

            {/* Playful Paw Trail */}
            <div className="vivid-paw-trail">
              <span className="vivid-paw p1">🐾</span>
              <span className="vivid-paw p2">🐾</span>
              <span className="vivid-paw p3">🐾</span>
              <span className="vivid-paw p4">🐾</span>
            </div>

            {/* Soap Bubbles */}
            <div className="vivid-bubble b1" style={{ top: '14%', right: '8%' }} />
            <div className="vivid-bubble b2" style={{ top: '24%', right: '4%' }} />
            <div className="vivid-bubble b3" style={{ bottom: '20%', left: '6%' }} />
            <div className="vivid-bubble b4" style={{ bottom: '8%', right: '8%' }} />

            {/* Golden Sparkles */}
            <div className="vivid-sparkle s1" style={{ top: '5%', left: '20%' }}>✨</div>
            <div className="vivid-sparkle s2" style={{ top: '12%', right: '20%' }}>✨</div>
            <div className="vivid-sparkle s3" style={{ bottom: '18%', left: '18%' }}>✨</div>
            <div className="vivid-sparkle s4" style={{ bottom: '5%', right: '20%' }}>✨</div>
          </div>

          <div className="container">
            <div className="grooming-pricing">
              {/* Dedicated Top Decorative Row with Peeking Cartoon Cat */}
              <div className="grooming-top-decor" aria-hidden="true">
                <div className="mobile-cartoon-cat">
                  <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 85 L25 30 L60 58 L95 58 L130 30 L120 85 Z" fill="#2a2522" />
                    <path d="M33 38 L43 56 L54 56 Z" fill="#c9a96e" opacity="0.75"/>
                    <path d="M122 38 L112 56 L101 56 Z" fill="#c9a96e" opacity="0.75"/>
                    <path d="M25 85 Q77 62 130 85 Q140 125 77 135 Q15 125 25 85 Z" fill="#2a2522"/>
                    <ellipse cx="55" cy="95" rx="8" ry="11" fill="#f6d99a"/>
                    <ellipse cx="99" cy="95" rx="8" ry="11" fill="#f6d99a"/>
                    <ellipse cx="55" cy="95" rx="3.5" ry="7" fill="#111111"/>
                    <ellipse cx="99" cy="95" rx="3.5" ry="7" fill="#111111"/>
                    <circle cx="53" cy="91" r="2" fill="#ffffff"/>
                    <circle cx="97" cy="91" r="2" fill="#ffffff"/>
                    <polygon points="74,104 80,104 77,108" fill="#c9a96e"/>
                    <path d="M72 111 Q77 115 77 109 Q77 115 82 111" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M20 100 L44 102 M16 107 L44 105 M22 114 L46 109" stroke="#f6d99a" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M134 100 L110 102 M138 107 L110 105 M132 114 L108 109" stroke="#f6d99a" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="38" y="124" width="26" height="16" rx="8" fill="#2a2522" stroke="#c9a96e" strokeWidth="1.5"/>
                    <rect x="88" y="124" width="26" height="16" rx="8" fill="#2a2522" stroke="#c9a96e" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>

              <div className="grooming-heading">
                <p className="eyebrow">Cat grooming menu</p>
                <h3>Polished care, tailored to every coat.</h3>
                <p>Choose the level of care that feels right for your cat.</p>
              </div>
              <div className="grooming-plan-grid">
                {groomingPlans.map((plan) => (
                  <article key={plan.name} className={`grooming-plan ${plan.featured ? 'featured' : ''} ${highlightedPlan === plan.name ? 'plan-highlighted' : ''}`}>
                    {plan.featured && <span className="popular-badge">Most loved</span>}
                    <div className="grooming-plan-top">
                      <p>{plan.name}</p>
                      <strong>{plan.price}</strong>
                    </div>
                    <span className="grooming-plan-description">{plan.description}</span>
                    <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    <a href={`https://wa.me/${primaryPhoneLink}?text=${encodeURIComponent(`Hello, I would like to book the ${plan.name} package.`)}`} target="_blank" rel="noreferrer" className="grooming-book">Book this package <span>→</span></a>
                  </article>
                ))}
              </div>
              <div className="grooming-addons">
                <div><p className="eyebrow">Add-on services</p><h4>Extra care when it is needed.</h4></div>
                <div className="addon-list">
                  {groomingAddOns.map(([name, price]) => <div key={name}><span>{name}</span><strong>{price}</strong></div>)}
                </div>
              </div>
              <p className="grooming-note">Prices may vary depending on coat condition, matting, size, and temperament.</p>

              {/* Dedicated Bottom Decorative Row with Sitting Cartoon Cat + Paws */}
              <div className="grooming-bottom-decor" aria-hidden="true">
                <span className="decor-sparkle">✨</span>
                <span className="decor-paw">🐾</span>
                <div className="mobile-cartoon-cat bottom-cat">
                  <svg viewBox="0 0 130 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M98 145 Q128 140 122 102 Q118 72 108 82" stroke="#c9a96e" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    <path d="M40 92 Q25 150 65 155 Q105 150 90 92 Z" fill="#1c1917"/>
                    <path d="M50 92 Q65 125 80 92 Q65 106 50 92 Z" fill="#f8f1e5" opacity="0.95"/>
                    <circle cx="65" cy="62" r="30" fill="#1c1917"/>
                    <polygon points="40,46 34,16 58,38" fill="#1c1917"/>
                    <polygon points="42,42 38,22 54,38" fill="#c9a96e" opacity="0.6"/>
                    <polygon points="90,46 96,16 72,38" fill="#1c1917"/>
                    <polygon points="88,42 92,22 76,38" fill="#c9a96e" opacity="0.6"/>
                    <ellipse cx="54" cy="60" rx="5.5" ry="7.5" fill="#f6d99a"/>
                    <ellipse cx="76" cy="60" rx="5.5" ry="7.5" fill="#f6d99a"/>
                    <ellipse cx="54" cy="60" rx="2.2" ry="5" fill="#111"/>
                    <ellipse cx="76" cy="60" rx="2.2" ry="5" fill="#111"/>
                    <circle cx="52" cy="57" r="1.5" fill="#fff"/>
                    <circle cx="74" cy="57" r="1.5" fill="#fff"/>
                    <polygon points="62,68 68,68 65,71" fill="#c9a96e"/>
                    <path d="M61 74 Q65 77 65 72 Q65 77 69 74" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <path d="M53 84 L77 90 L67 87 L57 90 L77 84 Z" fill="#c9a96e"/>
                    <circle cx="65" cy="86" r="2.8" fill="#ffffff"/>
                    <path d="M34 66 L48 67 M32 72 L48 70" stroke="#f6d99a" strokeWidth="1.2"/>
                    <path d="M96 66 L82 67 M98 72 L82 70" stroke="#f6d99a" strokeWidth="1.2"/>
                  </svg>
                </div>
                <span className="decor-paw">🐾</span>
                <span className="decor-sparkle">✨</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section" id="breeds">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Breed explorer</p>
              <h2>Choose a breed that matches your lifestyle.</h2>
            </div>
            <div className="breed-row">
              {breedsData.map((breed) => (
                <article
                  key={breed.name}
                  className="breed-card clickable"
                  onClick={() => navigateToBreed(breed.slug)}
                >
                  <h3>{breed.name}</h3>
                  <p>{breed.tagline}</p>
                  <span>{breed.characteristics.personality}</span>
                  <a
                    href={`#cats/${breed.slug}`}
                    className="breed-card-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToBreed(breed.slug);
                    }}
                  >
                    Explore {breed.name} Page →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="quiz">
          <div className="container quiz-shell">
            <div className="section-heading center">
              <p className="eyebrow">Personality match</p>
              <h2>Which cat fits your home best?</h2>
            </div>

            {quizStep < quizQuestions.length ? (
              <div className="quiz-card">
                <div className="quiz-header-bar">
                  {quizStep > 0 ? (
                    <button type="button" className="quiz-back-btn" onClick={handleQuizBack}>
                      ← Back
                    </button>
                  ) : (
                    <span className="quiz-back-placeholder" />
                  )}
                  <span className="quiz-step-count">Question {quizStep + 1} of {quizQuestions.length}</span>
                </div>

                <div className="quiz-progress">
                  {quizQuestions.map((_, index) => (
                    <span key={index} className={index <= quizStep ? 'active' : ''} />
                  ))}
                </div>

                <h3 className="quiz-prompt">{quizQuestions[quizStep].prompt}</h3>

                <div className="quiz-options-list">
                  {quizQuestions[quizStep].options.map((option) => {
                    const isSelected = answers[quizStep]?.label === option.label;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        className={`quiz-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleQuizSelectOption(option)}
                      >
                        <span className="quiz-btn-label">{option.label}</span>
                        <span className="quiz-btn-indicator">{isSelected ? '✓' : '→'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (() => {
              const { breedScores, topBreeds } = calculateQuizResults();
              return (
                <div className="quiz-card result-card">
                  <div className="result-badge-strip">
                    <span className="result-badge">✦ Best Personality Match</span>
                  </div>

                  <h3>{topBreeds.length > 1 ? 'Your Top Matching Cats!' : 'Your Perfect Cat Match!'}</h3>
                  <p className="result-subtitle">Based on your answers, here is the cat breed that fits your home best:</p>

                  <div className="matched-breeds-row">
                    {topBreeds.map((breedName) => {
                      const breedInfo = breedInfoMap[breedName] || { name: breedName, tagline: '', description: '', image: ragdoll1Img };
                      const score = breedScores[breedName];
                      const waMessage = encodeURIComponent(`Hello Whiskers Haven, I completed the personality quiz and matched best with ${breedName} (${score}/9)! I am interested in learning more.`);
                      const waUrl = `https://wa.me/${primaryPhoneLink}?text=${waMessage}`;

                      return (
                        <div key={breedName} className="matched-breed-card">
                          <div className="matched-breed-image-wrap">
                            <img src={breedInfo.image} alt={breedName} />
                            <span className="matched-score-badge">{score}/9 Match</span>
                          </div>
                          <div className="matched-breed-content">
                            <h4>{breedName}</h4>
                            <p className="matched-tagline">{breedInfo.tagline}</p>
                            <p className="matched-desc">{breedInfo.description}</p>
                            <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-dark match-cta">
                              Get {breedName}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="quiz-score-breakdown">
                    <p className="breakdown-label">Full Scoring Results:</p>
                    <div className="scores-grid">
                      {Object.entries(breedScores).map(([bName, bScore]) => (
                        <div key={bName} className={`score-chip ${topBreeds.includes(bName) ? 'top-match' : ''}`}>
                          <span className="chip-breed-name">{bName}</span>
                          <span className="chip-score-val">{bScore}/9 pts</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button type="button" className="retake-quiz-btn" onClick={handleQuizReset}>
                    ↺ Retake Quiz
                  </button>
                </div>
              );
            })()}
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why The Cat Company</p>
              <h2>More than a kitten. A lifetime beginning.</h2>
            </div>
            <div className="feature-grid">
              {whyFeatures.map((item) => (
                <article key={item.title} className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Our process</p>
              <h2>From first hello to forever home.</h2>
            </div>
            <div className="timeline-grid">
              {timeline.map((step) => (
                <article key={step.step} className="timeline-card">
                  <span className="timeline-step">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section" id="story">
          <div className="container story-grid">
            <div className="story-copy">
              <p className="eyebrow">Our story</p>
              <h2>Raised with care. Matched with love.</h2>
              <p>The Cat Company began with a simple belief: every kitten deserves a thoughtful start, and every family deserves honesty about what that kitten needs.</p>
              <div className="feature-grid small-grid">
                {whyFeatures.slice(0, 3).map((item) => (
                  <article key={item.title} className="feature-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="story-visual">
              <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1200&q=80" alt="Cat being cared for with love" />
            </div>
          </div>
        </section>

        <section className="section pet-services" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Beyond adoption</p>
              <h2>Everything your cat needs, all in one caring place.</h2>
            </div>
            <div className="service-showcase">
              {services.map((service) => (
                <article key={service.title} className="service-feature-card">
                  <div className="service-photo-wrap">
                    <img src={service.image} alt={service.title} />
                    <span className="service-number">{service.number}</span>
                  </div>
                  <div className="service-feature-body">
                    <p className="service-eyebrow">{service.eyebrow}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ul className="service-feature-list">
                      {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <a href="#contact" className="service-link">Enquire now <span>→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Resources</p>
              <h2>Helpful advice for new cat parents.</h2>
            </div>
            <div className="card-grid blog-grid">
              {blogPosts.map((post) => (
                <article key={post.title} className="kitten-card blog-card">
                  <div className="kitten-body">
                    <p className="tag">{post.tag}</p>
                    <h3>{post.title}</h3>
                    <a href="#contact" className="text-link">Read more →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="families">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Happy families</p>
              <h2>Stories that make our work feel worthwhile.</h2>
            </div>
            <div className="testimonial-slider">
              <button className="slider-btn prev" type="button" onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
                ‹
              </button>
              <article className="testimonial-card active">
                <p>“{testimonials[testimonialIndex].quote}”</p>
                <strong>{testimonials[testimonialIndex].name}</strong>
              </article>
              <button className="slider-btn next" type="button" onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}>
                ›
              </button>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${testimonialIndex === index ? 'active' : ''}`}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow">Follow along</p>
              <h2>Moments from our cat family.</h2>
            </div>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <img key={index} src={image} alt={`Cat gallery ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-shell">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Questions we hear often.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <div key={item.question} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
                  <button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                    <span>{item.question}</span>
                    <strong>+</strong>
                  </button>
                  {activeFaq === index && <p>{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <p className="eyebrow">Get in touch</p>
              <h2>Ready to welcome your new companion?</h2>
              <p>We are currently dealing only in Ragdoll kittens.</p>
              <p><strong>Address:</strong> M6, KP1, Jaypee Wishtown, Sector 133</p>
              <p><strong>Phone:</strong> <a href={`tel:${primaryPhoneLink}`}>{primaryPhone}</a></p>
              <p><strong>Alternate phone:</strong> <a href="tel:+918630252570">{secondaryPhone}</a></p>
              <p><strong>Email:</strong> whiskershavenindia@gmail.com</p>
              <p>British Shorthair, Maine Coon, and Scottish Fold will be introduced very soon.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Email" required />
              <input name="phone" type="tel" placeholder="Phone" required />
              <textarea name="message" rows="4" placeholder="Tell us about the home you are preparing..."></textarea>
              <button type="submit" className="btn btn-dark">Send enquiry</button>
            </form>
          </div>
        </section>
          </>
        )}
      </main>

      {enquiryOpen && (
        <div className="enquiry-modal-backdrop" role="presentation" onMouseDown={() => setEnquiryOpen(false)}>
          <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setEnquiryOpen(false)} aria-label="Close enquiry form">×</button>
            <p className="eyebrow">Whiskers Haven</p>
            <h2 id="enquiry-title">Tell us about your enquiry.</h2>
            <p>Share a few details and continue directly to WhatsApp.</p>
            <form className="contact-form modal-form" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your name" required autoFocus />
              <input name="email" type="email" placeholder="Email" required />
              <input name="phone" type="tel" placeholder="Phone" required />
              <textarea name="message" rows="4" placeholder="How can we help?"></textarea>
              <button type="submit" className="btn btn-dark">Continue to WhatsApp</button>
            </form>
          </div>
        </div>
      )}

      <a href={`tel:${primaryPhoneLink}`} className="call-float" aria-label="Call Whiskers Haven now"><span>☎</span> Call now</a>
      <div className="sticky-cta">
        <a href={`https://wa.me/${primaryPhoneLink}`} target="_blank" rel="noreferrer" className="btn btn-dark">WhatsApp</a>
        <a href="#kittens" className="btn btn-gold">Find a kitten</a>
      </div>

      <footer className="footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <img className="footer-logo" src={whiskerLogo} alt="Whiskers Haven" />
            <p>Whiskers Haven raises affectionate kittens with ethical care, transparent guidance, and lifelong support for families.</p>
            <a href={`tel:${primaryPhoneLink}`} className="footer-phone">Call: {primaryPhone}</a>
            <br />
            <a href="tel:+918630252570" className="footer-phone">Alternate: {secondaryPhone}</a>
          </div>
          <div className="footer-link-columns">
            <div className="footer-links">
              <strong>Quick links</strong>
              {navLinks.slice(0, 5).map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="footer-links footer-links-secondary">
              <strong>Explore</strong>
              {navLinks.slice(5).map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
          <div className="footer-social">
            <strong>Follow us</strong>
            <div className="social-icons">
              <a href="https://www.instagram.com/whiskershaven.in?igsh=MTl5MWx5NjBzczUyOQ==" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="social-fill"/></svg></a>
              <a href="https://www.facebook.com/share/1H3gFRvh19/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-3H14V8.1c0-.9.3-1.6 1.7-1.6H18V3.8c-.4-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H8.5v3h2.8v8H14Z" className="social-fill"/></svg></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z" className="social-fill"/><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="#111" stroke="none"/></svg></a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=M6%2C+KP1%2C+Jaypee+Wishtown%2C+Sector+133"
              className="footer-address"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <span>M6, KP1, Jaypee Wishtown, Sector 133</span>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Whiskers Haven · The Cat Company</div>
      </footer>
    </div>
  );
}

export default App;
