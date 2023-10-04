import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import Signup from "./Signup";
import { NavLink } from "react-router-dom";
import App from "../App";
import { useDispatch } from "react-redux";
import NativityLogo from "../components/Elements/NativityLogo";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <>
        <NativityLogo/>
        <div className="flex p-24 h-full justify-center align-middle">
            <div className="flex flex-col h-1/2 w-1/2 p-6 bg-firstDarker rounded-lg border-2 border-black">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // console.log(setupTimes);
                        console.log(values);
                        // await sleep(500);
                        // alert(JSON.stringify(values, null, 2));
                        const sendNewVolunteer = async () => {
                            let bodyObj = {
                                email: values.email,
                                password: values.password,
                            };
                            
                            const { data } = await axios.post(
                                "/api/login",
                                bodyObj
                                );
                                console.log(data);
                                dispatch({ type: "LOGIN", payload: data });
                                if (!data.error) {
                                } else {
                                    console.log(data.error);
                            }
                        };

                        setSubmitting(false);
                        resetForm({
                            email: "",
                            phone: "",
                        });
                        sendNewVolunteer();
                        // location.replace('/home')
                    }}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form className="flex flex-col">
                            <Field
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Email"
                                value={values.email}
                                className="border-2 m-2 p-2 border-black"
                                />
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Password"
                                value={values.password}
                                className="border-2 border-black m-2 p-2"
                                />
                            <div className="flex justify-center">
                                <button
                                    className="w-1/3 m-2 border-2 bg-first border-black rounded-full justify-center hover:bg-firstDarkest"
                                    type="button"
                                    onClick={togglePassword}
                                    >
                                    Show Password
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="w-1/3 m-2 border-2 bg-first border-black rounded-full justify-center hover:bg-gray-300"
                                    type="submit"
                                    >
                                    Log In
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="flex align-middle justify-center p-12">
                    <div className="flex w-1/3 border-2 bg-first border-black rounded-full justify-center hover:bg-gray-300">
                        <NavLink className="flex align-middle" to="/signup">
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
                    </>
    );
};
export default Login;
