import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userId);
    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);

    const handleClick = async (req, res) => {
        try {
            const deleted = await axios
                .delete("/api/logout")
                .then((res) => dispatch({ type: "LOGOUT" }));
        } catch (err) {}
    };

    useEffect(() => {
        axios
            .get("/api/user")
            .then((res) => dispatch({ type: "LOGIN", payload: res.data }))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="min-h-[80vh]">
            <div className="">
                <nav className="flex desktop:hidden justify-center mt-32">
                    {userId ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-3xl">
                                Hello, {fname} {lname}
                            </div>
                            <div className="text-xl mt-4">
                                Sign up for shifts here
                            </div>
                            <div className="flex flex-row">
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
                            <div className="text-xl">Check out your shifts</div>
                            <NavLink
                                to="/volunteer/myShifts"
                                className="btn btn-neutral m-4"
                            >
                                My Shifts
                            </NavLink>
                            <button
                                className="flex btn btn-info m-4"
                                onClick={handleClick}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink to="/login">Log In</NavLink>
                    )}
                </nav>
                <nav className="hidden desktop:flex justify-end pr-8">
                    {userId ? (
                        <div className="m-8">
                            <div className="text-3xl">
                                Hello, {fname} {lname}
                            </div>
                            <div className="text-xl mt-4">
                                Sign up for shifts here
                            </div>
                            <div className="flex flex-row">
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
                            <div className="text-xl">Check out your shifts</div>
                            <NavLink
                                to="/volunteer/myShifts"
                                className="btn btn-neutral m-4"
                            >
                                My Shifts
                            </NavLink>
                            <button
                                className="btn btn-neutral flex justify-end font-semibold"
                                onClick={handleClick}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink to="/login">Log In</NavLink>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default MyProfile;
