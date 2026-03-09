import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-location font-2xl">{t('home.location')}</p>
          <div className="hero-title-group">
            <h1 className="hero-title">{t('home.title')}</h1>
            <p className="hero-subtitle">{t('home.subtitle')}</p>
          </div>
          <p className="hero-description">{t('home.description')}</p>
          <div className="hero-buttons">
            <Link to="/book" className="btn-primary">{t('home.bookStay')}</Link>
            <Link to="/experience" className="btn-secondary">{t('home.discoverExperiences')}</Link>
          </div>
        </div>
        <button className="scroll-indicator" onClick={scrollToNext}>
          <span>{t('home.scroll')}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </section>

      <section className="our-story">
        <div className="story-content">
          <div className="story-text">
            <p className="story-label">{t('home.ourStory')}</p>
            <h2 className="story-title">{t('home.storyTitle')}</h2>
            <p className="story-description">{t('home.storyDescription1')}</p>
            <p className="story-description">{t('home.storyDescription2')}</p>
          </div>
          <div className="story-image">
            <img src="/cultural-ceremony-Dw-DPFHk.jpg" alt="Cultural ceremony" />
          </div>
        </div>
      </section>

      <section className="experiences-section">
        <p className="section-label">{t('home.experiencesLabel')}</p>
        <h2 className="section-title">{t('home.experiencesTitle')}</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <div className="experience-image">
              <img src="/2.jpg" alt="Heritage Visit" />
              <div className="experience-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
            </div>
            <div className="experience-content">
              <h3>{t('home.heritageVisit.title')}</h3>
              <p>{t('home.heritageVisit.description')}</p>
              <Link to="/heritage" className="learn-more">
                {t('home.learnMore')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-image">
              <img src="/3.jpg" alt="Cultural Experience" />
              <div className="experience-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
            </div>
            <div className="experience-content">
              <h3>{t('home.culturalExperience.title')}</h3>
              <p>{t('home.culturalExperience.description')}</p>
              <Link to="/experience" className="learn-more">
                {t('home.learnMore')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-image">
              <img src="/4.jpg" alt="Nature Walks" />
              <div className="experience-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
            </div>
            <div className="experience-content">
              <h3>{t('home.natureWalks.title')}</h3>
              <p>{t('home.natureWalks.description')}</p>
              <Link to="/experience" className="learn-more">
                {t('home.learnMore')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-image">
              <img src="/5.jpg" alt="Botanical Garden" />
              <div className="experience-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
            </div>
            <div className="experience-content">
              <h3>{t('home.botanicalGarden.title')}</h3>
              <p>{t('home.botanicalGarden.description')}</p>
              <Link to="/experience" className="learn-more">
                {t('home.learnMore')}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-header">
          <h2 className="location-title">{t('home.findUs')}</h2>
          <p className="location-description">{t('home.findUsDescription')}</p>
        </div>
        
        <div className="location-info-grid">
          <div className="location-info-card">
            <div className="location-info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>{t('home.locationInfo.hours.title')}</h3>
            <p className="location-info-from">{t('home.locationInfo.hours.from')}</p>
          </div>

          <div className="location-info-card">
            <div className="location-info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>{t('home.locationInfo.minutes.title')}</h3>
            <p className="location-info-from">{t('home.locationInfo.minutes.from')}</p>
          </div>

          <div className="location-info-card">
            <div className="location-info-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>{t('home.locationInfo.province.title')}</h3>
            <p className="location-info-from">{t('home.locationInfo.province.subtitle')}</p>
          </div>
        </div>

        <div className="map-fullscreen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127094.5!2d29.7!3d-3.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTgnMDAuMCJTIDI5wrA0MicwMC4wIkU!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-marker">
            <div className="marker-pulse"></div>
            <div className="marker-pin">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="marker-label">Kwa Miganda</div>
          </div>
          <div className="map-controls">
            <button className="map-control-btn" onClick={() => window.open('https://maps.google.com/?q=Mwaro,Burundi', '_blank')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>{t('home.openInMaps')}</span>
            </button>
            <button className="map-control-btn" onClick={() => navigator.clipboard.writeText('Mwaro Province, Burundi')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>{t('home.copyAddress')}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <p className="cta-label">{t('home.cta.label')}</p>
          <h2 className="cta-title">{t('home.cta.title')}</h2>
          <p className="cta-description">{t('home.cta.description')}</p>
          <Link to="/book" className="cta-button">{t('home.cta.button')}</Link>
        </div>
      </section>

      <section className="heritage-section">
        <div className="heritage-content">
          <div className="heritage-text">
            <p className="heritage-label">{t('home.heritage.label')}</p>
            <h2 className="heritage-title">{t('home.heritage.title')}</h2>
            <p className="heritage-description">{t('home.heritage.description')}</p>
          </div>

          <div className="heritage-features">
            <div className="heritage-feature">
              <div className="heritage-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="heritage-feature-content">
                <h3>{t('home.heritage.features.architecture.title')}</h3>
                <p>{t('home.heritage.features.architecture.description')}</p>
              </div>
            </div>

            <div className="heritage-feature">
              <div className="heritage-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <div className="heritage-feature-content">
                <h3>{t('home.heritage.features.plants.title')}</h3>
                <p>{t('home.heritage.features.plants.description')}</p>
              </div>
            </div>

            <div className="heritage-feature">
              <div className="heritage-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5l12-2v13M9 9l12-2"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <div className="heritage-feature-content">
                <h3>{t('home.heritage.features.music.title')}</h3>
                <p>{t('home.heritage.features.music.description')}</p>
              </div>
            </div>

            <div className="heritage-feature">
              <div className="heritage-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="heritage-feature-content">
                <h3>{t('home.heritage.features.community.title')}</h3>
                <p>{t('home.heritage.features.community.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="heritage-image">
          <img src="/6.jpg" alt="Traditional Rugo" />
        </div>
      </section>
    </div>
  );
}
