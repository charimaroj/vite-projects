import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
    
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <NavLink to="" className="nav-link " aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className="nav-link" aria-current="page" >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact" className="nav-link" aria-current="page" >Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="user" className="nav-link" aria-current="page" >User</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="git" className="nav-link" aria-current="page" >GitHub</NavLink>
          </li>
         
        </ul>
      
      </div>
    </div>
  </nav>
    </header>
  )
}

export default Header