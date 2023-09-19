import React from 'react'
import { Form,Field } from 'formik'
import { useState } from 'react'

const ShiftTimes = ({date}) => {
    console.log(date)

    const shifts = date.map((ele,i) => {
        return(
            <div key={i}>
                <input type='checkbox' key={ele.shiftId}/>
                {ele.timeRange}
            </div>
    )})

    return(
        <>{shifts}</>
    )
}

export default ShiftTimes