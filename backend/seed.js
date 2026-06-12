import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Skill from './models/Skill.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

const projects = [
  {
    title: 'VisionMorp AI',
    description: 'An AI-powered application designed to transform and morph images using advanced machine learning models.',
    techStack: ['Python', 'React', 'Node.js'],
    githubLink: 'https://github.com/LuckyCoder07',
  },
  {
    title: 'QuicknotesAI',
    description: 'A smart note-taking app that automatically summarizes and organizes your notes using AI.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com/LuckyCoder07',
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
    githubLink: 'https://github.com/LuckyCoder07',
  }
];

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Python', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log('Cleared existing data.');

    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log('Database seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
