// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css'; // Asegúrate de que esta ruta y el archivo existan

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <p>NOseque</p>
      <Footer />
    </div>
  );
}

export default App;