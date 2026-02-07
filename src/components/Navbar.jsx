import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold">Ayushman Mishra</h1>

        <div className="flex gap-6 text-sm text-slate-300">
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <a href="https://github.com/AyushmanMishra-17" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/ayushman-mishra17" target="_blank">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}
