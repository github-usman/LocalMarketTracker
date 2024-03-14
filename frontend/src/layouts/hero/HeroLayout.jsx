import React from 'react'
import Hero from '../../components/hero/Hero.jsx'
import styles from "./heroLayout.module.css"

const HeroLayout = () => {
  return (
    <div className={styles.conainter}>
      <Hero/>
    </div>
  )
}

export default HeroLayout