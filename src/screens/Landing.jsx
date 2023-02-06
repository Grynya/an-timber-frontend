import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Products from "../components/Sections/Products";
import ContactForm from "../components/Sections/form/ContactForm";
import Footer from "../components/Sections/Footer"
import Certificates from "../components/Sections/Certificates";
import AboutUs from "../components/Sections/AboutUs";
import Delivery from "../components/Sections/Delivery";

export default function Landing() {
    return (
        <>
            <TopNavbar/>
            <Header/>
            <Products/>
            <AboutUs/>
            <Certificates/>
            <Delivery/>
            <ContactForm/>
            <Footer toTop={"home"}/>
        </>
    );
}


