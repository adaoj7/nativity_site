import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import axios from 'axios'


const ViewMyShifts = () => {

    const userId = useSelector((state) => state.userId)
    const [data,setData] = useState(null)

    
    useEffect(() => {
        const userShift = async () => {
        const res = await axios.post('/api/userShifts', {userId})
        setData(res)
        }
    userShift()
    },[])
    console.log(data)
    return (
    <div>{userId}</div>
  )
}

export default ViewMyShifts