import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Carousels from "./carousels";
import "./style/style.css";

const About = () => {
  return (
    <>
      <p>
        This website is Made by Usman Ali Ansari Using React. At this website
        you can check any type of commody availability near you where distance
        and price also provide. Any type of web problem you can mail me
        123@gmail.com.
      </p>

      <p className="blockquote-footer">
        Usman Ali Ansari ❤️<cite title="Source Title"> with Love.</cite>
      </p>

      {/* <img
        className="usmanPhoto"
        
        alt="Usman"
        width="120"
        height="150"
      /> */}

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img className="usmanPhoto" src={require("./Usman.jpg")}  alt="Usman"
        width="230"
        height="300"/>
    </div>
    <div class="flip-card-back">
    <br/> <br/> <br/> 
      <h1>Usman Ali Ansari</h1> 
      <p>Software Engineer</p> 
      <p>currently pursuing B.tech</p>
    </div>
  </div>
</div>
         </>
  );
};

export default About;
