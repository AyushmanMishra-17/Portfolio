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
    title: "Certificates",
    institution: "Issuing Organizations",
    year: "Various Years",
    description: "Placeholder for certifications and credentials."
  }
];

export default function EducationTimeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Education & Learning
        </motion.h3>

        <div className="relative border-l border-white/20 ml-4">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/40"></span>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-indigo-400 mb-1">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-500 mb-3">{item.year}</p>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
