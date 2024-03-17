import React from "react";
import { Form, Field } from "formik";
import { useState } from "react";
import axios from "axios";

const ShiftTimes = ({ shifts, userShifts }) => {
    // console.log(userShifts)

    const shift = shifts.map((ele, i) => {
        if (!userShifts.includes(ele.shiftId)) {
            return (
                <div key={i} className="flex flex-row">
                    <div className="font-normal">
                        <input type="hidden" />
                        <label className="flex flex-row select-none items-center gap-3 text-lg">
                            <Field
                                type="checkbox"
                                name="checked"
                                value={ele.shiftId.toString()}
                                key={ele.shiftId.toString()}
                                className="flex align-middle rounded-sm h-4 w-4 text-white checked:accent-beigeGreen-400 hover:accent-beigeGreen-300"
                            />
                            {ele.timeRange}
                        </label>
                    </div>
                </div>
            );
        }
    });

    return <>{shift}</>;
};

export default ShiftTimes;
