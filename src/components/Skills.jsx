import { motion } from "framer-motion";

const technicalSkills = [
  "Python", "Machine Learning", "React", "SQL", "Git & GitHub", "Docker",
  "Data Analysis", "Cybersecurity", "C Language", "Java", "Javascript",
  "PHP", "Tailwind CSS", "HTML", "C++", "JSX", "Excel", "PowerBI", "Tableau"
];

const softSkills = [
  "Problem Solving", "Critical Thinking", "Communication",
  "Team Collaboration", "Adaptability", "Time Management",
  "Self-Learning", "Attention to Detail"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Strengths
          </h3>
          <p className="text-slate-400 text-lg">
            Technologies and competencies that power my work
          </p>
        </motion.div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
            <h4 className="text-2xl font-bold text-indigo-400">Technical Skills</h4>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 
                           border border-white/20 backdrop-blur-sm text-slate-200 font-medium cursor-default
                           hover:border-indigo-400/50 transition-all duration-300"
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.span>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h4 className="text-2xl font-bold text-purple-400">Soft Skills</h4>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 
                           border border-white/20 backdrop-blur-sm text-slate-200 font-medium cursor-default
                           hover:border-purple-400/50 transition-all duration-300"
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
