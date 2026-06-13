import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo" onClick={handleLinkClick}>LS.</a>
        
        {/* Mobile Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={handleLinkClick} className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
            <li><a href="#experience" onClick={handleLinkClick} className={activeSection === 'experience' ? 'active-link' : ''}>Experience</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className={activeSection === 'skills' ? 'active-link' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={handleLinkClick} className={activeSection === 'projects' ? 'active-link' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className={activeSection === 'contact' ? 'active-link' : ''}>Contact</a></li>
            <li className="theme-toggle-li">
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
