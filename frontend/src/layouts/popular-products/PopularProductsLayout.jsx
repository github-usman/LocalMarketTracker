import React, { useMemo, useState } from "react";
import styles from "./popularProductsLayout.module.css";
import PopularProdCard from "../../components/popular-product-card/PopularProdCard.jsx";
import shopperSampleData from "../../assests/static/shopperSampleData.js";
import Pagination from "../../components/pagination/Pagination.jsx";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 8;

const PopularProductsLayout = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const allProducts = useMemo(()=>shopperSampleData.flatMap(store=>store.products),[shopperSampleData]) /// get all products nearest to the User from Shop of their respective city
  
   
  // Calculate the start and end index of products for the current page
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const endIndex = startIndex + ITEMS_PER_PAGE;

     // Array of products for the current page

   
  // reducers values
  const searchValue =  useSelector(state=>state.search);
  console.log(allProducts, "productNames list");
  const filteredProducts = allProducts.filter(prod => {
    // Check if searchValue is a string before calling toLowerCase()
      return prod.productName.toLowerCase().includes(searchValue.products.toLowerCase());
  });
  
  const productsForPage = filteredProducts.slice(startIndex, endIndex);
  const totalPage = useMemo(()=> Math.ceil(filteredProducts.length/ITEMS_PER_PAGE),[filteredProducts]); 

  return (
    <div className={styles.container}>
      <h1>Popular Products</h1>
      <div className={styles.grid}>
        {productsForPage.map((prod, index) => (
          <PopularProdCard key={index} details={prod} />
        ))}
      </div>
      {/* pagination control */}
      <div className={styles.pagination}>
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPage}></Pagination>
      </div>
    </div>
  );
};

export default PopularProductsLayout;
