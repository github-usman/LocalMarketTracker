import React, { useState } from "react";
import "./dropwon-style.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { city } from "../../../assests/constants";

const Dropdown = () => {
  const dropSize = "13rem";
  const selectText = "Select Your City";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${isOpen ? "open" : ""} `}
        style={{ width: dropSize }}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span className={`${isOpen ? "location-active" : ""}`}>
            <FaLocationDot />
          </span>
          <span style={{ color: selectedOption ? "black" : "grey" }}>
            {selectedOption || selectText}
          </span>
          <span className={`arrow ${isOpen ? "rotate" : ""}`}>
            <IoIosArrowDown />
          </span>
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {city.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
