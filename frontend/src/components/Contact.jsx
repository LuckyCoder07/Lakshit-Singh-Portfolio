import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:lakshit.singh@example.com" className="btn-primary contact-btn">Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
