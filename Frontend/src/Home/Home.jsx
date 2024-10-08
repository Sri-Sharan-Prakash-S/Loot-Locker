import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'

const Home = ({setShowLogin}) => {
  return (
    <div>
        <Header setShowLogin={setShowLogin}/>
        <Footer/>
    </div>
  )
}

export default Home