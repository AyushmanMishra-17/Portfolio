import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Secretary",
    organization: "Techno Club, Don Bosco Institute of Technology",
    duration: "October 2024 – August 2026",
    responsibilities: [
      "Responsible for organizing and coordinating technical events, workshops, and competitions within the college.",
      "Responsible for promoting events, and engaging with members to foster a vibrant tech community.",
    ]
  },
  {
    role: "Head Coordinator",
    organization: "ITRang, Annual Tech & Cultural Fest of Don Bosco Institute of Technology",
    duration: "2025",
    responsibilities: [
      "Responsible for coordinating and managing the annual tech and cultural fest.",
      "Led a team of coordinators to ensure smooth execution of events.",
      "Managed communication with faculty, students, and external stakeholders."
    ]
  },
  {
    role: "Content Writer & Board of Directors Member",
    organization: "Rotaract Club of Don Bosco Institute of Technology, Sankalp",
    duration: "2024 – Current",
    responsibilities: [
      "Responsible for creating engaging content for the club's social media platforms and newsletters.",
      "Contributed to the planning and execution of community service projects and events.",
      "Collaborated with other board members to strategize and implement initiatives that align with the club's mission."
    ]
  },
  {
    role: "Tech Intern",
    organization: "Tronixia Technologies, Bangalore",
    duration: "March 2026 - April 2026",
    responsibilities: [
      "Completed a comprehensive software testing internship where I performed manual, UI, regression, and API testing on a real-world web application.",
      "Designed and executed structured test cases, identified critical bugs, and validated backend services using Postman.",
      "Gained hands-on experience with industry tools like Git, GitHub, and Excel while applying practical QA methodologies."
    ]
  }
];

export default function ExperienceTimeline() {
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
            Experience & Responsibilities
          </h3>
          <p className="text-slate-400 text-lg">My professional journey and leadership roles</p>
        </motion.div>

        <div className="relative border-l-2 border-gradient-to-b from-indigo-500/40 via-purple-500/40 to-pink-500/40 ml-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-14 ml-8 relative group"
            >
              {/* Animated dot */}
              <motion.span 
                className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                whileInView={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-ping opacity-75" />
              </motion.span>

              <motion.div
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 overflow-hidden group-hover:border-indigo-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full" />
                
                <h4 className="text-xl font-bold mb-2 text-white">{exp.role}</h4>
                <p className="text-indigo-400 font-medium mb-1">{exp.organization}</p>
                <p className="text-sm text-slate-500 mb-4">{exp.duration}</p>

                <ul className="space-y-2.5">
                  {exp.responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
