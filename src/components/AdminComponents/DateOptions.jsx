import React from 'react'
import ShiftTimes from '../VolunteerComponents/ShiftTimes'
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
        <Field name='date' component='select' className='border-[1px] border-black rounded-md'>
            <option  key='random'>Please Select a Date</option>
            {dateMap}
        </Field>
  
    )
}

export default DateOptions