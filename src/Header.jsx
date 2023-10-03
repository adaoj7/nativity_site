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
import { IoMenu } from "react-icons/io5";

// Header is needed to get around Browser router functionality bugs
function Header() {
    const [menu, setMenu] = useState(false);
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
            <header className="sticky w-full z-20">
                <div className="desktop:hidden fixed w-full z-10 right-2 top-2">
                {menu ? (
                    <nav
                        id="mobileHeader"
                        className="phone:relative phone:z-20 flex justify-end flex-col"
                    >
                        <button className="text-white text-3xl flex justify-end " onClick={(ele) => setMenu(!menu)}>
                            <IoMenu className="relative z-20" />
                        </button>
                        <div className="relative z-20 flex items-end flex-col">
                            <NavLink to="/home" className="">
                                Home Page
                            </NavLink>
                            <NavLink to="/about" className="">
                                About
                            </NavLink>
                            <NavLink to="/volunteer" className="">
                                Get Involved
                            </NavLink>
                            <NavLink to="/thisYear" className="">
                                This Year
                            </NavLink>
                            <NavLink to="/gallery" className="">
                                Gallery
                            </NavLink>
                            <NavLink to="/lightTheWorld" className="">
                                Light the World
                            </NavLink>
                            <NavLink to="/contact" className="">
                                Contact
                            </NavLink>
                            <NavLink to="/products" className="">
                                Products
                            </NavLink>
                            {userId ? (
                                <NavLink to="/myProfile" className="">
                                    My Profile
                                </NavLink>
                            ) : (
                                <NavLink to="/login" className="">
                                    Log In
                                </NavLink>
                            )}
                        </div>
                    </nav>
                ) : (
                    <div className="flex justify-end ">
                        <button className=' justify-end text-gray-50 text-3xl right-2 top-2'onClick={(ele) => setMenu(!menu)}>
                        <IoMenu className="" />
                        </button>
                    </div>
                )}
                </div>

                <nav className="hidden desktop:flex">
                    <NavLink to="/home" className="">
                        Home Page
                    </NavLink>
                    <NavLink to="/about" className="">
                        About
                    </NavLink>
                    <NavLink to="/volunteer" className="">
                        Get Involved
                    </NavLink>
                    <NavLink to="/thisYear" className="">
                        This Year
                    </NavLink>
                    <NavLink to="/gallery" className="">
                        Gallery
                    </NavLink>
                    <NavLink to="/lightTheWorld" className="">
                        Light the World
                    </NavLink>
                    <NavLink to="/contact" className="">
                        Contact
                    </NavLink>
                    <NavLink to="/products" className="">
                        Products
                    </NavLink>
                    {userId ? (
                        <NavLink to="/myProfile" className="">
                            My Profile
                        </NavLink>
                    ) : (
                        <NavLink to="/login" className="">
                            Log In
                        </NavLink>
                    )}
                </nav>
            </header>
            <Outlet className="" />
        </>
    );
}

export default Header;
