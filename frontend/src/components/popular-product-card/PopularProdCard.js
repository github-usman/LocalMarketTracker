import React from "react";
import "./popular-product-card.css";

const PopularProdCard = ({ details }) => {
  return (
    <div className="popular-product-card-container">
        <p className="popular-product-card-discountDeatils">{details.discountDeatils}</p>
        <div className="popular-product-card-img-container">
          <img className="popular-product-card-img" src={details.img} alt="chips" ></img>
        </div>
        <div className="popular-product-card-content-container">
        <p className="popular-product-card-category">{details.category}</p>
        <p className="popular-product-card-productName">{details.productName} </p>
        <p className="popular-product-card-rating">{details.rating}</p>
        </div>
        <div className="popular-product-card-btn-container">
          <p className="popular-product-card-price">{details.price}</p>
          <button className="popular-product-card-btn">Checkout</button>
        </div>
    </div>
  );
};

export default PopularProdCard;
