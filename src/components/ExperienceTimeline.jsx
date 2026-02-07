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
    duration: "Year – Year",
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
    }
];

export default function ExperienceTimeline() {
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
          Experience & Responsibilities
        </motion.h3>

        <div className="relative border-l border-white/20 ml-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-14 ml-8 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/40"></span>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>

                <p className="text-sm text-indigo-400 mb-1">
                  {exp.organization}
                </p>

                <p className="text-xs text-slate-500 mb-4">
                  {exp.duration}
                </p>

                <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
