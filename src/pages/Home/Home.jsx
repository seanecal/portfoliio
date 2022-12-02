import './home.css'
import name from '../../assets/name-lg.png'
import name_sm from '../../assets/name-sm.png'
import { useEffect, useRef, useState } from 'react'

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

  // let line1 = useRef(null)
  // let line2 = useRef(null)
  // let line3 = useRef(null)
  // let line4 = useRef(null)
  // let line5 = useRef(null)
  // let line6 = useRef(null)
  // let line7 = useRef(null)
  // let line8 = useRef(null)
  // let line9 = useRef(null)
  // let line10 = useRef(null)
  // let line11 = useRef(null)
  // let line12 = useRef(null)
  // let line13 = useRef(null)
  // let line14 = useRef(null)
  // let line15 = useRef(null)

  // useEffect(()=> {
  //   TweenMax.staggerFrom([line1, line2, line3, line4, line5,line6, line7, line8,line9,line10,line11,line12,line13,line14,line15], 5,{opacity: 0}, .2)
  // },[])

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
