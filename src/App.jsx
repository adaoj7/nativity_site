import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink,Outlet } from 'react-router-dom'
import About from './header-bar/About.jsx'
import Volunteers from './header-bar/Volunteers'
import ThisYear from './header-bar/ThisYear.jsx'
import Gallery from './header-bar/Gallery.jsx'
import LightTheWorld from './header-bar/LightTheWorld.jsx'
import Contact from './header-bar/Contact.jsx'
import Products from './header-bar/Products.jsx'
import Login from './header-bar/Login.jsx'
import Home from './header-bar/Home.jsx'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/home'>Home Page</NavLink>
          <Link to='/about'>About</Link>
          <NavLink to='/volunteers' >Get Involved</NavLink>
          <Link to='/thisYear'>This Year</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/lightTheWorld'>Light the World</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/products'>Products</Link>
          {/* <Volunteers/> */}
        </nav>
        <nav>
          <Link to='/login'>Log In</Link>
        </nav>  
      </header>
      <Outlet />
    </>
  )
}

export default App
