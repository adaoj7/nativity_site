import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HostTimes = () => {
  const {allShifts} = useLoaderData()

  const {shiftId,shiftDate} = allShifts[1]



  const firstShiftTimes = allShifts.map(({shiftId,shiftDate}) => {
    
    if (shiftDate === "11/27/2023"){
      return (
        <>
        {/* <h3>Monday, Nov 27th</h3> */}
          <li key={shiftId}>
            <button type='button' onClick= {(e) => {e.preventDefault()}}>{shiftDate}</button>
          </li>
        </>
      )
    } 
  })  
  const secondShiftTimes = allShifts.map(({shiftId,shiftDate}) => {
    if(shiftDate === "11/28/2023") {
     return (
        <>
          {/* <h3>Tuesday, Nov 28th</h3> */}
          <li key={shiftId}>
            <button type='button' onClick= {(e) => {e.preventDefault()}}>{shiftDate}</button>
          </li>
        </>
      )
    }
  }) 
  const thirdShiftTimes = allShifts.map(({shiftId,shiftDate}) => {
  if(shiftDate === "11/29/2023") {
      return (
        <>
        {/* <h3>Wednesday, Nov 29th</h3> */}
        <li key={shiftId}>
          <button type='button' onClick= {(e) => {e.preventDefault()}}>{shiftDate}</button>
        </li>
        </>
      )
    }
    })
    const fourthShiftTimes = allShifts.map(({shiftId,shiftDate}) => {
    if(shiftDate === "12/4/2023") {
      return (
        <>
        {/* <h3>Monday, Nov 4th</h3> */}
        <div key={shiftId}>
          <input type="checkbox" />
          <button type='button' onClick= {(e) => {e.preventDefault()}}>{shiftDate}</button>
        </div>
        </>
      )
    } 
    })



  
  return (
    <>
      <h1>All shifts</h1>
      <h3>Monday, Nov 27th</h3>
      <p>{firstShiftTimes}</p>
      <h3>Tuesday, Nov 28th</h3>
      <p>{secondShiftTimes}</p>
      <h3>Wednesday, Nov 29th</h3>
      <p>{thirdShiftTimes}</p>
      <h3>Monday, Nov 4th</h3>
      <div>{fourthShiftTimes}</div>
      <br />
    </>

  )
}

export default HostTimes