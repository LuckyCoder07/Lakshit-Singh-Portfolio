import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation3D from './components/Motivation3D';
import DoodleArt from './components/DoodleArt';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Motivation3D />
        <DoodleArt />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
