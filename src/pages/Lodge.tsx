import { useTranslation } from 'react-i18next';
import './Lodge.css';

export default function Lodge() {
  const { t } = useTranslation();

  return (
    <div className="lodge">
      <h1>{t('lodge.title')}</h1>
      <div className="lodge-content">
        <p>{t('lodge.description')}</p>
        <div className="amenities">
          <h2>{t('lodge.amenities')}</h2>
          <ul>
            <li>{t('lodge.rooms')}</li>
            <li>{t('lodge.restaurant')}</li>
            <li>{t('lodge.pool')}</li>
            <li>{t('lodge.spa')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
