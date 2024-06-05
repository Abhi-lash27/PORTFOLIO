import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Techno from './components/Techno'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certifications'
import Description from './components/Description'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <Description/>
        <About/>
        <Techno/>
        <Certifications/>
        <Experience/>
        <Projects/>
      </div>
      <Contact/>
    </div>
  )
}

export default App