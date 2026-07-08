import type { ReactElement } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ShaderBackground from './components/ShaderBackground'
import SchemaOrg from './components/SchemaOrg'

const App = (): ReactElement => {
  return (
    <>
      <SchemaOrg />
      <ShaderBackground />
      <div className="hud-grid" />
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
