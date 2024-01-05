import React from 'react'
import axios from 'axios'

const createDonationSession = async (e) => {
    e.preventDefault()
    try {
        const {data} = await axios.post('/api/create-checkout-session/donate')
        location.replace(data)
    } catch (err) {
        console.log(err)
    }
}

const Donate = () => {
  return (
    <div className='mt-40'>

    <form onSubmit={createDonationSession}>
        <button 
        type='submit' 
        className='bg-green-500 btn hover:bg-slate-500'
        >Donate</button>
    </form>
        </div>
  )
}

export default Donate