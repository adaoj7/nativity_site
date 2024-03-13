import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DateOptions from "./DateOptions";
import Admin from "../../header-bar/Admin.jsx";
import ShiftOptions from "./ShiftOptions";
import QueryResults from "./QueryResults";
import { useState } from "react";
import * as Yup from "yup";

// const LookupSchema = Yup.object().shape({
//     checked: Yup.array().min(1),
//     time: Yup.string().min(1),
// });

const AdminLookup = () => {
    const [newData, setNewData] = useState([]);

    const volunteerYear = new Date();
    // again I need to hard code this until I implement error handling
    // const year = volunteerYear.getFullYear()

    const year = 2023;
    const { dataAboutShifts } = useLoaderData();

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
                    <Formik
                        initialValues={{
                            date: "",
                            time: "",
                            checked: [],
                            data: "",
                        }}
                        // validationSchema={LookupSchema}
                        onSubmit={async (values) => {
                            const sendAdminQuery = async () => {
                                let bodyObj = {
                                    date: values.date,
                                    time: values.time,
                                    checked: ["Name", "Phone", "Email"],
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
                        {({ values, errors }) => (
                            <Form className="flex justify-center flex-col ml-[200px] p-4 border-2 rounded-md border-gray-500">
                                <h1 className="font-semibold flex justify-center text-xl">
                                    Search Shifts
                                </h1>
                                <div className="flex justify-center min-h-[150px]">
                                    <div className="flex flex-col justify-start gap-3 rounded-md p-4 min-h-[180px] w-[250px]">
                                        <label className="text-xl">
                                            Shift Date
                                        </label>
                                        <DateOptions dates={daysOfShifts} />

                                        <ShiftOptions shifts={values} />
                                        {errors.time && (
                                            <div>{"Please select a time"}</div>
                                        )}
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
                            </Form>
                        )}
                    </Formik>
                </div>
                <QueryResults values={newData} />
            </div>
        </>
    );
};

export default AdminLookup;
