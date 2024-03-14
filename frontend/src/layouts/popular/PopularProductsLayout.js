import React from "react";
import "./popularProductsLayout.css";
import PopularProdCard from "../../components/popular-product-card/PopularProdCard";
import { productDetails } from "../../assests/constants";

const PopularProductsLayout = () => {

  
  return (
    <div className="popular-product-layouts-section">
      <h1>Popular Products</h1>
      <div className="popular-product-layouts-grid">
        {productDetails.map((e) => {
          return (
            <div key={e.product_id}>
              <PopularProdCard details={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProductsLayout;
