import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link className={`nav-menu`} to={"/"}>Home <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Shops  <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Stores  <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Mega Menu  <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Pages  <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Fro Seller  <IoIosArrowDown className='nav-menu-icon'/></Link>
      <Link className={`nav-menu`} to={"/"}>Account  <IoIosArrowDown className='nav-menu-icon'/></Link>
    </div>
  )
}

export default Navbar