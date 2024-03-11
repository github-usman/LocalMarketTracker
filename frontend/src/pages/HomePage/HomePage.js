import React from 'react'
import HeaderLayout from '../../layouts/header/HeaderLayout'
import HeroLayout from '../../layouts/hero/HeroLayout'
import PopularProductsLayout from '../../layouts/popular/PopularProductsLayout'

const HomePage = () => {
  return (
    <div>
      <HeaderLayout></HeaderLayout>
      <HeroLayout></HeroLayout>
      <PopularProductsLayout></PopularProductsLayout>
    </div>
  )
}

export default HomePage