import { motion } from "framer-motion";

const technicalSkills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "FastAPI",
  "React",
  "SQL",
  "Git & GitHub",
  "Docker",
  "Data Analysis",
  "Cybersecurity",
  "C Language",
  "Java",
  "Javascript",
  "PHP",
  "DJango"
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Self-Learning",
  "Attention to Detail"
];

export default function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-12"
        >
          Skills & Strengths
        </motion.h3>

        {/* TECHNICAL SKILLS */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-indigo-400">
            Technical Skills
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10
                           text-slate-300 backdrop-blur hover:scale-105
                           transition-transform"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-indigo-400">
            Soft Skills
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10
                           text-slate-300 backdrop-blur hover:scale-105
                           transition-transform"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
