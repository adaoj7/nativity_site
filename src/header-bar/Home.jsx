import React from "react";
import Background from "../assets/107 , Fall Family Showcase 2018-19 -3.jpg";
import MobileBackground from "../assets/107 , Fall Family Showcase 2018-19 - mobile.jpg";
import Logo from "../assets/CFN White-01.png";
import About from "./About";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="bg-darkGreen">
                <div className="">
                    <div className="top-0 desktop:hidden phone:flex phone:relative">
                        <img src={MobileBackground} className="z-0" />
                        {/* <img src="src\assets\CFN-White-Shadow-01.svg" className= 'invert absolute z-11 left-[40px] h-[120px] w-[180px] border-2 border-transparent'/> */}
                    </div>

                    <div className="top-0 hidden desktop:flex desktop:relative desktop:">
                        <img src={Background} />
                        <img
                            src={Logo}
                            className="absolute w-1/3 top-1/2 right-44 h-1/4"
                        />
                    </div>
                </div>

                {/* Desktop homepage layout */}
                <div className="flex flex-row flex-wrap m-4 space-y-3">
                    <div className="flex flex-row justify-between">
                        <section
                            className="w-1/3 p-4 text-lg bg-white border-2 border-black rounded-3xl"
                            id="about"
                        >
                            {/* <!-- Brief about the festival with a 'Read more' link to the about page --> */}
                            The Peoria Area Community Festival of Nativities was
                            started in 2016 by members of the Church of Jesus
                            Christ of Latter-Day Saints and the Sisters of St.
                            Francis of Immaculate Conception. Since then the
                            festival has continued to grow and invite
                            individuals and families to "Come and See."{" "}
                            <NavLink
                                to="/about"
                                className="hover:text-gray-500"
                            >
                                - About Us
                            </NavLink>
                        </section>

                        <section
                            className="w-1/4 p-4 bg-white border-2 border-black rounded-3xl"
                            id="events"
                        >
                            {/* <!-- Interactive event scheduler/calendar --> */}
                            <h2 className="flex justify-center text-lg font-semibold">
                                Oh Holy Night
                            </h2>
                            <h2 className="flex justify-center text-lg font-semibold">
                                November 30th and December 1st-3rd
                            </h2>
                            <ul className="m-4">
                                <li className="m-2 ">
                                    Thursday Nov 30th, 3pm-9pm
                                </li>
                                <li className="m-2 ">
                                    Friday Dec 1st, 10am-9pm
                                </li>
                                <li className="m-2 ">
                                    Saturday, Dec 2nd, 10am-9pm
                                </li>
                                <li className="m-2 ">
                                    Sunday, Dec 3rd, 12pm-6pm
                                </li>
                                <li className="m-2 ">
                                    There will also be a live nativity on
                                    Thursday night from 4:30 to 6:30pm
                                </li>
                            </ul>
                            <div className="flex flex-col justify-center mx-6">
                                <h2 className="font-semibold ">Address:</h2>
                                <button
                                    onClick={() =>
                                        window.open(
                                            `https://www.google.com/maps/place/The+Community+Festival+of+Nativities/@40.7352662,-89.6539589,15.5z/data=!4m6!3m5!1s0x880a5c39a382250d:0x6fcfa24cada00e1b!8m2!3d40.732102!4d-89.651485!16s%2Fg%2F11f63xgxt0?entry=ttu`
                                        )
                                    }
                                    className="flex justify-center px-4 text-white border-2 border-black btn bg-slate-600 hover:bg-slate-300 rounded-3xl whitespace-nowrap"
                                >
                                    3700 West Reservoir Boulevard Peoria, IL
                                </button>
                            </div>
                        </section>
                        <div className="flex flex-col justify-around w-1/3">
                            <section
                                className="p-4 text-lg bg-white border-2 border-black h-1/3 rounded-3xl"
                                id="volunteer"
                            >
                                {/* <!-- Information on volunteering and a sign-up form --> */}
                                We are always looking for those who are
                                interested in getting involved. We offer two
                                main types of volunteering: Setup Shifts and
                                Host Shifts.
                            </section>
                            <section
                                className="p-4 text-lg bg-white border-2 border-black rounded-3xl"
                                id="donate"
                            >
                                {/* <!-- Quick donation access --> */}
                                <div>

                                Thank you to our sponsors:
                                <li>Missy Johnson</li>
                                <li>Amber Mickelson</li>
                                <li>Lori Johnson</li>
                                For more information on how to become a Friend
                                of the Nativity{" "}
                                </div>
                                <span>

                                <NavLink
                                    to="/donate"
                                    className="hover:text-gray-400"
                                    >
                                    Click Here
                                </NavLink>
                                    </span>
                            </section>
                        </div>
                    </div>

                    <div className="flex flex-row w-full h-full">
                        <section
                            className="flex w-1/2 p-4 bg-white border-2 border-black h-1/5 rounded-3xl"
                            id="gallery"
                        >
                            {/* <!-- Gallery of past festivals --> */}
                            Gallery
                        </section>

                        <section
                            className="flex w-1/2 p-4 text-center bg-white border-2 border-black h-1/5 rounded-3xl"
                            id="testimonials"
                        >
                            {/* <!-- Testimonials or story sharing section --> */}
                            Testimonials
                        </section>
                    </div>
                    <aside
                        className="w-1/4 p-4 bg-white border-2 border-black h-1/5 rounded-3xl"
                        id="news"
                    >
                        {/* <!-- Sidebar for news or social media feed --> */}
                        News
                    </aside>

                    <section className="bg-white"></section>
                </div>
            </div>
        </>
    );
};

export default Home;
