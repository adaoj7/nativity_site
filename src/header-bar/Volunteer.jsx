import React from "react";
import { NavLink } from "react-router-dom";
import NativityLogo from "../components/Elements/NativityLogo";

const Volunteer = () => {
    return (
        <>
            <div className="mt-24 min-h-[80vh] flex flex-col">
                <div className="text-xl p-6">
                    We need volunteers to help us with setup and takedown of the
                    nativities before and after the festival as well as those
                    willing to host those who come.
                </div>
                <div className="flex flex-row justify-center items-center m-4 text-lg">
                    <div></div>
                    <div>
                        <NavLink
                            to="/volunteer/setup"
                            className="btn btn-neutral m-4"
                        >
                            Setup
                        </NavLink>
                        <NavLink
                            to="/volunteer/host"
                            className="btn btn-neutral m-4"
                        >
                            Host
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Volunteer;
