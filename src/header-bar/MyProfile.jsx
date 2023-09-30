import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

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
    <nav>
          {userId ? <button onClick={handleClick}>Logout</button> : <NavLink to='/login'>Log In</NavLink>}
    </nav>  
  )
}

export default MyProfile