import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaFire } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC, SiMongodb } from 'react-icons/si';
import './Skills.css';

const iconMap = {
  'React': <FaReact size={40} color="#61DAFB" />,
  'Tailwind CSS': <SiTailwindcss size={40} color="#06B6D4" />,
  'Node.js': <FaNodeJs size={40} color="#339933" />,
  'Firebase': <FaFire size={40} color="#FFCA28" />,
  'Python': <FaPython size={40} color="#3776AB" />,
  'C': <SiC size={40} color="#A8B9CC" />,
  'C++': <SiCplusplus size={40} color="#00599C" />,
  'MongoDB': <SiMongodb size={40} color="#47A248" />
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const fallbackSkills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Python', category: 'Languages' },
    { name: 'C', category: 'Languages' },
    { name: 'C++', category: 'Languages' }
  ];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(`${apiUrl}/api/skills`);
        if (response.data && response.data.length > 0) {
          setSkills(response.data);
        } else {
          setSkills(fallbackSkills);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
        setSkills(fallbackSkills);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Interactive Tech Stack
        </motion.h2>
        
        {loading ? (
          <div className="loading">Loading skills...</div>
        ) : (
          <>
            <motion.div 
              className="skills-tabs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {categories.map(category => (
                <button 
                  key={category} 
                  className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    variants={itemVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    layout
                    className="skill-card glass-panel tech-stack-card"
                  >
                    <div className="skill-icon">
                      {iconMap[skill.name] || <div className="icon-placeholder" />}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-category">{skill.category}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
