import React from 'react'
import ShiftTimes from '../ShiftTimes'
import { Field } from 'formik'

const DateOptions = ({dates}) => {
    let dateMap = dates[0].dates.map((ele,i) => {
        let shifts = ele.shifts.map((ele) => ele)
        if (shifts.length > 0) 
     { return (

            <option value={ele.date} key={i}>{ele.date}</option>
      )}
  
    })
    return(
        <Field name='date' component='select'>
            <option value='initial' key='random'>Please Select a Date</option>
            {dateMap}
        </Field>
  
    )
}

export default DateOptions