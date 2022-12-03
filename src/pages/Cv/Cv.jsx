import { Contact } from '../../components'
import './Cv.css'
import CV from '../../CV.pdf'

export function Cv() {

  return (
    <div className='pf__cv'>
      <Contact />
      <div className="pf__cv__pdf">
        <iframe src={CV} width="100%" height="100%"></iframe>
      </div>
    </div>
  )
}
