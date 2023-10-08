import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode id='home'>
        <Provider store={store}>
          <App className='bg-primary h-[4000px]'/>
        </Provider>
      </React.StrictMode> 
)
  
