import React from "react";
import { Outlet } from "react-router-dom";
// import Home from "./Home";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <div className="overAllpage">
      
      <Navbar />
      {/* <Home/> */}
      <Outlet />
    </div>
  );
};

export default Layout;
