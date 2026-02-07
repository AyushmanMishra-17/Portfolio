import Projects from "../components/Projects";
import SectionDivider from "../components/SectionDivider";

export default function ProjectsPage() {
  return (
    <div className="pt-32">
      <h1 className="text-4xl font-bold text-center mb-12">
        Selected Projects
      </h1>
      <SectionDivider />
      <Projects />
    </div>
  );
}
