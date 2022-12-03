import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { About, Home, Projects, Cv } from './pages'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <ParallaxProvider>
      <div className="pf__content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>

      </div>
    </ParallaxProvider>
  )
}

export default App
