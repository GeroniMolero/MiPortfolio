// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gerónimo Molero Rodríguez. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;