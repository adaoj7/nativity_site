import React from "react";
import Background from "../assets/Background-Desktop-PSO.jpg";
import MobileBackground from "../assets/Background-Mobile-PSO.jpg";
import Logo from "../assets/CFN White-01.png";
import { NavLink } from "react-router-dom";
import Gallery from "../components/Elements/Gallery";

const carouselItems = [
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
];

const Home = () => {
    return (
        <>
            <div className="bg-white">
                <div className="">
                    <div className="top-0 desktop:hidden phone:flex phone:relative">
                        <img src={MobileBackground} className="h-full" />
                        {/* <img src="src\assets\CFN-White-Shadow-01.svg" className= 'invert absolute z-11 left-[40px] h-[120px] w-[180px] border-2 border-transparent'/> */}
                    </div>

                    <div className="top-0 hidden desktop:flex desktop:relative">
                        <img src={Background} />
                        <img
                            src={Logo}
                            className="absolute w-1/3 top-1/2 right-44 h-1/4"
                        />
                    </div>
                </div>

                {/* Mobile homepage layout */}
                <div className="desktop:hidden phone:flex flex-row justify-center flex-wrap mx-4 py-4">
                    <div className="m-4">
                        <section
                            className="p-4 text-lg bg-white border-2 border-black rounded-3xl mx-4"
                            id="about"
                        >
                            {/* <!-- Brief about the festival with a 'Read more' link to the about page --> */}
                            The Peoria Area Community Festival of Nativities was
                            started in 2016 by members of the Church of Jesus
                            Christ of Latter-day Saints and the Sisters of St.
                            Francis of Immaculate Conception. Since then the
                            festival has continued to grow and invite
                            individuals and families to "Come and See."{" "}
                            <NavLink
                                to="/about"
                                className="underline text-gray-500"
                            >
                                About Us
                            </NavLink>
                        </section>

                        <section
                            className="p-4 bg-white border-2 border-black rounded-3xl m-4"
                            id="events"
                        >
                            {/* <!-- Interactive event scheduler/calendar --> */}
                            <h2 className="flex justify-center text-lg font-semibold">
                                Oh Holy Night
                            </h2>
                            <h2 className="flex justify-center text-lg font-semibold whitespace-nowrap">
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
                            <div className="flex flex-col justify-center">
                                <h2 className="font-semibold">Address:</h2>
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
                        <div className="flex flex-col justify-around mx-4">
                            <section
                                className="p-4 text-lg bg-white border-2 border-black h-1/3 rounded-3xl mb-4"
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
                                    For more information on how to become a
                                    Friend of the Nativity{" "}
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

                {/* Desktop homepage layout */}
                <div className="hidden desktop:flex flex-row flex-wrap p-20 bg-beigeGreen-400 min-h-screen">
                    <div className="flex flex-row justify-between">
                        <section
                            className=" card w-[28%] p-4 text-lg bg-gradient-to-r from-beigeGreen-200 to-beigeGreen-100 rounded-3xl shadow-sm"
                            id="about"
                        >
                            <div className="card-body">
                                <h1 className="flex justify-center text-lg font-semibold">
                                    About
                                </h1>
                                {/* <!-- Brief about the festival with a 'Read more' link to the about page --> */}
                                The Peoria Area Community Festival of Nativities
                                was started in 2016 by members of the Church of
                                Jesus Christ of Latter-day Saints and the
                                Sisters of St. Francis of Immaculate Conception.
                                Since then the festival has continued to grow
                                and invite individuals and families to "Come and
                                See."
                                <div className="flex flex-row">
                                    <span>-</span>{" "}
                                    <NavLink
                                        to="/about"
                                        className="hover:text-darkGreenLight hover:underline card-actions"
                                    >
                                        About Us
                                    </NavLink>
                                </div>
                            </div>
                        </section>

                        <section
                            className="card w-[30%] p-4 bg-beigeGreen-100 rounded-3xl shadow-sm"
                            id="events"
                        >
                            <div className="flex card-body justify-around">
                                {/* <!-- Interactive event scheduler/calendar --> */}
                                <h2 className="flex justify-center text-lg font-semibold">
                                    Oh Holy Night
                                </h2>
                                <h2 className="flex justify-center text-lg font-semibold">
                                    November 30th and December 1st-3rd
                                </h2>
                                <ul className="m-4 text-lg">
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
                                <h2 className="flex items-start font-semibold text-lg ml-6">
                                    Address:
                                </h2>
                                <div className="flex flex-col justify-center card-actions items-center">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://www.google.com/maps/place/The+Community+Festival+of+Nativities/@40.7352662,-89.6539589,15.5z/data=!4m6!3m5!1s0x880a5c39a382250d:0x6fcfa24cada00e1b!8m2!3d40.732102!4d-89.651485!16s%2Fg%2F11f63xgxt0?entry=ttu`
                                            )
                                        }
                                        className="flex justify-center text-black font-bold btn bg-slate-200 border-slate-200 hover:border-slate-300 hover:bg-slate-300 whitespace-nowrap shadow-sm"
                                        title="Address in Google Maps"
                                    >
                                        3700 West Reservoir Boulevard
                                    </button>
                                </div>
                            </div>
                        </section>
                        <div className="flex flex-col justify-between w-1/3 gap-4">
                            <section
                                className="card text-lg bg-gradient-to-l from-beigeGreen-200 to-beigeGreen-100 rounded-3xl shadow-sm"
                                id="volunteer"
                            >
                                {/* <!-- Information on volunteering and a sign-up form --> */}
                                <div className="card-body text-lg">
                                    <h1 className="flex justify-center font-semibold">
                                        Get Involved
                                    </h1>
                                    We are always looking for those who are
                                    interested in getting involved. We offer two
                                    main types of volunteering:
                                    <span className="flex justify-center items-center">
                                        <NavLink
                                            to={"/volunteer/setup"}
                                            className="btn font-bold bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300"
                                        >
                                            Setup Shifts
                                        </NavLink>{" "}
                                        <span className="m-3">and</span>{" "}
                                        <NavLink
                                            to={"/volunteer/host"}
                                            className="btn font-bold bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300"
                                        >
                                            Host Shifts
                                        </NavLink>
                                    </span>
                                </div>
                            </section>
                            <section
                                className="card p-4 text-lg bg-gradient-to-l from-beigeGreen-200 to-beigeGreen-100 rounded-3xl shadow-sm"
                                id="donate"
                            >
                                {/* <!-- Quick donation access --> */}
                                <div className="card-body">
                                    Thank you to some of our sponsors:
                                    <ul>
                                        <li>- Missy Johnson</li>
                                        <li>- Amber Mickelson</li>
                                        <li>- Lori Johnson</li>
                                    </ul>
                                    <span>
                                        For more information on how to become a{" "}
                                        <NavLink
                                            to="/donate"
                                            className="hover:text-darkGreenLight hover:underline"
                                        >
                                            Friend of the Nativity{" "}
                                        </NavLink>
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-10 w-full">
                        <div className="flex items-center card shadow-sm bg-beigeGreen-200 w-[500px]">
                            <section
                                className="card-body flex justify-center p-4 text-center rounded-3xl"
                                id="gallery"
                            >
                                <Gallery carouselItems={carouselItems} />
                            </section>
                        </div>
                        <div className="card bg-beigeGreen-200 shadow-sm w-1/3">
                            <section
                                className="card-body flex  p-4 text-center  h-1/5 rounded-3xl"
                                id="testimonials"
                            >
                                {/* <!-- Testimonials or story sharing section --> */}
                                Testimonials
                            </section>
                        </div>
                        <aside
                            className="p-4 bg-beigeGreen-200 rounded-3xl shadow-sm w-1/4"
                            id="news"
                        >
                            {/* <!-- Sidebar for news or social media feed --> */}
                            News
                        </aside>
                    </div>

                    <section className="bg-beigeGreen-100"></section>
                </div>
            </div>
        </>
    );
};

export default Home;
