// src/components/Farola.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Farola.css';

const MODE_KEY = 'theme_mode';

const Farola = () => {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const savedMode = localStorage.getItem(MODE_KEY) || 'dark';
    setMode(savedMode);

    const observer = new MutationObserver(() => {
      const updatedMode = localStorage.getItem(MODE_KEY) || 'dark';
      setMode(updatedMode);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return <div className={`farola ${mode}`}></div>;
};

export default Farola;
