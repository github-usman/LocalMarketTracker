import React from "react";
import { FaUserShield } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import './authlayout.css'

const AuthLayout = () => {
  return (
    <div className="auth-container">
      <FaUserShield />
      <IoBagHandleSharp />
      <FaHeart />
    </div>
  );
};

export default AuthLayout;
