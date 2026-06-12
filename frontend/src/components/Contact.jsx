import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const ContactFlipCard = ({ icon, title, description, actionText, href }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="contact-flip-card interactive"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="contact-flip-inner"
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="contact-flip-front glass-panel">
          <div className="contact-icon">{icon}</div>
          <h3 className="contact-title">{title}</h3>
        </div>
        
        <div className="contact-flip-back glass-panel">
          <p className="contact-desc">{description}</p>
          <a href={href} className="contact-action-btn glass-btn interactive">
            {actionText}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
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
          I'm always open to discussing product design work or partnership opportunities.
        </motion.p>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ContactFlipCard 
              icon={<Mail size={40} />}
              title="Email Me"
              description="Drop me a line anytime. I usually respond within 24 hours."
              actionText="lakshit.singh25@pccoepune.org"
              href="mailto:lakshit.singh25@pccoepune.org"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ContactFlipCard 
              icon={<Send size={40} />}
              title="Hire Me"
              description="Looking for a full-stack developer? Let's build something amazing together."
              actionText="View Resume"
              href="#"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <ContactFlipCard 
              icon={<MapPin size={40} />}
              title="Working Status"
              description="Available for internships and roles."
              actionText="Ready to learn and build"
              href="#"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
