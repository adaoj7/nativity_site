import React from "react";
import NativityLogo from "../components/Elements/NativityLogo";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <NativityLogo />
            <div className="mt-24">
                <div className="flex flex-col justify-center">
                    <h2 className="flex justify-center pt-4 text-2xl font-bold">
                        Contact
                    </h2>
                    <div className="flex justify-center flex-row">
                        <div className="flex flex-col justify-center align-middle m-8">
                          <p className="flex justify-center text-lg font-semibold">Email: </p>
                          <button onClick={() => window.location = 'mailto:peorianativities@gmail.com'} className="flex justify-center text-lg font-semibold underline">peorianativities@gmail.com</button>
                          <p className="flex justify-center text-lg font-semibold">Ruth Thompson</p>
                          <p className="flex justify-center text-lg font-semibold">Tel: 309-361-9956</p>
                        </div>
                        <iframe
                            defer
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.359880354713!2d-89.65405992450053!3d40.73210603638536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a5c39a382250d%3A0x6fcfa24cada00e1b!2sThe%20Community%20Festival%20of%20Nativities!5e0!3m2!1sen!2sus!4v1701326064004!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            className="border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="h-8"></div>
            </div>
        </>
    );
};

export default Contact;
