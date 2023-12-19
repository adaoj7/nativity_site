import React from "react";
import Background from "../assets/107 , Fall Family Showcase 2018-19 -3.jpg";
import MobileBackground from "../assets/107 , Fall Family Showcase 2018-19 - mobile.jpg";
import Logo from "../assets/CFN White-01.png";
import About from "./About";
import { NavLink } from "react-router-dom";

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

                <section className="w-1/3 about-festival" id="about">
                    {/* <!-- Brief about the festival with a 'Read more' link to the about page --> */}
                    The Peoria Area Community Festival of Nativities was started
                    in 2016 by members of the Church of Jesus Christ of
                    Latter-Day Saints and the Sisters of St. Francis of
                    Immaculate Conception. Since then the festival has continued
                    to grow and invite individuals and families to "Come and
                    See."
                    {' '}
                    <NavLink to="/about" className='hover:text-gray-500'>About Us</NavLink>
                </section>

                <section className="event-calendar" id="events">
                    {/* <!-- Interactive event scheduler/calendar --> */}
                    Events
                </section>

                <section className="volunteer-section" id="volunteer">
                    {/* <!-- Information on volunteering and a sign-up form --> */}
                    Volunteer
                </section>

                <section className="donation-section" id="donate">
                    {/* <!-- Quick donation access --> */}
                    Donate
                </section>

                <section className="gallery" id="gallery">
                    {/* <!-- Gallery of past festivals --> */}
                    Gallery
                </section>

                <section className="testimonials" id="testimonials">
                    {/* <!-- Testimonials or story sharing section --> */}
                    Testimonials
                </section>

                <aside className="news-updates" id="news">
                    {/* <!-- Sidebar for news or social media feed --> */}
                    News
                </aside>

                <section className=""></section>
            </div>
        </>
    );
};

export default Home;
