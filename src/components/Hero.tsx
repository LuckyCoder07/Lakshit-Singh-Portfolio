import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { LAKSHIT_DATA } from '../constants';
import profilePhoto from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Mobile: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex md:hidden justify-center mb-4"
        >
          <ProfilePhoto size={220} />
        </motion.div>

        {/* Text Content */}
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
            A passionate <span className="text-white font-medium">{LAKSHIT_DATA.role}</span> from PCCOE Pune with a major interest in{' '}
            <span className="text-white font-medium">{LAKSHIT_DATA.interest}</span>.
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
              <a
                href={LAKSHIT_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 glass rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={LAKSHIT_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 glass rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Desktop: Animated Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:flex justify-center items-center"
        >
          <ProfilePhoto size={380} />

          {/* Corner decorative brackets */}
          <div className="absolute -top-6 right-[calc(50%-210px)] w-20 h-20 border-t-2 border-r-2 border-cyan-primary/40 rounded-tr-3xl hidden lg:block" />
          <div className="absolute -bottom-6 left-[calc(50%-210px)] w-20 h-20 border-b-2 border-l-2 border-cyan-primary/40 rounded-bl-3xl hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Reusable animated profile photo ─── */
function ProfilePhoto({ size }: { size: number }) {
  return (
    <motion.div
      className="relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.06 }}
    >
      {/* Outer halo glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.18) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />

      {/* Spinning gradient ring */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: -4,
          background: 'conic-gradient(from 0deg, #00f5ff, #00b8d4, transparent 60%)',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* White separator ring */}
      <div
        className="absolute rounded-full bg-dark-bg pointer-events-none"
        style={{ inset: -1, borderRadius: '50%' }}
      />

      {/* Photo */}
      <motion.img
        src={profilePhoto}
        alt="Lakshit Singh"
        className="rounded-full object-cover object-top relative z-10"
        style={{ width: size, height: size }}
        whileHover={{
          boxShadow: '0 0 50px rgba(0, 245, 255, 0.45)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      />

      {/* Subtle inner vignette */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle at 30% 30%, transparent 55%, rgba(0,0,0,0.25) 100%)',
        }}
      />
    </motion.div>
  );
}
