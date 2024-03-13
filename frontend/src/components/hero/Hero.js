import React, { useEffect, useState } from "react";
import "./hero.css";
import{heroSectionDetails} from "../../assests/constants"

const Hero = () => {
  const [randomVal,setRandomVal] = useState(0)


  // random image after given interval
  useEffect(() => {
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * heroSectionDetails.length);
        setRandomVal(randomIndex);
    }, 2500);

    return () => clearInterval(interval);
}, []);


  return (
    <div className="hero-container" style={{backgroundImage: `url(${heroSectionDetails[randomVal].img})`}}> 
      <div className="hero-img-content">
        <p className="hero-discount">Opening Sale Discount 10%</p>
        <h1>{heroSectionDetails[randomVal].title}</h1>
        <p className="hero-img-content-para">
          Introduced a new model for online Check for product availablity near
          in your city for your convenient and less price ₹
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
