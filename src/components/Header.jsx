// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import plantamano from "../assets/images/plantamano.png";
import { useTranslation } from 'react-i18next';

const LANG_KEY = 'preferred_language';
const MODE_KEY = 'theme_mode';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved) i18n.changeLanguage(saved);
  }, [i18n]);

  useEffect(() => {
    const saved = localStorage.getItem(MODE_KEY);
    if (saved) {
      applyMode(saved);
      setMode(saved);
    } else {
      // default to dark if nothing saved
      applyMode('dark');
      setMode('dark');
    }
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANG_KEY, lng);
    setOpen(false);
  };

  const applyMode = (m) => {
    // remove any existing theme classes
    document.body.classList.remove('dark-mode', 'light-mode', 'bio-theme');
    if (m === 'dark') document.body.classList.add('dark-mode');
    if (m === 'light') document.body.classList.add('light-mode');
    if (m === 'bio') document.body.classList.add('bio-theme');
    localStorage.setItem(MODE_KEY, m);
  };

  const handleModeChange = (e) => {
    const next = e.target.value;
    setMode(next);
    applyMode(next);
  };

  const current = i18n.language || 'es';

  return (
    <header className="header">
      <nav>
        <h2>GM<img src={plantamano} alt="logo" /></h2>

        <ul>
          <a href="#about"><li>{t('common.about')}</li></a>
          <a href="#skills"><li>{t('common.skills')}</li></a>
          <a href="#experience"><li>{t('common.experience')}</li></a>
          <a href="#contact"><li>{t('common.contact')}</li></a>
        </ul>

        <div className="lang-switcher">
          <div className="lang-select" ref={ref}>
            <button onClick={() => setOpen(v => !v)} aria-haspopup="listbox" aria-expanded={open}>
              {current === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}
            </button>

            <div className={`lang-options ${open ? 'open' : ''}`} role="listbox">
              <button onClick={() => changeLanguage('es')} aria-label="Seleccionar Español">🇪🇸 Español</button>
              <button onClick={() => changeLanguage('en')} aria-label="Select English">🇬🇧 English</button>
            </div>
          </div>
          <div className="mode-select">
            <label htmlFor="theme-mode" className="sr-only">Theme mode</label>
            <select id="theme-mode" value={mode} onChange={handleModeChange} aria-label="Select theme mode">
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
              <option value="bio">Bio</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;