import { Project, Experience, Skill } from './types';

export const LAKSHIT_DATA = {
  name: 'Lakshit Singh',
  role: 'Computer Engineering Student',
  interest: 'Data Science',
  github: 'https://github.com/LuckyCoder07',
  linkedin: 'https://www.linkedin.com/in/lakshit-singh-2550b1360',
  email: 'lakshit.singh25@pccoepune.org',
  secondaryEmail: 'lakshit0507@gmail.com'
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Portfolio Assistant',
    description: 'A smart chatbot integrated into this portfolio to answer questions about my background and skills.',
    tags: ['React', 'Gemini AI', 'Firebase', 'Tailwind'],
    github: 'https://github.com/LuckyCoder07',
  },
  {
    id: '2',
    title: 'Modern E-commerce Platform',
    description: 'A full-stack shopping experience with real-time inventory and secure checkout.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    github: 'https://github.com/LuckyCoder07',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Collaborative task tracking with drag-and-drop functionality and team workspaces.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/LuckyCoder07',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'PCCOE Pune',
    role: 'Student / Aspiring Developer',
    period: '2026 - Present',
    description: [
      'Active member of the coding club and technical events.',
      'Maintaining a strong academic record with focus on core CS subjects.'
    ]
  },
  {
    id: '3',
    company: 'PCCOE',
    role: 'B.Tech in Computer Engineering',
    period: 'Sep 2025 – Sep 2029',
    description: [
      'Pursuing Bachelor of Technology in Computer Engineering.',
      'Engaging in comprehensive engineering coursework and practical projects.'
    ]
  },
  {
    id: '2',
    company: 'Indian Institute of Technology, Madras',
    role: 'BS in Data Science and Programming',
    period: 'May 2025 – Sep 2029',
    description: [
      'Bachelor of Science - BS, Data science.',
      'Grade: Received 9.67 CGPA in the first term of foundation level 🏅',
      'Focus: Computational Mathematics, Statistical Data Analysis, Discrete Mathematics, Mathematical Analysis, Distance Learning, Data Analysis.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend', level: 4 },
  { name: 'TypeScript', category: 'Frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 5 },
  { name: 'Node.js', category: 'Backend', level: 3 },
  { name: 'Firebase', category: 'Backend', level: 4 },
  { name: 'Python', category: 'Languages', level: 4 },
  { name: 'Java', category: 'Languages', level: 3 },
  { name: 'C', category: 'Languages', level: 4 },
  { name: 'C++', category: 'Languages', level: 4 },
  { name: 'Git', category: 'Tools', level: 5 },
  { name: 'Docker', category: 'Tools', level: 2 },
  { name: 'Data Analysis', category: 'Data Science', level: 4 },
  { name: 'Statistical Analysis', category: 'Data Science', level: 4 },
  { name: 'Computational Math', category: 'Data Science', level: 3 },
];
