import { useTranslation } from 'react-i18next';
import './Experience.css';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="experience">
      <h1>{t('experience.title')}</h1>
      <div className="experience-grid">
        <div className="experience-card">
          <h3>{t('experience.safari.title')}</h3>
          <p>{t('experience.safari.description')}</p>
        </div>
        <div className="experience-card">
          <h3>{t('experience.hiking.title')}</h3>
          <p>{t('experience.hiking.description')}</p>
        </div>
        <div className="experience-card">
          <h3>{t('experience.cultural.title')}</h3>
          <p>{t('experience.cultural.description')}</p>
        </div>
      </div>
    </div>
  );
}
