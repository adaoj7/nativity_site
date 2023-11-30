import { useState,useEffect } from 'react'
import Header from './layout/Header.jsx'
import axios from 'axios'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './header-bar/Home.jsx'
import About from './header-bar/About.jsx'
import Volunteer from './header-bar/Volunteer.jsx'
import Setup from './components/VolunteerComponents/Setup.jsx'
import Host from './components/VolunteerComponents/Host.jsx'
import UserShifts from './components/VolunteerComponents/UserShifts'
import ThisYear from './header-bar/ThisYear.jsx'
import Gallery from './header-bar/Gallery.jsx'
import LightTheWorld from './header-bar/LightTheWorld.jsx'
import Contact from './header-bar/Contact.jsx'
import Products from './header-bar/Products.jsx'
import Login from './header-bar/Login.jsx'
import Signup from './header-bar/Signup.jsx'
import MyProfile from './header-bar/MyProfile'
import Admin from './header-bar/Admin.jsx'
import NewAdmin from './components/AdminComponents/NewAdmin'
import AdminLookup from './components/AdminComponents/AdminLookup.jsx'
import { Navigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Layout from './layout/Layout.jsx'

function App() {
  const userId = useSelector((state) => state.userId)
  const isAdmin = useSelector((state) => state.isAdmin)
  // const [refresh,se]
  // console.log(isAdmin)

  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('/api/user')
      .then(res => dispatch({type: 'LOGIN', payload: res.data}))
      .catch(err => (err))
},[isAdmin])
  // console.log(userId)
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <>
        <Route path='/' element={<Layout/>} errorElement={<Login/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/volunteer' element={<Volunteer/>}/>
          <Route path='/volunteer/setup' element={userId ? <Setup/> : <Login/>} 
          loader={async () => {
            const res = await axios.get('/api/setup')
            // console.log(res.data)
            return {dataAboutShifts: res.data}
          }}
          />
          <Route path='/volunteer/host' element={userId ? <Host/> : <Login/>} 
          loader={async () => {
            const res = await axios.get('/api/host')
            // console.log(res.data)
            return {dataAboutShifts: res.data}
          }}
          />
          <Route path='/volunteer/myShifts' element={userId ? <UserShifts/> : <Navigate to='/login'/>}/>
          <Route path='/myProfile' element={userId ? <MyProfile/> : <Login/>}/>
          <Route path='/thisYear' element={<ThisYear/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/lightTheWorld' element={<LightTheWorld/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={userId ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/signup' element={userId ? <Navigate to='/'/> : <Signup/>}/>
          <Route path='/betaAndPsi' element={isAdmin ? <Admin/> : <Home/>}/>
          <Route path='/betaAndPsi/newAdmin' element={isAdmin ? <NewAdmin/> : <Navigate to='/'/>}/>
          <Route path='/betaAndPsi/query' element={isAdmin ? <AdminLookup/> : <Navigate to='/'/>}
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
    <div className='bg-first overflow-x-hidden'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
