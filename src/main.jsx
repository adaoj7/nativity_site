import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './header-bar/Home.jsx'
import About from './header-bar/About.jsx'
import Volunteer from './header-bar/Volunteer.jsx'
import Setup from './components/VolunteerComponents/Setup.jsx'
import Host from './components/VolunteerComponents/Host.jsx'
import ThisYear from './header-bar/ThisYear.jsx'
import Gallery from './header-bar/Gallery.jsx'
import LightTheWorld from './header-bar/LightTheWorld.jsx'
import Contact from './header-bar/Contact.jsx'
import Products from './header-bar/Products.jsx'
import Login from './header-bar/Login.jsx'
import Admin from './header-bar/Admin.jsx'
import AdminLookup from './components/AdminComponents/AdminLookup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    // <>
      <Route path='/' element={<App/>} errorElement={<Login/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
        <Route path='/volunteer/setup' element={<Setup/>} 
        loader={async () => {
          const res = await axios.get('/api/setup')
          console.log(res.data)
          return {dataAboutShifts: res.data}
        }}
        />
        <Route path='/volunteer/host' element={<Host/>} 
        loader={async () => {
          const res = await axios.get('/api/host')
          console.log(res.data)
          return {dataAboutShifts: res.data}
        }}
        />
        <Route path='/thisYear' element={<ThisYear/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/lightTheWorld' element={<LightTheWorld/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/betaAndPsi' element={<Admin/>}/>
        <Route path='/betaAndPsi/query' element={<AdminLookup/>}
        loader={async () => {
          const res = await axios.get('/api/adminQuery')
          // console.log(res.data)
          return {dataAboutShifts: res.data}
        }}/>
      </Route>
    // </>
    
  )
)
// console.log(router)


ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode id='home'>
        <RouterProvider router={router}/>
      </React.StrictMode>,
)
  
