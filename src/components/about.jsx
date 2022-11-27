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

      <img
        className="usmanPhoto"
        src={require("./Usman.jpg")}
        alt="Usman"
        width="120"
        height="150"
      />
         </>
  );
};

export default About;
