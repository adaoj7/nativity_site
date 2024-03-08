import React from "react";
import { NavLink } from "react-router-dom";
import NativityLogo from "../components/Elements/NativityLogo";

const Admin = () => {
    return (
        <div>
            <nav className="flex flex-row justify-center">
                <div className="m-4">
                    <NavLink
                        className="btn rounded-full p-2 m-2 font-semibold bg-second hover:bg-white border-[1px] border-black"
                        to="/betaAndPsi/newAdmin"
                    >
                        Add new Admin
                    </NavLink>
                    <NavLink
                        className="btn rounded-full p-2 m-2 font-semibold bg-second hover:bg-white border-[1px] border-black"
                        to="/betaAndPsi"
                    >
                        Look up shift times
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Admin;
