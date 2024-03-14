import React, { useState } from 'react'
import styles from "./search.module.css";
import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  const [value, setValue] = useState("")
  return (
    <div className={styles.container}>
        <input type='text' value={value} className={styles.inputBtn} placeholder='Search for products' onChange={e=>setValue(e.target.value)} /> 
        <button className={styles.searchBtn}><GoSearch className={styles.searchIncon}/></button>
    </div>
  )
}

export default SearchBox