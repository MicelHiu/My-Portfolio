"use client";

import Navigation from "@/container/Navigation";
import HomeSection from "@/components/home/homeSection";
import AboutSection from "@/components/about/aboutSection";
import ProjectsSection from "@/components/project/projectSection";
import SkillsSections from "@/components/skills/skillsSections";
import ExperienceSection from "@/components/experience/experienceSection";
import ContactSection from "@/components/contact/contactSection";
import Footer from "@/container/Footer";
import StarsBackground from "@/components/starsBackground";
import ScrollToTop from "@/components/home/scrollToTop";
export default function Dashboard() {
    return (
        <>
            <StarsBackground />
            <Navigation />
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSections />
            <ExperienceSection />
            <ContactSection />
            <Footer />
            <ScrollToTop />
        </>
    )
}