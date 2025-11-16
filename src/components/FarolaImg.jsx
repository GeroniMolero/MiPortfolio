import React, { useEffect, useState } from "react";
import "../styles/FarolaImg.css";

const Farola = () => {
  const [showLight, setShowLight] = useState(false);

  useEffect(() => {
    // Función para actualizar visibilidad de la luz según la clase del body
    const updateLight = () => {
      const body = document.body;
      setShowLight(body.classList.contains("dark-mode"));
    };

    // Inicial
    updateLight();

    // Observador de cambios en el body (por si cambia el modo)
    const observer = new MutationObserver(updateLight);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="farola-container">
      {/* Luz solo si el modo es oscuro */}
      {showLight && <div className="farola-light"></div>}

      {/* Imagen de la farola */}
      <img
        src="../assets/images/farola.avif"
        alt="Farola"
        className="farola-img"
      />
    </div>
  );
};

export default Farola;
