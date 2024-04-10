import React from "react";
import { RouterProvider } from "react-router-dom";
import "./assests/styles/global.css";
import { router } from "./routes/routes.js";

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
