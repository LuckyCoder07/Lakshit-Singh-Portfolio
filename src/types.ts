export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Data Science';
  level: number; // 1-5
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: any;
}
