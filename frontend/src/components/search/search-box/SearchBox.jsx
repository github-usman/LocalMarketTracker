import React, { useState } from 'react'
import styles from "./search.module.css";
import { GoSearch } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { search } from '../../../redux/reducers/searchBox';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addInputHadler = (e) => {
    e.preventDefault()
    dispatch(search(input));
    setInput('');
  }
  return (
    <>
      <form onSubmit={addInputHadler} className={styles.container}>
        <input type='text' value={input} className={styles.inputBtn} placeholder='Search for products' onChange={e => setInput(e.target.value)} required />
        <button type='submit' className={styles.searchBtn} onClick={addInputHadler}><GoSearch className={styles.searchIncon} /></button>
      </form>
    </>
  )
}

export default SearchBox