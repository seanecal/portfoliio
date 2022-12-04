import './about.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ru from '../../assets/ru.png'
import il from '../../assets/il.png'
import cat1 from '../../assets/cat1.png'
import cat2 from '../../assets/cat2.png'
import cat5 from '../../assets/cat5.png'
import cat6 from '../../assets/cat6.png'
import cat7 from '../../assets/cat7.png'
import circle from '../../assets/circle.png'
import ball from '../../assets/whiteball.png'
import main from '../../assets/main.png'
import { Logo, Contact } from '../../components'
import { useEffect, useRef } from 'react'
import { Power3, gsap} from 'gsap'

export function About() {

  let aboutContent =useRef(null)

  useEffect(()=>{
    gsap.to(
      aboutContent,
      {
        duration: 2,
        opacity:1,
        ease:Power3.easeOut
      }
    )
  },[])

  return (
  <div className="pf__about" ref={el => {aboutContent=el}}>
    <Parallax className="pf__about__parallax" pages={5} ref={Parallax} horizontal>

      <ParallaxLayer className="introduction firstCn" sticky={{start: 0, end: 1}} speed={0.1}>
        <p>您好，我是<span className='marked'>曹森</span>。</p>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} factor={1.2}>
        <div className="pf__about__parallax_gold_start" >
          <ParallaxLayer offset={0} speed={0}>
            <div className="main">
              <img src={main} alt="" />
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} factor={1.7} speed={-0.4}>
        <div className="pf__about__parallax_grey" >
          <ParallaxLayer offset={0} speed={1.5}>
            <div className="cat1">
              <img src={cat1} alt="cat1" />
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <div className="pf__about__parallax_white">
          <ParallaxLayer offset={0} speed={1.2}>
              <div className="cat2">
                <img src={cat2} alt="cat2" />
              </div>
            </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.3}>
        <div className="pf__about__parallax_rus">
          <ParallaxLayer offset={0} speed={0.1} >
            <img src={ru} alt="Russian Architecture"/>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.7}>
        <div className="pf__about__parallax_il">
          <ParallaxLayer offset={0} speed={0.1} >
            <img src={il} alt="Israeli Architecture"/>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5}>
        <div className="pf__about__parallax_white_final">
          <ParallaxLayer offset={0} speed={0}>
            <div className="cat5">
              <img src={cat5} alt="cat5" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="circle">
              <img src={circle} alt="circle" />
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0}>
        <div className="whiteball">
          <ParallaxLayer offset={0} speed={0.1} >
            <img src={ball} alt="White ball"/>
          </ParallaxLayer>
        </div>

        <div className="cat6">
          <ParallaxLayer offset={0} speed={0.1} >
            <img src={cat6} alt="cat6" className='cat6'/>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <div className="pf__about__parallax_intro introduction">
          <p>Hello, I am <span className='marked'>Sen</span>.</p>
          <p>&lrm; היי, אני <span className='marked'>סן</span></p>
          <p>Привет! Меня зовут <span className='marked'>Сэнь</span>))</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.8} speed={-0.1}>
        <Logo />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1}>
        <div className="pf__about__parallax_intro_second introduction">
          <p>我做网络开发，</p>
          <p>I am a Web Developer,</p>
          <p>graduated from <span className='marked'>Le Wagon</span> Full Stack Web Dev course in 2022.</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0}>
        <div className="pf__about__parallax_intro_third introduction" style={{marginTop: "6rem"}}>
          <p>У меня русское имя <span className='marked'>Андрей</span>, </p>
          <p>я из Маньчжурии, изучал русистику и философию в университетaх.</p>
          <p>&lrm; הגעתי לארץ ב-2017 ולמדתי עברית כאן</p>
          <p>&lrm; עבדתי בסטארט-אפים פה</p>
          <p>&lrm; ומאוד מקווה שאוכל להביא עוד טובים לעולם</p>
          <p>You could also call me my Russian name <span className='marked'>Andrei</span>.</p>
          <p>I came to Israel in 2017.</p>
          <p>Feel free to drop me a line!</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={4}>
        <div className="pf__about__contact">
          <div className="pf__about_contact__easteregg">
            <div className="pf__about_contact__easteregg__text">
              <p>By the way---</p>
              <p>Without checking again</p>
              <h3>Did you find all 7 cats?</h3>
            </div>
            <img src={cat7} alt="cat7" />
          </div>
          <Contact />
        </div>
      </ParallaxLayer>

    </Parallax>
  </div>
  )
}
