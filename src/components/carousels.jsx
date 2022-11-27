import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style/style.css";
const carslide = () => {
  return (
    <>
      {/* here */}

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4500">
      <img src={require("./one.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src={require("./two.jpg")} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src={require("./three.jpg")} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      {/* to here */}
 
    </>
  );
};

export default carslide;
