import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'


// Header is needed to get around Browser router functionality bugs
function Header() {

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

    <>
      <header>
        <nav>
          <NavLink to='/home'>Home Page</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/volunteer' >Get Involved</NavLink>
          <NavLink to='/thisYear'>This Year</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <NavLink to='/lightTheWorld'>Light the World</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/products'>Products</NavLink>
        </nav>
        <nav>
          {userId ? <button onClick={handleClick}>Logout</button> : <NavLink to='/login'>Log In</NavLink>}
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default Header
