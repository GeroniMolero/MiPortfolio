import React from 'react';
import miFoto from '../assets/images/fotocv.png';  // Asegúrate de que la ruta sea correcta
import '../styles/Hero.css'; // Asegúrate de que este archivo de estilos exista
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={miFoto} alt={t('hero.name')} />
        </div>
        <div className="hero-text">
          <h1>{t('hero.name')}</h1>
          <h2>{t('hero.role')}</h2>
          <p>{t('hero.intro')}</p>
          <a href="#contact" className="cta-button">{t('hero.cta')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
