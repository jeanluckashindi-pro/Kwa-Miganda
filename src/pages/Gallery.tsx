import { useTranslation } from 'react-i18next';
import './Gallery.css';

export default function Gallery() {
  const { t } = useTranslation();
  
  const images = [
    '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg',
    '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg', '/12.jpg'
  ];

  return (
    <div className="gallery">
      <h1>{t('gallery.title')}</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
