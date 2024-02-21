import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
  
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to='/' href="#" className="nav-link" aria-current="page">Home</NavLink></li>
        <li className="nav-item"><NavLink to='/about' href="#" className="nav-link">About</NavLink></li>
        <li className="nav-item"><NavLink to='/contact' href="#" className="nav-link">Contact</NavLink></li>
       
      </ul>
    </header>
   
    


  )
}

export default Header