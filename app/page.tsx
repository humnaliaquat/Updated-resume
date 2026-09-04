import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
