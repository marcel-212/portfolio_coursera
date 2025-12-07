import './App.scss'
import Header from './components/Header'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Header />
      <main>
        <Banner/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
