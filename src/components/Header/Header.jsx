import React from 'react'
import "../Header/Header.css"
import logo from "/eldenlogo.png"

function Header() {
  return (
    <header className='header-header'>
      <img className='header-logo' src={logo} />
    </header>
  )
}

export default Header
