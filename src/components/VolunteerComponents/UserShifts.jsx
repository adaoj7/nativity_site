import React from "react";
import axios from "axios";

const UserShifts = ({ shifts }) => {

    const handleDelete = (availId, shiftId) => {
        axios.delete("/api/deleteShift", {
            data: { 
              availabilityId: availId, 
              shiftId: shiftId 
            },
        });
        location.replace(location.href);
    };

    const shift = shifts.map((ele) => {
        ele.shift.availabilityId = ele.availabilityId;
        return ele.shift;
    });

    let newArr = [];
    const dateTime = shift.map((ele) => {
        newArr.push({
            shiftId: ele.shiftId,
            date: ele.day.date,
            time: ele.timeRange,
            availId: ele.availabilityId,
        });
    });

    const displayedShifts = newArr.map((ele, i) => {
        let { date, time, availId, shiftId } = ele;
        return (
            <p key={i}>
                {date} {time}
                <button key={availId} onClick={() => handleDelete(availId, shiftId)}>
                    Remove Shift
                </button>
            </p>
        );
    });
    

    return <div>{displayedShifts}</div>;
};

export default UserShifts;
