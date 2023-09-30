import React from 'react'
import { Form,Field } from 'formik'
import { useState } from 'react'
import axios from 'axios'

const ShiftTimes = ({shifts,userShifts}) => {
    // console.log(userShifts)

    const shift = shifts.map((ele,i) => {
        if(!userShifts.includes(ele.shiftId))
        {
            return(
            <div key={i}>
                <input type="hidden" />
                <Field type='checkbox' name='checked' value={ele.shiftId.toString()} key={ele.shiftId.toString()}/>
                <label htmlFor={ele.shiftId}>{ele.timeRange}</label>
            </div>
    )
}
})

    return(
        <>
            {shift}
        </>
    )
}

export default ShiftTimes