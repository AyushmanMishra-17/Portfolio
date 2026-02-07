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
    </div>
  );
}
