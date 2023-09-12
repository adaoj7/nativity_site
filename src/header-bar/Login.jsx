import React from 'react'
import { useState } from 'react'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <form type={onsubmit}>
    <input type="text" required={true} placeholder='Username' />
    <input type={showPassword ? "text" : "password" } required={true} placeholder='Password' />
    <button onClick={togglePassword}>Show Password</button>
    <button>Submit</button>
    </form>
  )
}

export default Login