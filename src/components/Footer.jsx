import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-12 text-center border-t border-white/10 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent" />
      
      <div className="relative z-10">
        <motion.p 
          className="text-slate-400 text-sm mb-4"
          whileHover={{ scale: 1.05 }}
        >
          © 2026 Ayushman Mishra
        </motion.p>
        
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/AyushmanMishra-17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ayushman-mishra17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
