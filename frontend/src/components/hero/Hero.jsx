import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import{heroSectionDetails} from "../../assests/constants"

const Hero = () => {
  const [randomVal,setRandomVal] = useState(0)


  // random image after given interval
  useEffect(() => {
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * heroSectionDetails.length);
        setRandomVal(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
}, []);


  return (
    <div className={styles.container} style={{backgroundImage: `url(${heroSectionDetails[randomVal].img})`}}> 
      <div className={styles.imgContent}>
        <p className={styles.discount}>Opening Sale Discount 10%</p>
        <h1>{heroSectionDetails[randomVal].title}</h1>
        <p className={styles.imgContentPara}>
          Introduced a new model for online Check for product availablity near
          in your city for your convenient and less price ₹
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
