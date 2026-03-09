import { useTranslation } from 'react-i18next';
import './Location.css';

export default function Location() {
  const { t } = useTranslation();

  return (
    <div className="location">
      <h1>{t('location.title')}</h1>
      <div className="location-content">
        <div className="location-info">
          <h2>{t('location.howToFind')}</h2>
          <p><strong>{t('location.address')}:</strong> {t('location.addressValue')}</p>
          <p><strong>{t('location.phone')}:</strong> +XXX XXX XXX XXX</p>
          <p><strong>{t('location.email')}:</strong> contact@kwamiganda.com</p>
          
          <h3>{t('location.access')}</h3>
          <ul>
            <li>{t('location.byCar')}</li>
            <li>{t('location.airportTransfer')}</li>
            <li>{t('location.gps')}: XX.XXXX, XX.XXXX</li>
          </ul>
        </div>
        <div className="map-placeholder">
          <p>{t('location.mapPlaceholder')}</p>
        </div>
      </div>
    </div>
  );
}
