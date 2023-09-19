import React from 'react'
import { Field } from 'formik'

const SetupDates = ({date}) => {
  console.log(date)
  let dateMap = date[0].dates.map((ele) => {
    let shifts = ele.shifts.map((ele) => ele.timeRange)
    return (
      <>
        {ele.date}
        {shifts}
      </>
    )

  })
  return(
    dateMap
  )
}

export default SetupDates