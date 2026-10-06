"use client";

import Navigation from "@/container/Navigation";
import HomeSection from "@/components/homeSection";
import AboutSection from "@/components/aboutSection";
import ProjectsSection from "@/components/projectSection";
import SkillsSections from "@/components/skillsSections";
import ExperienceSection from "@/components/experienceSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/container/Footer";
import StarsBackground from "@/components/starsBackground";
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
        </>
    )
}