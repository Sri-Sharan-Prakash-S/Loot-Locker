import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const Home = ({setShowLogin}) => {
  return (
    <div>
        <Header setShowLogin={setShowLogin}/>
        <ToastContainer/>
        <Footer/>
    </div>
  )
}

export default Home