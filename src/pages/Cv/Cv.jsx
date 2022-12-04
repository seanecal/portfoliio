import { Contact } from '../../components'
import './Cv.css'
import CV from '../../CV.pdf'
import { Power3, gsap} from 'gsap'
import { useEffect, useRef } from 'react'

export function Cv() {

  let pageContent = useRef(null)

  useEffect(()=> {
    gsap.to(
      pageContent, {
        duration: 1,
        opacity: 1,
        y: 30,
        ease:Power3.easeIn
      }
    )
  },[])

  return (
    <div className='pf__cv' ref={el => {pageContent=el}}>
      <div className="pf__cv__pdf">
        <iframe src={CV} width="100%" height="100%"></iframe>
      </div>
      <div className="pf__cv__button">
        <a href={CV}><p>Download CV</p></a>
      </div>
      <Contact />
    </div>
  )
}
