import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackProjects = [
    {
      title: 'VisionMorp AI',
      description: 'An AI-powered application designed to transform and morph images using advanced machine learning models.',
      techStack: ['Python', 'React', 'Node.js'],
      githubLink: 'https://github.com/LuckyCoder07/VisonMorphAI',
    },
    {
      title: 'QuicknotesAI',
      description: 'A smart note-taking app that automatically summarizes and organizes your notes using AI.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/LuckyCoder07/QuickNotes-AI',
    },
    {
      title: 'GravityFlipper Game',
      description: 'An engaging web-based physics game where players manipulate gravity to overcome obstacles.',
      techStack: ['React', 'Node.js', 'C++'],
      githubLink: 'https://github.com/LuckyCoder07',
    },
    {
      title: 'Vouch-digital Code Notary',
      description: 'A secure platform for digital code signing and verification to ensure software integrity.',
      techStack: ['Node.js', 'React', 'MongoDB'],
      githubLink: 'https://github.com/LuckyCoder07/Vouch-Project',
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(`${apiUrl}/api/projects`);
        if (response.data && response.data.length > 0) {
          setProjects(response.data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Things I've Built
        </motion.h2>
        
        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card glass-panel"
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-list">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links mt-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary glass-btn interactive view-code-btn">
                      <FaGithub size={18} /> View Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
