import React from 'react'
import styles from  "./footerLayout.module.css"
import FooterProductLinks from '../../components/footer/FooterProductLinks.jsx'
const FooterLayout = () => {
  
  return (
    <div className={styles.container}>
        <h2 style={{textAlign:"center",backgroundColor:"#f5f376"}}>! This project is Ongoing...Please try after some time -by Usman</h2>
        <FooterProductLinks></FooterProductLinks>
    </div>
  )   
}

export default FooterLayout