import './home.css'
import name from '../../assets/name-lg.png'
import name_sm from '../../assets/name-sm.png'
import { useEffect, useState } from 'react'

function WindowSize() {
  const [screen, setScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return window.removeEventListener("resize", handleResize)
  },[screen])
  return screen
}

export function Home() {

  const theWidth = WindowSize()

  function setPic() {
    if (theWidth > 550) {
      return <img src = {name} alt="Sen Cao" />
    } else {
      return <img src = {name_sm} alt="Sen Cao" />
    }
  }

  return (
    <div className="pf__home">
      <div className="pf__home__name">
        {setPic()}
     </div>
     <div className="pf__home__colors">
     </div>
    </div>
  )
}
