﻿import React from 'react'
import { NavLink,Link,useLocation } from 'react-router-dom'

const Footer = () => {
  let location = useLocation();
  return (
    <div className="justify-end desktop:flex">
    <div
        className={`h-auto desktop:flex flex-col w-full ${
            location.pathname === "/"
                ? "bg-darkGreen text-white"
                : "bg-second"
        }`}
    >
        <div>Contact us: <button onClick={() => window.location = 'mailto:peorianativities@gmail.com'}>peorianativities@gmail.com</button></div>
        <NavLink to='/about' className=''>About</NavLink>
        <NavLink to='/gallery' className=''>Gallery</NavLink>
        <Link target={'_blank'} to='https://www.instagram.com/peoria_nativity?igshid=180p3l66ka3x2' className=''>Instagram</Link>
        <Link target={'_blank'} to='https://www.facebook.com/photo?fbid=342727541784414&set=pcb.342727635117738' className=''>Facebook</Link>
    </div>
</div>
  )
}

export default Footer