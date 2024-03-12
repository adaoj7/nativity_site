import React from "react";
import { useLoaderData } from "react-router-dom";
import { Field } from "formik";

const ShiftOptions = ({ shifts }) => {
    const volunteerYear = new Date();
    // hard coded because year data is not yet present
    // const year = volunteerYear.getFullYear();
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

    const { date } = shifts;
    let times = [];
    const timesOfShifts = daysOfShifts[0].dates.filter((e) => e.date === date);

    if (timesOfShifts.length > 0) {
        times = timesOfShifts[0].shifts.map((ele, i) => {
            return (
                <option value={ele.timeRange} key={i}>
                    {ele.timeRange}
                </option>
            );
        });
        return (
            <>
                <label className="text-xl">Shift Time</label>
                <Field
                    name="time"
                    component="select"
                    className="border-[1px] border-black rounded-md"
                >
                    <option key="random">Please Select a time</option>
                    {times}
                </Field>
            </>
        );
    }
    return <>{times}</>;
};

export default ShiftOptions;
