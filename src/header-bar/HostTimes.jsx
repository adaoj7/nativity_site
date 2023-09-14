import React from 'react'
import { useLoaderData } from 'react-router-dom'

const HostTimes = ({allShifts}) => {

  let shifts = allShifts

  return (
    <>
    <div>{shifts}</div>
    </>

  )
}

export default HostTimes