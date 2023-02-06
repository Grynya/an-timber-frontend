import React from "react";
import Footer from "../components/Sections/Footer"
import TopNavbarRedirected from "../components/Nav/TopNavbarRedirected";
import ProductHouseDetails from "../components/Sections/productDetails/ProductHouseDetails";

export default function ProductHouse() {
    return (
        <>
            <TopNavbarRedirected/>
            <ProductHouseDetails/>
            <Footer/>
        </>
    );
}


