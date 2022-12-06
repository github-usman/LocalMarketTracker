import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "./contact";
import SellerRegi from "../components/sellerComponents/sellerRegi";
import SellerSign from "../components/sellerComponents/sellerSign";
import "./style/style.css";
import Search_bar from "./search_bar";
import All_department from "./all_department";
import Slide_page from "./slidePage";
import Footer from "./footer";
import Blog from "./blog";
import Carousels from "./carousels";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function Home() {
  return (
    
    <>
    <Search_bar/>
     
      <All_department/>
      {/* all departe category wise */}
   
       
        <>
      {/* main menu start from here */}
      <div className="wholeDropdown">
        <div class="dropdown ">
          <button
            className="dropbtn"
            className="btn   dropdown-toggle"
            // type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              Link 1
            </a>
            <a className="dropdown-item" href="#">
              Link 2
            </a>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </ul>
        </div>
        &nbsp; &nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shops{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              Shop 1
            </a>
            <a className="dropdown-item" href="#">
              Shop 2
            </a>
            <a className="dropdown-item" href="#">
              Shop 3
            </a>
          </ul>
        </div>
        &nbsp; &nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Stores{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              Stores 1
            </a>
            <a className="dropdown-item" href="#">
              Stores 2
            </a>
            <a className="dropdown-item" href="#">
              Stores 3
            </a>
          </ul>
        </div>
        &nbsp; &nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mega Menu{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              Mega menu 1
            </a>
            <a className="dropdown-item" href="#">
              Mega menu 2
            </a>
            <a className="dropdown-item" href="#">
              Mega menu 3
            </a>
          </ul>
        </div>
        &nbsp; &nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              Page 1
            </a>
            <a className="dropdown-item" href="#">
              Page 2
            </a>
            <a className="dropdown-item" href="#">
              Page 3
            </a>
          </ul>
        </div>
        &nbsp; &nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {/* <a href={"/Register_for_Seller.html"}>Registration for Seller</a> */}
            <Link className="dropdown-item" to="/sellerRegi">
              Seller Registration
            </Link>
            <Link className="dropdown-item" to="/sellerSign">
              Seller Login
            </Link>
            <Link className="dropdown-item" to="/contact">
              Contact
            </Link>
            <a className="dropdown-item" href={"/SignUp.html"}>
              Sign Up
            </a>
            <a className="dropdown-item" href="#">
              Account 3
            </a>
          </ul>
        </div>

        &nbsp;&nbsp;&nbsp;
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            For Seller{" "}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">
              sell to a Customer
            </a>
            <a className="dropdown-item" href="#">
              Page 2
            </a>
            <a className="dropdown-item" href="#">
              Page 3
            </a>
          </ul>
        </div>
       
        {/* <Outlet/> */}
      </div>
      </>
      <hr className="horiLine"/>
      <Carousels/>
      <Blog/>
      <hr/>
      <Footer/>
    </>
  );
}

export default Home;
