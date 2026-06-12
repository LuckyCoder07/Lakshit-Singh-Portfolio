import React from 'react';
import { motion } from 'framer-motion';
import doodleImg from '../assets/doodle_art.png';
import './DoodleArt.css';

const DoodleArt = () => {
  return (
    <section className="doodle-section">
      <div className="container">
        <motion.div 
          className="doodle-wrapper"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="doodle-glow"></div>
          <img src={doodleImg} alt="Developer Webtoon Art" className="doodle-img" />
          <div className="doodle-overlay">
            <span className="mono-text">{'/* Late night coding sessions */'}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoodleArt;
