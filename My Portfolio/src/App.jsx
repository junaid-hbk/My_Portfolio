
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Services from './Components/Services/Services.jsx'
import CTASection from './Components/Ctasection/CTAsection.jsx'
function App() {


  return (
    <>
  <Navbar />
  < Home/>
  <Services />
  < About/>
  < Experience/>
  < Projects/>
  <CTASection />
  < Contact/>
  < Footer />
    </>
  )
}

export default App

