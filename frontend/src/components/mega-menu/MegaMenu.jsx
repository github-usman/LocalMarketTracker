import React from "react";
import { Link } from "react-router-dom";
import styles from "./megaMenu.module.css"

const MegaMenu = ({ onMouseEnter, onMouseLeave}) => {
  return (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.megaMenuList}>
        <p >Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={styles.megaMenuList}>
        <p>Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div className={styles.megaMenuList}>
        <p>Dairy, Bread & Eggs</p>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
    </div>
  );
};

export default MegaMenu;
