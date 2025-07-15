import { useEffect } from "react";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import NetworkSection from "@/components/sections/network";
import ContactSection from "@/components/sections/contact";
import FooterSection from "@/components/sections/footer";

export default function Portfolio() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all sections with animate-on-scroll class
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <NetworkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
