import React from 'react';
import './About.css';

import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>
              I'm a <strong>Computer Engineering student</strong> at Pimpri Chinchwad College of Engineering (PCCOE), Pune, with a major interest in <strong>Data Science</strong>.
            </p>
            <p>
              My journey in tech is driven by a deep curiosity for how things work and a passion for creating data-driven digital solutions. Whether it's crafting scalable backends or developing machine learning models, I love tackling complex problems.
            </p>
            <p>
              When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          <div className="about-image-container fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="about-image-wrapper">
              <img src={profilePic} alt="Lakshit Singh" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
