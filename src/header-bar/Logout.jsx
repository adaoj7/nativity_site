import React from 'react'
import axios from 'axios'

const Logout = () => {
    
    const handleClick = async (req,res) => {
        try {
            const deleted = await axios.delete('/api/logout')
            .then(res => dispatch({type: 'LOGOUT'}))

        } catch (err) {

        }
    }
    
    return (
    <>
        <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Logout