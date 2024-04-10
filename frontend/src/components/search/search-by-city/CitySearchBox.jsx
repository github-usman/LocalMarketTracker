import React from 'react';
import Dropdown from './drop-down/Dropdown.jsx';
import styles from './citySearch.module.css';

const CitySearchBox = () => {
  
  return (
    <div className={styles.container}>
        <Dropdown></Dropdown>
    </div>
  )
}

export default CitySearchBox