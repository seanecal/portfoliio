import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { About, Home, Projects, Cv } from './pages'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <ParallaxProvider>
      <div className="pf__content">
        <Navbar />
        <AnimatePresence wait initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ParallaxProvider>
  )
}

export default App
