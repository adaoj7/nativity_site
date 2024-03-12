import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DateOptions from "./DateOptions";
import Admin from "../../header-bar/Admin.jsx";
import ShiftOptions from "./ShiftOptions";
import QueryResults from "./QueryResults";
import { useState } from "react";

const AdminLookup = () => {
    const [newData, setNewData] = useState([]);
    const volunteerYear = new Date();
    // again I need to hard code this until I implement error handling
    // const year = volunteerYear.getFullYear()

    const year = 2023;
    const { dataAboutShifts } = useLoaderData();
    // console.log(dataAboutShifts)

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

    return (
        <>
            <div className="mt-32 min-h-[75vh] flex flex-row">
                <Admin />
                <div>
                    <h1 className="font-semibold flex justify-center ml-[400px] text-xl">
                        Search Shifts
                    </h1>
                    <Formik
                        initialValues={{
                            date: "",
                            time: "",
                            checked: [],
                            data: "",
                        }}
                        onSubmit={async (values) => {
                            // alert(JSON.stringify(values, null, 2));
                            //   console.log(values)

                            const sendAdminQuery = async () => {
                                let bodyObj = {
                                    date: values.date,
                                    time: values.time,
                                    checked: values.checked,
                                };

                                const { data } = await axios.post(
                                    "/api/adminQuery",
                                    bodyObj
                                );
                                if (!data.error) {
                                } else {
                                    console.log(data.error);
                                }

                                setNewData(data);
                            };
                            sendAdminQuery();
                        }}
                    >
                        {({ values }) => (
                            <Form className="flex justify-center flex-col ml-[400px] p-4 border-2 rounded-md border-gray-500">
                                <div className="flex justify-center min-h-[220px]">
                                    <div className="flex flex-col justify-around rounded-md p-4 min-h-[180px] w-[250px]">
                                        <label className="text-xl">
                                            Shift Date
                                        </label>
                                        <DateOptions dates={daysOfShifts} />

                                        <ShiftOptions shifts={values} />

                                        <div id="checkbox-group">
                                            Choose to Display:
                                        </div>
                                        <div
                                            role="group"
                                            aria-labelledby="checkbox-group"
                                            className="flex justify-around"
                                        >
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="checked"
                                                    value="Name"
                                                />
                                                Name
                                            </label>
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="checked"
                                                    value="Email"
                                                />
                                                Email
                                            </label>
                                            <label>
                                                <Field
                                                    type="checkbox"
                                                    name="checked"
                                                    value="Phone"
                                                />
                                                Phone
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="btn font-semibold flex bg-gray-300 hover:bg-gray-400 justify-center mx-20 my-2 rounded-full p-2  w-[190px]"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <QueryResults values={newData} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default AdminLookup;
