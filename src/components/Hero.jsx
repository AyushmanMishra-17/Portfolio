import { motion } from "framer-motion";
import profile from "../assets/Profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 relative overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16">

          {/* TEXT */}
          <motion.div
            className="text-center md:text-left max-w-xl z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                ✨ Machine Learning & Full-Stack Developer
              </span>
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Designing & building<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                real-world AI systems
              </span>
            </motion.h2>

            <motion.p 
              className="text-slate-400 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm <span className="text-white font-semibold">Ayushman Mishra</span> — focused on building end-to-end AI products, from data and models to clean interfaces and production deployment.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/projects"
                className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold overflow-hidden shadow-lg shadow-indigo-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="https://github.com/AyushmanMishra-17"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-indigo-500/50 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 hover:border-indigo-500 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub Profile
              </motion.a>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex justify-center z-10"
          >
            {/* Animated rings */}
            <motion.div
              className="absolute w-80 h-80 rounded-full border-2 border-indigo-500/20"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
            />
            
            <motion.div
              className="absolute w-72 h-72 rounded-full border-2 border-purple-500/20"
              animate={{ 
                rotate: -360,
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, delay: 1 },
              }}
            />

            {/* Glow effect */}
            <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse" />
            
            {/* Profile image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src={profile}
                alt="Ayushman Mishra"
                className="w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover border-2 border-white/20 shadow-2xl relative z-10"
              />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-indigo-400 rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
