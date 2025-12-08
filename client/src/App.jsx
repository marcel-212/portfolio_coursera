import './App.scss'
import Header from './components/Header'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'
import { useRef } from 'react'

function App() {
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (section) => {
    const refs = {
      2: projectsRef,
      3: contactRef
    }

    refs[section]?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <main>
        <Banner/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
