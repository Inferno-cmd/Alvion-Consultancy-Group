import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import OurSolution from './components/Services/Our Solution'
import About from './components/About/About'
import Social from './components/Social/social'
import Servicesoffering from './components/Servicesoffering/services'
import Testimonial from './components/Testimonial/Testimonial'
import Team from './components/Team/Team'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import LegalModal from './components/Footer/LegalModal'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurSolution/>
      <About/> 
      <Social/>
      <Servicesoffering/>
      <Testimonial/>
      <Team/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
} 
export default App