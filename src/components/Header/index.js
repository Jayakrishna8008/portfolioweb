import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header=()=>(
    <nav className='navbar'>
        <h3 className='logo'>Portfolio.</h3>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem' to='/'>Home</Link>
            <Link className='desktopMenuListItem' to='/about'>About</Link>
            <Link className='desktopMenuListItem' to='/portfolio'>Projects</Link>
            <Link className='desktopMenuListItem' to='/contact'>Contact</Link>
        </div>
    </nav>
    
)

export default Header


// activeClass='active' spy={true} offset={-100} duration={500}