import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass-panel">
            <p>
              I'm a Computer Engineering student at Pimpri Chinchwad College of Engineering (PCCOE), Pune, with a major interest in Data Science.
            </p>
            <p>
              My journey in tech is driven by a deep curiosity for how things work and a passion for creating data-driven digital solutions. 
              I enjoy bridging the gap between engineering and elegant user experiences.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">LS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
