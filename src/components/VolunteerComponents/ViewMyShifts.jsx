import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewMyShifts = () => {
    const volunteerYear = new Date
    const year = volunteerYear.getFullYear()

    const { dataAboutShifts } = useLoaderData();
    // console.log(dataAboutShifts)

    const years = dataAboutShifts.filter((ele) => ele.year === year)

    console.log(years)
    // const daysOfShifts = years.map(({days}) => {
    //     let dates = days.map(({date,shifts}) => {
    //         return{
    //             date,shifts
    //         }
    //     })
    //     return {dates}
    // })
  
    return (
    <div>ViewMyShifts</div>
  )
}

export default ViewMyShifts