import React from "react";
import styles from "./popularProductsLayout.module.css";
import PopularProdCard from "../../components/popular-product-card/PopularProdCard.jsx";
import { productDetails } from "../../assests/constants";

const PopularProductsLayout = () => {

  
  return (
    <div className={styles.container}>
      <h1>Popular Products</h1>
      <div className={styles.grid}>
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
