import { useState, useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";
import Dates from "./Dates";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const SignupSchema = Yup.object().shape({
    checked: Yup.array().min(1),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Volunteers = () => {
    const [myShifts, setMyShifts] = useState([]);
    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);
    const userId = useSelector((state) => state.userId);
    const [data, setData] = useState([100]);
    const [submittedShifts, setSubmittedShifts] = useState([]);

    const volunteerYear = new Date();
    const year = volunteerYear.getFullYear();

    const { dataAboutShifts } = useLoaderData();

    // This is very important. If the year has advanced then new shifts will need to be added to be displayed
    // Currently this is hard coded but it should be changed to the year function
    const years = dataAboutShifts.filter((ele) => ele.year === 2023);

    const daysOfShifts = years.map(({ days }) => {
        let dates = days.map(({ date, shifts }) => {
            return {
                date,
                shifts,
            };
        });
        return { dates };
    });

    const userShift = async () => {
        const { data } = await axios.post("/api/userShifts", { userId });
        console.log(data);
        setData(data);
    };
    useEffect(() => {
        userShift();
    }, [myShifts]);

    const userShiftId = data.map((ele) => ele.shiftId);
    // console.log(userShiftId);

    return (
        <div>
            {/* Mobile screen */}
            <div className="flex desktop:hidden">
                <h3>
                    Hello, {fname} {lname}
                </h3>
                <Formik
                    initialValues={{
                        checked: [],
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        // console.log(setupTimes);
                        // console.log(values);
                        await sleep(500);
                        // alert(JSON.stringify(values, null, 2));
                        document.getElementById("my_modal_1").showModal();
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
                    }}
                >
                    {({ errors, handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className="">
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
                <div className="flex flex-col items-center w-full">
                    <p className="flex w-96">
                        This page is for those who would like to sign up for
                        shifts to help with nativity setup and takedown.
                    </p>
                    <div className="h-[604px] w-1/3 px-8 pt-4 m-2 border-2 rounded-2xl border-black bg-second shadow-xl">
                        <h2 className="flex justify-center text-xl font-semibold">
                            Hello, {fname} {lname}
                        </h2>
                        <Formik
                            initialValues={{
                                checked: [],
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                // console.log(setupTimes);
                                // console.log(values);
                                await sleep(500);
                                // alert(JSON.stringify(values, null, 2));
                                document
                                    .getElementById("my_modal_1")
                                    .showModal();
                                const sendNewVolunteer = async () => {
                                    let bodyObj = {
                                        userId: userId,
                                        checked: values.checked,
                                    };
                                    // console.log(values);
                                    await setMyShifts(values.checked);

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
                            }}
                        >
                            {({ errors, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col justify-between h-full p-2 py-8"
                                >
                                    <h2
                                        id="checkbox-group"
                                        className="flex justify-start font-semibold"
                                    >
                                        Setup Shifts:
                                    </h2>
                                    <div>
                                        <ul
                                            role="group"
                                            aria-labelledby="checkbox-group"
                                            className="flex flex-wrap p-4 gap-14"
                                        >
                                            <Dates
                                                dates={daysOfShifts}
                                                userShifts={userShiftId}
                                                className="flex flex-wrap w-2"
                                            />
                                        </ul>
                                    </div>
                                    {errors.checked && (
                                        <div className="flex justify-center ">
                                            {"Please select an availability"}
                                        </div>
                                    )}
                                    {!errors.checked && (
                                        <div className="flex justify-center text-transparent select-none">
                                            This is an easter egg
                                        </div>
                                    )}
                                    <div className="flex justify-center px-24 mx-8 mb-12 align-bottom">
                                        <button
                                            type="submit"
                                            className="btn w-full bg-third text-white border-black border-[1px]  hover:text-black hover:bg-white"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Thank you for signing up as a volunteer to setup
                        nativities.
                    </p>
                    <NavLink to="/volunteer/myShifts" className="btn">
                        Click here to see your shifts{" "}
                    </NavLink>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
export default Volunteers;
