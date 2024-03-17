import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import PageNotFound from "../components/error/PageNotFound.jsx"
import ProductDetails from "../components/prodcut-Details/ProductDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "product-details",
    element: <ProductDetails></ProductDetails>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  }
]);
