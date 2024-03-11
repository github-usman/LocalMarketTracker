import React, { useState } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import MegaMenu from '../mega-menu/MegaMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };
  return (
    <div className='nav-container'>
      <div className='nav-menu'><Link className={`nav-menu-item`} to={"/"}>Home</Link></div>
      <div className='nav-menu'><p className={`nav-menu-item`} >Shops  <IoIosArrowDown className='nav-menu-icon'/></p></div>
     <div className='nav-menu'> <p className={`nav-menu-item`} >Stores  <IoIosArrowDown className='nav-menu-icon'/></p></div>
      <div className='nav-menu'>
      <div className={`nav-menu-item`} onMouseEnter={handleHover} onMouseLeave={handleLeave} >Mega Menu  <IoIosArrowDown className='nav-menu-icon'/></div>
      <div className='nav-menu-option'>
      {showMenu && <MegaMenu onMouseEnter={handleHover} onMouseLeave={handleLeave} />}
      </div>
      </div>
      <div className='nav-menu'><p className={`nav-menu-item`} >Pages  <IoIosArrowDown className='nav-menu-icon'/></p></div>
     <div className='nav-menu'> <p className={`nav-menu-item`} >Fro Seller  <IoIosArrowDown className='nav-menu-icon'/></p></div>
     <div className='nav-menu'> <p className={`nav-menu-item`} >Account  <IoIosArrowDown className='nav-menu-icon'/></p></div>
    </div>
  )
}

export default Navbar