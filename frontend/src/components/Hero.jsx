import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        
        {/* Left Side: Terminal Info */}
        <div className="hero-content fade-in-up">
        </div>
      </div>
      <div className="gradient-blob"></div>
    </section>
  );
};

export default Hero;
