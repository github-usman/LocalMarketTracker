import React from 'react'
import "./popular-product-card.css";

const PopularProdCard = ({details}) => {

  return (
    <div className='popular-product-card-container'>
        <div>
       <p>{details.discountDeatils}</p>
       <p>{details.category}</p>
       <p>{details.productName}</p>
       <p>{details.rating}</p>
       <p>{details.price}</p>
       </div>
    </div>
  )
}

export default PopularProdCard