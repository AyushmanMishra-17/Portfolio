import Hero from "../components/Hero";
import Skills from "../components/Skills";
import EducationTimeline from "../components/EducationTimeline";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <ExperienceTimeline />
      <SectionDivider />

      <EducationTimeline />
    </>
  );
}
