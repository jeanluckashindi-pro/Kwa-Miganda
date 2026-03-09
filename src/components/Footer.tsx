import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3>Kwa Miganda</h3>
          <p>{t('footer.description')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.explore')}</h4>
          <ul>
            <li><Link to="/experience">{t('nav.experience')}</Link></li>
            <li><Link to="/lodge">{t('nav.lodge')}</Link></li>
            <li><Link to="/heritage">{t('nav.heritage')}</Link></li>
            <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
            <li><Link to="/location">{t('nav.location')}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact')}</h4>
          <ul>
            <li>{t('footer.location')}</li>
            <li>{t('footer.email')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.tagline')}</p>
      </div>
    </footer>
  );
}
