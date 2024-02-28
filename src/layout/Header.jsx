import { useState } from "react";
import { useLocation, NavLink, Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useLayoutEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Menu } from "@headlessui/react";
import Image from "../assets/CFN-White-Shadow-01.svg";
import useScrollPosition from "../hooks/useScrollPosition";

// Header is needed to get around Browser router functionality bugs
function Header() {
    let location = useLocation();

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(" ");
    };
    const scrollPosition = useScrollPosition();

    // console.log(location);
    const [menu, setMenu] = useState(false);
    const userId = useSelector((state) => state.userId);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        axios
            .get("/api/user")
            .then((res) => dispatch({ type: "LOGIN", payload: res.data }))
            .catch((err) => err);
    }, []);

    const phoneInactive = "font-bold text-black";
    const phoneActive = "text-black font-bold underline";

    const desktopInactive = `text-black flex align-middle p-4 hover:underline whitespace-nowrap ${
        location.pathname === "/" ? "text-white" : "text-black"
    }`;
    const desktopActive = `flex align-middle p-4 rounded-3xl whitespace-nowrap ${
        location.pathname === "/" ? "underline" : "bg-third rounded-full"
    }`;

    const loginButtonInactive = `flex p-4 justify-center align-middle items-center text-black hover:underline hover:rounded-full hover:text-white whitespace-nowrap ${
        location.pathname === "/"
            ? "text-white"
            : "text-black bg-second hover:bg-third"
    }`;
    const loginButtonActive = `flex p-4 justify-center align-middle items-center rounded-full whitespace-nowrap shadow-gray-500 shadow-2xl ${
        location.pathname === "/" ? undefined : "bg-third"
    }`;

    return (
        <div className="">
            <header className="sticky z-10 flex w-full">
                {/* Mobile Header */}
                <div className="fixed flex justify-between desktop:hidden dropdown dropdown-end bg-darkGreen w-full h-24 items-center">
                    <img src={Image} className="h-16 ml-6 invert" />
                    <div tabIndex={0} role="button" className="mr-6">
                        <IoMenu
                            className="relative z-20 text-white"
                            size={40}
                        />
                    </div>
                    <ul
                        tabIndex={0}
                        className="top-28 mr-3 z-[1] p-2 shadow menu menu-sm dropdown-content border-[1px] border-black rounded-box w-52 bg-cornsilk"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? phoneActive : phoneInactive
                                }
                            >
                                Home Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? phoneActive : phoneInactive
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donate"
                                className={({ isActive }) =>
                                    isActive ? phoneActive : phoneInactive
                                }
                            >
                                Donate
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/thisYear"
                                className={({ isActive }) =>
                                    isActive ? phoneActive : phoneInactive
                                }
                            >
                                This Year
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* desktop */}
                <nav
                    className={`hidden desktop:fixed desktop:flex justify-between desktop:w-screen desktop:font-bold desktop:text-white desktop:z--10 mr-10 ${
                        location.pathname === "/"
                            ? classNames(
                                  scrollPosition > 0
                                      ? "desktop:bg-darkGreen desktop:h-50"
                                      : "desktop:bg-transparent",
                                  "desktop:justify-between desktop:transition-[background-color,height]"
                              )
                            : "desktop:justify-between bg-second"
                    }`}
                >
                    {location.pathname === "/" ? (
                        <></>
                    ) : (
                        <img src={Image} className="h-24 mx-4 " />
                    )}
                    <div
                        className={`flex ${
                            location.pathname === "/"
                                ? "ml-28 m-2 p-3 gap-2"
                                : " m-2 p-3  justify-between w-2/3 h-20 mr-20"
                        } `}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            Home Page
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            About
                        </NavLink>

                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <Menu.Button
                                    className={`text-black flex align-middle p-4 hover:underline whitespace-nowrap ${
                                        location.pathname === "/"
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    Get Involved
                                </Menu.Button>
                            </div>
                            <Menu.Items
                                className={`absolute right-0  w-32 origin-top-right rounded-xl divide-y divide-black/50 ring-1 ring-black ring-opacity-50 focus:outline-none ${
                                    location.pathname === "/"
                                        ? "bg-darkGreen "
                                        : "bg-second"
                                }`}
                            >
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <NavLink
                                                to="/volunteer/setup"
                                                className={`${
                                                    active
                                                        ? `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? "bg-calPoly/80 text-white"
                                                                  : "bg-third text-white"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-white"
                                                                  : " text-black"
                                                          }`
                                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                            >
                                                Setup
                                            </NavLink>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <NavLink
                                                to="/volunteer/host"
                                                className={`${
                                                    active
                                                        ? `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? "bg-calPoly text-white"
                                                                  : "bg-third text-white"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-white"
                                                                  : " text-black"
                                                          }`
                                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                            >
                                                Host
                                            </NavLink>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <NavLink
                                                to="/volunteer/myShifts"
                                                className={`${
                                                    active
                                                        ? `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? "bg-calPoly text-white"
                                                                  : "bg-third text-white"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-white"
                                                                  : " text-black"
                                                          }`
                                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                            >
                                                My Shifts
                                            </NavLink>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <NavLink
                                                to="/donate"
                                                className={`${
                                                    active
                                                        ? `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? "bg-calPoly text-white"
                                                                  : "bg-third text-white"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-white"
                                                                  : " text-black"
                                                          }`
                                                } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                                            >
                                                Donate
                                            </NavLink>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <NavLink
                            to="/thisYear"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            This Year
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/lightTheWorld"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            Light the World
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? desktopActive : desktopInactive
                            }
                        >
                            Products
                        </NavLink>
                    </div>
                    <div className="flex justify-center align-middle p-6 h-[96px] w-24 rounded-full mr-12 ml-6">
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
        </div>
    );
}

export default Header;
