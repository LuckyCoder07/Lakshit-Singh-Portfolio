import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero glass-panel-hero">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">guest@lakshit: ~</span>
            </div>
            <div className="terminal-body mono-text">
              <p className="command">
                <span className="prompt">$</span> whoami
              </p>
              <p className="output">Lakshit Singh</p>
              
              <p className="command mt-2">
                <span className="prompt">$</span> cat role.txt
              </p>
              <p className="output type-effect">
                <Typewriter
                  words={['Computer Engineering Student', 'Aspiring Data Scientist', 'Full-stack Developer', 'Tech Enthusiast']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
          </div>

          <div className="hero-text-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Building <span className="text-gradient">data-driven</span> solutions.
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I bridge the gap between complex algorithms and intuitive user experiences.
            </motion.p>
            
            <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary interactive">View My Projects</a>
          <a href="#contact" className="btn btn-secondary interactive glass-btn">Get In Touch</a>
        </motion.div>
          </div>
        </motion.div>

      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
