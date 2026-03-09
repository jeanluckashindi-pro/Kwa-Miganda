import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Kwa Miganda</Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">{t('nav.home')}</Link></li>
          <li><Link to="/experience">{t('nav.experience')}</Link></li>
          <li><Link to="/lodge">{t('nav.lodge')}</Link></li>
          <li><Link to="/heritage">{t('nav.heritage')}</Link></li>
          <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
          <li><Link to="/location">{t('nav.location')}</Link></li>
          <li><Link to="/book" className="book-btn">{t('nav.bookNow')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
