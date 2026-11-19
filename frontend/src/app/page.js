/**
 * page.js — Root page (/)
 * Strictly follows the vertical section hierarchy with shared cosmic background:
 * 1. Navbar
 * 2. Hero Section
 * 3. About Me (full-width separate section)
 * 4. Certifications & Achievements (full-width separate section)
 * 5. Skills Showcase (full-width separate section with continuous animated ticker)
 * 6. Featured Projects (spacious 2-column full-width section)
 * 7. Education (full-width separate section)
 * 8. Experience & Project Practice (full-width separate section)
 * 9. Contact (full-width separate section)
 * 10. Footer
 * 11. Floating Chatbot
 */

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import ChatbotPlaceholder from "@/components/chatbot/ChatbotPlaceholder";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className="flex flex-col gap-14 sm:gap-20 lg:gap-28 pb-16 sm:pb-24 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Section (Independent Full-Width Section with subtle violet lighting) */}
        <section id="about" aria-label="About Me" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AboutSection />
          </div>
        </section>

        {/* 3. Certifications & Achievements (Independent Full-Width Section) */}
        <section id="certifications" aria-label="Certifications & Achievements" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-10 right-1/4 w-80 h-80 rounded-full bg-cyan-500/08 blur-[100px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <CertificationsSection />
          </div>
        </section>

        {/* 4. Skills Showcase (Independent Full-Width Section with Continuous Ticker) */}
        <section id="skills" aria-label="Technologies I Work With" className="w-full overflow-hidden relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="relative z-10 w-full">
            <SkillsSection />
          </div>
        </section>

        {/* 5. Featured Projects (Spacious 2-Column Full-Width Section) */}
        <section id="projects" aria-label="Featured Projects" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-violet-600/12 blur-[110px]" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ProjectsSection />
          </div>
        </section>

        {/* 6. Education (Independent Full-Width Section) */}
        <section id="education" aria-label="Education" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/08 blur-[90px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <EducationSection />
          </div>
        </section>

        {/* 7. Experience & Project Practice (Independent Full-Width Section) */}
        <section id="experience" aria-label="Experience & Practice" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-10 right-10 w-80 h-80 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ExperienceSection />
          </div>
        </section>

        {/* 8. Contact Section (Independent Full-Width Section) */}
        <section id="contact" aria-label="Contact" className="w-full relative">
          <div aria-hidden="true" className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ContactSection />
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Chatbot Assistant */}
      <ChatbotPlaceholder />
    </>
  );
}
