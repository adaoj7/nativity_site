import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {

  return (
    <nav>
        <NavLink to='/betaAndPsi/query'>Look up shift times</NavLink>
    </nav>
  )
}

export default Admin