import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { LAKSHIT_DATA } from '../constants';
import DataVisualizer from './DataVisualizer';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex md:hidden justify-center mb-8"
        >
          <div className="relative z-10 w-full max-w-[300px] aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-4">
            <DataVisualizer />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-cyan-primary/10 text-cyan-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for Opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">{LAKSHIT_DATA.name}</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            A passionate <span className="text-white font-medium">{LAKSHIT_DATA.role}</span> from PCCOE Pune with a major interest in <span className="text-white font-medium">{LAKSHIT_DATA.interest}</span>. 
            I build data-driven, user-centric web experiences with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-cyan-primary text-dark-bg font-bold rounded-xl flex items-center gap-2 hover:bg-cyan-secondary transition-colors"
            >
              Get in Touch <ArrowRight size={18} />
            </motion.a>
            
            <div className="flex items-center gap-3">
              <a href={LAKSHIT_DATA.github} target="_blank" rel="noreferrer" className="p-4 glass rounded-xl text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={LAKSHIT_DATA.linkedin} target="_blank" rel="noreferrer" className="p-4 glass rounded-xl text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative z-10 w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8">
            <DataVisualizer />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 right-[calc(50%-225px-24px)] w-24 h-24 border-t-2 border-r-2 border-cyan-primary/50 rounded-tr-3xl hidden lg:block" />
          <div className="absolute -bottom-6 left-[calc(50%-225px-24px)] w-24 h-24 border-b-2 border-l-2 border-cyan-primary/50 rounded-bl-3xl hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
