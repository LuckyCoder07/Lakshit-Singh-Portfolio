import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-white/10 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-gradient tracking-tighter mb-4 inline-block">
              LS.
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Building the future of the web, one line of code at a time. Designed and developed by Lakshit Singh.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/LuckyCoder07" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lakshit-singh-2550b1360" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:lakshit.singh25@pccoepune.org" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-4 glass rounded-full text-cyan-primary hover:bg-cyan-primary hover:text-dark-bg transition-all duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Lakshit Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
