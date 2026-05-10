import { motion } from "framer-motion";

const educationData = [
  {
    title: "Class 10th",
    institution: "Notre Dame School",
    year: "2021",
    description: "74.7% - CBSE Board, with a strong foundation in core subjects and extracurriculars."
  },
  {
    title: "Class 12th",
    institution: "Notre Dame School",
    year: "2023",
    description: "Commerce Stream - 88.9% - CBSE Board, with a focus on English, Computer Science, Business Studies, economics, and accountancy."
  },
  {
    title: "Ethical hacking & Cybersecurity Courses",
    institution: "",
    year: "Ongoing",
    description: "A course on ethical hacking and cybersecurity, covering topics like penetration testing, network security, and vulnerability assessment."
  },
  {
    title: "3 Day Workshop on Generative AI",
    institution: "GUVI HCL in collaboration with IIT Delhi",
    year: "2025",
    description: "A workshop on generative AI, covering topics like prompt engineering, model fine-tuning, and deployment strategies."
  },
  {
    title: "Workshop on Biotechnology in Health Science and Therapeutics",
    institution: "Manipal University Jaipur",
    year: "2025",
    description: "A workshop on biotechnology in health science and therapeutics, covering topics like molecular biology, drug discovery, and therapeutic applications."
  },
  {
    title: "Sports and Co-curricular Activities",
    institution: "Don Bosco Institute of Technology",
    year: "2023 - Current",
    description: "Sports participation in Basketball, along with active involvement in co-curricular activities like the Techno Club and ITRang, fostering teamwork, leadership, and a well-rounded college experience."
  }
];

export default function EducationTimeline() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Education & Learning
          </h3>
          <p className="text-slate-400 text-lg">Academic achievements and continuous learning</p>
        </motion.div>

        <div className="relative border-l-2 border-gradient-to-b from-indigo-500/40 via-purple-500/40 to-pink-500/40 ml-4">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 ml-8 relative group"
            >
              <motion.span 
                className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                whileInView={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-ping opacity-75" />
              </motion.span>

              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 overflow-hidden group-hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
                
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                {item.institution && (
                  <p className="text-purple-400 font-medium mb-1">{item.institution}</p>
                )}
                <p className="text-sm text-slate-500 mb-3">{item.year}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
