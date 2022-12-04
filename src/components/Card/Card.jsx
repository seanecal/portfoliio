import './card.css'

export function Card({cover, title, line1, line2, line3, line4, line5, line6, line7, pic, href}) {
  return (
    <div className="pf__card">
      <div className="overlay"></div>
      <video src={pic} autoPlay loop muted></video>
      <div className="pf__card__cover">
        <img src={cover} alt="" />
      </div>
      <div className="pf__card__header">
        <div className="pf__card__header__title">
          <a href={href} target="__blank">
           <h1>{title}</h1>
          </a>
        </div>
        <div className="pf__card__header__text">
          <p className="pf__card__header__text__line1" style={{opacity: '1'}}>
            {line1}
          </p>
          <p className="pf__card__header__text__line2" style={{opacity: '0.9'}}>
            {line2}
          </p>
          <p className="pf__card__header__text__line3" style={{opacity: '0.8'}}>
            {line3}
          </p>
          <p className="pf__card__header__text__line4" style={{opacity: '0.7'}}>
            {line4}
          </p>
          <p className="pf__card__header__text__line5" style={{opacity: '0.6'}}>
            {line5}
          </p>
          <p className="pf__card__header__text__line6" style={{opacity: '0.5'}}>
            {line6}
          </p>
          <p className="pf__card__header__text__line7" style={{opacity: '0.4'}}>
            {line7}
          </p>
        </div>
      </div>
    </div>
  )
}
