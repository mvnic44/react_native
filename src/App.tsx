import type { ReactElement } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SchemaOrg from "./SchemaOrg.tsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";

const App = (): ReactElement => {
  return (
    <>
      <ShaderBackground />
      <div className="hud-grid" />
      <NavBar />
      <main>
        <Hero />
        <SchemaOrg />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
