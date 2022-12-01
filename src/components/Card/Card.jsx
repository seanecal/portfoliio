import './card.css'
import name from '../../assets/name-sm.png'

export function Card() {
  return (
    <div className="pf__card">
      <div className="pf__card__header">
        <div className="pf__card__header__title">
          <a href="#" target="__blank">
           <h1>Channel3</h1>
          </a>
        </div>
        <div className="pf__card__header__text">
          <p className="pf__card__header__text__line1" style={{opacity: '1'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line2" style={{opacity: '0.9'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line3" style={{opacity: '0.8'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line4" style={{opacity: '0.7'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line5" style={{opacity: '0.6'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line6" style={{opacity: '0.5'}}>
            Line Content
          </p>
          <p className="pf__card__header__text__line7" style={{opacity: '0.4'}}>
            Line Content
          </p>
        </div>
      </div>
      <div className="pf__card__pic">
        <img src={name} alt="" />
      </div>
    </div>
  )
}
