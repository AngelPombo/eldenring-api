import React from 'react'
import { Link } from 'react-router-dom'
import "../HomePage/HomePage.css"

function HomePage() {
  return (
    <section className='homepage-section'>
        <div className='homepage-div'>
            <Link to='/weapons'>
                <button className='homepage-btn'>Weapons</button>
            </Link>
            <Link to='/talismans'>
                <button className='homepage-btn'>Talismans</button>
            </Link>
        </div>
    </section>
  )
}

export default HomePage
