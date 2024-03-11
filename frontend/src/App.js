import React from "react";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import "./assests/styles/global.css";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
