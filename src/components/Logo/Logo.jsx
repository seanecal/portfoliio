import './logo.css'
import { Parallax, useParallax } from 'react-scroll-parallax';
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

window.onscroll = function() {
  var theta = document.documentElement.scroll / 50 % Math.PI;

document.getElementById('js-logo').style.transform ='rotate(' + theta + 'rad)';
}

export function Logo() {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [10, 360],
  });
  return(
    <div ref={parallax.ref} className='spinner' id="js-logo">
      😃
      <img src={ruby} alt="ruby" />
    </div>
  )
}
