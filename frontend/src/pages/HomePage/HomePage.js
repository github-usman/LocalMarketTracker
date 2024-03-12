import React from 'react'
import HeaderLayout from '../../layouts/header/HeaderLayout'
import HeroLayout from '../../layouts/hero/HeroLayout'
import PopularProductsLayout from '../../layouts/popular/PopularProductsLayout'
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className='home-section'>
      <HeaderLayout></HeaderLayout>
      <HeroLayout></HeroLayout>
      <PopularProductsLayout></PopularProductsLayout>
    </div>
  )
}

export default HomePage