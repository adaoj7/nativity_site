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
    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);
    const dispatch = useDispatch();

    const handleClick = async (req, res) => {
        try {
            const deleted = await axios
                .delete("/api/logout")
                .then((res) => dispatch({ type: "LOGOUT" }));
        } catch (err) {}
    };

    useLayoutEffect(() => {
        axios
            .get("/api/user")
            .then((res) => dispatch({ type: "LOGIN", payload: res.data }))
            .catch((err) => err);
    }, []);

    const phoneInactive = "font-bold text-black";
    const phoneActive = "text-black font-bold underline";

    const desktopInactive = `text-white flex align-middle p-4 hover:underline whitespace-nowrap ${
        location.pathname === "/" ? "text-white" : "text-white"
    }`;
    const desktopActive = `flex align-middle p-4 rounded-3xl whitespace-nowrap ${
        location.pathname === "/" ? "underline" : "bg-calPoly rounded-full"
    }`;

    const loginButtonInactive = `flex p-4 justify-center align-middle items-center text-white hover:underline hover:rounded-full hover:text-white whitespace-nowrap`;
    const loginButtonActive = `flex p-4 justify-center align-middle items-center rounded-full whitespace-nowrap underline`;

    return (
        <div className="">
            <header className="sticky z-10 flex w-full">
                {/* Mobile Header */}
                <div className="fixed flex justify-between desktop:hidden drawer drawer-end bg-darkGreenLight w-full h-24 items-center">
                    <img src={Image} className="h-16 ml-6 invert" />
                    <input
                        id="mobileDrawer"
                        type="checkbox"
                        className="mr-6 drawer-toggle"
                    />
                    <div className="drawer-content">
                        <label htmlFor="mobileDrawer">
                            <IoMenu
                                className="relative text-white right-4"
                                size={40}
                            />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="mobileDrawer"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-cornsilkLight text-base-content">
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
                                <details open className={phoneInactive}>
                                    <summary>Volunteer</summary>
                                    <ul>
                                        <li>
                                            <NavLink
                                                to="/volunteer"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? phoneActive
                                                        : phoneInactive
                                                }
                                            >
                                                Get Involved
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/volunteer/setup"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? phoneActive
                                                        : phoneInactive
                                                }
                                            >
                                                Setup
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/volunteer/host"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? phoneActive
                                                        : phoneInactive
                                                }
                                            >
                                                Host
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/volunteer/myShifts"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? phoneActive
                                                        : phoneInactive
                                                }
                                            >
                                                My Shifts
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
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
                            <li>
                                {userId ? (
                                    <NavLink
                                        to="/myProfile"
                                        className={({ isActive }) =>
                                            isActive
                                                ? phoneActive
                                                : phoneInactive
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive
                                                ? phoneActive
                                                : phoneInactive
                                        }
                                    >
                                        Log In
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* desktop */}
                <nav
                    className={`hidden desktop:fixed desktop:flex justify-between desktop:w-screen desktop:font-bold desktop:text-white desktop:z--10 mr-10 ${
                        location.pathname === "/"
                            ? classNames(
                                  scrollPosition > 0
                                      ? "desktop:bg-darkGreenLight desktop:h-50"
                                      : "desktop:bg-transparent",
                                  "desktop:justify-between desktop:transition-[background-color,height]"
                              )
                            : "desktop:justify-between bg-darkGreenLight"
                    }`}
                >
                    {location.pathname === "/" ? (
                        <></>
                    ) : (
                        <img src={Image} className="h-24 mx-4 invert" />
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
                                    className={`text-white flex align-middle p-4 hover:underline whitespace-nowrap ${
                                        location.pathname === "/"
                                            ? "text-white"
                                            : "text-white"
                                    }`}
                                >
                                    Get Involved
                                </Menu.Button>
                            </div>
                            <Menu.Items
                                className={`absolute right-0 mt-8 w-32 origin-top-right rounded-xl ring-opacity-50 focus:outline-none ${
                                    location.pathname === "/"
                                        ? "bg-cornsilkLight"
                                        : "bg-cornsilkLight"
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
                                                                  ? "bg-beigeGreen-400/80 text-black"
                                                                  : "bg-beigeGreen-400/80 text-black"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-black"
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
                                                                  ? "bg-beigeGreen-400/80 text-black"
                                                                  : "bg-beigeGreen-400/80 text-black"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-black"
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
                                                                  ? "bg-beigeGreen-400/80 text-black"
                                                                  : "bg-beigeGreen-400/80 text-black"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-black"
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
                                                                  ? "bg-beigeGreen-400/80 text-black"
                                                                  : "bg-beigeGreen-400/80 text-black"
                                                          }`
                                                        : `${
                                                              location.pathname ===
                                                              "/"
                                                                  ? " text-black"
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
                            <div className="dropdown dropdown-end flex align-middle">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className={`flex items-center align-middle whitespace-nowrap ${
                                        location.pathname === "/"
                                            ? " text-white"
                                            : " text-white"
                                    }`}
                                >
                                    My Profile
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-normal dropdown-content mt-24"
                                >
                                    <div className="card-body rounded-xl bg-cornsilkLight text-black">
                                        <div className="text-xl whitespace-nowrap">
                                            Hello, {fname} {lname}
                                        </div>
                                        <div className="text-xl mt-4 whitespace-nowrap">
                                            Sign up for shifts here
                                        </div>
                                        <div className="flex flex-row">
                                            <NavLink
                                                to="/volunteer/setup"
                                                className="btn hover:bg-beigeGreen-400/80 hover:border-beigeGreen-400/80 hover:text-black m-4"
                                            >
                                                Setup
                                            </NavLink>
                                            <NavLink
                                                to="/volunteer/host"
                                                className="btn hover:bg-beigeGreen-400/80 hover:border-beigeGreen-400/80 hover:text-black m-4"
                                            >
                                                Host
                                            </NavLink>
                                        </div>
                                        <div className="text-xl">
                                            Check out your shifts
                                        </div>
                                        <NavLink
                                            to="/volunteer/myShifts"
                                            className="btn hover:bg-beigeGreen-400/80 hover:border-beigeGreen-400/80 hover:text-black m-4"
                                        >
                                            My Shifts
                                        </NavLink>
                                        <button
                                            className="btn hover:bg-beigeGreen-400/80 hover:border-beigeGreen-400/80 hover:text-black flex font-semibold "
                                            onClick={handleClick}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
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
