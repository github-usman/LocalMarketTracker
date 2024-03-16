import React, { useMemo } from "react";
import styles from "./popularProductsLayout.module.css";
import PopularProdCard from "../../components/popular-product-card/PopularProdCard.jsx";
import shopperSampleData from "../../assests/static/shopperSampleData.js";



const PopularProductsLayout = () => {

  const allProducts = useMemo(()=>shopperSampleData.flatMap(store=>store.products),[shopperSampleData]) /// get all products nearest to the User from Shop of their respective city
  
  return (
    <div className={styles.container}>
      <h1>Popular Products</h1>
      <div className={styles.grid}>
        {allProducts.slice(0,8).map((prod, index) => (
          <PopularProdCard key={index} details={prod} />
        ))}
      </div>
    </div>
  );
};

export default PopularProductsLayout;
