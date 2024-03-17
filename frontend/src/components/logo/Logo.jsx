import React from "react";
import web_log from "../../assests/media/logo.png";
import { useDispatch } from 'react-redux';
import { search } from '../../redux/reducers/searchBox';

import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
  const dispatch = useDispatch();
  const addInputHadler = (e)=>{
    e.preventDefault()
    dispatch(search(''));
  }
  return (
    <Link to={'/'} onClick={addInputHadler} className={styles.container}>
      <img
        className={styles.logoImg}
        src={web_log}
        alt="shopping in you city log"
      />
      <h2 className={styles.logoName}>ShopinYourCity</h2>
    </Link>
  );
};

export default Logo;
