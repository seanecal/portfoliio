import './logo.css'
// import { Parallax, useParallax } from 'react-scroll-parallax';
import blender from '../../assets/logos/blender.png'
import css from '../../assets/logos/css.png'
import figma from '../../assets/logos/figma.png'
import git from '../../assets/logos/git.png'
import github from '../../assets/logos/github.png'
import heroku from '../../assets/logos/heroku.png'
import html from '../../assets/logos/html.png'
import js from '../../assets/logos/js.png'
import rails from '../../assets/logos/rails.png'
import react from '../../assets/logos/react.png'
import ruby from '../../assets/logos/ruby.png'
import spline from '../../assets/logos/spline.png'
import sql from '../../assets/logos/sql.png'
import ts from '../../assets/logos/ts.png'
import cat3 from '../../assets/cat3.png'
import cat4 from '../../assets/cat4.png'

export function Logo() {
  // const parallax = useParallax<HTMLDivElement>({
  //   rotate: [10, 360],
  // });
  return(
    // <div ref={parallax.ref} className='spinner' id="js-logo">
    //   <img src={ruby} alt="ruby" />
    // </div>
    <>
      <div className="pf__logos__patch1">
        <div className="logos">
          <img src={ruby} alt="ruby" />
          <img src={rails} alt="rails" />
          <img src={sql} alt="sql" />
        </div>
      </div>

      <div className="pf__logos__patch2">
        <div className="logos2">
          <img src={js} alt="js" />
          <img src={ts} alt="ts" />
          <img src={react} alt="react" />
          <img src={html} alt="html" />
          <img src={css} alt="css" />
        </div>
      </div>

      <div className="pf__logos__patch3">
        <div className="logos3">
          <img src={git} alt="git" />
          <img src={github} alt="github" />
          <img src={heroku} alt="heroku" />
        </div>
      </div>


      <div className="pf__logos__patch4">
        <div className="logos4">
          <img src={spline} alt="spline" />
          <img src={figma} alt="figma" />
          <img src={blender} alt="blender" />
        </div>
      </div>

      <div className="pf__logos__cat3">
        <div className="cats">
          <img src={cat3} alt="cat3" />
          <img src={cat4} alt="cat4" />
        </div>
      </div>
    </>

  )
}
