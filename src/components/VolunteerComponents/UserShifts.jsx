import React from 'react'
import axios from 'axios'

const UserShifts = ({shifts}) => {
    // console.log(shifts)

    const handleDelete = () => {
      // preventDefault()
      axios.delete('/api/deleteShift',{data: {availabilityId:1}})
    }

    const shift = shifts.map((ele) => {
      ele.shift.availabilityId = ele.availabilityId
      return(ele.shift)
    })

    let newArr = []
    const dateTime = shift.map((ele) => {
        console.log(ele)
        newArr.push({date:ele.day.date,time:ele.timeRange,availId:ele.availabilityId})
    })
    console.log(newArr)

    const displayedShifts = newArr.map((ele,i) => {
       return (
       <p key={i}>
          {ele.date} {ele.time}
          <button onClick={handleDelete}>Delete</button>
      </p>)
    })
    // console.log(displayedShifts)


    return (
    <div>{displayedShifts}</div>
  )
}

export default UserShifts