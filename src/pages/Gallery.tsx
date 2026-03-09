import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg',
    '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg', '/12.jpg'
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const downloadImage = () => {
    if (selectedImage !== null) {
      const link = document.createElement('a');
      link.href = images[selectedImage];
      link.download = `kwa-miganda-${selectedImage + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('gallery.title')}</h1>
          <p className="hero-subtitle">Discover the Beauty of Kwa Miganda</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="view-text">View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X />
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
            <ChevronLeft />
          </button>
          
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            <ChevronRight />
          </button>

          <button className="lightbox-download" onClick={(e) => { e.stopPropagation(); downloadImage(); }}>
            <Download />
            <span>Download</span>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedImage]} alt={`Gallery ${selectedImage + 1}`} />
          </div>

          <div className="lightbox-counter">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
