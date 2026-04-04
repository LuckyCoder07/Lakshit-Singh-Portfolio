import { motion } from 'motion/react';

export default function DataVisualizer() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
        {/* Connection Lines */}
        {nodes.map((node, i) => (
          nodes.slice(i + 1, i + 4).map((target, j) => (
            <motion.line
              key={`line-${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-cyan-primary/30"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
                x1: [node.x, node.x + (Math.random() - 0.5) * 5, node.x],
                y1: [node.y, node.y + (Math.random() - 0.5) * 5, node.y],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        ))}

        {/* Data Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            className="fill-cyan-primary/20 stroke-cyan-primary/50"
            strokeWidth="0.5"
            animate={{
              cx: [node.x, node.x + (Math.random() - 0.5) * 10, node.x],
              cy: [node.y, node.y + (Math.random() - 0.5) * 10, node.y],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="0.3"
            className="fill-cyan-primary/40"
            initial={{ 
              cx: Math.random() * 100, 
              cy: Math.random() * 100,
              opacity: 0 
            }}
            animate={{
              cy: [null, Math.random() * 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Center Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-primary/5 to-transparent pointer-events-none" />
      
      {/* Floating Code Snippets (Abstract) */}
      <motion.div 
        className="absolute top-10 left-10 font-mono text-[10px] text-cyan-primary/40 select-none pointer-events-none"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {`{ data: "analysis" }`}
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 font-mono text-[10px] text-cyan-primary/40 select-none pointer-events-none"
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        {`model.predict(x)`}
      </motion.div>
    </div>
  );
}
