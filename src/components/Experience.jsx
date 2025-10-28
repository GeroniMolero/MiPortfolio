// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>
      <div className="experience-item">
        <h3>Desarrollador de Software (Prácticas)</h3>
        <h4>Origen Corporación Biotech S.L. | Marzo 2025 - Mayo 2025</h4>
        <ul>
          <li><strong>Participación en proyecto del area Bio, desarrollo de endpoints para la gestión de datos usando .NET y C#.</strong></li>
          <li><strong>Creación de componentes con angular para la biblioteca de la empresa.</strong></li>
          <li><strong>Refactorifación de proyecto, implementando hoja de estilos.</strong></li>
          <li><strong>Trabajo con contenedores Docker a partir de un archivo Docker Compose y con PostgreSQL para la gestión de la base de datos.</strong></li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;