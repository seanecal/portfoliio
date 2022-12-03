import { Contact } from '../../components'
import './Cv.css'

export function Cv() {
  return (
    <div className='pf__cv'>
      <div className="container">
        <div className="pf__cv__left">
          <a href="#"><p>Download CV</p></a>
        </div>

      </div>
      <Contact />
      <div className="pf__cv__pdf">
        <iframe src="https://youtu.be/SAUIQHIqCVk" width="50%" height="500px"></iframe>
      </div>
    </div>
  )
}
