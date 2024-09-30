import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Navbar/Header'
import Footer from './Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
