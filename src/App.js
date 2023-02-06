import React from "react";
import { Helmet } from "react-helmet";
import Landing from "./screens/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./screens/ProductDetails";
import ProductHouse from "./screens/ProductHouse";

export default function App() {
  return (
    <div className="lightBg">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/product-details/:productId"
                       element={<ProductDetails />}/>
                <Route path="/product-details/4"
                       element={<ProductHouse />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

