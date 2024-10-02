import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home/Home'
import Locker from './Locker/Locker'
import {Route,Routes} from 'react-router-dom';
import Page from './Pages/Page'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/News' element={<Locker/>} />
        <Route path='/Pages/:id' element={<Page/>}/>
      </Routes>
    </div>
  )
}

export default App
