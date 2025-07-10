import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ProjectHighlights from "@/components/ProjectHighlights";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import LeadershipSocialWork from "@/components/LeadershipSocialWork";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <ProjectsShowcase />
        <ProjectHighlights />
      </section>
      <section id="experience">
        <ExperienceTimeline />
      </section>
      <section id="skills">
        <SkillsGrid />
      </section>
      <section id="leadership">
        <LeadershipSocialWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
