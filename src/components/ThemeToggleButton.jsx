// src/components/ThemeToggleButton.jsx
import React, { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Verifica el tema guardado en localStorage cuando el componente se monta
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      setDarkMode(false);
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Cambiar el tema y actualizar localStorage
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.classList.toggle('dark-mode', newMode);
      document.body.classList.toggle('light-mode', !newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ThemeToggleButton;
