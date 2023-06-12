import React from "react";
// react router dom
import { Outlet } from "react-router-dom";
// improt components
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";

const RootLayouts = () => {
    return (
        <>
            <Navbar />
            <Search />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayouts;
