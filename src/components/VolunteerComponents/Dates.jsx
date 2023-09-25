import React from 'react'
import { Field } from 'formik'
import ShiftTimes from './ShiftTimes'

const Dates = ({dates}) => {
  // console.log(date)
  let dateMap = dates[0].dates.map((ele,i) => {
      let shifts = ele.shifts.map((ele) => ele)
      if (shifts.length > 0) 
   { return (
      <div key={i}>
        {ele.date}
        <ShiftTimes shifts={shifts}/>
      </div>
    )}

  })
  return(
      <>{dateMap}</>

  )
}

export default Dates