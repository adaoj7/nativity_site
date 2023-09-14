import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import HostTimes from './HostTimes'
import { useLoaderData } from 'react-router-dom'

const Volunteers = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { allShifts } = useLoaderData()

  const sendNewVolunteer = async () => {
    
    let bodyObj = {
      fname,
      lname,
      email,
      phone
    }

    const {data} = await axios.post('/api/newVolunteer', bodyObj)
    if(!data.error){}
  }

  const submit = (e) => {
    e.preventDefault()
    sendNewVolunteer()
    setFname('')
    setLname('')
    setEmail('')
    setPhone('')
  }

  return (
    <form onSubmit={submit}>
      <div>
        <input type="text" placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)}/>
        <input type="text" placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)}/>
        <br />
        <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="tel" placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <br />
      </div>
      <div>
        <HostTimes times={allShifts}/>
        <div>{console.log(allShifts)}</div>
      </div>
      <button>Submit`</button>
    </form>
  )
}

export default Volunteers