import { Contact } from '../../components'
import './Cv.css'
import CV from '../../CV.pdf'
import { Power3, gsap} from 'gsap'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function Cv() {

  let pageContent = useRef(null)

  useEffect(()=> {
    gsap.to(
      pageContent, {
        duration: 0.8,
        opacity: 1,
        scale: 1,
        ease:Power3.easeIn
      }
    )
  },[])

  return (
    <motion.div
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{duration: 0.3,}}
    variants={{
      initialState: {
        opacity: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      },
      animateState: {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      },
      exitState: {
        opacity: 0,
        clipPath: "polygon(100% 0, 100% 7%, 7% 100%, 0 100%)"
      }
    }}>
      <div className='pf__cv' ref={el => {pageContent=el}}>
        {/* <div className="pf__cv__pdf">
          <iframe src={CV} width="100%" height="100%"></iframe>
        </div> */}
        <div className="bg" >
          {/* <div className="pf__cv__button">
            <a href={CV}><p>Download CV</p></a>
          </div> */}
          <Contact className="contact"/>
        </div>
      </div>
    </motion.div>

  )
}
