// src/components/Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return(
    <section id="contact" className="section">
        <h2>{t('common.contact')}</h2>
        <p>{t('contact.intro')}</p>
        <div className="contact-info">
            <p>{t('contact.email')}<a href="mailto:gemordz@gmail.com">gemordz@gmail.com</a></p>
            <p>{t('contact.phone')}<a href="tel:+34697872589">(34) 697 872 589</a></p>
            <p>{t('contact.linkedin')}<a href="https://www.linkedin.com/in/ger%C3%B3nimo-molero-60a350368/" target="_blank" rel="noopener noreferrer">Gerónimo Molero</a></p>
        </div>
    </section>
  )
}
export default Contact;