import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden hover:border-indigo-400/50 transition-all duration-300"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-3xl" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.split(' • ').map((t, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-indigo-300 text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        
        <motion.a 
          href={github} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-200"
          whileHover={{ x: 5 }}
        >
          <span>View on GitHub</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
