import { motion } from "framer-motion";
import profile from "../assets/Profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16">

          {/* TEXT */}
          <motion.div
            className="text-center md:text-left max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Designing & building<br />
              <span className="text-indigo-400">real-world AI systems</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8">
              I’m Ayushman Mishra — a Machine Learning and Full-Stack Developer
              focused on building end-to-end AI products, from data and models
              to clean interfaces and production deployment.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="/projects"
                className="px-8 py-3 bg-indigo-400 text-black rounded-lg font-semibold
                           hover:scale-105 transition-transform duration-200
                           shadow-lg shadow-indigo-400/30 w-fit"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-72 h-72 bg-indigo-400/25 blur-3xl rounded-full" />
            <img
              src={profile}
              alt="Ayushman Mishra"
              className="w-60 h-60 md:w-64 md:h-64 rounded-2xl object-cover
                         border border-white/20 shadow-2xl relative"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
