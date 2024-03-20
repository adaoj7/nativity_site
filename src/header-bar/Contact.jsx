import React from "react";
import MapPicture from "../assets/Screenshot 2024-03-19 212513.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="mt-40 min-h-[73vh]">
                <div className="flex flex-col justify-center mx-20 mt-10 mb-4">
                    <div className="flex flex-row justify-center items-center">
                        <section className="card w-1/3 h-72 rounded-3xl bg-beigeGreen-200 mx-10">
                            <div className="card-body flex flex-col justify-center align-middle">
                                <h2 className="card-title flex justify-center">
                                    Contact
                                </h2>
                                <p className="">
                                    Email:{" "}
                                    <button
                                        onClick={() =>
                                            (window.location =
                                                "mailto:peorianativities@gmail.com")
                                        }
                                        className=""
                                    >
                                        peorianativities@gmail.com
                                    </button>
                                </p>
                                <p className="">Ruth Thompson</p>
                                <p className="">Tel: 309-361-9956</p>
                            </div>
                        </section>

                        <button
                            onClick={() =>
                                window.open(
                                    `https://www.google.com/maps/place/The+Community+Festival+of+Nativities/@40.7352662,-89.6539589,15.5z/data=!4m6!3m5!1s0x880a5c39a382250d:0x6fcfa24cada00e1b!8m2!3d40.732102!4d-89.651485!16s%2Fg%2F11f63xgxt0?entry=ttu`
                                )
                            }
                            title="Link to Google Maps"
                            className="flex justify-end w-1/3 mx-10"
                        >
                            <img src={MapPicture} className="w-full" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
