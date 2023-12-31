﻿import React from 'react'
import { NavLink } from 'react-router-dom'
import NativityLogo from '../components/Elements/NativityLogo'

const Admin = () => {

  return (
    <div>

    <NativityLogo/>
    <nav className='flex mt-24 flex-row justify-center h-[70vh]'>
        <div className='m-4'>
        <NavLink className='rounded-full p-2 m-2 font-semibold bg-second hover:bg-white border-[1px] border-black' to='/betaAndPsi/newAdmin'>Add new Admin</NavLink>
        <NavLink className='rounded-full p-2 m-2 font-semibold bg-second hover:bg-white border-[1px] border-black' to='/betaAndPsi/query'>Look up shift times</NavLink>
        </div>
    </nav>
    </div>
  )
}

export default Admin