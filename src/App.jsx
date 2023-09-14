import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Volunteers from './header-bar/Volunteers'

function App() {
console.log('hit app')
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
        </nav>
        <nav>
          <Link to='/login'>Log In</Link>
        </nav>  
      </header>
    </>
  )
}

export default App
