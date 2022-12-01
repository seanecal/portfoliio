import { Card } from '../../components'
import './projects.css'
import { gsap } from 'gsap'
import Flip from 'gsap/Flip'

const cards = document.querySelectorAll('.pf__projects__card')
cards.forEach((card, index) => {
  card.addEventListener('click', ()=> {
    const state = Flip.getState(cards)
    const cardActive = card.classList.contains('active')

    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove('active')
      otherCard.classList.remove('inactive')
    })

    if(!cardActive) card.classList.add('active')
  })
})

export function Projects() {
  const left = "<"
  const right = ">"
  const left_finish = "</"
  return (
    <div className='pf__projects section__padding'>
      <div className="pf__projects__title">
        <span className="sign">{left}</span>
        <span className="span">span</span>
        <span className="sign">{right}</span>
        <span className="projects">Projects</span>
        <span className="sign">{left_finish}</span>
        <span className="span">span</span>
        <span className="sign">{right}</span>
      </div>
      <div className="pf__projects__notice">
        <p>*find more on my GitHub repo</p>
        <p>**watch me presenting SharedGoal <a href="#">[here]</a></p>
      </div>
      <div className="pf__projects__cards">
        <div className="pf__projects__card active">
          <Card />
        </div>
        <div className="pf__projects__card inactive">
          <Card />
        </div>
        <div className="pf__projects__card inactive">
          <Card />
        </div>
      </div>
    </div>
  )
}
