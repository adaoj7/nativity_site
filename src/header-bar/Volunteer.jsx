import React from 'react'
import { NavLink } from 'react-router-dom'

const Volunteer = () => {
  return (
    <nav>
        <NavLink to='/volunteer/setup'>Setup</NavLink>
        <NavLink to='/volunteer/host'>Host</NavLink>
        <NavLink to='/volunteer/myShifts'>My Shifts</NavLink>
    </nav>
  )
}

export default Volunteer