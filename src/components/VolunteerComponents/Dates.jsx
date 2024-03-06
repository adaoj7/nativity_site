import React from "react";
import { Field } from "formik";
import ShiftTimes from "./ShiftTimes";
import { nanoid } from "nanoid";

const Dates = ({ dates, userShifts }) => {
    // console.log(userShifts)
    let dateMap = dates[0].dates.map((ele, i) => {
        let shifts = ele.shifts.map((ele) => ele);
        if (shifts.length > 0) {
            return (
                <div
                    key={nanoid()}
                    className="flex flex-col font-semibold text-lg"
                >
                    {ele.date}
                    <ShiftTimes shifts={shifts} userShifts={userShifts} />
                </div>
            );
        }
    });
    return <>{dateMap}</>;
};

export default Dates;
