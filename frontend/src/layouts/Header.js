import React from "react";
import Navbar from "../components/navbar/Navbar";
import AllDepartments from "../components/all-departments/AllDepartments";
import "./header.css"
const Header = () => {
  return (
    <div>
      <div className="nav-section">
        <AllDepartments/>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
