/**
 * page.js — Root page (/)
 * Assembles the full developer portfolio layout from modular section components.
 * Phase 2: Complete frontend with all verified sections.
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import ChatbotPlaceholder from "@/components/chatbot/ChatbotPlaceholder";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Floating chatbot FAB — AI Assistant placeholder for Phase 3 */}
      <ChatbotPlaceholder />
    </>
  );
}
