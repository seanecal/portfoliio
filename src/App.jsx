import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { About, Home, Projects, Cv } from './pages'
import { gsap } from 'gsap'

function App() {

  return (
    <>
      <div className="pf__content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>

      </div>
    </>
  )
}

export default App
