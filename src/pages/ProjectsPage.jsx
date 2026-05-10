import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          My Projects
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Building real-world AI applications with modern technologies
        </p>
      </motion.div>

      <Projects />
    </div>
  );
}
