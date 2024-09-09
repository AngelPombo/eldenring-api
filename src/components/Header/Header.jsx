import React from 'react'
import "../Header/Header.css"
import logo from "/eldenlogo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header-header'>
      <Link to='/'>
        <img className='header-logo' src={logo} />
      </Link>
    </header>
  )
}

export default Header
