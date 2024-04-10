import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/common/loader/Loading.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const PageNotFound = lazy(() => import("../components/common/error/PageNotFound.jsx"));
const ProductDetails = lazy(() => import("../components/prodcut-Details/ProductDetails.jsx"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><HomePage /></Suspense>,
  },
  {
    path: "product-details",
    element: <Suspense fallback={<Loader />}><ProductDetails /></Suspense>,
  },
  {
    path: "*",
    element: <Suspense fallback={<Loader />}><PageNotFound /></Suspense>,
  }
]);
