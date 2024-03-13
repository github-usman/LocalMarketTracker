import React from 'react'
import "./footerlayout.css"
import FooterProductLinks from '../../components/footer/FooterProductLinks'
const FooterLayout = () => {
  return (
    <div className='footer-layout-container'>
        <h2 style={{textAlign:"center",backgroundColor:"#e2d348"}}>! This project is Ongoing...Please try after some time -by Usman</h2>
        <FooterProductLinks></FooterProductLinks>
    </div>
  )   
}

export default FooterLayout