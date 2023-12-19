import React from "react";
import Background from "../assets/107 , Fall Family Showcase 2018-19 -3.jpg";
import MobileBackground from "../assets/107 , Fall Family Showcase 2018-19 - mobile.jpg";
import Logo from "../assets/CFN White-01.png";

const Home = () => {
    return (
        <>
            <div>
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

                <section id="location">
                    <h2>Location</h2>
                    <p>
                        Our event will take place at the beautiful XYZ
                        Convention Center in Draper, Utah. Join us for an
                        unforgettable experience!
                    </p>
                </section>

                <section id="organizers">
                    <h2>Organizers</h2>
                    <p>
                        The event is organized by a passionate team of
                        professionals who are dedicated to creating an
                        exceptional gathering for all attendees. Meet our team:
                    </p>
                    <ul>
                        <li>John Doe - Event Director</li>
                        <li>Jane Smith - Marketing Manager</li>
                        <li>Michael Johnson - Logistics Coordinator</li>
                    </ul>
                </section>

                <section id="theme">
                    <h2>Theme</h2>
                    <p>
                        Our theme for this year's event is "Innovation
                        Unleashed." We'll explore cutting-edge technologies,
                        creative solutions, and forward-thinking ideas. Get
                        ready to be inspired!
                    </p>
                </section>
            </div>
        </>
    );
};

export default Home;
