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
import { IoMenu } from "react-icons/io5"
import NativityLogo from "./components/Elements/NativityLogo";

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

    const phoneInactive = 'font-bold text-black'
    const phoneActiveClassName = "text-black font-bold underline";

    const desktopInactive = 'text-black flex align-middle p-4 hover:underline whitespace-nowrap'
    const desktopActive = 'flex align-middle p-4 bg-third rounded-full whitespace-nowrap shadow-lg'

    const loginButtonInactive = 'flex p-4 justify-center align-middle items-center text-black hover:underline hover:text-white hover:bg-third bg-second rounded-full whitespace-nowrap shadow-2xl'
    const loginButtonActive = 'flex p-4 justify-center align-middle items-center bg-third  rounded-full whitespace-nowrap shadow-gray-500 shadow-2xl'

    return (
        <>
            <header className="sticky w-full z-20 ">
            
                <div className="desktop:hidden fixed w-80 z-10 right-2 top-2 p-2">
                    {menu ? (
                        <nav
                            id="mobileHeader"
                            className="phone:relative phone:z-20 flex flex-col bg-second rounded-xl border-black border-[1px] p-2 shadow-gray-400 shadow-2xl"
                        >
                            <button
                                className="text-black text-4xl flex items-end justify-end "
                                onClick={(ele) => setMenu(!menu)}
                            >
                                <IoMenu className="relative z-20" />
                            </button>
                            <div className="relative z-20 flex items-center flex-col space-y-4 text-2xl">
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }
                                >
                                    Home Page
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    About
                                </NavLink>
                                <NavLink to="/volunteer" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    Get Involved
                                </NavLink>
                                <NavLink to="/thisYear" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    This Year
                                </NavLink>
                                <NavLink to="/gallery" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    Gallery
                                </NavLink>
                                <NavLink to="/lightTheWorld" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    Light the World
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    Contact
                                </NavLink>
                                <NavLink to="/products" className={({ isActive }) =>
                                        isActive
                                            ? phoneActiveClassName
                                            : phoneInactive
                                    }>
                                    Products
                                </NavLink>
                                {userId ? (
                                    <NavLink to="/myProfile" className={({ isActive }) =>
                                    isActive
                                        ? phoneActiveClassName
                                        : phoneInactive
                                }>
                                        My Profile
                                    </NavLink>
                                ) : (
                                    <NavLink to="/login" className={({ isActive }) =>
                                    isActive
                                        ? phoneActiveClassName
                                        : phoneInactive
                                }>
                                        Log In
                                    </NavLink>
                                )}
                            </div>
                            <div className="h-6"></div>
                        </nav>
                    ) : (
                        <div className="flex justify-end ">
                            <button
                                className=" justify-end text-black text-4xl right-2 top-2 p-2 border-[1px] border-transparent"
                                onClick={(ele) => setMenu(!menu)}
                            >
                                <IoMenu className="" />
                            </button>
                        </div>
                    )}
                </div>
                <nav className="hidden desktop:fixed desktop:flex desktop:justify-end desktop:w-screen desktop:font-bold desktop:text-white desktop:z-10 ">
                    <div className="flex bg-second/90 m-2 p-3 rounded-full justify-between w-2/3 h-20 shadow-2xl">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Home Page
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/volunteer"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Get Involved
                        </NavLink>
                        <NavLink
                            to="/thisYear"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            This Year
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/lightTheWorld"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Light the World
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                            isActive
                                ? desktopActive
                                : desktopInactive
                        }
                        >
                            Products
                        </NavLink>
                    </div>
                    <div className="flex justify-center align-middle p-6 h-[96px] w-24 rounded-full">
                        {userId ? (
                            <NavLink
                                to="/myProfile"
                                className={({ isActive }) =>
                                isActive
                                    ? loginButtonActive
                                    : loginButtonInactive
                            }
                            >
                                My Profile
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                isActive
                                    ? loginButtonActive
                                    : loginButtonInactive
                            }
                            >
                                Log In
                            </NavLink>
                        )}
                    </div>
                </nav>
            </header>
            <div>
                <Outlet className="desktop:top-24 desktop:absolute" />
            </div>
        </>
    );
}

export default Header;
