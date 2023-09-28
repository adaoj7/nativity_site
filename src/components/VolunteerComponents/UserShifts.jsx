import React from 'react'

const UserShifts = ({shifts}) => {
    // console.log(shifts)
    const shift = shifts.map((ele) => ele.shift)
    let newArr = []
    const dateTime = shift.map((ele) => {
        newArr.push({date:ele.day.date,time:ele.timeRange})
    })
    const displayedShifts = newArr.map((ele,i) => {
       return (<p key={i}>{ele.date} {ele.time}</p>)
    })
    // console.log(displayedShifts)
    return (
    <div>{displayedShifts}</div>
  )
}

export default UserShifts