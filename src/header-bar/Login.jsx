import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Image from "../assets/CFN-White-Shadow-01.svg";

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
            {/* Mobile */}
            <div className="desktop:hidden phone:flex mt-32 justify-center align-middle h-[70vh]">
                <div className="flex flex-col w-5/6 h-2/3 p-6 bg-second rounded-lg border-2 border-black shadow-gray-500 shadow-2xl">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            // console.log(setupTimes);
                            // console.log(values);
                            // await sleep(500);
                            // alert(JSON.stringify(values, null, 2));
                            const login = async () => {
                                let bodyObj = {
                                    email: values.email,
                                    password: values.password,
                                };

                                const { data } = await axios.post(
                                    "/api/login",
                                    bodyObj
                                );
                                // console.log(data);
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
                            login();
                            // location.replace('/volunteer/setup')
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
                                    className="border-2 m-2 p-2 border-black shadow-lg"
                                />
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required={true}
                                    placeholder="Password"
                                    value={values.password}
                                    className="border-2 border-black m-2 p-2 shadow-lg"
                                />
                                <div className="flex justify-center">
                                    <button
                                        className="btn m-2 border-2 font-semibold shadow-xl bg-first border-black rounded-full justify-center hover:bg-gray-200 hover:text-black "
                                        type="button"
                                        onClick={togglePassword}
                                    >
                                        Show Password
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="btn m-2 border-2 font-semibold shadow-lg bg-first border-black rounded-full justify-center hover:bg-gray-200 hover:text-black"
                                        type="submit"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex align-middle justify-center p-2">
                        <button className="flex btn border-2 bg-second font-semibold border-black rounded-full justify-center hover:bg-fourth hover:text-white">
                            <NavLink className="flex align-middle" to="/signup">
                                Sign Up
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
            {/* Desktop */}
            <div className="hidden desktop:flex p-24 mt-10 h-full justify-center align-middle">
                <div className="flex flex-col h-1/2 w-1/2 p-6 bg-second rounded-lg border-2 border-black shadow-gray-500 shadow-2xl">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            // console.log(setupTimes);
                            console.log(values);
                            // await sleep(500);
                            // alert(JSON.stringify(values, null, 2));
                            const login = async () => {
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
                            login();
                            // location.replace('/volunteer/setup')
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
                                    className="border-2 m-2 p-2 border-black shadow-lg"
                                />
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required={true}
                                    placeholder="Password"
                                    value={values.password}
                                    className="border-2 border-black m-2 p-2 shadow-lg"
                                />
                                <div className="flex justify-center">
                                    <button
                                        className="btn w-1/3 m-2 border-2 font-semibold shadow-xl bg-first border-black rounded-full justify-center hover:bg-gray-200 hover:text-black "
                                        type="button"
                                        onClick={togglePassword}
                                    >
                                        Show Password
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="btn w-1/3 m-2 border-2 font-semibold shadow-lg bg-first border-black rounded-full justify-center hover:bg-gray-200 hover:text-black"
                                        type="submit"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="flex align-middle justify-center p-2">
                        <button className="flex btn w-1/3 border-2 font-semibold border-black rounded-full justify-center hover:btn-neutral">
                            <NavLink className="flex align-middle" to="/signup">
                                Sign Up
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
