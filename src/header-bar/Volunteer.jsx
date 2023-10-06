import React from 'react'
import { NavLink } from 'react-router-dom'
import NativityLogo from '../components/Elements/NativityLogo'

const Volunteer = () => {
  return (
    <>
    <NativityLogo/>
    <nav className='mt-24'>
        <NavLink to='/volunteer/setup'>Setup</NavLink>
        <NavLink to='/volunteer/host'>Host</NavLink>
        <NavLink to='/volunteer/myShifts'>My Shifts</NavLink>
    </nav>
    </>
  )
}

export default Volunteer