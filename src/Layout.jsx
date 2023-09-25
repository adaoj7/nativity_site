﻿import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'

function Layout() {
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
          <NavLink to='/login'>Log In</NavLink>
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default Layout
