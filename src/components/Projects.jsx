import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">

      <ProjectCard
        title="Fake News Detection System"
        description="End-to-end NLP system with explainable AI, credibility scoring and deployment."
        tech="FastAPI • React • NLP"
        github="https://github.com/AyushmanMishra-17/FakeNewsDetection"
      />

      <ProjectCard
        title="IntelliCampus"
        description="Smart academic management platform with automated syllabus parsing and semester-wise curriculum management."
        tech="Android • Java • Firebase • Firestore • Python"
        github="https://github.com/AyushmanMishra-17/Intellicampus"
      />

      <ProjectCard
        title="AutoShield"
        description="Autonomous cyber-defense platform for real-time threat detection, risk analysis and automated mitigation."
        tech="React • Node.js • Python • ML • Socket.IO"
        github="hhttps://github.com/AyushmanMishra-17/AutoShield"
      />

      <ProjectCard
        title="Smart Tourist Safety Monitoring & Incident Response System"
        description="AI-powered tourist safety platform combining risk prediction, geo-fencing, IoT integration and blockchain-based identity management."
        tech="AI • Blockchain • IoT • React • Node.js • Python"
        github="https://github.com/AyushmanMishra-17/tourist-safety-monitoring-system"
      />

      <ProjectCard
        title="Personal Portfolio Website"
        description="Modern responsive developer portfolio showcasing projects, technical skills, experience and achievements."
        tech="React • Vite • Tailwind CSS • Framer Motion"
        github="https://github.com/AyushmanMishra-17/Portfolio"
      />

    </div>
  );
}