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
       <div className="pf__home__colors-strip" style={{background: "var(--color-orange)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-grey-dark)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-green-dark)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-white)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-blue-dark)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-purple)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-grey-dev)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-green-light)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-blue-light)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-raddish)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-orange)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-grey-verydark)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-black)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-white)"}}/>
       <div className="pf__home__colors-strip" style={{background: "var(--color-gold)"}}/>
     </div>
    </div>
  )
}
