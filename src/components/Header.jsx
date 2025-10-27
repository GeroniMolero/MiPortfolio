// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h2>GM</h2> {/* Tus iniciales, un logo simple */}
        <ul>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;