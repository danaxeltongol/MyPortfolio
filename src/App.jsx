// App.jsx puts all the sections together in order, top to bottom.
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <main className="wrap">
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Contact />
    </>
  )
}
