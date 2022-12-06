import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

function Navbar() {
  return (
    <div>
  
      <Link to="/" className="button">
      
      <img className="cartImage" src={require('./cart_logo.png') } alt="cart_Image" />
      &nbsp;
      <h1 className="stock">StockNearYou</h1>
      
      </Link>
      
      <div className="navbar_cnt_about">
      <Link className="buttonContact " to="/contact"> Contact Us </Link>
      <Link className="buttonAboutme" to="/about"> About Me </Link>
      </div>
    </div>
  );
}

export default Navbar;
