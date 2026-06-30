import { useEffect } from 'react'
import Lenis from 'lenis'

import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Constellation from './components/Constellation'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import SectionWipe from './components/SectionWipe'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      className="relative overflow-x-hidden"
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <SectionWipe>
        <Work />
      </SectionWipe>
      <SectionWipe>
        <Constellation />
      </SectionWipe>
      <SectionWipe>
        <Services />
      </SectionWipe>
      <SectionWipe>
        <About />
      </SectionWipe>
      <Footer />
    </main>
  )
}

export default App