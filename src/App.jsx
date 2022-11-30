import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, Projects } from './pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
