import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import AllDepartments from "../../components/all-departments/AllDepartments.js";
import "./header.css";
import SearchBox from "../../components/search/SearchBox.js";
import Logo from "../../components/logo/Logo";
import AuthLayout from "../../components/auth/AuthLayout.js";
import CitySearchBox from "../../components/search-by-city/CitySearchBox.js";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handHambureger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="headerLayout-lg-device">
        <div className="nav-section">
          <Logo />
          <Navbar />
          <AuthLayout />
        </div>
        <div className="search-section">
          <AllDepartments />
          <SearchBox />
          <CitySearchBox></CitySearchBox>
        </div>
        <hr></hr>
      </div>
      <div className="headerLayout-md-device">
        <div className="nav-section">
          <Logo />
          <AllDepartments />
          <AuthLayout />
        </div>
        <div className="search-section">
          <Navbar />
          <SearchBox />
          <CitySearchBox></CitySearchBox>
        </div>
      </div>
      <div className="headerLayout-sm-device">
        <div className="nav-section">
          <div className="logo-sm-section">
            <Logo />
            {isOpen ? (
              <RxCross2 className="hamburger" onClick={handHambureger} />
            ) : (
              <RxHamburgerMenu className="hamburger" onClick={handHambureger} />
            )}
          </div>
          {isOpen && (
            <>
              <Navbar />
              <AuthLayout />
            </>
          )}
        </div>
        <div className="search-section">
          <AllDepartments />
          <SearchBox />
          <CitySearchBox></CitySearchBox>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default HeaderLayout;
