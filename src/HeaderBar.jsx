import React from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from './header-bar/Home'
import Volunteers from './header-bar/Volunteers'
import Login from './header-bar/Login'
import About from './header-bar/About'
import Gallery from './header-bar/Gallery'
import Contact from './header-bar/Contact'
import Products from './header-bar/Products'
import LightTheWorld from './header-bar/LightTheWorld'
import ThisYear from './header-bar/ThisYear'

const HeaderBar = () => {

    const newVolunteer = async () => {
        // let {data} = await axios.post(/)
    }
  return (
    <BrowserRouter>
      <header>
        <div>
          <Link to='/'>Home Page</Link>
          <Link to='/about'>About</Link>
          <Link to='/volunteers'>Get Involved</Link>
          <Link to='/thisYear'>This Year</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/lightTheWorld'>Light the World</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/products'>Products</Link>
        </div>
        <div>
          <Link to='/login'>Log In</Link>
        </div>  
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/volunteers'element={<Volunteers/>}/>
        <Route path='/thisYear' element={<ThisYear/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/lightTheWorld' element={<LightTheWorld/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default HeaderBar