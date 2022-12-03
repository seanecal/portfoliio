import './contact.css'

const left_quote ="{"
const right_quote ="}"

export function Contact() {
  return(
    <div className="pf__contact">
      <div className="pf__contact__title">
        <p className="orange-txt">.contact<span className="orange-quote">{left_quote}</span></p>

        <p><span className="blue">for</span><span className="white">: </span ><span className="green">front-end</span><span className="white">;</span></p>

        <p><span className="blue">and</span><span className="white">: </span ><span className="green">full-stack</span><span className="white">;</span></p>

        <p><span className="orange-quote">{right_quote}</span></p>
      </div>

      <div className="pf__contact__link">
        <p className="line1"><span className="grey">Feel free to</span>
        <a href="#" target="__blank">
          <span className="link"><span className="firstletter">E</span>mail</span>
        </a>
        <span className="grey">me</span>
        </p>

        <p className="line2"><span className="grey">connect on</span>
        <a href="" target="__blank">
          <span className="link"><span className="firstletter">G</span>ithub</span>
        </a>
        </p>

        <p className="line3"><span className="grey">and</span>
        <a href="#" target="__blank">
          <span className="link"><span className="firstletter">L</span>inkedIn</span>
        </a>
        </p>
      </div>
    </div>
  )
}
