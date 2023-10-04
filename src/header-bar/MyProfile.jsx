import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../Header'

const MyProfile = () => {

    const dispatch = useDispatch()
    const userId = useSelector((state) => state.userId)

    const handleClick = async (req,res) => {
        try {
            const deleted = await axios.delete('/api/logout')
            .then(res => dispatch({type: 'LOGOUT'}))

        } catch (err) {

        }
    }

    useEffect(() => {
        axios.get('/api/user')
          .then(res => dispatch({type: 'LOGIN', payload: res.data}))
          .catch(err => console.log(err))
    },[])

  return (
    <div className='h-screen'>
    <nav className='desktop::hidden'>
          {userId ? <button className='flex justify-end p' onClick={handleClick}>Logout</button> : <NavLink to='/login'>Log In</NavLink>}
    </nav>  
    <nav className='hidden'>
          {userId ? <button className='flex justify-end p' onClick={handleClick}>Logout</button> : <NavLink to='/login'>Log In</NavLink>}
    </nav>  
    </div>
  )
}

export default MyProfile