
import "./navbar.css"
import React from 'react'


function navbar() {
  return (
    <div className="navbar"><span className="heading">Cadburry🍫</span>
    <div className="navabr-links">
        <a href="/"className="navbar-link">Home</a>
        <a href="/about" className="navbar-link">About</a>
        <a href="/contact" className="navbar-link">Contact</a>
    </div>
    </div>
  )
}

export default navbar