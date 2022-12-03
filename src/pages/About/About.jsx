import './about.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ru from '../../assets/ru.png'
import il from '../../assets/il.png'
import cat1 from '../../assets/cat1.png'
import cat2 from '../../assets/cat2.png'
import { Logo } from '../../components'

export function About() {
  return (
  <div className="pf__about">
    <Parallax className="pf__about__parallax" pages={4} ref={Parallax} horizontal>

      <ParallaxLayer className="introduction firstCn" sticky={{start: 0, end: 1}} speed={0.1}>
        <p>您好，我是<span className='marked'>曹森</span>。</p>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5} factor={1.2}>
        <div className="pf__about__parallax_gold_start" >

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

      <ParallaxLayer offset={3} speed={1}>
        <div className="pf__about__parallax_il">
          <ParallaxLayer offset={0} speed={0.1} >
            <img src={il} alt="Israeli Architecture"/>
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

    </Parallax>
  </div>
  )
}
