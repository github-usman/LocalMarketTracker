import React from "react";
import dairy from "../../assests/images/dairy.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img
          className="hero-img"
          src={dairy}
          alt="grocery details, product details"
        />
        <div className="hero-img-content">
          <p className="hero-discount">Opening Sale Discount 10%</p>
          <h1>Dairy Shop For Fresh Milk</h1>
          <p className="hero-img-content-para">
            Introduced a new model for online Check for product availablity near
            in your city for your convenient and less price ₹
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
