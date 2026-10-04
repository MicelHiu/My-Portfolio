"use client";

import Navigation from "@/container/Navigation";
import HomeSection from "@/components/homeSection";
import AboutSection from "@/components/aboutSection";
import ProjectsSection from "@/components/projectSection";
export default function Dashboard() {
    return (
        <>
            <Navigation />
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
        </>
    )
}