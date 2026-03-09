import { useTranslation } from 'react-i18next';
import {
  Bed,
  ChefHat,
  Waves,
  Sparkles,
  Utensils,
  MapPin,
  Users,
  Leaf,
  CookingPot,
  Wine,
  Dumbbell,
  Mountain,
  Bird,
  Music,
  Flame,
  Wifi,
  Heart,
  Shield,
  ParkingCircle,
  Calendar,
  Phone
} from 'lucide-react';
import './Lodge.css';

export default function Lodge() {
  const { t } = useTranslation();

  const rooms = [
    {
      key: 'standardRoom',
      icon: <Bed className="room-icon" />,
      color: '#667eea'
    },
    {
      key: 'deluxeRoom',
      icon: <Bed className="room-icon" />,
      color: '#764ba2'
    },
    {
      key: 'suiteRoom',
      icon: <Bed className="room-icon" />,
      color: '#f093fb'
    }
  ];

  const dining = [
    {
      key: 'breakfast',
      icon: <Utensils className="amenity-icon" />
    },
    {
      key: 'lunch',
      icon: <CookingPot className="amenity-icon" />
    },
    {
      key: 'dinner',
      icon: <Wine className="amenity-icon" />
    },
    {
      key: 'vegetarian',
      icon: <Leaf className="amenity-icon" />
    }
  ];

  const wellness = [
    {
      key: 'spa',
      icon: <Sparkles className="amenity-icon" />
    },
    {
      key: 'massage',
      icon: <Heart className="amenity-icon" />
    },
    {
      key: 'yoga',
      icon: <Dumbbell className="amenity-icon" />
    },
    {
      key: 'meditation',
      icon: <Leaf className="amenity-icon" />
    }
  ];

  const activities = [
    {
      key: 'hiking',
      icon: <Mountain className="amenity-icon" />
    },
    {
      key: 'bird',
      icon: <Bird className="amenity-icon" />
    },
    {
      key: 'cultural',
      icon: <Music className="amenity-icon" />
    },
    {
      key: 'bonfire',
      icon: <Flame className="amenity-icon" />
    }
  ];

  const features = [
    {
      key: 'authentication',
      icon: <MapPin className="feature-icon" />
    },
    {
      key: 'ecoFriendly',
      icon: <Leaf className="feature-icon" />
    },
    {
      key: 'localStaff',
      icon: <Users className="feature-icon" />
    },
    {
      key: 'connectivity',
      icon: <Wifi className="feature-icon" />
    },
    {
      key: 'safety',
      icon: <Shield className="feature-icon" />
    },
    {
      key: 'parking',
      icon: <ParkingCircle className="feature-icon" />
    }
  ];

  return (
    <div className="lodge-page">
      {/* Hero Section */}
      <section className="lodge-hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('lodge.title')}</h1>
          <p className="hero-subtitle">{t('lodge.subtitle')}</p>
          <p className="hero-description">{t('lodge.heroDescription')}</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-text">
            <h2>{t('lodge.description')}</h2>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('lodge.sections.rooms.title')}</h2>
            <p className="section-description">{t('lodge.sections.rooms.description')}</p>
          </div>

          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <div
                key={room.key}
                className="room-card"
                style={{ '--room-color': room.color } as React.CSSProperties}
              >
                <div className="room-icon-wrapper">
                  {room.icon}
                </div>
                <h3 className="room-title">{t(`lodge.sections.rooms.${room.key}.title`)}</h3>
                <p className="room-description">{t(`lodge.sections.rooms.${room.key}.description`)}</p>
                <div className="room-details">
                  <div className="detail">
                    <Users className="detail-icon" />
                    <span>{t(`lodge.sections.rooms.${room.key}.capacity`)}</span>
                  </div>
                  <div className="detail">
                    <MapPin className="detail-icon" />
                    <span>{t(`lodge.sections.rooms.${room.key}.area`)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="dining-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('lodge.sections.dining.title')}</h2>
            <p className="section-description">{t('lodge.sections.dining.description')}</p>
          </div>

          <div className="amenities-grid">
            {dining.map((item) => (
              <div key={item.key} className="amenity-card dining-card">
                <div className="amenity-icon-wrapper dining-icon">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{t(`lodge.sections.dining.${item.key}.title`)}</h3>
                <p className="amenity-description">{t(`lodge.sections.dining.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="wellness-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('lodge.sections.wellness.title')}</h2>
            <p className="section-description">{t('lodge.sections.wellness.description')}</p>
          </div>

          <div className="amenities-grid">
            {wellness.map((item) => (
              <div key={item.key} className="amenity-card wellness-card">
                <div className="amenity-icon-wrapper wellness-icon">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{t(`lodge.sections.wellness.${item.key}.title`)}</h3>
                <p className="amenity-description">{t(`lodge.sections.wellness.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('lodge.sections.activities.title')}</h2>
            <p className="section-description">{t('lodge.sections.activities.description')}</p>
          </div>

          <div className="amenities-grid">
            {activities.map((item) => (
              <div key={item.key} className="amenity-card activities-card">
                <div className="amenity-icon-wrapper activities-icon">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{t(`lodge.sections.activities.${item.key}.title`)}</h3>
                <p className="amenity-description">{t(`lodge.sections.activities.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Stay With Us?</h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.key} className="feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-name">{t(`lodge.features.${feature.key}.title`)}</h3>
                <p className="feature-description">{t(`lodge.features.${feature.key}.description`)}</p>
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
              <h2 className="booking-title">{t('lodge.booking.title')}</h2>
              <p className="booking-description">{t('lodge.booking.description')}</p>
              <p className="booking-note">{t('lodge.booking.note')}</p>
            </div>

            <div className="booking-actions">
              <button className="btn-primary">
                <Calendar className="btn-icon" />
                {t('lodge.booking.cta')}
              </button>
              <button className="btn-secondary">
                <Phone className="btn-icon" />
                {t('lodge.booking.contact')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
