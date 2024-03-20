import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="bg-beigeGreen-400 font-OpenSans">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
