import React from 'react'
import HeaderLayout from '../../layouts/header/HeaderLayout.jsx'
import HeroLayout from '../../layouts/hero/HeroLayout.jsx'
import PopularProductsLayout from '../../layouts/popular/PopularProductsLayout.jsx'
import styles from  "./HomePage.module.css"
import FooterLayout from '../../layouts/footer/FooterLayout.jsx'


const HomePage = () => {
  return (
    <div className={styles['home-section']}>
      <HeaderLayout></HeaderLayout>
      <HeroLayout></HeroLayout>
      <PopularProductsLayout></PopularProductsLayout>
      <FooterLayout></FooterLayout>
    </div>
  )
}

export default HomePage