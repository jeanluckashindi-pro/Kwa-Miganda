import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Leaf, Heart, Globe, TreePine } from 'lucide-react';
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

  return (
    <div className="heritage-page">
      {/* Hero Section */}
      <section className="heritage-hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('heritage.title')}</h1>
          <p className="hero-subtitle">Preserving Culture, Embracing Nature</p>
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
    </div>
  );
}
