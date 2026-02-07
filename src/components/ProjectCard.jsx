import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <p className="text-xs text-slate-500 mb-6">{tech}</p>
      <a href={github} target="_blank" className="underline">GitHub</a>
    </motion.div>
  );
}
