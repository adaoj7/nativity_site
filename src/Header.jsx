import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect,useLayoutEffect } from 'react'


// Header is needed to get around Browser router functionality bugs
function Header() {

  const userId = useSelector((state) => state.userId)
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    axios.get('/api/user')
      .then(res => dispatch({type: 'LOGIN', payload: res.data}))
      .catch(err => (err))
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
          {userId ? <NavLink to='/myProfile'>My Profile</NavLink> : <NavLink to='/login'>Log In</NavLink>}
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default Header
