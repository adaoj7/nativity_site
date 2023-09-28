import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import axios from 'axios'
import UserShifts from './UserShifts'


const ViewMyShifts = () => {

    const userId = useSelector((state) => state.userId)
    const [data,setData] = useState([])
    
    const userShift = async () => {
        
    const {data} = await axios.post('/api/userShifts', {userId})
    // console.log(res)
    setData(data)
    }
    useEffect(() => {
    userShift()
    },[])

    // console.log(data)
    return (
    <>
    <h3>My Shifts:</h3>
    <UserShifts shifts={data}/>
    </>
  )
}

export default ViewMyShifts