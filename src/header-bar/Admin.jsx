import React from 'react'
import { NavLink } from 'react-router-dom'
import NativityLogo from '../components/Elements/NativityLogo'

const Admin = () => {

  return (
    <div>

    <NativityLogo/>
    <nav className='flex mt-24'>
        <NavLink to='/betaAndPsi/newAdmin'>Add new Admin</NavLink>
        <NavLink to='/betaAndPsi/query'>Look up shift times</NavLink>
    </nav>
    </div>
  )
}

export default Admin