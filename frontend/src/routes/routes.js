import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../components/404/PageNotFound";

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
