import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './About.css';

import profilePic from '../assets/profile.png';

const FlipCard = ({ icon, title, link, username }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card interactive" 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="flip-card-front glass-panel">
          {icon}
          <span className="card-title">{title}</span>
        </div>
        {/* Back */}
        <div className="flip-card-back glass-panel">
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            {username}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about section-padding relative-z">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I'm a <strong>Computer Engineering student</strong> at Pimpri Chinchwad College of Engineering (PCCOE), Pune, with a major interest in <strong>Data Science</strong>. 
            </p>
            <p>
              My journey in tech is driven by a deep curiosity for how things work and a passion for creating data-driven digital solutions. Whether it's crafting scalable backends or developing machine learning models, I love tackling complex problems.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>

            <div className="social-flip-cards mt-4">
              <FlipCard 
                icon={<FaGithub size={30} />} 
                title="GitHub" 
                link="https://github.com/LuckyCoder07" 
                username="@LuckyCoder07" 
              />
              <FlipCard 
                icon={<FaLinkedin size={30} />} 
                title="LinkedIn" 
                link="https://www.linkedin.com/in/lakshit-singh-2550b1360/" 
                username="Lakshit Singh" 
              />
            </div>

          </motion.div>
          
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
          >
            <div className="about-image-wrapper glass-panel">
              <img src={profilePic} alt="Lakshit Singh" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
