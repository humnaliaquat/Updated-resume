import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import React from "react";

export default function Page() {
  return (
    <main>
      <HeroSection />

      <div className="space-y-28">
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
