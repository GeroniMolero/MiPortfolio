// src/components/Hero.jsx
import React from 'react';
import miFoto from '../assets/images/fotocv.png'; // <-- Asegúrate de que esta línea esté
import '../styles/Hero.css'; // Importaremos un CSS específico para el Hero

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={miFoto} alt="Foto de perfil de Gerónimo Molero" />
        </div>
        <div className="hero-text">
          <h1>Gerónimo Molero Rodríguez</h1>
          <h2>Desarrollador Web</h2>
          <p>
            Apasionado por la tecnología y el aprendizaje, con una trayectoria única que va desde la biología hasta la creación de soluciones digitales innovadoras.
          </p>
          <a href="#contact" className="cta-button">Contactarme</a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;