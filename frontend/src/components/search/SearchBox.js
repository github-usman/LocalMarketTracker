import React, { useState } from 'react'
import "./search.css";
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  const [value, setValue] = useState("")
  return (
    <div className='search-container'>
        <input type='text' value={value} className='input-btn' placeholder='Search for products' onChange={e=>setValue(e.target.value)} /> 
        <button className='search-btn'><CiSearch className='search-icon'/></button>
    </div>
  )
}

export default SearchBox