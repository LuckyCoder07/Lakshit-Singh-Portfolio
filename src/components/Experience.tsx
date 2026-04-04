import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { cn } from '@/src/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & <span className="text-gradient">Education</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional growth in the field of technology.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-center",
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-primary rounded-full -translate-x-1/2 cyan-glow z-10" />
                
                <div className="w-full md:w-1/2">
                  <div className="glass p-8 rounded-2xl hover:border-cyan-primary/30 transition-all duration-300">
                    <span className="text-xs font-bold text-cyan-primary/70 uppercase tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 mb-4 font-medium">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
