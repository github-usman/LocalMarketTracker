import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/contact";
import About from "./components/about";
import SignUp from "./components/signup";
import './components/style/style.css';
import SellerRegi from "./components/sellerComponents/sellerRegi";
import SellerSign from "./components/sellerComponents/sellerSign";

import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


export default function App() {
  return (
    
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="SellerRegi" element={<SellerRegi/>}/>
          <Route path="sellerSign" element={<SellerSign/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


// export default App;
