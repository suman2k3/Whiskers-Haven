import { useState } from 'react';

function VariantCard({ variant, primaryPhoneLink }) {
  const images = variant.images || [];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const waMessage = encodeURIComponent(
    `Hello Whiskers Haven, I am interested in adopting ${variant.name} (${variant.breed} - ${variant.color}, ${variant.age}).`
  );
  const waUrl = `https://wa.me/${primaryPhoneLink}?text=${waMessage}`;

  return (
    <article className="variant-card">
      <div className="variant-img-wrap">
        <img src={images[currentImgIndex]} alt={variant.name} />
        {variant.availability && (
          <span className={`availability-badge ${variant.availability.toLowerCase()}`}>
            {variant.availability}
          </span>
        )}
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

      <div className="variant-body">
        <div className="variant-header">
          <div>
            <h3>{variant.name}</h3>
            <p className="variant-sub">{variant.breed} · {variant.age}</p>
          </div>
          <span className="gender-tag">{variant.gender}</span>
        </div>

        <div className="variant-pills">
          <span className="variant-pill">{variant.color}</span>
          <span className="variant-pill health-pill">✓ {variant.healthStatus}</span>
        </div>

        <p className="variant-desc">{variant.description}</p>

        <div className="variant-actions">
          <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-dark variant-cta">
            Get {variant.name}
          </a>
        </div>
      </div>
    </article>
  );
}

export function BreedDetailPage({ breed, onBack, primaryPhoneLink }) {
  if (!breed) return null;

  return (
    <div className="breed-detail-page">
      {/* Top Header / Breadcrumb */}
      <section className="breed-detail-nav">
        <div className="container">
          <button type="button" className="breed-back-btn" onClick={onBack}>
            ← Back to All Breeds
          </button>
        </div>
      </section>

      {/* Breed Hero Section */}
      <section className="breed-hero-section">
        <div className="container">
          <div className="breed-hero-header">
            <span className="eyebrow">Pure Bloodline Category</span>
            <h1>{breed.name}</h1>
            <p className="breed-hero-tagline">{breed.tagline}</p>
          </div>

          <div className="breed-hero-grid">
            <div className="breed-cover-wrap">
              <img src={breed.coverImage} alt={breed.name} />
              <span className="cover-badge">Official Breed Guide</span>
            </div>

            <div className="breed-hero-content">
              <div className="breed-story-box">
                <h3>About the Breed</h3>
                <p>{breed.description}</p>
              </div>

              <div className="characteristics-grid">
                <div className="characteristic-card">
                  <span className="card-icon">💖</span>
                  <div>
                    <strong>Personality</strong>
                    <p>{breed.characteristics.personality}</p>
                  </div>
                </div>

                <div className="characteristic-card">
                  <span className="card-icon">🪮</span>
                  <div>
                    <strong>Grooming Needs</strong>
                    <p>{breed.characteristics.grooming}</p>
                  </div>
                </div>

                <div className="characteristic-card">
                  <span className="card-icon">⚡</span>
                  <div>
                    <strong>Activity Level</strong>
                    <p>{breed.characteristics.activityLevel}</p>
                  </div>
                </div>

                <div className="characteristic-card">
                  <span className="card-icon">🏠</span>
                  <div>
                    <strong>Suitable Home</strong>
                    <p>{breed.characteristics.environment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cats / Variants Section */}
      <section className="section breed-variants-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Available Kittens</p>
            <h2>Meet our available {breed.name}s.</h2>
            <p className="section-subtitle">
              Each kitten is home grown, health-screened, and ready to bring warmth to your home.
            </p>
          </div>

          {breed.variants && breed.variants.length > 0 ? (
            <div className="variants-grid">
              {breed.variants.map((variant) => (
                <VariantCard key={variant.id} variant={variant} primaryPhoneLink={primaryPhoneLink} />
              ))}
            </div>
          ) : (
            <div className="no-variants-box">
              <p>New {breed.name} litters will be available very soon. Contact us for upcoming reservations!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
