import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function Page() {
  return (
    <main
      className="
        px-5
        sm:px-8
        md:px-12
        lg:px-35
        xl:px-52
      
      "
    >
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
