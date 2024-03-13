import React, { useEffect, useState } from "react";
import userLocationCordinates from "../../../utils/userLocationCordinates";
import findNearestCity from "../../../utils/nearestCity"
import "./dropwon-style.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { cityCoordinates } from "../../../assests/constants";
const city = Object.keys(cityCoordinates)

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const nearestCity = findNearestCity(.035527, 82.216540);

  // dropdown open and close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // get user location or city, ----> iff user allow using GPS then this will provide user current location or city
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const [latitude, longitude, success] = await userLocationCordinates();
        if (success === true && selectedOption === null) {
           const nearestCity = findNearestCity(latitude, longitude);
          setSelectedOption(nearestCity);
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };
    fetchUserLocation();
    return () => {
      setSelectedOption(null);
    };
    //eslint-disable-next-line
  }, []);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${isOpen ? "open" : ""} `}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="dropdown-header" onClick={toggleDropdown}>
              {/* icons or location and arrow */}
            <span className={`${isOpen ? "location-active" : ""}`}>
              <FaLocationDot />
            </span>
            <span style={{ color: selectedOption ? "black" : "grey" }}>
              {selectedOption || "Select Your City"}
            </span>
            <span className={`arrow ${isOpen ? "rotate" : ""}`}>
              <IoIosArrowDown />
            </span>
            </div>
                {isOpen && (
                  // manual city selection by user
                  <ul className="dropdown-list">
                    {city.sort((a, b) => a.localeCompare(b)).map((option, index) => (
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
