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
            <header className="">
                <div className="">
                    <div className="">
                    </div>
                </div>
                <nav className="">
                    <NavLink
                        to="/home"
                        className=""
                    >
                        Home Page
                    </NavLink>
                    <NavLink
                        to="/about"
                        className=""
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/volunteer"
                        className=""
                    >
                        Get Involved
                    </NavLink>
                    <NavLink
                        to="/thisYear"
                        className=""
                    >
                        This Year
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className=""
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/lightTheWorld"
                        className=""
                    >
                        Light the World
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className=""
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/products"
                        className=""
                    >
                        Products
                    </NavLink>
                </nav>
                <div className="">

                <nav className="">
                    {userId ? (
                      <NavLink
                      to="/myProfile"
                      className=""
                      >
                            My Profile
                        </NavLink>
                    ) : (
                      <NavLink
                      to="/login"
                      className=""
                      >
                            Log In
                        </NavLink>
                    )}
                </nav>
                    </div>
            </header>
            <Outlet className="" />
        </>
    );
}

export default Header;
