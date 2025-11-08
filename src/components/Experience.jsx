// src/components/Experience.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const tasks = t('experience.item1.tasks', { returnObjects: true });

  return (
    <section id="experience" className="section">
      <h2>{t('common.experience')}</h2>
      <div className="experience-item">
        <h3>{t('experience.item1.role')}</h3>
        <h4>{t('experience.item1.company')} | {t('experience.item1.duration')}</h4>
        <ul>
          {Array.isArray(tasks) ? tasks.map((task, i) => (
            <li key={i}><strong>{task}</strong></li>
          )) : (
            <li><strong>{t('experience.item1.tasks')}</strong></li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Experience;