// src/components/Education.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () =>{
  const { t } = useTranslation();

  return(
    <section id="education" className="section">
      <h2>{t('common.education')}</h2>
      <div className="education-item">
        <h3>{t('education.item1.title')}</h3>
        <p>{t('education.item1.institution')} | {t('education.item1.duration')}</p>
      </div>
      <div className="education-item">
        <h3>{t('education.item2.title')}</h3>
        <p>{t('education.item2.institution')} | {t('education.item2.duration')}</p>
      </div>
    </section>
  )
}

export default Education;