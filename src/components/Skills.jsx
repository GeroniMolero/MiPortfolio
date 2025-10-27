// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css'; // Importamos el nuevo archivo CSS

const Skills = () => {
  const skillsList = [
    ".NET / C#", "Java", "JS", "Kotlin", "Angular", "React"
  ];

  return (
    <section id="skills" className="section">
      <h2>Habilidades</h2>
      
      {/* Contenedor que aplica el grid para las tarjetas */}
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="card" key={index}>
            <div className="card__body">
              {/* Puedes añadir un título o descripción aquí si quieres */}
              {/* <h3 className="card__title">Título</h3> */}
              {/* <p className="card__paragraph">Descripción de la habilidad...</p> */}
            </div>
            <div className="card__ribbon">
              <span className="card__ribbon-label">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;