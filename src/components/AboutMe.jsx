// src/components/AboutMe.jsx
import React from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import BioAside from './BioAside';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <h2>{t('common.about')}</h2>
      {/* Place BioAside here so on small screens it can render in-flow above Hero */}
      <BioAside />
      <p className="about-paragraph">
        <Trans i18nKey="aboutMe.intro">
          Mi viaje en el mundo profesional comenzó en la Biología, pero mi curiosidad por la tecnología y cómo las cosas funcionan me llevó a descubrir mi verdadera pasión: el desarrollo de software. Esta transición ha forjado en mí una <strong>capacidad de aprendizaje</strong> y una <strong>mentalidad resolutiva</strong> que aplico en cada proyecto.
        </Trans>
      </p>

      <p className="about-paragraph">
        <Trans i18nKey="aboutMe.teamwork">
          Soy un desarrollador <strong>asertivo</strong> y con gran capacidad de <strong>trabajo en equipo</strong>, siempre buscando la mejor solución a los problemas y disfrutando del proceso colaborativo. Actualmente, estoy enfocado en dominar el ecosistema .NET y JavaScript, construyendo aplicaciones web robustas y eficientes.
        </Trans>
      </p>

    </section>
  );
};

export default AboutMe;