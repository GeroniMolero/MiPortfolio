// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Skillsv2 from './components/Skillsv2';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css'; // Asegúrate de que esta ruta y el archivo existan
import '../src/i18n.js';
import BioAside from './components/BioAside';
import Farola from './components/Farola';
import FarolaImg from './components/FarolaImg';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skillsv2 />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FarolaImg />
    </div>
  );
}

export default App;