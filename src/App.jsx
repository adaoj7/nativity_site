import { useState } from 'react'
import './App.css'
import Header from './Header'
import axios from 'axios'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './header-bar/Home.jsx'
import About from './header-bar/About.jsx'
import Volunteer from './header-bar/Volunteer.jsx'
import Setup from './components/VolunteerComponents/Setup.jsx'
import Host from './components/VolunteerComponents/Host.jsx'
import ViewMyShifts from './components/VolunteerComponents/ViewMyShifts'
import ThisYear from './header-bar/ThisYear.jsx'
import Gallery from './header-bar/Gallery.jsx'
import LightTheWorld from './header-bar/LightTheWorld.jsx'
import Contact from './header-bar/Contact.jsx'
import Products from './header-bar/Products.jsx'
import Login from './header-bar/Login.jsx'
import Signup from './header-bar/Signup.jsx'
import MyProfile from './header-bar/MyProfile'
import Admin from './header-bar/Admin.jsx'
import AdminLookup from './components/AdminComponents/AdminLookup.jsx'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const userId = useSelector((state) => state.userId)
  // console.log(userId)
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <>
        <Route path='/' element={<Header/>} errorElement={<Login/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/volunteer/setup' element={userId ? <Setup/> : <Login/>} 
          loader={async () => {
            const res = await axios.get('/api/setup')
            console.log(res.data)
            return {dataAboutShifts: res.data}
          }}
          />
          <Route path='/volunteer/host' element={userId ? <Host/> : <Login/>} 
          loader={async () => {
            const res = await axios.get('/api/host')
            console.log(res.data)
            return {dataAboutShifts: res.data}
          }}
          />
          <Route path='/volunteer/myShifts' element={userId ? <ViewMyShifts/> : <Login/>}
          loader={async () => {
            const res = await axios.post('/api/userShifts')
            // console.log(res.data)
            return {dataAboutShifts: res.data}
          }}
          />
          <Route path='/myProfile' element={userId ? <MyProfile/> : <Login/>}/>
          <Route path='/thisYear' element={<ThisYear/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/lightTheWorld' element={<LightTheWorld/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={userId ? <Navigate to='/home'/> : <Login/>}/>
          <Route path='/signup' element={userId ? <Navigate to='/home'/> : <Signup/>}/>
          <Route path='/betaAndPsi' element={userId ? <Admin/> : <Login/>}/>
          <Route path='/betaAndPsi/query' element={userId ? <AdminLookup/> : <Login/>}
          loader={async () => {
            const res = await axios.get('/api/adminQuery')
            // console.log(res.data)
            return {dataAboutShifts: res.data}
          }}/>
        </Route>
      // </>
      
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
