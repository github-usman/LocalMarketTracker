import React from "react";
import Navbar from "../components/navbar/Navbar";
import AllDepartments from "../components/all-departments/AllDepartments";
import "./header.css"
import SearchBox from "../components/search/SearchBox";
import Logo from "../components/logo/Logo.tsx";
import AuthLayout from "../components/auth/AuthLayout.js";

const Header = () => {
  return (
    <div>
      <div className="search-section">
        <Logo/>
        <SearchBox/>
        <AuthLayout/>
      </div>
      <div className="nav-section">
        <AllDepartments/>
        <Navbar />
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
