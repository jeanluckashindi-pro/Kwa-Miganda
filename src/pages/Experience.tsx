import { useTranslation } from 'react-i18next';
import {
  Music,
  Home,
  Mountain,
  Leaf,
  ChefHat,
  BookOpen,
  Bird,
  Brain,
  Hammer,
  Sun,
  MapPin,
  Camera,
  Users,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  Phone
} from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const { t } = useTranslation();

  const categories = [
    {
      key: 'cultural',
      icon: <Music className="category-icon" />,
      color: '#8B4513'
    },
    {
      key: 'nature',
      icon: <Mountain className="category-icon" />,
      color: '#228B22'
    },
    {
      key: 'wellness',
      icon: <Brain className="category-icon" />,
      color: '#4169E1'
    },
    {
      key: 'learning',
      icon: <BookOpen className="category-icon" />,
      color: '#FF6347'
    }
  ];

  const activities = [
    {
      key: 'traditionalMusic',
      icon: <Music className="activity-icon" />,
      category: 'cultural'
    },
    {
      key: 'rugoVisit',
      icon: <Home className="activity-icon" />,
      category: 'cultural'
    },
    {
      key: 'natureWalks',
      icon: <Mountain className="activity-icon" />,
      category: 'nature'
    },
    {
      key: 'botanicalGarden',
      icon: <Leaf className="activity-icon" />,
      category: 'learning'
    },
    {
      key: 'cookingWorkshop',
      icon: <ChefHat className="activity-icon" />,
      category: 'learning'
    },
    {
      key: 'storytelling',
      icon: <BookOpen className="activity-icon" />,
      category: 'cultural'
    },
    {
      key: 'birdwatching',
      icon: <Bird className="activity-icon" />,
      category: 'nature'
    },
    {
      key: 'meditation',
      icon: <Brain className="activity-icon" />,
      category: 'wellness'
    },
    {
      key: 'craftWorkshop',
      icon: <Hammer className="activity-icon" />,
      category: 'learning'
    },
    {
      key: 'sunriseYoga',
      icon: <Sun className="activity-icon" />,
      category: 'wellness'
    },
    {
      key: 'villageTour',
      icon: <MapPin className="activity-icon" />,
      category: 'cultural'
    },
    {
      key: 'photography',
      icon: <Camera className="activity-icon" />,
      category: 'learning'
    }
  ];

  const features = [
    {
      key: 'expertGuides',
      icon: <Users className="feature-icon" />
    },
    {
      key: 'smallGroups',
      icon: <CheckCircle className="feature-icon" />
    },
    {
      key: 'sustainable',
      icon: <Leaf className="feature-icon" />
    },
    {
      key: 'flexible',
      icon: <Calendar className="feature-icon" />
    }
  ];

  return (
    <div className="experience-page">
      {/* Hero Section */}
      <section className="experience-hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('experience.title')}</h1>
          <p className="hero-subtitle">{t('experience.subtitle')}</p>
          <p className="hero-description">{t('experience.description')}</p>
        </div>
        <div className="hero-image">
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.key}
                className="category-card"
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{t(`experience.categories.${category.key}.title`)}</h3>
                <p className="category-description">{t(`experience.categories.${category.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('experience.hero.title')}</h2>
            <p className="section-description">{t('experience.hero.description')}</p>
          </div>

          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity.key} className="activity-card">
                <div className="activity-header">
                  <div className="activity-icon-wrapper">
                    {activity.icon}
                  </div>
                  <div className="activity-category" data-category={activity.category}>
                    {t(`experience.categories.${activity.category}.title`)}
                  </div>
                </div>

                <div className="activity-content">
                  <h3 className="activity-title">{t(`experience.activities.${activity.key}.title`)}</h3>
                  <p className="activity-description">{t(`experience.activities.${activity.key}.description`)}</p>

                  <div className="activity-details">
                    <div className="detail-item">
                      <Clock className="detail-icon" />
                      <span>{t(`experience.activities.${activity.key}.duration`)}</span>
                    </div>
                    <div className="detail-item">
                      <Star className="detail-icon" />
                      <span>{t(`experience.activities.${activity.key}.difficulty`)}</span>
                    </div>
                    <div className="detail-item">
                      <Users className="detail-icon" />
                      <span>{t(`experience.activities.${activity.key}.groupSize`)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Experiences?</h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.key} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{t(`experience.features.${feature.key}.title`)}</h3>
                <p className="feature-description">{t(`experience.features.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-text">
              <h2 className="booking-title">{t('experience.booking.title')}</h2>
              <p className="booking-description">{t('experience.booking.description')}</p>
              <p className="booking-note">{t('experience.booking.note')}</p>
            </div>

            <div className="booking-actions">
              <button className="btn-primary">
                <Calendar className="btn-icon" />
                {t('experience.booking.cta')}
              </button>
              <button className="btn-secondary">
                <Phone className="btn-icon" />
                {t('experience.booking.contact')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
