import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      let current = 'hero';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo">LS.</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active-link' : ''}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a></li>
            <li>
              <button 
                onClick={toggleTheme} 
                className={`neon-switch-container interactive ${theme === 'light' ? 'is-light' : 'is-dark'}`}
                aria-label="Toggle theme"
              >
                <div className="neon-switch-track">
                  <div className="neon-switch-thumb"></div>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
