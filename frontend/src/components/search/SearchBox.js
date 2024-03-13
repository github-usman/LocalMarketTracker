import React, { useState } from 'react'
import "./search.css";
import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  const [value, setValue] = useState("")
  return (
    <div className='search-container'>
        <input type='text' value={value} className='input-btn' placeholder='Search for products' onChange={e=>setValue(e.target.value)} /> 
        <button className='search-btn'><GoSearch className='search-icon'/></button>
    </div>
  )
}

export default SearchBox