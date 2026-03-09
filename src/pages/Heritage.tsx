import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Users, 
  Leaf, 
  Heart, 
  Globe, 
  TreePine, 
  Home,
  Music,
  Palette,
  Sprout,
  Mountain,
  Award,
  Shield,
  Sparkles
} from 'lucide-react';
import './Heritage.css';

export default function Heritage() {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'history',
      icon: <BookOpen className="section-icon" />
    },
    {
      key: 'culture',
      icon: <Users className="section-icon" />
    },
    {
      key: 'conservation',
      icon: <Leaf className="section-icon" />
    }
  ];

  const values = [
    { icon: <Heart className="value-icon" />, key: 'authenticity' },
    { icon: <Globe className="value-icon" />, key: 'sustainability' },
    { icon: <TreePine className="value-icon" />, key: 'preservation' }
  ];

  const traditions = [
    {
      icon: <Home className="tradition-icon" />,
      title: 'Traditional Architecture',
      description: 'Experience authentic Burundian rugo (traditional homesteads) preserved with original construction techniques and materials.'
    },
    {
      icon: <Music className="tradition-icon" />,
      title: 'Sacred Drums',
      description: 'Witness the legendary Burundian drumming tradition, recognized by UNESCO as Intangible Cultural Heritage.'
    },
    {
      icon: <Palette className="tradition-icon" />,
      title: 'Artisan Crafts',
      description: 'Discover traditional basket weaving, pottery, and crafts passed down through generations of local artisans.'
    },
    {
      icon: <Sprout className="tradition-icon" />,
      title: 'Ancestral Farming',
      description: 'Learn sustainable agricultural practices that have nourished communities for centuries in harmony with nature.'
    }
  ];

  const achievements = [
    {
      icon: <Award className="achievement-icon" />,
      title: 'UNESCO Recognition',
      description: 'Officially recognized for cultural preservation efforts'
    },
    {
      icon: <Shield className="achievement-icon" />,
      title: 'Protected Site',
      description: 'Designated heritage conservation area since 2015'
    },
    {
      icon: <Sparkles className="achievement-icon" />,
      title: 'Community Impact',
      description: 'Supporting 50+ local families through cultural tourism'
    },
    {
      icon: <Mountain className="achievement-icon" />,
      title: 'Eco-Tourism Leader',
      description: 'Pioneer in sustainable heritage tourism in Burundi'
    }
  ];

  return (
    <div className="heritage-page">
      {/* Hero Section */}
      <section className="heritage-hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('heritage.title')}</h1>
          <p className="hero-subtitle">Preserving Culture, Embracing Nature</p>
          <p className="hero-description">
            A living museum where ancient traditions meet sustainable tourism, 
            protecting Burundi's rich cultural heritage for future generations.
          </p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Main Content Sections */}
      <div className="heritage-content">
        {sections.map((section) => (
          <section key={section.key} className="content-section">
            <div className="container">
              <div className="section-card">
                <div className="icon-wrapper">
                  {section.icon}
                </div>
                <h2 className="section-title">{t(`heritage.${section.key}.title`)}</h2>
                <p className="section-description">{t(`heritage.${section.key}.description`)}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Traditions Section */}
      <section className="traditions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">Living Traditions</h2>
            <p className="section-subtitle">
              Immerse yourself in authentic cultural experiences that connect past and present
            </p>
          </div>
          <div className="traditions-grid">
            {traditions.map((tradition, index) => (
              <div key={index} className="tradition-card">
                <div className="tradition-icon-wrapper">
                  {tradition.icon}
                </div>
                <h3 className="tradition-title">{tradition.title}</h3>
                <p className="tradition-description">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-main-title">Our Impact</h2>
            <p className="section-subtitle">
              Recognized excellence in cultural preservation and sustainable tourism
            </p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon-wrapper">
                  {achievement.icon}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.key} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-name">{value.key.charAt(0).toUpperCase() + value.key.slice(1)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="heritage-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Our Heritage</h2>
            <p className="cta-description">
              Join us in preserving and celebrating Burundi's cultural treasures. 
              Every visit supports local communities and conservation efforts.
            </p>
            <button className="cta-button">
              <BookOpen className="cta-icon" />
              Book Your Cultural Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
