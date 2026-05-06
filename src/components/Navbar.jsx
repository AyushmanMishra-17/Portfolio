import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10 shadow-lg" 
          : "backdrop-blur-md bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <motion.h1 
            className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Ayushman Mishra
          </motion.h1>
        </Link>

        <div className="flex gap-8 text-sm">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink href="https://github.com/AyushmanMishra-17" external>GitHub</NavLink>
          <NavLink href="https://linkedin.com/in/ayushman-mishra17" external>LinkedIn</NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, href, children, external }) {
  const content = (
    <motion.span
      className="relative text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer group"
      whileHover={{ y: -2 }}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link to={to}>{content}</Link>;
}
