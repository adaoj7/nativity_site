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
    const [updateUI, setUpdateUI] = useState(0);
    const fname = useSelector((state) => state.fname);
    const lname = useSelector((state) => state.lname);
    const userId = useSelector((state) => state.userId);
    const [data, setData] = useState([100]);
    const [userShiftId, setUserShiftId] = useState([]);

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
        // console.log(data);
        setData(data);
    };
    useEffect(() => {
        userShift();
    }, []);

    useEffect(() => {
        setUserShiftId(data.map((ele) => ele.shiftId));
    }, [data]);

    return (
        <div>
            {/* Mobile screen */}
            <div className="flex flex-col items-center desktop:hidden min-h-[85vh]">
                <div className="w-3/4 mt-32 mb-8 border-2 bg-beigeGreen-200 p-6 rounded-2xl">
                    <h3 className="">
                        Hello, {fname} {lname}
                    </h3>
                    <Formik
                        initialValues={{
                            checked: [],
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                        ) => {
                            const numberValues = values.checked.map((value) => {
                                return +value;
                            });
                            setUserShiftId([...userShiftId, ...numberValues]);

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
                                <ul
                                    role="group"
                                    aria-labelledby="checkbox-group"
                                >
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
                                <div className="flex justify-center mt-6">
                                    <button className="btn" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            {/* desktop screen */}
            <div className="hidden desktop:flex flex-col justify-center w-screen p-4 mt-24 min-h-[85vh]">
                <div className="flex flex-col items-center w-full">
                    <div className="min-h-[66vh] px-8 pt-4 m-2 border-2 rounded-2xl border-black bg-beigeGreen-300 shadow-xl">
                        <h2 className="flex justify-center text-2xl font-semibold">
                            Hello, {fname} {lname}
                        </h2>
                        <p className="flex justify-center ">
                            Please use this form to sign up for shifts to help
                            with nativity setup and takedown.
                        </p>
                        <Formik
                            initialValues={{
                                checked: [],
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                const numberValues = values.checked.map(
                                    (value) => {
                                        return +value;
                                    }
                                );
                                setUserShiftId([
                                    ...userShiftId,
                                    ...numberValues,
                                ]);

                                document
                                    .getElementById("my_modal_2")
                                    .showModal();

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

                                await sendNewVolunteer();
                                userShift();
                            }}
                        >
                            {({ errors, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col justify-between h-full p-2 py-8"
                                >
                                    <h2
                                        id="checkbox-group"
                                        className="flex justify-start font-semibold text-lg"
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
                                        <div className="flex justify-center mb-4 font-semibold">
                                            {"Please select an availability"}
                                        </div>
                                    )}
                                    {!errors.checked && (
                                        <div className="flex justify-center text-transparent select-none mb-4">
                                            This is an easter egg
                                        </div>
                                    )}
                                    <div className="flex justify-center px-24 mx-8 mb-12 align-bottom">
                                        <button
                                            type="submit"
                                            className="btn w-full bg-beigeGreen-50 text-black border-black border-[1px]  hover:text-black hover:bg-beigeGreen-400 hover:border-black  text-lg"
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
                    <NavLink
                        to="/volunteer/myShifts"
                        className="btn flex justify-center"
                    >
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
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4 text-lg">
                        Thank you for signing up as a volunteer to setup
                        nativities.
                    </p>
                    <NavLink
                        to="/volunteer/myShifts"
                        className="btn flex justify-center px-10 text-lg"
                    >
                        Click here to see your shifts{" "}
                    </NavLink>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn text-lg">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
export default Volunteers;
