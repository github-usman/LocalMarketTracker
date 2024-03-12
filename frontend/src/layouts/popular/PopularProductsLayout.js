import React from "react";
import "./popularProductsLayout.css";
import PopularProdCard from "../../components/popular-product-card/PopularProdCard";
import chips from "../../assests/static/products/chips.jpg";

const productDetails = [
  {
    product_id: "1",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: chips,
  },
  {
    product_id: "2",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: "https://sabkooch.com/wp-content/uploads/2020/07/61ZDqyI15GL._SL1010_.jpg",
  },
  {
    product_id: "3",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: chips,
  },
  {
    product_id: "4",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: chips,
  },
  {
    product_id: "5",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: chips,
  },
  {
    product_id: "6",
    discountDeatils: "Sale",
    category: "Snack & Munchies",
    productName: "Haldiram's Sev Bhujia",
    rating: "4.5(149)",
    price: "$18 $24",
    img: chips,
  },
];
const PopularProductsLayout = () => {
  return (
    <div className="popular-product-layouts-section">
      <h1>Popular Products</h1>
      <div className="popular-product-layouts-grid">
        {productDetails.map((e) => {
          return (
            <div key={e.product_id}>
              <PopularProdCard details={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProductsLayout;
