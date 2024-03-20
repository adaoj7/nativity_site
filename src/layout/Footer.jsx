import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Footer = () => {
    let location = useLocation();
    return (
        // not sure why this isn't letting me make the text black?
        <>
            {/* Mobile Footer */}
            <div className="desktop:hidden justify-end phone:flex flex-col">
                <div
                    className={`h-full desktop:flex flex-col w-full p-4 bg-darkGreenLight text-white
                    `}
                >
                    <div className="">
                        Contact us:{" "}
                        <button
                            onClick={() =>
                                (window.location =
                                    "mailto:peorianativities@gmail.com")
                            }
                        >
                            <div className="">peorianativities@gmail.com</div>
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <NavLink to="/about" className="">
                            About
                        </NavLink>
                        <NavLink to="/gallery" className="">
                            Gallery
                        </NavLink>
                        <Link
                            target={"_blank"}
                            to="https://www.instagram.com/peoria_nativity?igshid=180p3l66ka3x2"
                            className=""
                        >
                            Instagram
                        </Link>
                        <Link
                            target={"_blank"}
                            to="https://www.facebook.com/photo?fbid=342727541784414&set=pcb.342727635117738"
                            className="hover:underline"
                        >
                            Facebook
                        </Link>
                    </div>
                </div>
            </div>
            {/* Desktop Footer */}
            <div className="hidden justify-end desktop:flex">
                <div
                    className={`h-auto desktop:flex flex-col w-full p-4 bg-darkGreenLight text-white
                    `}
                >
                    <div className="">
                        Contact us:{" "}
                        <button
                            onClick={() =>
                                (window.location =
                                    "mailto:peorianativities@gmail.com")
                            }
                        >
                            <div className="hover:underline ">
                                peorianativities@gmail.com
                            </div>
                        </button>
                    </div>
                    <NavLink to="/about" className="hover:underline">
                        About
                    </NavLink>
                    <NavLink to="/gallery" className="hover:underline">
                        Gallery
                    </NavLink>
                    <Link
                        target={"_blank"}
                        to="https://www.instagram.com/peoria_nativity?igshid=180p3l66ka3x2"
                        className="hover:underline"
                    >
                        Instagram
                    </Link>
                    <Link
                        target={"_blank"}
                        to="https://www.facebook.com/photo?fbid=342727541784414&set=pcb.342727635117738"
                        className="hover:underline"
                    >
                        Facebook
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
