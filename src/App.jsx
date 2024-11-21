import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import LineBreak from './Components/LineBreak'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



function App() {
  

  return (
    <div>
      <section ><Navbar/></section>
      <section ><HeroSection/></section>
      <LineBreak/>
      <section id='projects'><Projects/></section>
      <LineBreak/>
      <section id='about'> <About/> </section>
      <LineBreak/>
      <section id='Contact'> <Contact/> </section>
      <Footer/>
     
     
     
     
     
    </div>
  )
}

export default App
