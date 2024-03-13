import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import AllDepartments from "../../components/all-departments/AllDepartments.js";
import "./header.css";
import SearchBox from "../../components/search/SearchBox.js";
import Logo from "../../components/logo/Logo";
import AuthLayout from "../../components/auth/AuthLayout.js";
import CitySearchBox from "../../components/search-by-city/CitySearchBox.js";

const HeaderLayout = () => {
  return (
    <div>
      <div className="search-section">
        <Logo />
        <Navbar />
        <AuthLayout />
      </div>
      <div className="nav-section">
        <AllDepartments />
        <SearchBox />
        <CitySearchBox></CitySearchBox>
      </div>
      <hr></hr>
    </div>
  );
};

export default HeaderLayout;
