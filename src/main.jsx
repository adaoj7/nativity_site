import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes } from 'react-router-dom'
import About from './header-bar/About.jsx'
import Volunteers from './header-bar/Volunteers'
import ThisYear from './header-bar/ThisYear.jsx'
import Gallery from './header-bar/Gallery.jsx'
import LightTheWorld from './header-bar/LightTheWorld.jsx'
import Contact from './header-bar/Contact.jsx'
import Products from './header-bar/Products.jsx'
import Login from './header-bar/Login.jsx'
import Home from './header-bar/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    // <>
      <Route path='/' element={<App/>} errorElement={<Login/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/volunteers' element={<Volunteers/>} 
        loader={async () => {
          const res = await axios.get('/api/volunteers')
          // console.log(res.data)
          return {dataAboutShifts: res.data}
        }}
        />
        <Route path='/thisYear' element={<ThisYear/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/lightTheWorld' element={<LightTheWorld/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    // </>
    
  )
)
// console.log(router)


ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>,
)
  
