import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="social-links">
          <a href="https://github.com/LuckyCoder07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="copyright">
          Designed & Built by Lakshit Singh &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
