import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import OurSolution from './components/Services/Our Solution'
import About from './components/About/About'
import Social from './components/Social/social'
import Servicesoffering from './components/Servicesoffering/services'
import Testimonial from './components/Testimonial/Testimonial'
import Partners from './components/Partners/Partners'
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
      <Partners/>
      <Footer/>
    </div>
  )
} 
export default App