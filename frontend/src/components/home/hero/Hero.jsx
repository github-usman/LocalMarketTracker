import React, { useEffect, useMemo, useState } from "react";
import styles from "./hero.module.css";
import { heroSectionDetails } from "../../../assets/static/constants"

const Hero = () => {
  const [randomVal, setRandomVal] = useState(0)
  const len = useMemo(() => heroSectionDetails.length, [])

  // random image after given interval
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomVal((prevRandomVal) => (prevRandomVal + 1) % len);
    }, 3000);

    return () => clearInterval(interval);
  }, [len]);


  return (
    <div className={styles.container} style={{ backgroundImage: `url(${heroSectionDetails[randomVal].img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
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
