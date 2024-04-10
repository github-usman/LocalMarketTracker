import React, { useState } from 'react'
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import MegaMenu from '../mega-menu/MegaMenu.jsx';
import { useDispatch } from 'react-redux';
import { search } from '../../../redux/reducers/searchBox.js';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };


  const dispatch = useDispatch();
  const addInputHadler = (e)=>{
    e.preventDefault()
    dispatch(search(''));
  }
  return (
    <div className={styles.container}>
      <div className={styles.navMenu}><Link className={styles.navMenuItem} onClick={addInputHadler} to={"/"}>Home</Link></div>
      <div className={styles.navMenu}><p className={styles.navMenuItem} >Shops  <IoIosArrowDown className={styles.navMenuIcon}/></p></div>
      <div className={styles.navMenu}> <p className={styles.navMenuItem} >Stores  <IoIosArrowDown className={styles.navMenuIcon}/></p></div>
      <div className={styles.navMenu}>
        <div className={styles.navMenuItem} onMouseEnter={handleHover} onMouseLeave={handleLeave} >Mega Menu  <IoIosArrowDown className={styles.navMenuIcon}/></div>
        <div className={styles.navMenuOption}>
        {showMenu && <MegaMenu onMouseEnter={handleHover} onMouseLeave={handleLeave} />}
        </div>
      </div>
      <div className={styles.navMenu}><p className={styles.navMenuItem} >Pages  <IoIosArrowDown className={styles.navMenuIcon}/></p></div>
     <div className={styles.navMenu}> <p className={styles.navMenuItem} >Fro Seller  <IoIosArrowDown className={styles.navMenuIcon}/></p></div>
     <div className={styles.navMenu}> <p className={styles.navMenuItem} >Account  <IoIosArrowDown className={styles.navMenuIcon}/></p></div>
    </div>
  )
}

export default Navbar