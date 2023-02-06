import React from "react";
import Footer from "../components/Sections/Footer"
import ProductDetailsInfo from "../components/Sections/productDetails/ProductDetailsInfo";
import TopNavbarRedirected from "../components/Nav/TopNavbarRedirected";

export default function ProductDetails() {
    return (
        <>
            <TopNavbarRedirected/>
            <ProductDetailsInfo/>
            <Footer/>
        </>
    );
}


