import React from "react";
import Navbar from "../../components/navbar/Navbar.js";
import AllDepartments from "../../components/all-departments/AllDepartments.js";
import "./header.css"
import SearchBox from "../../components/search/SearchBox.js";
import Logo from "../../components/logo/Logo";
import AuthLayout from "../../components/auth/AuthLayout.js";

const HeaderLayout = () => {
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

export default HeaderLayout;
