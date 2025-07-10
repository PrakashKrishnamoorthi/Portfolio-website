import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <SkillsGrid />
      <Contact />
    </div>
  );
}
