import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home/Home'
import Locker from './Locker/Locker'

function App() {

  return (
    <div className='app'>
      <Home/>
      <Locker/>
    </div>
  )
}

export default App
