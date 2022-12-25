import React from 'react'
import Logo from './Logo'
import Navbar_list from './Navbar_list'
import './navbar.css'   

function Navbar() {
  return (
    <>
      <nav>
        <Logo />
        <Navbar_list />
      </nav>
    </>
  )
}

export default Navbar