import { useState } from "react";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    Outlet,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useLayoutEffect } from "react";

// Header is needed to get around Browser router functionality bugs
function Header() {
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        axios
            .get("/api/user")
            .then((res) => dispatch({ type: "LOGIN", payload: res.data }))
            .catch((err) => err);
    }, []);

    return (
        <>
            <header className="flex justify-end w-screen font-bold text-white">
                <div className="static">
                    <div className="absolute top-0 left-0">
                        <img src="" />
                    </div>
                </div>
                <nav className="flex bg-second m-2 p-3 rounded-full justify-between w-2/3 h-20">
                    <NavLink
                        to="/home"
                        className=" flex align-middle p-4 hover:bg-third hover:rounded-full  focus:bg-third focus:rounded-full whitespace-nowrap"
                    >
                        Home Page
                    </NavLink>
                    <NavLink
                        to="/about"
                        className=" align-middle p-4 hover:bg-third hover:rounded-full hover:align-middle focus:bg-third focus:rounded-full focus:p-4"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/volunteer"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full whitespace-nowrap"
                    >
                        Get Involved
                    </NavLink>
                    <NavLink
                        to="/thisYear"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full whitespace-nowrap"
                    >
                        This Year
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full "
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/lightTheWorld"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full whitespace-nowrap"
                    >
                        Light the World
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full"
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/products"
                        className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full"
                    >
                        Products
                    </NavLink>
                </nav>
                <div className="flex whitespace-nowrap">

                <nav className="m-2 p-6 h-20 w-1/12 rounded-full bg-first">
                    {userId ? (
                      <NavLink
                      to="/myProfile"
                      className="align-middle p-4 hover:bg-third hover:rounded-full focus:underline"
                      >
                            My Profile
                        </NavLink>
                    ) : (
                      <NavLink
                      to="/login"
                      className="align-middle p-4 hover:bg-third hover:rounded-full focus:bg-third focus:rounded-full"
                      >
                            Log In
                        </NavLink>
                    )}
                </nav>
                    </div>
            </header>
            <Outlet className="bg-primary" />
        </>
    );
}

export default Header;
