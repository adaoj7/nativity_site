import React from "react";
import axios from "axios";
import { useLocation, redirect } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const UserShifts = () => {
    let [deletedShift, setDeletedShift] = useState(0);
    const [data, setData] = useState([]);

    // Delete shift
    const handleDelete = async (availId, shiftId) => {
        if (confirm("Did you want to delete this shift?")) {
            try {
                setDeletedShift((deletedShift) => deletedShift + 1);
                console.log(deletedShift);
                setData((data) =>
                    data.filter((shift) => shift.shiftId !== shiftId)
                );
                console.log(data);
                await axios.delete("/api/deleteShift", {
                    data: {
                        availabilityId: availId,
                        shiftId: shiftId,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        }
    };

    // Load shifts
    const userId = useSelector((state) => state.userId);

    const userShift = async () => {
        try {
            const { data } = await axios.post("/api/userShifts", { userId });
            setData(data);
        } catch (err) {
            console.log(err);
        }
        // console.log(res)
    };
    useEffect(() => {
        userShift();
    }, []);

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
                    <div
                        className="grid grid-cols-3 gap-4 items-center text-xl text-start"
                        style={{
                            gridTemplateColumns:
                                "minmax(125px, auto) minmax(225px, auto) minmax(150px, auto)",
                        }}
                    >
                        <div>
                            <span className="font-semibold">Date:</span>
                            <span className="ml-2">{date}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Time:</span>
                            <span className="ml-2">{time}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Shift type:</span>
                            <span className="ml-2">
                                {typeId === 1 ? "Setup" : "Host"}
                            </span>
                        </div>
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
            <div className="desktop:flex phone:hidden min-h-[85vh] justify-center">
                <div className="flex justify-center">
                    <ul className=" p-4 mx-32 mt-32">
                        <h2 className="text-lg font-semibold">My Shifts:</h2>
                        {displayedShifts}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default UserShifts;
