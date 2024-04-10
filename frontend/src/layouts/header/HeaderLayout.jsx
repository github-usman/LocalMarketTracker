import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar/Navbar.jsx";
import AllDepartments from "../../components/navbar/all-departments-btn/AllDepartments.jsx";
import SearchBox from "../../components/search/search-box/SearchBox.jsx";
import Logo from "../../components/common/logo/Logo.jsx";
import AuthLayout from "../../components/auth/AuthLayout.jsx";
import CitySearchBox from "../../components/search/search-by-city/CitySearchBox.jsx";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import styles from "./header.module.css";

const HeaderLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handHambureger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles['headerLayout-lg-device']}>
        <div className={styles['nav-section']}>
          <Logo />
          <Navbar />
          <AuthLayout />
        </div>
        <div className={styles['search-section']}>
          <AllDepartments />
          <SearchBox />
          <CitySearchBox></CitySearchBox>
        </div>
        <hr></hr>
      </div>
      <div className={styles['headerLayout-md-device']}>
        <div className={styles['nav-section']}>
          <Logo />
          <CitySearchBox></CitySearchBox>
          <AuthLayout />
        </div>
        <div className={styles['search-section']}>
          <Navbar />
          <SearchBox />
          <AllDepartments />
        </div>
      </div>
      <div className={styles['headerLayout-sm-device']}>
        <div className={styles['nav-section']}>
          <div className={styles['logo-sm-section']}>
            <Logo />
            {isOpen ? (
              <RxCross2 className={styles['hamburger']} onClick={handHambureger} />
            ) : (
              <RxHamburgerMenu className={styles['hamburger']} onClick={handHambureger} />
            )}
          </div>
          {isOpen && (
            <>
              <Navbar />
              <AuthLayout />
            </>
          )}
        </div>
        <div className={styles['search-section']}>
          <CitySearchBox></CitySearchBox>
          <SearchBox />
          <AllDepartments />
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default HeaderLayout;
