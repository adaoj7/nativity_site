import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'

function Layout() {

    const dispatch = useDispatch()
    const userId = useSelector((state) => state.userId)

    useEffect(() => {
        axios.get('/api/user')
          .then(res => dispatch({type: 'LOGIN', payload: res.data.userId}))
          .catch(err => console.log(err))
    })

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
          {userId ? <NavLink to='/logout'>Log Out</NavLink> : <NavLink to='/login'>Log In</NavLink>}
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default Layout
