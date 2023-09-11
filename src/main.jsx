import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { Router } from 'react-router-dom'


axios.get('/')
  .then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  )
})  
