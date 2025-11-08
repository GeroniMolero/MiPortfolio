// src/components/Footer.jsx
import React from 'react';
import "../styles/Footer.css"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{t('footer.copy', { year })}</p>
    </footer>
  );
};

export default Footer;