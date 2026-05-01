import React from "react";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Contact from "./Contact/Contact";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
