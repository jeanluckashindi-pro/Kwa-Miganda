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
          <li>
            <Link to="/">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>{t('nav.home')}</span>
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>{t('nav.experience')}</span>
            </Link>
          </li>
          <li>
            <Link to="/lodge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              <span>{t('nav.lodge')}</span>
            </Link>
          </li>
          <li>
            <Link to="/heritage">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
              <span>{t('nav.heritage')}</span>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>{t('nav.gallery')}</span>
            </Link>
          </li>
          <li>
            <Link to="/location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{t('nav.location')}</span>
            </Link>
          </li>
          <li>
            <Link to="/book" className="book-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>{t('nav.bookNow')}</span>
            </Link>
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
