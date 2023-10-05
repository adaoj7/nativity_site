import { useState, useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";
import Dates from "./Dates";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import Image from "../../assets/CFN-White-Shadow-01.svg";

const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const SignupSchema = Yup.object().shape({
    checked: Yup.array().min(1),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Volunteers = () => {
    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);
    const userId = useSelector((state) => state.userId);
    const [data, setData] = useState([100]);
    console.log(lname);

    const volunteerYear = new Date();
    const year = volunteerYear.getFullYear();

    const { dataAboutShifts } = useLoaderData();
    //   console.log(dataAboutShifts)

    const years = dataAboutShifts.filter((ele) => ele.year === year);

    const daysOfShifts = years.map(({ days }) => {
        let dates = days.map(({ date, shifts }) => {
            return {
                date,
                shifts,
            };
        });
        return { dates };
    });

    console.log(daysOfShifts);

    const userShift = async () => {
        const { data } = await axios.post("/api/userShifts", { userId });
        // console.log(res)
        setData(data);
    };
    useEffect(() => {
        userShift();
    }, []);

    const userShiftId = data.map((ele) => ele.shiftId);
    // console.log(userShiftId)

    return (
        <div>
            <div className="mt-2 ml-12 hidden desktop:flex">
                <img src={Image} className="h-20" />
            </div>

            {/* Mobile screen */}
            <div className="desktop:hidden flex">
                <h3 >
                    Hello, {fname} {lname}
                </h3>
                <Formik
                    initialValues={{
                        checked: [],
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // console.log(setupTimes);
                        console.log(values);
                        await sleep(500);
                        // alert(JSON.stringify(values, null, 2));
                        const sendNewVolunteer = async () => {
                            let bodyObj = {
                                userId: userId,
                                checked: values.checked,
                            };

                            const { data } = await axios.post(
                                "/api/newVolunteer",
                                bodyObj
                            );
                            if (!data.error) {
                            } else {
                                console.log(data.error);
                            }
                        };
                        setSubmitting(false);
                        resetForm({
                            checked: [],
                        });

                        sendNewVolunteer();
                        location.replace("/volunteer/myShifts");
                    }}
                >
                    {({ errors, handleSubmit }) => (
                        <Form
                            onSubmit={handleSubmit}
                            className=""
                        >
                            <h3 id="checkbox-group">Setup Shifts:</h3>
                            <ul role="group" aria-labelledby="checkbox-group">
                                <Dates
                                    dates={daysOfShifts}
                                    userShifts={userShiftId}
                                />
                                {/* <component={SetupDates} dates={daysOfShifts}/> */}
                            </ul>
                            {errors.checked && (
                                <div>
                                    {"Must at least check one availability"}
                                </div>
                            )}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* desktop screen */}
            <div className="hidden desktop:flex desktop:flex-col desktop:justify-center desktop:w-screen desktop:p-4">
                <div className="w-96 p-2 m-2 border-2 border-black">

                <h3 className="flex justify-center">
                    Hello, {fname} {lname}
                </h3>
                <Formik
                    initialValues={{
                        checked: [],
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // console.log(setupTimes);
                        console.log(values);
                        await sleep(500);
                        // alert(JSON.stringify(values, null, 2));
                        const sendNewVolunteer = async () => {
                            let bodyObj = {
                                userId: userId,
                                checked: values.checked,
                            };
                            
                            const { data } = await axios.post(
                                "/api/newVolunteer",
                                bodyObj
                                );
                                if (!data.error) {
                                } else {
                                    console.log(data.error);
                            }
                        };
                        setSubmitting(false);
                        resetForm({
                            checked: [],
                        });

                        sendNewVolunteer();
                        location.replace("/volunteer/myShifts");
                    }}
                >
                    {({ errors, handleSubmit }) => (
                        <Form
                        onSubmit={handleSubmit}
                            className="flex flex-col justify-center p-2"
                            >
                            <h3 id="checkbox-group" className="w-60 p-2">Setup Shifts:</h3>
                            <ul role="group" aria-labelledby="checkbox-group" className="w-60">
                                <Dates
                                    dates={daysOfShifts}
                                    userShifts={userShiftId}
                                    className='w-2'
                                    />
                                
                            </ul>
                            {errors.checked && (
                                <div>
                                    {"Must at least check one availability"}
                                </div>
                            )}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
                            </div>
            </div>
        </div>
    );
};
export default Volunteers;
