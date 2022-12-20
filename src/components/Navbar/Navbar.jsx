import { NavLink, useLocation } from 'react-router-dom'
import './navbar.css'
// import { MdOutlineArrowBackIosNew } from 'react-icons/md'

export function Navbar() {

  const location = useLocation()
  const sign = "<"

  return (
    <div className="pf__navbar section__padding">
      <div className="pf__nav-content">
        <div className="pf__nav-content__projects">
          {location.pathname==="/projects" ? (
          <>
            <NavLink to="/">
              {sign}
            </NavLink>
          </>)
          : (
          <>
            <NavLink to="/projects">
              Projects
            </NavLink>
          </>)}
        </div>
        <div className="pf__nav-content__about">
          {location.pathname==="/about" ? (
          <>
            <NavLink to="/">
              {sign}
            </NavLink>
          </>)
          : (
          <>
            <NavLink to="/about">
              About
            </NavLink>
          </>)}
        </div>
        <div className="pf__nav-content__cv">
          {location.pathname==="/cv" ? (
          <>
            <NavLink to="/">
              {sign}
            </NavLink>
          </>)
          : (
          <>
            <NavLink to="/cv">
              Links
            </NavLink>
          </>)}
        </div>
      </div>
    </div>
  )
}
