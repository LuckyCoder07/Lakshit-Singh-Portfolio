import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <p className="greeting">Hi, my name is</p>
          <h1 className="name">Lakshit Singh.</h1>
          <h2 className="role">I build data-driven digital solutions.</h2>
          <p className="summary">
            I'm a Computer Engineering student at PCCOE, Pune, with a major interest in Data Science. 
            I love exploring how things work and building interactive full-stack applications.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="https://github.com/LuckyCoder07" target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub Profile</a>
          </div>
        </div>
      </div>
      <div className="gradient-blob"></div>
    </section>
  );
};

export default Hero;
