import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission to backend here
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section-padding relative-z">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm always open to discussing product design work, internship roles, or partnership opportunities.
        </motion.p>

        <div className="contact-container">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Get In Touch</h3>
            <p className="contact-info-desc">
              Looking for a dedicated software engineering intern or full-stack developer? I'm ready to learn, build, and contribute to your team.
            </p>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>lakshit.singh25@pccoepune.org</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Status</h4>
                <p>Available for Internships</p>
              </div>
            </div>

            <div className="resume-cta">
              <a href="#" className="btn btn-primary interactive w-full flex-center" target="_blank" rel="noopener noreferrer">
                <FileText size={20} className="mr-2" /> View Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  className="form-control" 
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                  className="form-control" 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required 
                  className="form-control" 
                  rows="5"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-secondary interactive submit-btn">
                {submitted ? 'Message Sent!' : <><Send size={18} className="mr-2" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
