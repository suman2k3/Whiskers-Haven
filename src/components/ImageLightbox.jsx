import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;
  const currentImg = images[currentIndex] || images[0];

  return createPortal(
    <div
      className="lightbox-overlay"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <button
        type="button"
        className="lightbox-close-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close full screen view"
      >
        ✕
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={currentImg} alt="Full view" className="lightbox-img" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox-nav-btn prev"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onPrev) onPrev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-nav-btn next"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onNext) onNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
