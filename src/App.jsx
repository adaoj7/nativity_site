import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/home'>Home Page</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/setup' >Setup</NavLink>
          <NavLink to='/host' >Host</NavLink>
          <NavLink to='/thisYear'>This Year</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <NavLink to='/lightTheWorld'>Light the World</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/products'>Products</NavLink>
          {/* <Volunteers/> */}
        </nav>
        <nav>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/admin'>Admin</NavLink>
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default App
