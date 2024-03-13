import React from "react";
import { NavLink } from "react-router-dom";
import NativityLogo from "../components/Elements/NativityLogo";

const Admin = () => {
    return (
        <div>
            <nav className="flex flex-col justify-center">
                <div className="m-4 flex flex-col">
                    <NavLink
                        className="btn rounded-full p-2 m-2 font-semibold bg-second hover:bg-white hover:border-second shadow-sm"
                        to="/betaAndPsi"
                    >
                        Look up shift times
                    </NavLink>
                    <NavLink
                        className="btn rounded-full p-2 m-2 font-semibold bg-second hover:bg-white hover:border-second shadow-sm"
                        to="/betaAndPsi"
                    >
                        Add shifts for year (not built)
                    </NavLink>
                    <NavLink
                        className="btn rounded-full p-2 m-2 font-semibold bg-second hover:bg-white hover:border-second shadow-sm"
                        to="/betaAndPsi/newAdmin"
                    >
                        Add new Admin
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Admin;
