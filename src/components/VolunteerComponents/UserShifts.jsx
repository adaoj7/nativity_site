import React from "react";
import axios from "axios";
import { useLocation, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const UserShifts = () => {
    const [deletedShift, setDeletedShift] = useState("");
    const location = useLocation();

    // Delete shift
    const handleDelete = (availId, shiftId) => {
        if (confirm("Did you want to delete?")) {
            axios.delete("/api/deleteShift", {
                data: {
                    availabilityId: availId,
                    shiftId: shiftId,
                },
            });
            setDeletedShift(availId);
        }
    };

    // Load shifts
    const userId = useSelector((state) => state.userId);
    const [data, setData] = useState([]);

    const userShift = async () => {
        const { data } = await axios.post("/api/userShifts", { userId });
        // console.log(res)
        setData(data);
    };
    useEffect(() => {
        userShift();
    }, [deletedShift]);

    // console.log(data);
    const shift = data.map((ele) => {
        ele.shift.availabilityId = ele.availabilityId;
        return ele.shift;
    });

    let newArr = [];
    const dateTime = shift.map((ele) => {
        newArr.push({
            typeId: ele.typeId,
            shiftId: ele.shiftId,
            date: ele.day.date,
            time: ele.timeRange,
            availId: ele.availabilityId,
        });
    });
    // console.log(newArr)
    const displayedShifts = newArr.map((ele, i) => {
        let { date, time, availId, shiftId, typeId } = ele;
        ele.id = nanoid();
        ele.id2 = nanoid();
        console.log();
        return (
            <div key={ele.id}>
                <li className="flex flex-col desktop:hidden justify-between h-20">
                    <div className="flex text-center whitespace-nowrap justify-start items-center">
                        Date: {date} Time: {time} Shift type:
                        {typeId === 1 ? (
                            <span className="font-semibold ml-2">
                                {"Setup"}
                            </span>
                        ) : (
                            <span className="font-semibold ml-2">{"Host"}</span>
                        )}
                    </div>
                    <div className="flex justify-start">
                        <button
                            className="flex  border-2 items-center justify-center border-gray-600 p-1 ml-4 my-2 h-8 w-28 whitespace-nowrap bg-slate-300 hover:bg-white"
                            onClick={() => handleDelete(availId, shiftId)}
                        >
                            Remove Shift
                        </button>
                    </div>
                </li>
                <li className="desktop:flex phone:hidden justify-between">
                    <div className="flex text-center whitespace-nowrap justify-center items-center text-xl">
                        Date: {date} Time: {time} Shift type:
                        {typeId === 1 ? (
                            <span className="font-semibold ml-2">
                                {"Setup"}
                            </span>
                        ) : (
                            <span className="font-semibold ml-2">{"Host"}</span>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="flex  border-2 items-center justify-center border-gray-600 p-1 ml-4 my-2 h-8 w-28 whitespace-nowrap bg-slate-300 hover:bg-white"
                            onClick={() => handleDelete(availId, shiftId)}
                        >
                            Remove Shift
                        </button>
                    </div>
                </li>
            </div>
        );
    });

    return (
        <>
            <div className="flex desktop:hidden min-h-[85vh] justify-center">
                <div className="flex justify-center">
                    <ul className="p-4 mt-32 mb-4">
                        <h2 className="text-lg font-semibold">My Shifts:</h2>
                        {displayedShifts}
                    </ul>
                </div>
            </div>
            <div className="desktop:flex phone:hidden min-h-[85vh]">
                <div className="flex justify-center">
                    <ul className=" border-black border-2 p-4 mx-32 mt-32 w-[600px]">
                        <h2 className="text-lg font-semibold">My Shifts:</h2>
                        {displayedShifts}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserShifts;
