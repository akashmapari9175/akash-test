import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Header";
import Section from "./Component/Section";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import ProjectsCard from "./Component/ProjectCard";
import Experience from "./Component/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Section></Section>
      <About />
      <Skills />
      <ProjectsCard></ProjectsCard>
      {/* <Projects></Projects> */}
      <Experience></Experience>
    </>
  );
}

export default App;
