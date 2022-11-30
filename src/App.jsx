import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { About, Home, Projects } from './pages'

function App() {

  return (
    <>
      <div className="pf__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Navbar />
    </>
  )
}

export default App
