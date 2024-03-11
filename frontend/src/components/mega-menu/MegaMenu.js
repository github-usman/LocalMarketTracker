import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <div style={{display:"flex"}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/dairy-bread-eggs">Dairy, Bread & Eggs</Link>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/dairy-bread-eggs">Dairy, Bread & Eggs</Link>
        <Link to="/snacks-munchies">Snacks & Munchies</Link>
        <Link to="/fruits-vegetables">Fruits & Vegetables</Link>
        <Link to="/cold-drinks-juices">Cold Drinks & Juices</Link>
        <Link to="/breakfast-instant-food">Breakfast & Instant Food</Link>
        <Link to="/bakery-biscuits">Bakery & Biscuits</Link>
        <Link to="/chicken-meat-fish">Chicken, Meat & Fish</Link>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <Link to="/dairy-bread-eggs">Dairy, Bread & Eggs</Link>
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
