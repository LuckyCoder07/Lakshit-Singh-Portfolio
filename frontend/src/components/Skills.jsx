import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback skills in case API fails
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

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        {loading ? (
          <div className="loading">Loading skills...</div>
        ) : (
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-panel">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-category">{skill.category}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
