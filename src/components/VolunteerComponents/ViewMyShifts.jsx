import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import axios from 'axios'
import UserShifts from './UserShifts'
import Image from "../../assets/CFN-White-Shadow-01.svg";


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
    <div className="p-4 pl-20">
                <img src={Image} className="h-20" />
            </div>
    <h3>My Shifts:</h3>
    <UserShifts shifts={data}/>
    
    </>
  )
}

export default ViewMyShifts