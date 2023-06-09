
import React, { Component, useState } from 'react'
import {CiUser} from "react-icons/ci"
import './NavbarStyles.css'



function Navbar() {



  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <h2>Logo</h2>
        </div>
        <ul className='"nav-menu'>
            <h1 className='nav-name'>EasyStream</h1>
        </ul>
        <div className='nav-profile'>
            <CiUser className = "icon"/>
        </div>

    </div>
  )
}

export default Navbar