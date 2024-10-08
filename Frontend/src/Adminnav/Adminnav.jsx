import React from 'react'
import './Adminnav.css'
import adminlogo from '../../../Frontend/src/assets/gaming-pad.png'
import profile from '../../../Frontend/src/assets/profile.png'
import { useNavigate } from 'react-router-dom'

const Adminnav = () => {
    const navigate=useNavigate();
  return (
    <div className='navbar'>
        <div onClick={()=>navigate("/")} className='admin'>
        <img className='adminlogo' src={adminlogo} alt="" />
        <p className='nav'>Loot Locker</p>
        </div>
        <img className='profile' src={profile} alt="" />
    </div>
  )
}

export default Adminnav