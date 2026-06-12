import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const timelineData = [
  {
    id: 1,
    date: '2026 - PRESENT',
    title: 'Student / Aspiring Developer',
    location: 'PCCOE Pune',
    points: [
      'Active member of the coding club and technical events.',
      'Maintaining a strong academic record with focus on core CS subjects.'
    ],
    align: 'right'
  },
  {
    id: 2,
    date: 'SEP 2025 - SEP 2029',
    title: 'B.Tech in Computer Engineering',
    location: 'PCCOE',
    points: [
      'Pursuing Bachelor of Technology in Computer Engineering.',
      'Engaging in comprehensive engineering coursework and practical projects.'
    ],
    align: 'left'
  },
  {
    id: 3,
    date: 'MAY 2025 - SEP 2029',
    title: 'BS in Data Science and Programming',
    location: 'Indian Institute of Technology, Madras',
    points: [
      'Bachelor of Science - BS, Data science.',
      'Grade: Received 9.67 CGPA in the first term of foundation level 🥇',
      'Focus: Computational Mathematics, Statistical Data Analysis, Discrete Mathematics, Mathematical Analysis, Distance Learning, Data Analysis.'
    ],
    align: 'right'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience section-padding relative-z">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Experience & <span className="highlight">Education</span>
          </h2>
          <p className="experience-subtitle">
            My academic journey and professional growth in the field of technology.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`timeline-item ${item.align}`}
              initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-location">{item.location}</h4>
                <ul className="timeline-points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
