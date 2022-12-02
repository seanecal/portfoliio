import { Card } from '../../components'
import './projects.css'
import { useState, useRef, useEffect } from 'react'
import c3 from '../../assets/logo-c3.png'
import wf from '../../assets/logo-wf.png'
import sm from '../../assets/logo-sg.png'
import { Power3, gsap} from 'gsap'
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export function Projects() {
  const left = "<"
  const right = ">"
  const left_finish = "</"

  let textItem = useRef(null);
  let noticeItem = useRef(null);
  let cardItem = useRef(null);
  let aCard = useRef(null);
  let aCard2 = useRef(null);
  let aCard3 = useRef(null);

  useEffect(()=>{
    gsap.to(
      textItem,
      {
        duration: 0.5,
        opacity: 1,
        y:110,
        ease:Power3.easeOut
      }
    )
    gsap.to(
      noticeItem,
      {
        duration:2,
        opacity:1,
        delay:1,
        ease:Power3.easeOut
      }
    )
    gsap.to(
      cardItem,
      {
        duration: 4,
        opacity:1,
        y:20,
        delay: .5,
        ease:Power3.easeOut
      }
    )
  },[])

  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)


  const clearClass = () => {
    const cards = document.querySelectorAll('.pf__projects__card')
    cards.forEach((card) => {
      const needsClean = card.classList.contains('active')
      if (needsClean) card.classList.remove('active')
    })
  }

  const handelChange1 = () => {
    const state1 = Flip.getState(aCard)
    const state2 = Flip.getState(aCard2)
    const state3 = Flip.getState(aCard3)
    clearClass()
    setActive1(!active1)
    Flip.from(
      state1,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive2(false)
    Flip.from(
      state2,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive3(false)
    Flip.from(
      state3,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
  }
  const handelChange2 = () => {
    const state1 = Flip.getState(aCard)
    const state2 = Flip.getState(aCard2)
    const state3 = Flip.getState(aCard3)
    clearClass()
    setActive1(false)
    Flip.from(
      state1,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive2(!active2)
    Flip.from(
      state2,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive3(false)
    Flip.from(
      state3,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
  }
  const handelChange3 = () => {
    const state1 = Flip.getState(aCard)
    const state2 = Flip.getState(aCard2)
    const state3 = Flip.getState(aCard3)
    clearClass()
    setActive1(false)
    Flip.from(
      state1,
      {
        duration: 0.3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive2(false)
    Flip.from(
      state2,
      {
        duration: .3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
    setActive3(!active3)
    Flip.from(
      state3,
      {
        duration: .3,
        absolute: true,
        // absoluteOnLeave: true,
        // nested: true,
        // fade: true,
        ease: Power3.easeInOut,
        onComplete: ()=> {
          gsap.to('.pf__card__header', {css:{opacity:'1'}})
        }
      }
    )
  }

  return (
    <div className='pf__projects section__padding'>
      <div className="pf__projects__title" ref={el => {textItem = el}}>
        <span className="sign">{left}</span>
        <span className="span">span</span>
        <span className="sign">{right}</span>
        <span className="projects">Projects</span>
        <span className="sign">{left_finish}</span>
        <span className="span">span</span>
        <span className="sign">{right}</span>
      </div>
      <div className="pf__projects__notice" ref={el=>{
      noticeItem = el}}>
        <p>*find more on my <a href="#" target="__blank">[GitHub]</a> repo</p>
        <p>**watch me presenting SharedGoal <a href="#" target="__blank">[here]</a></p>
      </div>
      <div className="pf__projects__cards" ref={el=> {cardItem = el}}>
        <div ref={el=> {aCard=el}}className={`pf__projects__card ${active1 ? "active" : ""}`} onClick={handelChange1}>
          <Card cover={sm} title="SharedGoal" line1="#Built with Ruby on Rails" line2="#Le Wagon final project " line3="Description" line4="#Web App that brings togetherness to solo learning process" line5="#Find your new goal for self improvement" line6="#Create your own learning group according to your preferences" line7="#Find your buddies to share self-improvement progress"  />
        </div>
        <div ref={el=> {aCard2=el}} className={`pf__projects__card ${active2 ? "active" : ""}`} onClick={handelChange2}>
          <Card cover={wf} title="WishFund" line1="#Self initialized project" line2="#Project lauching page built with React" line3="For detailed information please check on lauching page" line4="Description" line5="#Decentralization" line6="#Full Democracy" line7="#Secured Finance"/>
        </div>
        <div ref={el=> {aCard3=el}} className={`pf__projects__card ${active3 ? "active" : ""}`} onClick={handelChange3}>
          <Card cover={c3} title="Channel3" line1="#Self initialized project" line2="#Project lauching page built with React" line3="For detailed information please check on lauching page" line4="Description" line5="#Truly unbaised news by the AI" line6="#Everyone is a journist in their own life" line7="#Changing the traditional news and social media"/>
        </div>
      </div>
    </div>
  )
}
