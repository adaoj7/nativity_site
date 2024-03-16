import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import Input from "react-phone-number-input";
import CustomInput from "./SignupInput";
import "react-phone-number-input/style.css";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneValue, setPhoneValue] = useState();
    const dispatch = useDispatch();

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col mt-24 h-screen">
            <p className="my-8 px-8 flex justify-center text-xl">
                Signing up will allow you to sign up and view volunteer shifts
                and to register nativities.
            </p>
            <Formik
                initialValues={{
                    fname: "",
                    lname: "",
                    phone: "",
                    church: "",
                    email: "",
                    password: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const sendNewVolunteer = async () => {
                        let bodyObj = {
                            fname: values.fname,
                            lname: values.lname,
                            phone: phoneValue,
                            church: values.church,
                            email: values.email,
                            password: values.password,
                        };

                        const { data } = await axios.post(
                            "/api/register",
                            bodyObj
                        );
                        dispatch({ type: "LOGIN", payload: data });
                        if (!data.error) {
                        } else {
                            console.log(data.error);
                        }
                    };
                    console.log(values.fname);
                    console.log("User created");
                    setSubmitting(false);
                    resetForm({
                        email: "",
                        phone: "",
                    });

                    sendNewVolunteer();
                    location.replace("/");
                }}
            >
                {({ values, handleChange, handleBlur }) => (
                    <div className="flex justify-center">
                        <Form className="flex justify-center flex-col border-2 rounded-md m-4 p-4 py-8 border-black w-[350px] h-[500px]">
                            <Field
                                className="border-2 border-black rounded-md p-2 m-2"
                                type="text"
                                name="fname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="First Name"
                                value={values.fname}
                            />
                            <Field
                                className="border-2 border-black rounded-md p-2 m-2"
                                type="text"
                                name="lname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Last Name"
                                value={values.lname}
                            />
                            {/* This is a custom component that allows for input validation. It isn't formik and points to the useState instead of formik maintained state */}
                            <Input
                                className="border-2 border-black rounded-md p-2 m-2 h-full"
                                countrySelectComponent={"disabled:true"}
                                inputComponent={CustomInput}
                                limitMaxLength={true}
                                placeholder="Enter phone number"
                                defaultCountry="US"
                                countries={["US"]}
                                initialValueFormat="national"
                                smartCaret={true}
                                international={false}
                                value={phoneValue}
                                onChange={setPhoneValue}
                            />
                            <Field
                                className="border-2 border-black rounded-md p-2 m-2"
                                type="text"
                                name="church"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Church Affiliation"
                                value={values.church}
                            />
                            <Field
                                className="border-2 border-black rounded-md p-2 m-2"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Email"
                                value={values.email}
                            />
                            <Field
                                className="border-2 border-black rounded-md p-2 m-2"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                                placeholder="Password"
                                value={values.password}
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="hover:underline btn"
                            >
                                Show Password
                            </button>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="hover:underline btn font-semibold flex bg-second hover:bg-white justify-center mx-20 my-2 rounded-full p-2 border-[1px] border-black w-[190px]"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Signup;
