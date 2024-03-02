import React from "react";
import axios from "axios";
import { useLocation, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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

    console.log(data);
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

        return (
            <div className="flex justify-between">
                <p
                    key={i}
                    className="flex text-center whitespace-nowrap justify-center items-center text-xl"
                >
                    Date: {date} Time: {time} Shift type:
                    {typeId === 1 ? (
                        <span className="font-semibold ml-2">{"Setup"}</span>
                    ) : (
                        <span className="font-semibold ml-2">{"Host"}</span>
                    )}
                </p>
                <div className="flex justify-center">
                    <button
                        className="flex  border-2 items-center justify-center border-gray-600 p-1 ml-4 my-2 h-8 w-28 whitespace-nowrap bg-slate-300 hover:bg-white"
                        key={availId}
                        onClick={() => handleDelete(availId, shiftId)}
                    >
                        Remove Shift
                    </button>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="flex desktop:hidden h-[85vh]">
                <div className="flex justify-center">
                    <div className=" border-black border-2 p-4 mx-32 mt-32 w-[600px]">
                        <h2 className="text-lg font-semibold">My Shifts:</h2>
                        {displayedShifts}
                    </div>
                </div>
            </div>
            <div className="desktop:flex phone:hidden h-[85vh]">
                <div className="flex justify-center">
                    <div className=" border-black border-2 p-4 mx-32 mt-32 w-[600px]">
                        <h2 className="text-lg font-semibold">My Shifts:</h2>
                        {displayedShifts}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserShifts;
