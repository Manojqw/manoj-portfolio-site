import React from 'react';
import './navbar.css';
import logo from '../../image/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">HOME</Link> 
          <Link className="desktopMenuListItem">WORK</Link> 
          <Link className="desktopMenuListItem">ABOUT</Link> 
            
        </div>

    </nav>
  )
}

export default Navbar