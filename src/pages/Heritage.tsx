import { useTranslation } from 'react-i18next';
import './Heritage.css';

export default function Heritage() {
  const { t } = useTranslation();

  return (
    <div className="heritage">
      <h1>{t('heritage.title')}</h1>
      <div className="heritage-content">
        <section>
          <h2>{t('heritage.history.title')}</h2>
          <p>{t('heritage.history.description')}</p>
        </section>
        <section>
          <h2>{t('heritage.culture.title')}</h2>
          <p>{t('heritage.culture.description')}</p>
        </section>
        <section>
          <h2>{t('heritage.conservation.title')}</h2>
          <p>{t('heritage.conservation.description')}</p>
        </section>
      </div>
    </div>
  );
}
