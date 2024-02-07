import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Mynavbar from './components/navbar'
import Mycontent from './components/content'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Mynavbar/>
    <Mycontent/>
  </React.StrictMode>,
)