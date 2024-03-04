import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NativityLogo from "../components/Elements/NativityLogo";

const MyProfile = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userId);

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
        <div className="h-screen">
            <div className="mt-32">
                <nav className="flex desktop:hidden justify-center">
                    {userId ? (
                        <div className="flex justify-center">
                            <button
                                className="flex btn btn-info"
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
                            <button
                                className="flex justify-end font-semibold  hover:underline"
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
