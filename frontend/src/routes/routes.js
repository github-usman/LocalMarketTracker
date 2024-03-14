import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import PageNotFound from "../components/error/PageNotFound.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  }
]);
