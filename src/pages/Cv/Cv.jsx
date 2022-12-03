import { Contact } from '../../components'
import './Cv.css'

export function Cv() {
  return (
    <div>
      <div className="pf__cv__left">
        <a href="#"><p>Download CV</p></a>
      </div>
      <Contact />
      <div className="pf__cv__pdf">
        <iframe src="#" width="100%" height="500px"></iframe>
      </div>
    </div>
  )
}
