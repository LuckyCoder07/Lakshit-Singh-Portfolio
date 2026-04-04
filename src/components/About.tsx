import { motion } from 'motion/react';
import { User, Code, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass p-10 rounded-3xl border-cyan-primary/20">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">About <span className="text-gradient">Me</span></h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>
                  I'm a dedicated <span className="text-white font-medium">Computer Engineering student</span> at Pimpri Chinchwad College of Engineering (PCCOE), Pune, with a major interest in <span className="text-white font-medium">Data Science</span>. My journey in tech is driven by a deep curiosity for how things work and a passion for creating data-driven digital solutions.
                </p>
                <p>
                  Currently pursuing a BS in Data Science from <span className="text-white font-medium">IIT Madras</span> alongside my engineering degree, I enjoy bridging the gap between complex backend logic, intuitive frontend interfaces, and powerful data insights.
                </p>
                <p>
                  When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <GraduationCap />, title: 'Education', desc: 'B.Tech in CS at PCCOE Pune' },
              { icon: <Briefcase />, title: 'Experience', desc: 'Fresher / Aspiring Dev' },
              { icon: <Code />, title: 'Projects', desc: '10+ Web Applications' },
              { icon: <User />, title: 'Interests', desc: 'Data Science, AI, UX Design' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-cyan-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
