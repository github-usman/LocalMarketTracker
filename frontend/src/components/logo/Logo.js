import React from 'react'
import web_log from "../../assests/images/logo.png"
import "./logo.css"
const Logo = () => {
  return (
    <div className='logo-container'><img className="logo-container-img" src={web_log} alt="shopping in you city log" /><h2 className='logo-name'>ShopinYourCity</h2></div>
  )
}

export default Logo;