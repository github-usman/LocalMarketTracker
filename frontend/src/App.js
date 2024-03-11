import React, { Suspense } from "react";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import "./assests/styles/global.css";
import Loader from "./components/spinner/Loader";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
