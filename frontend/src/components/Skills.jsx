import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaFire } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiC, SiMongodb } from 'react-icons/si';
import './Skills.css';

const iconMap = {
  'React': <FaReact size={32} color="#61DAFB" />,
  'Tailwind CSS': <SiTailwindcss size={32} color="#06B6D4" />,
  'Node.js': <FaNodeJs size={32} color="#339933" />,
  'Firebase': <FaFire size={32} color="#FFCA28" />,
  'Python': <FaPython size={32} color="#3776AB" />,
  'C': <SiC size={32} color="#A8B9CC" />,
  'C++': <SiCplusplus size={32} color="#00599C" />,
  'MongoDB': <SiMongodb size={32} color="#47A248" />
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackSkills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'Python', category: 'Languages' },
    { name: 'C++', category: 'Languages' },
    { name: 'C', category: 'Languages' }
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

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(groupedSkills);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          Tech Stack
        </motion.h2>
        
        {loading ? (
          <div className="loading">Loading skills...</div>
        ) : (
          <motion.div 
            className="skills-columns"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categories.map((category, idx) => (
              <motion.div key={category} variants={itemVariants} className="skills-column glass-panel">
                <h3 className="skills-column-title">{category}</h3>
                <div className="skills-list">
                  {groupedSkills[category].map(skill => (
                    <div key={skill.name} className="skill-badge glass-panel">
                      <span className="skill-badge-icon">
                        {iconMap[skill.name] || <div className="icon-placeholder" />}
                      </span>
                      <span className="skill-badge-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
