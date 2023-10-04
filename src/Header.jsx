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

    const phoneInactive = 'font-bold text-white'
    const phoneActiveClassName = "text-white font-bold underline";
    const desktopInactive = 'flex align-middle p-4 hover:underline'
    const desktopActive = 'flex align-middle p-4 bg-secondLighter rounded-full '

    return (
        <>
            <header className="sticky w-full z-20">
                <div className="desktop:hidden fixed w-80 z-10 right-2 top-2 p-2">
                    {menu ? (
                        <nav
                            id="mobileHeader"
                            className="phone:relative phone:z-20 flex justify-center flex-col bg-first rounded-xl border-black border-[1px] p-2"
                        >
                            <button
                                className="text-white text-3xl flex justify-end "
                                onClick={(ele) => setMenu(!menu)}
                            >
                                <IoMenu className="relative z-20" />
                            </button>
                            <div className="relative z-20 flex items-end flex-col">
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
                        </nav>
                    ) : (
                        <div className="flex justify-end ">
                            <button
                                className=" justify-end text-gray-50 text-3xl right-2 top-2 p-2 border-2 border-transparent"
                                onClick={(ele) => setMenu(!menu)}
                            >
                                <IoMenu className="" />
                            </button>
                        </div>
                    )}
                </div>

                <nav className="hidden desktop:absolute desktop:flex desktop:justify-end desktop:w-screen desktop:font-bold desktop:text-white desktop:z-10 ">
                    <div className="flex bg-second m-2 p-3 rounded-full justify-between w-2/3 h-20">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            Home Page
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/volunteer"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            Get Involved
                        </NavLink>
                        <NavLink
                            to="/thisYear"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            This Year
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/lightTheWorld"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            Light the World
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : desktopInactive
                        }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                            isActive
                                ? 'flex align-middle p-4 bg-secondLighter rounded-full '
                                : 'flex align-middle p-4 hover:underline'
                        }
                        >
                            Products
                        </NavLink>
                    </div>
                    <div className="m-2 p-6 h-20 w-1/12 rounded-full">
                        {userId ? (
                            <NavLink
                                to="/myProfile"
                                className="align-middle p-4 hover:bg-secondLightest hover:rounded-full focus:underline"
                            >
                                My Profile
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className="align-middle p-4 hover:bg-secondLightest hover:rounded-full focus:underline"
                            >
                                Log In
                            </NavLink>
                        )}
                    </div>
                </nav>
            </header>
            <Outlet className="" />
        </>
    );
}

export default Header;
