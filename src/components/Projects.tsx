import { motion } from 'motion/react';
import { ExternalLink, Rocket, Code2, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Exciting projects are being crafted with passion. Stay tuned for something amazing.
            </p>
          </div>
          <a
            href="https://github.com/LuckyCoder07"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-primary hover:text-white transition-colors flex items-center gap-2 font-medium"
          >
            View GitHub <ExternalLink size={16} />
          </a>
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center justify-center py-24 px-8 glass rounded-3xl overflow-hidden border border-cyan-primary/20"
          style={{ boxShadow: '0 0 80px rgba(0, 245, 255, 0.07)' }}
        >
          {/* Animated orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[420px] h-[420px] rounded-full border border-cyan-primary/10"
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] rounded-full border border-cyan-primary/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[190px] h-[190px] rounded-full border border-cyan-primary/20"
              style={{ borderStyle: 'dashed' }}
            />
          </div>

          {/* Floating small orbs */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-primary/60"
              style={{
                top: `${20 + i * 14}%`,
                left: `${10 + i * 18}%`,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            />
          ))}

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-primary/5 rounded-full blur-[60px] pointer-events-none" />

          {/* Icon cluster */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 flex items-center justify-center mb-8"
          >
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-cyan-primary/10 border border-cyan-primary/30"
              style={{ boxShadow: '0 0 40px rgba(0,245,255,0.15)' }}>
              <Rocket size={40} className="text-cyan-primary" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-3 -right-3"
              >
                <Sparkles size={18} className="text-cyan-primary/80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="relative z-10 text-center max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/30 text-cyan-primary text-xs font-bold tracking-widest uppercase mb-6"
            >
              <Code2 size={12} />
              Work in Progress
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Coming <span className="text-gradient">Soon</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              I'm currently building something awesome. Projects will be showcased here once they're ready to share with the world.
            </motion.p>

            <motion.a
              href="https://github.com/LuckyCoder07"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-primary text-dark-bg font-bold rounded-xl hover:bg-cyan-secondary transition-colors"
            >
              Follow on GitHub <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
