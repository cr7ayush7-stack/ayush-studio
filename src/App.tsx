import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Constellation from './components/Constellation'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <main
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      className="relative overflow-x-hidden"
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Constellation />
      <Services />
      <About />
      <Footer />
    </main>
  )
}

export default App