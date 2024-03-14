import React from "react";
import styles from  "./popularProductCard.module.css";

const PopularProdCard = ({ details }) => {
  return (
    <div className={styles.container}>
        <p className={styles.cardDiscountDeatils}>{details.discountDeatils}</p>
        <div className={styles.cardImgContainer}>
          <img className={styles.cardImg} src={details.img} alt="chips" ></img>
        </div>
        <div className={styles.cardContentContainer}>
        <p className={styles.cardCategory}>{details.category}</p>
        <p className={styles.cardProductName}>{details.productName} </p>
        <p className={styles.productRaing}>{details.rating}</p>
        </div>
        <div className={styles.cardBtnContainer}>
          <p className={styles.productPrice}>{details.price}</p>
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
    </div>
  );
};

export default PopularProdCard;
