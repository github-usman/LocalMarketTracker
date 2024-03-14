import React from "react";
import web_log from "../../assests/images/logo.png";

import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logoImg}
        src={web_log}
        alt="shopping in you city log"
      />
      <h2 className={styles.logoName}>ShopinYourCity</h2>
    </div>
  );
};

export default Logo;
