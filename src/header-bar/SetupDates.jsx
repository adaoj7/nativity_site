import React from 'react'
import { Field } from 'formik'
import ShiftTimes from './ShiftTimes'

const SetupDates = ({date}) => {
  // console.log(date)
  let dateMap = date[0].dates.map((ele,i) => {
      let shifts = ele.shifts.map((ele) => ele)
    return (
      <div key={i}>
        {ele.date}
        <ShiftTimes date={shifts}/>
      </div>
    )

  })
  return(
      <>{dateMap}</>

  )
}

export default SetupDates