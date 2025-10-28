// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';
import plantamano from "../assets/images/plantamano.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h2>GM<img src={plantamano} alt="nada" /></h2> {/* Tus iniciales, un logo simple */}
         
        <ul>
          <a href="#about"><li>Sobre Mí</li></a>
          <a href="#skills"><li>Habilidades</li></a>
          <a href="#experience"><li>Experiencia</li></a>
          <a href="#contact"><li>Contacto</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;